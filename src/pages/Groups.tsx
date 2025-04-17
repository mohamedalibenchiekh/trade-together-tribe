
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Users, 
  TrendingUp, 
  BarChart3, 
  Bitcoin, 
  Building, 
  LineChart 
} from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

interface Group {
  id: number;
  name: string;
  description: string;
  category: string;
  memberCount: number;
  activityLevel: number;
  imageUrl?: string;
}

const groups: Group[] = [
  {
    id: 1,
    name: "Analyse Technique Approfondie",
    description: "Groupe dédié aux discussions avancées sur l'analyse graphique, les indicateurs et les configurations chartistes.",
    category: "Analyse Technique",
    memberCount: 2567,
    activityLevel: 5,
    imageUrl: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 2,
    name: "Investisseurs Long Terme",
    description: "Échanges sur les stratégies d'investissement à long terme, dividendes et construction de portefeuille.",
    category: "Investissement",
    memberCount: 1832,
    activityLevel: 4,
    imageUrl: "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 3,
    name: "Crypto Traders",
    description: "Groupe spécialisé dans les cryptomonnaies et les technologies blockchain, analyse et discussion des tendances.",
    category: "Crypto",
    memberCount: 3105,
    activityLevel: 5,
    imageUrl: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 4,
    name: "Débutants Bienvenus",
    description: "Espace d'entraide pour les nouveaux investisseurs avec explications des bases et accompagnement.",
    category: "Débutant",
    memberCount: 4288,
    activityLevel: 4,
    imageUrl: "https://images.unsplash.com/photo-1591696205602-2f950c417cb9?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 5,
    name: "Actualités Économiques",
    description: "Discussions sur l'impact des événements économiques mondiaux sur les marchés financiers.",
    category: "Actualités",
    memberCount: 2156,
    activityLevel: 3,
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 6,
    name: "Options et Produits Dérivés",
    description: "Groupe pour traders avancés souhaitant discuter des stratégies utilisant les options et autres dérivés.",
    category: "Dérivés",
    memberCount: 983,
    activityLevel: 4,
    imageUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 7,
    name: "Trading Psychologie",
    description: "Échanges sur la discipline mentale, la gestion des émotions et le développement d'un mindset gagnant.",
    category: "Psychologie",
    memberCount: 1478,
    activityLevel: 3,
    imageUrl: "https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?auto=format&fit=crop&w=600&h=400"
  },
  {
    id: 8,
    name: "Swing Traders",
    description: "Communauté de traders utilisant des techniques de swing trading pour des positions de quelques jours à quelques semaines.",
    category: "Trading",
    memberCount: 1924,
    activityLevel: 4,
    imageUrl: "https://images.unsplash.com/photo-1535320485706-44d43b918440?auto=format&fit=crop&w=600&h=400"
  }
];

const categoryIcons: { [key: string]: React.ReactNode } = {
  "Analyse Technique": <BarChart3 className="h-5 w-5" />,
  "Investissement": <LineChart className="h-5 w-5" />,
  "Crypto": <Bitcoin className="h-5 w-5" />,
  "Débutant": <Users className="h-5 w-5" />,
  "Actualités": <Building className="h-5 w-5" />,
  "Dérivés": <TrendingUp className="h-5 w-5" />,
  "Psychologie": <Users className="h-5 w-5" />,
  "Trading": <TrendingUp className="h-5 w-5" />
};

