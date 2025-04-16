
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-finance-blue to-finance-dark-blue">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Prêt à rejoindre la communauté de trading qui progresse ensemble ?
          </h2>
          
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            Développez vos compétences, partagez vos connaissances et créez de la valeur grâce à l'intelligence collective.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link to="/register">
              <Button size="lg" className="bg-finance-accent text-finance-dark-blue hover:bg-opacity-90 font-semibold px-6 py-6">
                Créer un compte gratuitement
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:bg-opacity-10 px-6 py-6">
                En savoir plus sur notre approche
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
