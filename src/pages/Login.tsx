
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow flex items-center justify-center py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <Card className="max-w-md mx-auto">
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <TrendingUp className="h-8 w-8 text-finance-green" />
              </div>
              <CardTitle className="text-2xl font-bold text-finance-blue dark:text-white">Connectez-vous</CardTitle>
              <CardDescription>
                Accédez à votre compte Trade Together Tribe
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form>
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" required />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Mot de passe</Label>
                      <Link to="/forgot-password" className="text-sm text-finance-blue hover:underline dark:text-blue-400">
                        Mot de passe oublié?
                      </Link>
                    </div>
                    <Input id="password" type="password" required />
                  </div>
                  
                  <Button type="submit" className="w-full bg-finance-blue hover:bg-finance-light-blue">
                    Se connecter
                  </Button>
                </div>
              </form>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <div className="text-sm text-center text-gray-500 dark:text-gray-400">
                Pas encore de compte?{" "}
                <Link to="/register" className="text-finance-blue hover:underline dark:text-blue-400">
                  S'inscrire
                </Link>
              </div>
            </CardFooter>
          </Card>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Login;
