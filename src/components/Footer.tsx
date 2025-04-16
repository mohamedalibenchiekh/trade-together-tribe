
import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <TrendingUp className="h-6 w-6 text-finance-green" />
              <span className="font-montserrat font-bold text-xl text-finance-blue dark:text-white">
                Trade<span className="text-finance-green">Together</span>
              </span>
            </Link>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Une communauté d'apprentissage et de partage pour les traders et investisseurs de tous niveaux.
            </p>
          </div>
          
          {/* Links Column 1 */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-finance-dark-blue dark:text-white">Plateforme</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/dashboard" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Tableaux de bord
                </Link>
              </li>
              <li>
                <Link to="/learn" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Formations
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Forum communautaire
                </Link>
              </li>
              <li>
                <Link to="/groups" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Groupes thématiques
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links Column 2 */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-finance-dark-blue dark:text-white">Ressources</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/blog" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/webinars" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Webinaires
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/glossary" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Glossaire financier
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Links Column 3 */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-finance-dark-blue dark:text-white">À propos</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Notre mission
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Conditions d'utilisation
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 dark:text-gray-300 hover:text-finance-blue dark:hover:text-white transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator />
        
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Trade Together Tribe. Tous droits réservés.
          </p>
          <div className="flex space-x-4">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-finance-blue dark:hover:text-white transition-colors">
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-finance-blue dark:hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-finance-blue dark:hover:text-white transition-colors">
              Facebook
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-finance-blue dark:hover:text-white transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
