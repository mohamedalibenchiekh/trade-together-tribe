
import React from 'react';
import {
  LineChart,
  BookOpen,
  Users,
  MessageSquare,
  Zap,
  Shield
} from 'lucide-react';

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-finance-blue dark:text-white">
            Une plateforme complète pour <span className="text-finance-green">réussir ensemble</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Trade Together Tribe vous offre tous les outils nécessaires pour développer vos compétences
            et maximiser vos résultats grâce à une approche collaborative.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <LineChart className="h-6 w-6 text-finance-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-finance-dark-blue dark:text-white">Données de marché en direct</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Accédez aux analyses techniques, fondamentales et aux cotations en temps réel pour tous les marchés financiers.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <BookOpen className="h-6 w-6 text-finance-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-finance-dark-blue dark:text-white">Formations structurées</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Des parcours d'apprentissage personnalisés qui vous accompagnent de la théorie à la pratique.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover">
            <div className="h-12 w-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-finance-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-finance-dark-blue dark:text-white">Groupes d'investissement</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Créez ou rejoignez des groupes thématiques pour partager des stratégies et opportunités d'investissement.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover">
            <div className="h-12 w-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="h-6 w-6 text-finance-blue" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-finance-dark-blue dark:text-white">Forum communautaire</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Échangez avec la communauté, posez vos questions et partagez vos analyses dans un espace dédié.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover">
            <div className="h-12 w-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <Zap className="h-6 w-6 text-finance-green" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-finance-dark-blue dark:text-white">Simulations de trading</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Pratiquez sans risque avec notre environnement de simulation qui reproduit les conditions réelles du marché.
            </p>
          </div>

          {/* Feature 6 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm card-hover">
            <div className="h-12 w-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg flex items-center justify-center mb-4">
              <Shield className="h-6 w-6 text-finance-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-finance-dark-blue dark:text-white">Approche disciplinée</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Un cadre méthodologique rigoureux pour développer une discipline et une éthique irréprochables.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
