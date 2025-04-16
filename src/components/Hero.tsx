
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { TrendingUp, BookOpen, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-br from-finance-dark-blue via-finance-blue to-finance-light-blue py-20 md:py-32 overflow-hidden">
      {/* Animated Background Patterns */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute left-0 top-1/4 w-40 h-40 bg-white rounded-full blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 w-60 h-60 bg-finance-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-finance-green rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Apprenez, Partagez, et Investissez <span className="text-finance-accent">Ensemble</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Rejoignez une communauté active de traders et investisseurs partageant connaissances, 
            stratégies et opportunités pour progresser collectivement.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link to="/register">
              <Button size="lg" className="bg-finance-accent hover:bg-opacity-90 text-finance-dark-blue font-semibold px-6">
                Rejoindre la tribu
              </Button>
            </Link>
            <Link to="/learn">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10 px-6">
                Découvrir nos formations
              </Button>
            </Link>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
              <div className="bg-finance-green h-12 w-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Analyse de marché</h3>
              <p className="text-white/80 text-sm">Accédez à des outils d'analyse et données en temps réel pour prendre des décisions éclairées.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
              <div className="bg-finance-green h-12 w-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Formations complètes</h3>
              <p className="text-white/80 text-sm">Des cours théoriques aux simulations pratiques pour tous les niveaux d'expérience.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white text-center">
              <div className="bg-finance-green h-12 w-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Collaboration active</h3>
              <p className="text-white/80 text-sm">Échangez avec d'autres traders, partagez vos stratégies et apprenez ensemble.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
