
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
import { 
  MessageSquare, 
  Users, 
  TrendingUp, 
  Star, 
  Heart, 
  Share2,
  Search,
  Filter
} from "lucide-react";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import Navbar from "@/components/Navbar";

// Sample data for posts
const posts = [
  {
    id: 1,
    title: "Analyse technique du Bitcoin",
    content: "Aujourd'hui, nous allons examiner les tendances du marché Bitcoin et comment les indicateurs techniques...",
    author: "Sophie Laurent",
    avatar: "https://ui-avatars.com/api/?name=Sophie+Laurent&background=random",
    date: "Il y a 2 heures",
    likes: 24,
    comments: 8,
    shares: 3,
    tags: ["Bitcoin", "Analyse Technique"]
  },
  {
    id: 2,
    title: "Stratégies de trading à court terme",
    content: "Les stratégies de scalping peuvent être très efficaces dans les marchés volatiles. Voici quelques astuces...",
    author: "Marc Dubois",
    avatar: "https://ui-avatars.com/api/?name=Marc+Dubois&background=random",
    date: "Il y a 5 heures",
    likes: 42,
    comments: 15,
    shares: 7,
    tags: ["Trading", "Scalping", "Stratégie"]
  },
  {
    id: 3,
    title: "Psychologie du trading : gérer ses émotions",
    content: "La peur et l'avidité sont les ennemis du trader. Dans ce post, je partage mes techniques pour...",
    author: "Emma Petit",
    avatar: "https://ui-avatars.com/api/?name=Emma+Petit&background=random",
    date: "Il y a 1 jour",
    likes: 67,
    comments: 23,
    shares: 12,
    tags: ["Psychologie", "Émotions", "Mentalité"]
  },
  {
    id: 4,
    title: "Les bases de l'analyse fondamentale",
    content: "Comment évaluer la valeur intrinsèque d'un actif ? Voici les indicateurs économiques à surveiller...",
    author: "Thomas Martin",
    avatar: "https://ui-avatars.com/api/?name=Thomas+Martin&background=random",
    date: "Il y a 2 jours",
    likes: 38,
    comments: 11,
    shares: 5,
    tags: ["Analyse Fondamentale", "Économie"]
  }
];

// Sample data for active users
const activeUsers = [
  { 
    id: 1, 
    name: "Marie Lefèvre", 
    avatar: "https://ui-avatars.com/api/?name=Marie+Lefevre&background=random",
    status: "Expert en trading"
  },
  { 
    id: 2, 
    name: "Pierre Moreau", 
    avatar: "https://ui-avatars.com/api/?name=Pierre+Moreau&background=random",
    status: "Analyste technique"
  },
  { 
    id: 3, 
    name: "Julie Blanc", 
    avatar: "https://ui-avatars.com/api/?name=Julie+Blanc&background=random",
    status: "Investisseur crypto"
  },
  { 
    id: 4, 
    name: "David Bernard", 
    avatar: "https://ui-avatars.com/api/?name=David+Bernard&background=random",
    status: "Day trader"
  },
  { 
    id: 5, 
    name: "Sophie Klein", 
    avatar: "https://ui-avatars.com/api/?name=Sophie+Klein&background=random",
    status: "Coach financier"
  }
];

// Sample data for trending topics
const trendingTopics = [
  "#Bitcoin", "#TradingPsychologie", "#AnalyseTechnique", 
  "#Ethereum", "#MarchéBoursier", "#Scalping", 
  "#CryptoMonnaies", "#TradingForex", "#InvestissementLongTerme"
];

const Community = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">Communauté TradeTogether</h1>
          <Link to="/groups">
            <Button className="bg-finance-blue hover:bg-finance-light-blue">
              <Users className="mr-2 h-4 w-4" />
              Voir les groupes
            </Button>
          </Link>
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
                  placeholder="Rechercher dans la communauté..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="outline" className="flex items-center">
                <Filter className="mr-2 h-4 w-4" />
                Filtrer
              </Button>
            </div>
            
            {/* Tabs */}
            <Tabs defaultValue="popular" className="mb-6">
              <TabsList className="grid grid-cols-4 mb-4">
                <TabsTrigger value="popular">Populaire</TabsTrigger>
                <TabsTrigger value="recent">Récent</TabsTrigger>
                <TabsTrigger value="followed">Suivi</TabsTrigger>
                <TabsTrigger value="my-posts">Mes posts</TabsTrigger>
              </TabsList>
              
              <TabsContent value="popular" className="space-y-4">
                {posts.map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </TabsContent>
              
              <TabsContent value="recent" className="space-y-4">
                {[...posts].sort(() => 0.5 - Math.random()).map(post => (
                  <PostCard key={post.id} post={post} />
                ))}
              </TabsContent>
              
              <TabsContent value="followed" className="space-y-4">
                <div className="flex flex-col items-center justify-center p-10 text-center">
                  <Users className="h-16 w-16 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Commencez à suivre des membres</h3>
                  <p className="text-gray-500 mb-4">Suivez d'autres traders pour voir leurs posts ici</p>
                  <Button>Découvrir des traders</Button>
                </div>
              </TabsContent>
              
              <TabsContent value="my-posts" className="space-y-4">
                <div className="flex flex-col items-center justify-center p-10 text-center">
                  <MessageSquare className="h-16 w-16 text-gray-400 mb-4" />
                  <h3 className="text-lg font-medium mb-2">Vous n'avez pas encore de posts</h3>
                  <p className="text-gray-500 mb-4">Partagez votre expertise avec la communauté</p>
                  <Button>Créer un post</Button>
                </div>
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
            {/* Create post */}
            <Card>
              <CardHeader>
                <CardTitle>Partagez avec la communauté</CardTitle>
                <CardDescription>Votre expertise vaut de l'or pour les autres traders</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full">Créer un post</Button>
              </CardContent>
            </Card>
            
            {/* Trending topics */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Sujets tendance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {trendingTopics.map((topic, index) => (
                    <Button key={index} variant="outline" size="sm" className="rounded-full">
                      {topic}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Active users */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 h-4 w-4" />
                  Membres actifs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {activeUsers.map(user => (
                    <li key={user.id} className="flex items-center gap-3">
                      <img 
                        src={user.avatar} 
                        alt={user.name} 
                        className="rounded-full h-10 w-10"
                      />
                      <div className="flex-grow">
                        <p className="font-medium">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.status}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Suivre
                      </Button>
                    </li>
                  ))}
                </ul>
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

// Post Card Component
const PostCard = ({ post }) => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-3">
          <img 
            src={post.avatar} 
            alt={post.author} 
            className="rounded-full h-10 w-10"
          />
          <div className="flex-grow">
            <CardTitle className="text-lg">{post.title}</CardTitle>
            <div className="flex items-center text-sm text-gray-500">
              <span>{post.author}</span>
              <span className="mx-1">•</span>
              <span>{post.date}</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4">{post.content}</p>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag, index) => (
            <Button key={index} variant="outline" size="sm" className="rounded-full">
              #{tag}
            </Button>
          ))}
        </div>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between w-full">
          <Button variant="ghost" size="sm" className="text-gray-500 hover:text-red-500">
            <Heart className="mr-1 h-4 w-4" />
            {post.likes}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500">
            <MessageSquare className="mr-1 h-4 w-4" />
            {post.comments}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500">
            <Share2 className="mr-1 h-4 w-4" />
            {post.shares}
          </Button>
          <Button variant="ghost" size="sm" className="text-gray-500">
            <Star className="mr-1 h-4 w-4" />
            Sauvegarder
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Community;
