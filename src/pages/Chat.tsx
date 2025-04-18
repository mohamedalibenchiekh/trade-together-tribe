
import { useState, useEffect } from 'react';
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { toast } from "@/components/ui/use-toast";

type Message = {
  role: 'user' | 'assistant';
  content: string;
};

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  // Load previous messages when component mounts
  useEffect(() => {
    if (user) {
      const loadMessages = async () => {
        try {
          const { data, error } = await supabase
            .from('chat_messages')
            .select()
            .eq('user_id', user.id)
            .order('created_at', { ascending: true });

          if (error) throw error;
          if (data) {
            setMessages(data.map(msg => ({
              role: msg.role as 'user' | 'assistant',
              content: msg.content
            })));
          }
        } catch (error) {
          console.error("Error loading messages:", error);
        }
      };

      loadMessages();
    }
  }, [user]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || !user) return;

    try {
      setIsLoading(true);
      const newMessage = { role: 'user' as const, content: message };
      setMessages(prev => [...prev, newMessage]);
      setMessage("");

      // Call the edge function
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message }
      });

      if (error) throw error;

      const assistantMessage = { role: 'assistant' as const, content: data.reply };
      setMessages(prev => [...prev, assistantMessage]);

      // Store messages in database
      if (user) {
        // Insert as individual records instead of an array
        const { error: userMsgError } = await supabase
          .from('chat_messages')
          .insert({
            user_id: user.id,
            content: newMessage.content,
            role: newMessage.role
          });

        if (userMsgError) throw userMsgError;

        const { error: assistantMsgError } = await supabase
          .from('chat_messages')
          .insert({
            user_id: user.id,
            content: assistantMessage.content,
            role: assistantMessage.role
          });

        if (assistantMsgError) throw assistantMsgError;
      }
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again."
      });
      console.error("Chat error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <h1 className="text-2xl font-bold mb-4">AI Financial Assistant</h1>
      <Card className="h-[600px] flex flex-col">
        <ScrollArea className="flex-1 p-4">
          {messages.length === 0 ? (
            <div className="text-center text-muted-foreground mt-8">
              Ask me anything about finance, trading, or investments!
            </div>
          ) : (
            messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-4 p-3 rounded-lg ${
                  msg.role === 'user' 
                    ? 'bg-primary text-primary-foreground ml-auto max-w-[80%]' 
                    : 'bg-muted text-muted-foreground mr-auto max-w-[80%]'
                }`}
              >
                {msg.content}
              </div>
            ))
          )}
        </ScrollArea>
        
        <form onSubmit={handleSubmit} className="p-4 border-t flex gap-2">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            disabled={isLoading}
          />
          <Button type="submit" disabled={isLoading}>
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default Chat;