const Groups = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  
  const filteredGroups = groups.filter(group => {
    const matchesSearch = group.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                        group.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = categoryFilter ? group.category === categoryFilter : true;
    
    return matchesSearch && matchesCategory;
  });
  
  const popularCategories = [
    "Analyse Technique",
    "Investissement",
    "Crypto",
    "Débutant",
    "Trading"
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-finance-blue to-finance-dark-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Groupes Thématiques</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center">
              Rejoignez des communautés d'investisseurs et de traders partageant vos intérêts
            </p>
          </div>
        </section>
        
        {/* Main Content */}
        <section className="py-10 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Column */}
              <div className="w-full lg:w-3/4">
                {/* Search and Filter Bar */}
                <div className="mb-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm flex flex-col sm:flex-row gap-4">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                    <input 
                      type="text" 
                      placeholder="Rechercher un groupe..." 
                      className="w-full pl-10 py-2 border rounded-md focus:ring-finance-blue focus:border-finance-blue dark:bg-gray-700 dark:border-gray-600"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </div>
                  <div className="relative">
                    <select 
                      className="appearance-none bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md py-2 px-4 pr-8 focus:outline-none focus:ring-finance-blue focus:border-finance-blue"
                      value={categoryFilter}
                      onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                      <option value="">Toutes catégories</option>
                      <option value="Analyse Technique">Analyse Technique</option>
                      <option value="Investissement">Investissement</option>
                      <option value="Crypto">Crypto</option>
                      <option value="Débutant">Débutant</option>
                      <option value="Actualités">Actualités</option>
                      <option value="Dérivés">Dérivés</option>
                      <option value="Psychologie">Psychologie</option>
                      <option value="Trading">Trading</option>
                    </select>
                    <Filter className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                  </div>
                </div>
                
                {/* Content Tabs */}
                <Tabs defaultValue="all" className="mb-6">
                  <TabsList className="mb-6">
                    <TabsTrigger value="all">Tous les groupes</TabsTrigger>
                    <TabsTrigger value="popular">Populaires</TabsTrigger>
                    <TabsTrigger value="new">Nouveaux</TabsTrigger>
                    <TabsTrigger value="joined">Mes groupes</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="space-y-6">
                    {filteredGroups.length > 0 ? (
                      filteredGroups.map(group => (
                        <Card key={group.id} className="overflow-hidden hover:shadow-md transition-shadow duration-200">
                          <div className="flex flex-col md:flex-row">
                            <div className="md:w-1/4 h-48 md:h-auto">
                              <img 
                                src={group.imageUrl || "https://via.placeholder.com/300x200?text=Groupe"} 
                                alt={group.name} 
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <CardContent className="md:w-3/4 p-6">
                              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-3">
                                <Badge className="w-fit bg-finance-blue hover:bg-finance-light-blue flex items-center gap-1">
                                  {categoryIcons[group.category]}
                                  <span>{group.category}</span>
                                </Badge>
                                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                                  <Users className="mr-1" size={16} />
                                  <span>{group.memberCount} membres</span>
                                </div>
                              </div>
                              <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">
                                {group.name}
                              </h3>
                              <p className="text-gray-600 dark:text-gray-300 mb-4">
                                {group.description}
                              </p>
                              <div className="flex flex-wrap gap-3">
                                <Button className="bg-finance-blue hover:bg-finance-light-blue">
                                  Rejoindre le groupe
                                </Button>
                                <Button variant="outline">
                                  En savoir plus
                                </Button>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-12">
                        <p className="text-gray-500 dark:text-gray-400">
                          Aucun groupe ne correspond à votre recherche. Essayez d'autres termes ou filtres.
                        </p>
                      </div>
                    )}
                    
                    {/* Pagination */}
                    {filteredGroups.length > 0 && (
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
                    )}
                  </TabsContent>
                  
                  <TabsContent value="popular">
                    <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                      Connectez-vous pour voir les groupes populaires.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="new">
                    <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                      Connectez-vous pour voir les nouveaux groupes.
                    </p>
                  </TabsContent>
                  
                  <TabsContent value="joined">
                    <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                      Connectez-vous pour voir vos groupes.
                    </p>
                  </TabsContent>
                </Tabs>
              </div>
              
              {/* Sidebar */}
              <div className="w-full lg:w-1/4">
                {/* Create Group Card */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-3 text-finance-dark-blue dark:text-white">
                      Créer un groupe
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                      Vous ne trouvez pas un groupe qui correspond à vos intérêts? Créez votre propre communauté!
                    </p>
                    <Button className="w-full bg-finance-green hover:bg-finance-green/90">
                      Créer un groupe
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Categories Card */}
                <Card className="mb-8">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-finance-dark-blue dark:text-white">
                      Catégories Populaires
                    </h3>
                    <ul className="space-y-3">
                      {popularCategories.map((category, index) => (
                        <li key={index}>
                          <Button 
                            variant="ghost" 
                            className="w-full justify-start text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white"
                            onClick={() => setCategoryFilter(category)}
                          >
                            <span className="flex items-center">
                              {categoryIcons[category]}
                              <span className="ml-2">{category}</span>
                            </span>
                          </Button>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
                
                {/* Recommended Groups */}
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-lg mb-4 text-finance-dark-blue dark:text-white">
                      Groupes Recommandés
                    </h3>
                    <div className="space-y-4">
                      {groups.slice(0, 3).map(group => (
                        <div key={group.id} className="flex items-start space-x-3">
                          <div className="flex-shrink-0 w-12 h-12">
                            <img 
                              src={group.imageUrl || "https://via.placeholder.com/48?text=G"} 
                              alt={group.name} 
                              className="w-full h-full object-cover rounded"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm text-gray-800 dark:text-gray-200">
                              {group.name}
                            </h4>
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              {group.memberCount} membres
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
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

export default Groups;
