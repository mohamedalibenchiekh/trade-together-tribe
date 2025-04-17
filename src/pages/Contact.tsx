
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to a backend
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Contact Hero */}
        <section className="bg-gradient-to-b from-finance-blue to-finance-dark-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contactez-nous</h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              Une question ? Une suggestion ? Notre équipe est à votre écoute.
            </p>
          </div>
        </section>
        
        {/* Contact Info & Form */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <h2 className="text-2xl font-semibold mb-6 text-finance-dark-blue dark:text-white">Informations de Contact</h2>
                <div className="space-y-6">
                  <Card>
                    <CardContent className="pt-6 pb-6 flex items-start space-x-4">
                      <div className="rounded-full bg-finance-blue bg-opacity-10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <Mail className="h-5 w-5 text-finance-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-finance-dark-blue dark:text-white mb-1">Email</h3>
                        <a href="mailto:contact@tradetogether.com" className="text-gray-600 dark:text-gray-400 hover:text-finance-blue dark:hover:text-finance-light-blue">
                          contact@tradetogether.com
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6 pb-6 flex items-start space-x-4">
                      <div className="rounded-full bg-finance-blue bg-opacity-10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <Phone className="h-5 w-5 text-finance-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-finance-dark-blue dark:text-white mb-1">Téléphone</h3>
                        <a href="tel:+21698270400" className="text-gray-600 dark:text-gray-400 hover:text-finance-blue dark:hover:text-finance-light-blue">
                          +216 98 27 04 00
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6 pb-6 flex items-start space-x-4">
                      <div className="rounded-full bg-finance-blue bg-opacity-10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-5 w-5 text-finance-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-finance-dark-blue dark:text-white mb-1">Adresse</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Avenue Hamed El Ghazali<br />
                            Sousse, 4000, Tunisie
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="pt-6 pb-6 flex items-start space-x-4">
                      <div className="rounded-full bg-finance-blue bg-opacity-10 w-10 h-10 flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-finance-blue" />
                      </div>
                      <div>
                        <h3 className="font-medium text-finance-dark-blue dark:text-white mb-1">Support</h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Notre équipe de support est disponible du lundi au vendredi, de 9h à 18h.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-6 text-finance-dark-blue dark:text-white">Envoyez-nous un message</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Nom</Label>
                          <Input id="name" placeholder="Votre nom" required />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="votre.email@exemple.com" required />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Sujet</Label>
                        <Input id="subject" placeholder="Le sujet de votre message" required />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Écrivez votre message ici..." 
                          className="min-h-[150px]"
                          required
                        />
                      </div>
                      
                      <Button type="submit" className="w-full md:w-auto bg-finance-blue hover:bg-finance-light-blue">
                        Envoyer le message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-10 text-center text-finance-dark-blue dark:text-white">Questions Fréquentes</h2>
            <div className="max-w-3xl mx-auto space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">Comment puis-je accéder aux formations premium ?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Pour accéder à nos formations premium, vous devez créer un compte et souscrire à l'une de nos formules d'abonnement. Visitez notre page d'inscription pour plus d'informations.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">Comment rejoindre un groupe thématique ?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Après vous être connecté à votre compte, rendez-vous dans la section "Groupes" et parcourez les groupes disponibles. Cliquez sur "Rejoindre" pour intégrer un groupe qui vous intéresse.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">Proposez-vous des conseils d'investissement personnalisés ?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Non, Trade Together Tribe est une plateforme d'éducation et de partage. Nous ne fournissons pas de conseils d'investissement personnalisés. Nous vous encourageons à consulter un conseiller financier pour des conseils adaptés à votre situation.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">Comment signaler un problème technique ?</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Si vous rencontrez un problème technique, vous pouvez utiliser le formulaire de contact ci-dessus en sélectionnant "Support technique" comme sujet, ou envoyer un email directement à support@tradetogether.com.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
