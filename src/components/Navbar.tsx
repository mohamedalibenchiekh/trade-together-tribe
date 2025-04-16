
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { 
  LineChart, 
  Users, 
  BookOpen, 
  TrendingUp, 
  MessageSquare, 
  LogIn, 
  Menu 
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <Link to="/" className="flex items-center space-x-2">
            <TrendingUp className="h-6 w-6 text-finance-green" />
            <span className="font-montserrat font-bold text-xl text-finance-blue dark:text-white">
              Trade<span className="text-finance-green">Together</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="flex items-center space-x-1 text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
              <LineChart className="h-4 w-4" />
              <span>Marchés</span>
            </Link>
            <Link to="/learn" className="flex items-center space-x-1 text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Formations</span>
            </Link>
            <Link to="/community" className="flex items-center space-x-1 text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
              <MessageSquare className="h-4 w-4" />
              <span>Communauté</span>
            </Link>
            <Link to="/groups" className="flex items-center space-x-1 text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
              <Users className="h-4 w-4" />
              <span>Groupes</span>
            </Link>
          </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" size="sm" className="flex items-center space-x-1">
                <LogIn className="h-4 w-4" />
                <span>Connexion</span>
              </Button>
            </Link>
            <Link to="/register">
              <Button size="sm" className="bg-finance-blue hover:bg-finance-light-blue">
                S'inscrire
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-5 mt-10 items-start">
                <Link to="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
                  <LineChart className="h-5 w-5" />
                  <span>Marchés</span>
                </Link>
                <Link to="/learn" className="flex items-center space-x-2 text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
                  <BookOpen className="h-5 w-5" />
                  <span>Formations</span>
                </Link>
                <Link to="/community" className="flex items-center space-x-2 text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
                  <MessageSquare className="h-5 w-5" />
                  <span>Communauté</span>
                </Link>
                <Link to="/groups" className="flex items-center space-x-2 text-gray-700 hover:text-finance-blue dark:text-gray-300 dark:hover:text-white transition-colors">
                  <Users className="h-5 w-5" />
                  <span>Groupes</span>
                </Link>
                <div className="pt-5 w-full border-t border-gray-200 dark:border-gray-700">
                  <div className="flex flex-col space-y-3">
                    <Link to="/login" className="w-full">
                      <Button variant="outline" className="w-full justify-start">
                        <LogIn className="h-4 w-4 mr-2" />
                        Connexion
                      </Button>
                    </Link>
                    <Link to="/register" className="w-full">
                      <Button className="w-full bg-finance-blue hover:bg-finance-light-blue">
                        S'inscrire
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
