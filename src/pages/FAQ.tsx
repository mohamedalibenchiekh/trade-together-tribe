
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  category: 'general' | 'trading' | 'account' | 'payments' | 'support';
}

const faqItems: FAQItem[] = [
  {
    question: "Comment débuter sur la plateforme Trade Together Tribe ?",
    answer: "Pour commencer, créez votre compte gratuitement et accédez aux ressources pour débutants. Nous vous recommandons de suivre notre parcours d'initiation guidé qui couvre les fondamentaux des marchés financiers et l'utilisation de la plateforme.",
    category: 'general'
  },
  {
    question: "Quels types de formations sont disponibles ?",
    answer: "Nous proposons une variété de formations adaptées à tous les niveaux : des cours fondamentaux pour débutants, des formations intermédiaires sur l'analyse technique et fondamentale, et des masterclass avancées sur des stratégies spécifiques. Toutes nos formations sont développées par des professionnels des marchés financiers.",
    category: 'general'
  },
  {
    question: "La plateforme est-elle adaptée aux débutants absolus ?",
    answer: "Absolument ! Nous avons conçu un parcours spécifique pour les personnes qui découvrent les marchés financiers. Nos formations de base expliquent tous les concepts essentiels sans jargon complexe, et notre communauté est particulièrement bienveillante envers les nouveaux membres.",
    category: 'general'
  },
  {
    question: "Comment fonctionnent les groupes thématiques ?",
    answer: "Les groupes thématiques sont des espaces de discussion dédiés à des sujets ou des stratégies spécifiques. Vous pouvez rejoindre librement ceux qui vous intéressent, participer aux échanges, et bénéficier de l'expertise collective. Certains groupes plus spécialisés sont animés par des mentors experts.",
    category: 'general'
  },
  {
    question: "Comment interpréter les indicateurs techniques de base ?",
    answer: "Les indicateurs techniques comme les moyennes mobiles, le RSI ou le MACD sont des outils mathématiques qui vous aident à analyser les prix et volumes. Nous proposons une formation complète sur ces indicateurs dans notre section 'Analyse technique pour débutants' avec des exemples pratiques d'interprétation.",
    category: 'trading'
  },
  {
    question: "Quelles sont les stratégies recommandées pour débuter ?",
    answer: "Pour les débutants, nous recommandons de commencer par des stratégies simples comme le suivi de tendance avec des moyennes mobiles ou l'investissement régulier sur des ETF diversifiés. Ces approches permettent de se familiariser avec les marchés tout en limitant les risques.",
    category: 'trading'
  },
  {
    question: "Proposez-vous des signaux de trading ?",
    answer: "Non, nous ne fournissons pas de signaux de trading. Notre philosophie est plutôt de vous apprendre à analyser les marchés par vous-même et à développer votre propre système de trading. Nous mettons l'accent sur l'éducation et l'autonomie plutôt que sur des solutions toutes faites.",
    category: 'trading'
  },
  {
    question: "Comment puis-je récupérer mon mot de passe ?",
    answer: "Sur la page de connexion, cliquez sur 'Mot de passe oublié' et suivez les instructions. Un lien de réinitialisation sera envoyé à l'adresse email associée à votre compte. Si vous ne recevez pas l'email, vérifiez votre dossier de spam ou contactez notre support.",
    category: 'account'
  },
  {
    question: "Comment mettre à jour mes informations personnelles ?",
    answer: "Connectez-vous à votre compte, accédez à votre profil en cliquant sur votre avatar dans le coin supérieur droit, puis sélectionnez 'Paramètres du compte'. Vous pourrez y modifier vos informations personnelles, vos préférences de notification et vos paramètres de confidentialité.",
    category: 'account'
  },
  {
    question: "Comment supprimer mon compte ?",
    answer: "Pour supprimer votre compte, rendez-vous dans les paramètres de votre profil et sélectionnez l'option 'Supprimer mon compte' tout en bas de la page. Veuillez noter que cette action est irréversible et que toutes vos données seront définitivement supprimées après une période de 30 jours.",
    category: 'account'
  },
  {
    question: "Quels sont les différents forfaits d'abonnement ?",
    answer: "Nous proposons trois niveaux d'abonnement : Découverte (gratuit), Premium (accès à toutes les formations et webinaires) et Elite (inclut des sessions de mentorat personnalisées). Vous pouvez consulter le détail des offres et leurs tarifs sur notre page d'abonnement.",
    category: 'payments'
  },
  {
    question: "Comment puis-je annuler mon abonnement ?",
    answer: "Pour annuler votre abonnement, connectez-vous à votre compte, allez dans 'Paramètres', puis 'Abonnement et facturation' et cliquez sur 'Gérer mon abonnement'. Vous pourrez y annuler le renouvellement automatique. Votre accès restera actif jusqu'à la fin de la période déjà payée.",
    category: 'payments'
  },
  {
    question: "Proposez-vous des réductions pour les étudiants ?",
    answer: "Oui, nous offrons une réduction de 50% sur tous nos forfaits Premium pour les étudiants. Pour en bénéficier, envoyez-nous une copie de votre carte étudiante en cours de validité via le formulaire de contact, et nous vous enverrons un code promotionnel personnalisé.",
    category: 'payments'
  },
  {
    question: "Comment contacter le support technique ?",
    answer: "Vous pouvez contacter notre équipe de support via le formulaire de contact sur notre site, par email à support@tradetogethertribe.com, ou via le chat en direct disponible en bas à droite de votre écran. Notre équipe est disponible du lundi au vendredi, de 9h à 18h (CET).",
    category: 'support'
  },
  {
    question: "Quel est le délai de réponse habituel du support ?",
    answer: "Nous nous efforçons de répondre à toutes les demandes dans un délai de 24 heures ouvrables. Pour les membres des forfaits Premium et Elite, nous garantissons une réponse dans les 12 heures ouvrables.",
    category: 'support'
  }
];

