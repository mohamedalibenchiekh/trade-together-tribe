import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Tabs, 
  TabsContent, 
  TabsList, 
  TabsTrigger 
} from "@/components/ui/tabs";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Users, 
  UserPlus, 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  Search,
  Filter,
  Lock,
  Globe,
  ChevronRight,
  SortDesc
} from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Navbar from "@/components/Navbar";

// Sample data for groups
const groups = [
  {
    id: 1,
    name: "Traders Bitcoin",
    description: "Groupe dédié aux discussions et analyses autour du Bitcoin et des cryptomonnaies.",
    members: 328,
    posts: 1240,
    isPrivate: false,
    category: "Crypto",
    image: "https://ui-avatars.com/api/?name=Traders+Bitcoin&background=random"
  },
  {
    id: 2,
    name: "Trading à court terme",
    description: "Stratégies et opportunités pour les trades de court terme sur tous les marchés.",
    members: 156,
    posts: 873,
    isPrivate: false,
    category: "Stratégies",
    image: "https://ui-avatars.com/api/?name=Trading+Court+Terme&background=random"
  },
  {
    id: 3,
    name: "Analyse technique avancée",
    description: "Groupe pour échanger sur les méthodes avancées d'analyse technique et les indicateurs.",
    members: 215,
    posts: 1056,
    isPrivate: true,
    category: "Analyse",
    image: "https://ui-avatars.com/api/?name=Analyse+Technique&background=random"
  },
  {
    id: 4,
    name: "Investisseurs actions",
    description: "Discussions sur les actions, les dividendes et l'investissement à long terme.",
    members: 432,
    posts: 1578,
    isPrivate: false,
    category: "Actions",
    image: "https://ui-avatars.com/api/?name=Investisseurs+Actions&background=random"
  },
  {
    id: 5,
    name: "Psychologie du trading",
    description: "Comment maîtriser ses émotions et développer une psychologie gagnante en trading.",
    members: 184,
    posts: 789,
    isPrivate: false,
    category: "Psychologie",
    image: "https://ui-avatars.com/api/?name=Psychologie+Trading&background=random"
  },
  {
    id: 6,
    name: "Trading algorithmique",
    description: "Échanges sur le trading automatisé, les bots et les algorithmes.",
    members: 97,
    posts: 412,
    isPrivate: true,
    category: "Technologie",
    image: "https://ui-avatars.com/api/?name=Algo+Trading&background=random"
  }
];

// Sample categories data
const categories = [
  { name: "Crypto", count: 8 },
  { name: "Actions", count: 5 },
  { name: "Forex", count: 3 },
  { name: "Stratégies", count: 7 },
  { name: "Analyse", count: 6 },
  { name: "Psychologie", count: 2 },
  { name: "Technologie", count: 4 }
];

// Sample recommended groups
const recommendedGroups = [
  {
    id: 7,
    name: "Trading Forex Europe",
    members: 124,
    category: "Forex",
    image: "https://ui-avatars.com/api/?name=Forex+Europe&background=random"
  },
  {
    id: 8,
    name: "Débutants en Bourse",
    members: 376,
    category: "Actions",
    image: "https://ui-avatars.com/api/?name=Debutants+Bourse&background=random"
  },
  {
    id: 9,
    name: "NFTs et Web3",
    members: 89,
    category: "Crypto",
    image: "https://ui-avatars.com/api/?name=NFTs+Web3&background=random"
  }
];

const Groups = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Groupes TradeTogether</h1>
          <Button className="bg-finance-blue hover:bg-finance-light-blue">
            <UserPlus className="mr-2 h-4 w-4" />
            Créer un groupe
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main content area */}
          <div className="lg:col-span-2">
            {/* Search and filter */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  className="pl-10" 
                  placeholder="Rechercher un groupe..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex items-center space-x-4 mb-6">
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <Filter className="h-4 w-4" />
                  <span>Filtrer</span>
                </Button>
                <Button variant="outline" size="sm" className="flex items-center space-x-1">
                  <SortDesc className="h-4 w-4" />
                  <span>Trier</span>
                </Button>
              </div>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="all" className="mb-6">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="all">Tous</TabsTrigger>
                <TabsTrigger value="my-groups">Mes groupes</TabsTrigger>
                <TabsTrigger value="recent">Récents</TabsTrigger>
                <TabsTrigger value="popular">Populaires</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="space-y-4">
                {groups.map(group => (
                  <GroupCard key={group.id} group={group} />
                ))}
              </TabsContent>
              
              <TabsContent value="my-groups" className="space-y-4">
                <div className="flex flex-col items-center justify-center p-10 text-center">
                  <Users className="h-16 w-16 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Vous n'avez pas encore rejoint de groupe</h3>
                  <p className="text-gray-500 mb-4">Rejoignez des groupes pour échanger avec d'autres traders</p>
                  <Button>Découvrir des groupes</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="recent" className="space-y-4">
                {[...groups].sort(() => 0.5 - Math.random()).map(group => (
                  <GroupCard key={group.id} group={group} />
                ))}
              </TabsContent>
              
              <TabsContent value="popular" className="space-y-4">
                {[...groups].sort((a, b) => b.members - a.members).map(group => (
                  <GroupCard key={group.id} group={group} />
                ))}
              </TabsContent>
            </Tabs>
            
            {/* Pagination */}
            <Pagination className="my-6">
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
          
          {/* Sidebar */}
          <div className="space-y-6">
            {/* Create group */}
            <Card>
              <CardHeader>
                <CardTitle>Créez votre groupe</CardTitle>
                <CardDescription>Rassemblez des traders partageant vos intérêts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Créer un groupe</Button>
              </CardContent>
            </Card>
            
            {/* Categories */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Catégories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <Button variant="ghost" size="sm" className="px-2 py-1">
                        {category.name}
                      </Button>
                      <span className="text-xs text-gray-500 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Recommended groups */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Groupes recommandés
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {recommendedGroups.map((group) => (
                    <div key={group.id} className="flex items-center gap-3 p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                      <img 
                        src={group.image} 
                        alt={group.name} 
                        className="rounded-full h-10 w-10"
                      />
                      <div className="flex-grow">
                        <p className="font-medium text-sm">{group.name}</p>
                        <p className="text-xs text-gray-500">{group.members} membres • {group.category}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">Voir plus</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

// Group Card Component
const GroupCard = ({ group }) => {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4">
          <img 
            src={group.image} 
            alt={group.name} 
            className="rounded-full h-14 w-14"
          />
          <div className="flex-grow">
            <div className="flex items-center gap-2">
              <CardTitle className="text-lg">{group.name}</CardTitle>
              {group.isPrivate ? (
                <Lock className="h-4 w-4 text-amber-500" title="Groupe privé" />
              ) : (
                <Globe className="h-4 w-4 text-green-500" title="Groupe public" />
              )}
            </div>
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <span className="flex items-center">
                <Users className="h-3 w-3 mr-1" />
                {group.members} membres
              </span>
              <span className="mx-2">•</span>
              <span>{group.category}</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Rejoindre
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{group.description}</p>
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-500">
          <div className="flex items-center">
            <MessageSquare className="h-4 w-4 mr-1" />
            {group.posts} posts
          </div>
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            Actif quotidiennement
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-3 border-t">
        <Button variant="ghost" size="sm" asChild className="w-full">
          <Link to={`/group/${group.id}`}>Voir le groupe</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default Groups;
