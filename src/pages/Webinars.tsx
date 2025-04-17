
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, Calendar, User, Video } from "lucide-react";

interface Webinar {
  id: number;
  title: string;
  description: string;
  presenter: string;
  date: string;
  time: string;
  duration: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  category: string;
  imageUrl: string;
  isUpcoming: boolean;
}

const webinars: Webinar[] = [
  {
    id: 1,
    title: "Introduction à l'analyse fondamentale",
    description: "Apprenez à évaluer la valeur intrinsèque d'une action en analysant les états financiers et les indicateurs économiques.",
    presenter: "Thomas Dubois",
    date: "25 avril 2025",
    time: "19:00",
    duration: "1h30",
    level: "Débutant",
    category: "Analyse",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400",
    isUpcoming: true
  },
  {
    id: 2,
    title: "Stratégies de trading à court terme",
    description: "Découvrez les techniques de swing trading et de day trading pour optimiser vos performances sur les marchés volatils.",
    presenter: "Sophie Martin",
    date: "2 mai 2025",
    time: "18:30",
    duration: "2h00",
    level: "Intermédiaire",
    category: "Trading",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400",
    isUpcoming: true
  },
  {
    id: 3,
    title: "Construction d'un portefeuille diversifié",
    description: "Les principes fondamentaux de la diversification et comment construire un portefeuille adapté à votre profil d'investisseur.",
    presenter: "Marie Laurent",
    date: "10 mai 2025",
    time: "19:00",
    duration: "1h45",
    level: "Débutant",
    category: "Investissement",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400",
    isUpcoming: true
  },
  {
    id: 4,
    title: "Techniques avancées d'analyse technique",
    description: "Maîtrisez les indicateurs complexes et les formations chartistes pour améliorer vos prises de décision.",
    presenter: "Alexandre Blanc",
    date: "15 mars 2025",
    time: "19:00",
    duration: "2h15",
    level: "Avancé",
    category: "Analyse",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400",
    isUpcoming: false
  },
  {
    id: 5,
    title: "Psychologie du trader performant",
    description: "Comment développer une mentalité gagnante et gérer efficacement le stress et les émotions dans le trading.",
    presenter: "Julie Rousseau",
    date: "28 février 2025",
    time: "18:30",
    duration: "1h30",
    level: "Intermédiaire",
    category: "Psychologie",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400",
    isUpcoming: false
  }
];

const Webinars = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-finance-blue to-finance-dark-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Webinaires</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center">
              Apprenez directement des experts avec nos sessions en ligne interactives
            </p>
          </div>
        </section>
        
        {/* Webinars List */}
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="mb-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-finance-dark-blue dark:text-white">Formez-vous à votre rythme</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Nos webinaires interactifs vous permettent d'apprendre les stratégies d'investissement et de trading les plus efficaces, de poser vos questions et d'échanger avec des experts reconnus.
              </p>
            </div>
            
            <Tabs defaultValue="upcoming" className="w-full max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="upcoming">Webinaires à venir</TabsTrigger>
                <TabsTrigger value="past">Webinaires passés</TabsTrigger>
              </TabsList>
              
              <TabsContent value="upcoming">
                <div className="space-y-8">
                  {webinars.filter(w => w.isUpcoming).map(webinar => (
                    <Card key={webinar.id} className="overflow-hidden">
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 relative">
                          <img 
                            src={webinar.imageUrl} 
                            alt={webinar.title} 
                            className="h-60 lg:h-full w-full object-cover"
                          />
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-finance-green hover:bg-finance-green/90">
                              {webinar.level}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="lg:w-2/3 p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className="text-finance-blue border-finance-blue">
                              {webinar.category}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar size={14} className="mr-1" />
                              <span>{webinar.date}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Clock size={14} className="mr-1" />
                              <span>{webinar.time}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Video size={14} className="mr-1" />
                              <span>{webinar.duration}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-3 text-finance-dark-blue dark:text-white">
                            {webinar.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {webinar.description}
                          </p>
                          
                          <div className="flex items-center mb-5">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                              <User size={16} />
                            </div>
                            <span className="font-medium">{webinar.presenter}</span>
                          </div>
                          
                          <div className="flex flex-col sm:flex-row gap-3">
                            <Button className="bg-finance-blue hover:bg-finance-light-blue">
                              S'inscrire
                            </Button>
                            <Button variant="outline">
                              Ajouter au calendrier
                            </Button>
                          </div>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="past">
                <div className="space-y-8">
                  {webinars.filter(w => !w.isUpcoming).map(webinar => (
                    <Card key={webinar.id} className="overflow-hidden">
                      <div className="flex flex-col lg:flex-row">
                        <div className="lg:w-1/3 relative">
                          <img 
                            src={webinar.imageUrl} 
                            alt={webinar.title} 
                            className="h-60 lg:h-full w-full object-cover opacity-80"
                          />
                          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className="p-3 rounded-full bg-white/80 cursor-pointer">
                              <Video className="h-10 w-10 text-finance-blue" />
                            </div>
                          </div>
                          <div className="absolute top-3 left-3">
                            <Badge className="bg-finance-green hover:bg-finance-green/90">
                              {webinar.level}
                            </Badge>
                          </div>
                        </div>
                        <CardContent className="lg:w-2/3 p-6">
                          <div className="flex flex-wrap gap-2 mb-3">
                            <Badge variant="outline" className="text-finance-blue border-finance-blue">
                              {webinar.category}
                            </Badge>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Calendar size={14} className="mr-1" />
                              <span>{webinar.date}</span>
                            </div>
                            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                              <Video size={14} className="mr-1" />
                              <span>{webinar.duration}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-3 text-finance-dark-blue dark:text-white">
                            {webinar.title}
                          </h3>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {webinar.description}
                          </p>
                          
                          <div className="flex items-center mb-5">
                            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-3">
                              <User size={16} />
                            </div>
                            <span className="font-medium">{webinar.presenter}</span>
                          </div>
                          
                          <Button className="bg-finance-blue hover:bg-finance-light-blue">
                            Voir la rediffusion
                          </Button>
                        </CardContent>
                      </div>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-12 bg-finance-dark-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Proposer un sujet de webinaire</h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              Vous souhaitez que nous abordions un thème spécifique ? Faites-nous part de vos suggestions !
            </p>
            <Button size="lg" className="bg-finance-green hover:bg-finance-green/90">
              Suggérer un thème
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Webinars;