const FAQ = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  
  const filteredFAQs = searchTerm 
    ? faqItems.filter(faq => 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : faqItems;
    
  const filterByCategory = (category: string) => {
    return faqItems.filter(faq => faq.category === category);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-finance-blue to-finance-dark-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Foire Aux Questions</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center mb-8">
              Trouvez rapidement des réponses à vos questions
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher une question ou un mot-clé..."
                className="pl-12 py-6 text-lg rounded-full text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        {/* FAQ Content */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            {searchTerm ? (
              <>
                <h2 className="text-2xl font-bold mb-6 text-finance-dark-blue dark:text-white">
                  Résultats de recherche pour "{searchTerm}"
                </h2>
                {filteredFAQs.length > 0 ? (
                  <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
                    {filteredFAQs.map((faq, index) => (
                      <AccordionItem key={index} value={`search-item-${index}`}>
                        <AccordionTrigger className="text-left text-finance-dark-blue dark:text-white">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-700 dark:text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                ) : (
                  <div className="text-center py-10">
                    <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                      Aucun résultat trouvé pour votre recherche.
                    </p>
                    <Button 
                      variant="outline"
                      onClick={() => setSearchTerm('')}
                      className="border-finance-blue text-finance-blue hover:bg-finance-blue hover:text-white"
                    >
                      Effacer la recherche
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full max-w-4xl mx-auto">
                <Tabs defaultValue="general">
                  <TabsList className="grid grid-cols-5 mb-8 w-full">
                    <TabsTrigger value="general">Général</TabsTrigger>
                    <TabsTrigger value="trading">Trading</TabsTrigger>
                    <TabsTrigger value="account">Compte</TabsTrigger>
                    <TabsTrigger value="payments">Paiements</TabsTrigger>
                    <TabsTrigger value="support">Support</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="general">
                    <Accordion type="single" collapsible className="w-full">
                      {filterByCategory('general').map((faq, index) => (
                        <AccordionItem key={index} value={`general-item-${index}`}>
                          <AccordionTrigger className="text-left text-finance-dark-blue dark:text-white">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 dark:text-gray-300">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="trading">
                    <Accordion type="single" collapsible className="w-full">
                      {filterByCategory('trading').map((faq, index) => (
                        <AccordionItem key={index} value={`trading-item-${index}`}>
                          <AccordionTrigger className="text-left text-finance-dark-blue dark:text-white">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 dark:text-gray-300">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="account">
                    <Accordion type="single" collapsible className="w-full">
                      {filterByCategory('account').map((faq, index) => (
                        <AccordionItem key={index} value={`account-item-${index}`}>
                          <AccordionTrigger className="text-left text-finance-dark-blue dark:text-white">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 dark:text-gray-300">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="payments">
                    <Accordion type="single" collapsible className="w-full">
                      {filterByCategory('payments').map((faq, index) => (
                        <AccordionItem key={index} value={`payments-item-${index}`}>
                          <AccordionTrigger className="text-left text-finance-dark-blue dark:text-white">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 dark:text-gray-300">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="support">
                    <Accordion type="single" collapsible className="w-full">
                      {filterByCategory('support').map((faq, index) => (
                        <AccordionItem key={index} value={`support-item-${index}`}>
                          <AccordionTrigger className="text-left text-finance-dark-blue dark:text-white">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 dark:text-gray-300">
                            {faq.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                </Tabs>
              </div>
            )}
            
            {/* Still need help section */}
            <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto text-center shadow-sm">
              <h3 className="text-2xl font-semibold mb-3 text-finance-dark-blue dark:text-white">
                Vous n'avez pas trouvé votre réponse ?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Notre équipe de support est à votre disposition pour vous aider avec toutes vos questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-finance-blue hover:bg-finance-light-blue">
                  Contacter le support
                </Button>
                <Button variant="outline" className="border-finance-blue text-finance-blue hover:bg-finance-blue hover:text-white">
                  Consulter les guides
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
