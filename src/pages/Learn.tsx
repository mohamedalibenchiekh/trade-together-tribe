
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BookOpen, 
  GraduationCap, 
  LineChart, 
  TrendingUp, 
  CalendarDays, 
  Laptop, 
  Video, 
  Clock, 
  CheckCircle, 
  Users,
  Coins // Using Coins icon instead of Bitcoin
} from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

// Types for training courses
interface Course {
  id: string;
  title: string;
  description: string;
  level: 'Débutant' | 'Intermédiaire' | 'Avancé';
  duration: string;
  lessons: number;
  category: string;
  image: string;
  instructor: string;
  popularity: number;
  tags: string[];
}

const Learn: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  
  // Sample course data
  const courses: Course[] = [
    {
      id: "1",
      title: "Les fondamentaux du trading",
      description: "Maîtrisez les bases du trading, de l'analyse technique et des stratégies fondamentales.",
      level: "Débutant",
      duration: "10h",
      lessons: 12,
      category: "basics",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600&h=400",
      instructor: "Marie Dupont",
      popularity: 95,
      tags: ["trading", "débutant", "analyse"]
    },
    {
      id: "2",
      title: "Analyse technique avancée",
      description: "Approfondissez vos connaissances en analyse technique pour mieux anticiper les mouvements du marché.",
      level: "Intermédiaire",
      duration: "15h",
      lessons: 18,
      category: "technical",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=600&h=400",
      instructor: "Thomas Bernard",
      popularity: 87,
      tags: ["analyse technique", "graphiques", "indicateurs"]
    },
    {
      id: "3",
      title: "Trading de cryptomonnaies",
      description: "Stratégies spécifiques pour le trading de Bitcoin et autres cryptomonnaies.",
      level: "Intermédiaire",
      duration: "12h",
      lessons: 15,
      category: "crypto",
      image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&q=80&w=600&h=400",
      instructor: "Alexandre Martin",
      popularity: 92,
      tags: ["crypto", "bitcoin", "blockchain"]
    },
    {
      id: "4",
      title: "Psychologie du trading",
      description: "Maîtrisez vos émotions et développez une mentalité de trader gagnant.",
      level: "Avancé",
      duration: "8h",
      lessons: 10,
      category: "psychology",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=600&h=400",
      instructor: "Sophie Legrand",
      popularity: 89,
      tags: ["psychologie", "émotions", "mentalité"]
    },
    {
      id: "5",
      title: "Trading de devises (Forex)",
      description: "Apprenez à trader les paires de devises sur le marché le plus liquide au monde.",
      level: "Intermédiaire",
      duration: "14h",
      lessons: 16,
      category: "forex",
      image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&q=80&w=600&h=400",
      instructor: "Jean Moreau",
      popularity: 84,
      tags: ["forex", "devises", "paires"]
    },
    {
      id: "6",
      title: "Stratégies d'investissement à long terme",
      description: "Construisez un portefeuille solide avec des stratégies éprouvées d'investissement à long terme.",
      level: "Débutant",
      duration: "10h",
      lessons: 12,
      category: "investment",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=600&h=400",
      instructor: "Claire Dubois",
      popularity: 91,
      tags: ["investissement", "long terme", "portefeuille"]
    }
  ];

  // Filter courses by category
  const filteredCourses = activeCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  // Function to render a level badge with appropriate color
  const renderLevelBadge = (level: Course['level']) => {
    let color = "";
    switch (level) {
      case "Débutant":
        color = "bg-green-100 text-green-800 hover:bg-green-100";
        break;
      case "Intermédiaire":
        color = "bg-blue-100 text-blue-800 hover:bg-blue-100";
        break;
      case "Avancé":
        color = "bg-purple-100 text-purple-800 hover:bg-purple-100";
        break;
    }
    return (
      <Badge variant="outline" className={color}>
        {level}
      </Badge>
    );
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <div className="flex justify-center mb-4">
            <GraduationCap className="h-16 w-16 text-finance-blue" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Formations Trading</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Développez vos compétences en trading avec nos formations 
            spécialisées, conçues par des experts du marché financier.
          </p>
        </section>
        
        {/* Course Categories */}
        <section className="mb-10">
          <Tabs 
            defaultValue="all" 
            className="w-full"
            onValueChange={(value) => setActiveCategory(value)}
          >
            <div className="flex justify-center mb-6">
              <TabsList className="grid grid-cols-2 md:grid-cols-7 gap-2">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span className="hidden md:inline">Tous</span>
                </TabsTrigger>
                <TabsTrigger value="basics" className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  <span className="hidden md:inline">Fondamentaux</span>
                </TabsTrigger>
                <TabsTrigger value="technical" className="flex items-center gap-2">
                  <LineChart className="h-4 w-4" />
                  <span className="hidden md:inline">Technique</span>
                </TabsTrigger>
                <TabsTrigger value="crypto" className="flex items-center gap-2">
                  <Coins className="h-4 w-4" />
                  <span className="hidden md:inline">Crypto</span>
                </TabsTrigger>
                <TabsTrigger value="psychology" className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span className="hidden md:inline">Psychologie</span>
                </TabsTrigger>
                <TabsTrigger value="forex" className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  <span className="hidden md:inline">Forex</span>
                </TabsTrigger>
                <TabsTrigger value="investment" className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <span className="hidden md:inline">Investissement</span>
                </TabsTrigger>
              </TabsList>
            </div>
            
            <TabsContent value={activeCategory}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCourses.map(course => (
                  <Card key={course.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="aspect-video w-full overflow-hidden bg-gray-100">
                      <img 
                        src={course.image} 
                        alt={course.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        {renderLevelBadge(course.level)}
                        <div className="flex items-center text-sm text-gray-500">
                          <Video className="h-4 w-4 mr-1" />
                          <span>{course.lessons} leçons</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1 text-gray-500" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center">
                          <Laptop className="h-4 w-4 mr-1 text-gray-500" />
                          <span>En ligne</span>
                        </div>
                      </div>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500">Instructeur: {course.instructor}</p>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between border-t pt-4">
                      <div className="flex flex-wrap gap-2">
                        {course.tags.slice(0, 2).map((tag, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button>S'inscrire</Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>

              {/* Pagination */}
              <div className="mt-10">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            </TabsContent>
          </Tabs>
        </section>
        
        {/* Call to Action */}
        <section className="bg-finance-blue text-white rounded-lg p-8 text-center mb-12">
          <h2 className="text-2xl font-bold mb-4">Prêt à développer vos compétences en trading?</h2>
          <p className="mb-6">Rejoignez notre communauté et accédez à toutes nos formations premium.</p>
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="bg-white text-finance-blue hover:bg-gray-100">
              En savoir plus
            </Button>
            <Button className="bg-finance-green hover:bg-finance-green/90">
              Commencer gratuitement
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Learn;
