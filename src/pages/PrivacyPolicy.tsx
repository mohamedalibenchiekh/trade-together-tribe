
import React from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Separator } from "@/components/ui/separator";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Header */}
        <section className="bg-gradient-to-b from-finance-blue to-finance-dark-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Politique de Confidentialité</h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
            </p>
          </div>
        </section>
        
        {/* Privacy Policy Content */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto prose prose-lg dark:prose-invert">
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">1. Introduction</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Chez Trade Together Tribe, nous accordons une grande importance à la protection de votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, partageons et protégeons vos informations personnelles lorsque vous utilisez notre site web et nos services.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                En utilisant notre site, vous consentez aux pratiques décrites dans cette politique. Si vous n'acceptez pas cette politique, veuillez ne pas utiliser notre site.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">2. Informations que Nous Collectons</h2>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">2.1 Informations que Vous Nous Fournissez</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous collectons les informations que vous nous fournissez directement, telles que :
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li>Informations d'inscription (nom, adresse e-mail, mot de passe)</li>
                <li>Informations de profil (photo, biographie, intérêts)</li>
                <li>Contenu que vous publiez (messages, commentaires, questions)</li>
                <li>Informations de paiement (pour les services premium)</li>
                <li>Communications avec nous (demandes d'assistance, feedback)</li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">2.2 Informations Collectées Automatiquement</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lorsque vous utilisez notre site, nous collectons automatiquement certaines informations, telles que :
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li>Données d'utilisation (pages visitées, temps passé sur le site)</li>
                <li>Informations sur l'appareil (type d'appareil, système d'exploitation)</li>
                <li>Adresse IP et emplacement approximatif</li>
                <li>Cookies et technologies similaires</li>
              </ul>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">3. Comment Nous Utilisons Vos Informations</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous utilisons vos informations pour :
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li>Fournir, maintenir et améliorer nos services</li>
                <li>Créer et gérer votre compte</li>
                <li>Traiter vos transactions</li>
                <li>Communiquer avec vous au sujet de nos services</li>
                <li>Personnaliser votre expérience</li>
                <li>Analyser comment nos services sont utilisés</li>
                <li>Protéger la sécurité de nos services et de nos utilisateurs</li>
                <li>Se conformer aux obligations légales</li>
              </ul>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">4. Partage de Vos Informations</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous pouvons partager vos informations dans les situations suivantes :
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">4.1 Avec Votre Consentement</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous pouvons partager vos informations lorsque vous nous donnez votre consentement explicite pour le faire.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">4.2 Avec Nos Fournisseurs de Services</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous partageons vos informations avec des tiers qui nous fournissent des services, tels que l'hébergement, le traitement des paiements, l'analyse des données et le support client.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">4.3 Pour Des Raisons Légales</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Nous pouvons partager vos informations si nous estimons de bonne foi que cela est nécessaire pour respecter la loi, protéger les droits de Trade Together Tribe ou la sécurité d'autrui.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-2 text-finance-dark-blue dark:text-white">4.4 Dans le Cadre d'une Transaction d'Entreprise</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                En cas de fusion, acquisition, vente d'actifs ou de faillite, vos informations peuvent être transférées dans le cadre de cette transaction.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">5. Vos Choix et Droits</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Vous disposez de certains droits concernant vos informations personnelles :
              </p>
              <ul className="list-disc pl-6 mb-6 text-gray-700 dark:text-gray-300">
                <li>Accéder à vos informations et les mettre à jour</li>
                <li>Supprimer votre compte et vos données</li>
                <li>Vous opposer au traitement de vos données</li>
                <li>Demander la portabilité de vos données</li>
                <li>Limiter le traitement de vos données</li>
                <li>Retirer votre consentement à tout moment</li>
              </ul>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Pour exercer ces droits, veuillez nous contacter à privacy@tradetogether.com.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">6. Sécurité des Données</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles appropriées pour protéger vos informations personnelles contre la perte, l'accès non autorisé, la divulgation ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">7. Transferts Internationaux de Données</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Vos informations peuvent être transférées et traitées dans des pays autres que celui dans lequel vous résidez. Ces pays peuvent avoir des lois sur la protection des données différentes de celles de votre pays. Nous prenons des mesures pour nous assurer que vos informations bénéficient d'un niveau de protection adéquat.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">8. Conservation des Données</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nous conservons vos informations aussi longtemps que nécessaire pour fournir nos services et pour les autres fins essentielles telles que le respect de nos obligations légales, la résolution des litiges et l'application de nos politiques.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">9. Modifications de Cette Politique</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Nous pouvons modifier cette politique de confidentialité de temps à autre. La version la plus récente sera toujours disponible sur cette page, avec la date de dernière mise à jour. Nous vous encourageons à consulter régulièrement cette politique. Votre utilisation continue de notre site après toute modification constitue votre acceptation de la politique modifiée.
              </p>
              
              <Separator className="my-6" />
              
              <h2 className="text-2xl font-bold mb-4 text-finance-dark-blue dark:text-white">10. Contact</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Si vous avez des questions ou des préoccupations concernant notre politique de confidentialité, veuillez nous contacter à privacy@tradetogether.com ou par courrier à l'adresse suivante : Trade Together Tribe, 123 Avenue de la Finance, 75008 Paris, France.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
