
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, BarChart, Users, BookOpen } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-finance-blue to-finance-dark-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Notre Mission</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center">
              Démocratiser l'accès au savoir financier et construire une communauté d'entraide pour les investisseurs de tous niveaux.
            </p>
          </div>
        </section>
        
        {/* Vision and Values */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-6 text-center text-finance-dark-blue dark:text-white">Notre Vision</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">
                Chez Trade Together Tribe, nous croyons que l'éducation financière devrait être accessible à tous. 
                Notre plateforme vise à créer un écosystème où chacun peut apprendre, partager et progresser ensemble 
                dans sa compréhension des marchés financiers et des stratégies d'investissement.
              </p>
            </div>
            
            <h2 className="text-3xl font-bold mb-10 text-center text-finance-dark-blue dark:text-white">Nos Valeurs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-t-4 border-finance-green">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-finance-green bg-opacity-10 w-14 h-14 flex items-center justify-center mb-4">
                    <TrendingUp className="h-7 w-7 text-finance-green" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">Accessibilité</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nous rendons le savoir financier accessible à tous, quel que soit votre niveau d'expérience ou vos moyens.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-finance-blue">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-finance-blue bg-opacity-10 w-14 h-14 flex items-center justify-center mb-4">
                    <BarChart className="h-7 w-7 text-finance-blue" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">Transparence</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nous croyons à la transparence totale dans nos recommandations, sources d'informations et méthodes d'enseignement.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-purple-500">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-purple-500 bg-opacity-10 w-14 h-14 flex items-center justify-center mb-4">
                    <Users className="h-7 w-7 text-purple-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">Communauté</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nous construisons un environnement bienveillant où les membres s'entraident et partagent leurs connaissances.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-amber-500">
                <CardContent className="pt-6">
                  <div className="rounded-full bg-amber-500 bg-opacity-10 w-14 h-14 flex items-center justify-center mb-4">
                    <BookOpen className="h-7 w-7 text-amber-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">Apprentissage Continu</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Nous encourageons un état d'esprit d'amélioration continue et d'adaptation aux évolutions des marchés.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center text-finance-dark-blue dark:text-white">Notre Histoire</h2>
              <div className="prose prose-lg max-w-none dark:prose-invert">
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Trade Together Tribe est né d'un constat simple : trop de personnes se sentent exclues et intimidées par le monde de la finance et des investissements.
                </p>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Fondée en 2023 par un groupe de passionnés de finance et d'éducation, notre plateforme a d'abord commencé comme un simple forum d'entraide. Face à la demande croissante de ressources structurées, nous avons progressivement développé une suite complète de formations et d'outils d'analyse.
                </p>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  Aujourd'hui, nous rassemblons des milliers de membres dans toute la francophonie, unis par leur volonté d'apprendre et de progresser ensemble dans la maîtrise des marchés financiers et des stratégies d'investissement.
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  Notre mission reste la même depuis le premier jour : rendre la connaissance financière accessible à tous et créer un environnement où chacun peut apprendre à son rythme, entouré d'une communauté bienveillante.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
