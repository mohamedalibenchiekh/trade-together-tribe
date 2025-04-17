
import { useState } from 'react';
import { useAuth } from "@/context/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Chat = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    try {
      setIsLoading(true);
      const newMessage = { role: 'user' as const, content: message };
      setMessages(prev => [...prev, newMessage]);
      setMessage("");

      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message }
      });

      if (error) throw error;

      const assistantMessage = { role: 'assistant' as const, content: data.reply };
      setMessages(prev => [...prev, assistantMessage]);

      // Store messages in database
      if (user) {
        await supabase.from('chat_messages').insert([
          { user_id: user.id, content: message, role: 'user' },
          { user_id: user.id, content: data.reply, role: 'assistant' }
        ]);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to send message. Please try again."
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto max-w-4xl p-4">
      <Card className="h-[600px] flex flex-col">
        <ScrollArea className="flex-1 p-4">
          {messages.map((msg, i) => (
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
          ))}
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
