
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { Search, Filter, Calendar, User } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  imageUrl: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Les bases de l'investissement en bourse pour débutants",
    excerpt: "Découvrez les fondamentaux pour commencer à investir en bourse sans risquer tout votre capital...",
    author: "Marie Laurent",
    date: "12 Avril 2025",
    category: "Débutant",
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 2,
    title: "Analyse technique: comprendre les graphiques",
    excerpt: "L'analyse technique est un outil essentiel pour tout trader. Apprenez à décrypter les signaux des graphiques...",
    author: "Thomas Dubois",
    date: "8 Avril 2025",
    category: "Analyse",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 3,
    title: "Les ETF: une stratégie d'investissement passive efficace",
    excerpt: "Les ETF offrent une exposition diversifiée aux marchés avec des frais réduits. Découvrez comment les intégrer...",
    author: "Sophie Martin",
    date: "3 Avril 2025",
    category: "Stratégie",
    imageUrl: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 4,
    title: "Trading algorithmique: les bases pour commencer",
    excerpt: "Le trading algorithmique permet d'automatiser vos stratégies d'investissement. Voici comment débuter...",
    author: "Alexandre Blanc",
    date: "25 Mars 2025",
    category: "Technologie",
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 5,
    title: "Psychologie du trading: gérer ses émotions",
    excerpt: "La peur et l'avidité sont les pires ennemis du trader. Découvrez des techniques pour maîtriser vos émotions...",
    author: "Julie Rousseau",
    date: "18 Mars 2025",
    category: "Psychologie",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&h=400"
  }
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-finance-blue to-finance-dark-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Blog</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center">
              Nos derniers articles, analyses et conseils pour maîtriser les marchés financiers
            </p>
          </div>
        </section>

        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content */}
              <div className="w-full md:w-2/3">
                {/* Search & Filter Bar */}
                <div className="mb-8 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Rechercher des articles..." 
                      className="w-full pl-10 py-2 border rounded-md focus:ring-finance-blue focus:border-finance-blue dark:bg-gray-700 dark:border-gray-600"
                    />
                  </div>
                  <div className="relative">
                    <select className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-finance-blue focus:border-finance-blue">
                      <option value="">Toutes catégories</option>
                      <option value="debutant">Débutant</option>
                      <option value="analyse">Analyse</option>
                      <option value="strategie">Stratégie</option>
                      <option value="technologie">Technologie</option>
                      <option value="psychologie">Psychologie</option>
                    </select>
                    <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>

                {/* Blog Posts */}
                <div className="space-y-8">
                  {blogPosts.map(post => (
                    <Card key={post.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                      <div className="flex flex-col md:flex-row">
                        <div className="md:w-1/3">
                          <img 
                            src={post.imageUrl} 
                            alt={post.title} 
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <CardContent className="md:w-2/3 p-6">
                          <Badge className="mb-2 bg-finance-blue hover:bg-finance-light-blue">
                            {post.category}
                          </Badge>
                          <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 mb-4">
                            {post.excerpt}
                          </p>
                          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-4">
                            <div className="flex items-center">
                              <User size={14} className="mr-1" />
                              <span>{post.author}</span>
                            </div>
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              <span>{post.date}</span>
                            </div>
                          </div>
                          <Button variant="link" className="text-finance-blue p-0 hover:text-finance-light-blue">
                            Lire la suite →
                          </Button>
                        </CardContent>
                      </div>
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
              </div>

              {/* Sidebar */}
              <div className="w-full md:w-1/3">
                {/* Categories */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-finance-dark-blue dark:text-white">Catégories</h3>
                    <ul className="space-y-2">
                      <li>
                        <a href="#" className="flex items-center justify-between text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
                          <span>Débutant</span>
                          <Badge variant="outline">12</Badge>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-between text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
                          <span>Analyse Technique</span>
                          <Badge variant="outline">8</Badge>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-between text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
                          <span>Stratégies</span>
                          <Badge variant="outline">15</Badge>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-between text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
                          <span>Technologie</span>
                          <Badge variant="outline">7</Badge>
                        </a>
                      </li>
                      <li>
                        <a href="#" className="flex items-center justify-between text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
                          <span>Psychologie</span>
                          <Badge variant="outline">5</Badge>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Popular Posts */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-finance-dark-blue dark:text-white">Articles Populaires</h3>
                    <div className="space-y-4">
                      {blogPosts.slice(0, 3).map(post => (
                        <div key={`popular-${post.id}`} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-16 h-16">
                            <img 
                              src={post.imageUrl} 
                              alt={post.title} 
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm text-gray-800 dark:text-gray-200 line-clamp-2">
                              {post.title}
                            </h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Newsletter */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-finance-dark-blue dark:text-white">Newsletter</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      Recevez nos derniers articles et analyses directement dans votre boîte de réception.
                    </p>
                    <input 
                      type="email" 
                      placeholder="Votre email"
                      className="w-full mb-3 px-4 py-2 border rounded-md focus:ring-finance-blue focus:border-finance-blue dark:bg-gray-700 dark:border-gray-600"
                    />
                    <Button className="w-full bg-finance-blue hover:bg-finance-light-blue">
                      S'abonner
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
