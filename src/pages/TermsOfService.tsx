
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-b from-finance-blue to-finance-dark-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Conditions d'Utilisation</h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </section>
        
        {/* Terms Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">1. Acceptation des Conditions</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Bienvenue sur Trade Together Tribe. En accédant à notre site web et en utilisant nos services, vous acceptez d'être lié par ces conditions d'utilisation, notre politique de confidentialité et toutes les lois et réglementations applicables. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser notre site.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">2. Utilisation des Services</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">2.1 Éligibilité</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Pour utiliser nos services, vous devez avoir au moins 18 ans ou avoir atteint l'âge de la majorité dans votre juridiction, selon ce qui est le plus élevé.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">2.2 Inscription</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Certains services peuvent nécessiter une inscription. Vous acceptez de fournir des informations exactes, actuelles et complètes lors de l'inscription et de maintenir ces informations à jour.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">2.3 Sécurité du Compte</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous êtes responsable du maintien de la confidentialité de votre mot de passe et de la sécurité de votre compte. Vous acceptez de nous informer immédiatement de toute utilisation non autorisée de votre compte.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">3. Contenu et Conduite</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">3.1 Contenu de l'Utilisateur</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous restez propriétaire de tout contenu que vous soumettez sur notre plateforme. En soumettant du contenu, vous nous accordez une licence mondiale, non exclusive, gratuite, transférable et sous-licenciable pour utiliser, reproduire, distribuer, préparer des œuvres dérivées de ce contenu.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">3.2 Conduite Interdite</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous acceptez de ne pas utiliser nos services pour :
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li>Enfreindre les lois ou règlements applicables</li>
                <li>Publier du contenu diffamatoire, obscène ou offensant</li>
                <li>Usurper l'identité d'une personne ou d'une entité</li>
                <li>Collecter des informations sur d'autres utilisateurs</li>
                <li>Interférer avec le fonctionnement du site</li>
                <li>Promouvoir des produits ou services sans notre autorisation explicite</li>
              </ul>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">4. Avertissement Concernant les Investissements</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Trade Together Tribe est une plateforme éducative et de partage d'informations. Le contenu disponible sur notre site ne constitue pas un conseil en investissement personnalisé. Les investissements comportent des risques, y compris la perte potentielle du capital investi. Les performances passées ne garantissent pas les résultats futurs. Vous êtes encouragé à consulter un conseiller financier qualifié avant de prendre des décisions d'investissement.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">5. Limitation de Responsabilité</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Dans toute la mesure permise par la loi applicable, Trade Together Tribe et ses affiliés ne sont pas responsables des dommages directs, indirects, accessoires, spéciaux, consécutifs ou punitifs, y compris les pertes de profits, résultant de votre utilisation de notre site ou de nos services.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">6. Modification des Services et des Conditions</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nous nous réservons le droit de modifier ou d'interrompre, temporairement ou définitivement, tout ou partie de nos services à notre seule discrétion. Nous pouvons également modifier ces conditions d'utilisation à tout moment. Nous vous informerons des modifications importantes apportées à ces conditions.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">7. Droit Applicable</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Ces conditions d'utilisation sont régies par et interprétées conformément aux lois françaises, sans égard aux principes de conflits de lois. Tout litige découlant de ou lié à ces conditions sera soumis à la compétence exclusive des tribunaux de Paris, France.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">8. Contact</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Si vous avez des questions concernant ces conditions d'utilisation, veuillez nous contacter à l'adresse suivante : legal@tradetogether.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
