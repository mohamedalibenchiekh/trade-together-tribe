
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Search, BookOpen } from "lucide-react";

interface GlossaryTerm {
  term: string;
  definition: string;
  category: 'general' | 'technical' | 'fundamental' | 'market' | 'derivatives';
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Action",
    definition: "Titre de propriété représentant une part du capital d'une société. Les détenteurs d'actions sont appelés actionnaires et peuvent percevoir des dividendes et voter lors des assemblées générales.",
    category: 'general'
  },
  {
    term: "Obligation",
    definition: "Titre de créance émis par une entreprise, un État ou une collectivité pour emprunter des fonds. L'émetteur s'engage à rembourser le capital à échéance et à verser des intérêts périodiques appelés coupons.",
    category: 'general'
  },
  {
    term: "Dividende",
    definition: "Part des bénéfices d'une entreprise distribuée aux actionnaires, généralement sur une base trimestrielle ou annuelle. Le dividende représente la rémunération du capital investi par les actionnaires.",
    category: 'general'
  },
  {
    term: "ETF (Exchange Traded Fund)",
    definition: "Fonds d'investissement coté en bourse qui réplique la performance d'un indice, d'un secteur, d'une matière première ou d'un panier d'actifs. Les ETF offrent une diversification à moindre coût et se négocient comme des actions.",
    category: 'general'
  },
  {
    term: "Capitalisation boursière",
    definition: "Valeur totale des actions d'une entreprise en circulation, calculée en multipliant le nombre d'actions par leur cours actuel. C'est une mesure de la taille d'une entreprise sur les marchés financiers.",
    category: 'general'
  },
  {
    term: "Support",
    definition: "Niveau de prix où la demande est suffisamment forte pour empêcher le cours de baisser davantage. Les supports sont souvent identifiés par des points bas précédents sur un graphique.",
    category: 'technical'
  },
  {
    term: "Résistance",
    definition: "Niveau de prix où l'offre est suffisamment forte pour empêcher le cours de monter davantage. Les résistances sont souvent identifiées par des points hauts précédents sur un graphique.",
    category: 'technical'
  },
  {
    term: "Moyenne mobile",
    definition: "Indicateur technique qui calcule la moyenne des prix sur une période donnée, créant une ligne lissée qui aide à identifier la tendance et filtrer les fluctuations à court terme.",
    category: 'technical'
  },
  {
    term: "MACD (Moving Average Convergence Divergence)",
    definition: "Indicateur de momentum qui montre la relation entre deux moyennes mobiles d'un prix. Il aide à identifier les changements de tendance, la force du mouvement et les divergences potentielles.",
    category: 'technical'
  },
  {
    term: "RSI (Relative Strength Index)",
    definition: "Oscillateur qui mesure la vitesse et le changement des mouvements de prix sur une échelle de 0 à 100. Il est utilisé pour identifier les conditions de surachat (au-dessus de 70) ou de survente (en dessous de 30).",
    category: 'technical'
  },
  {
    term: "PER (Price Earnings Ratio)",
    definition: "Ratio qui compare le cours d'une action à son bénéfice par action. Il indique combien les investisseurs sont prêts à payer pour chaque euro de bénéfice et aide à évaluer si une action est surévaluée ou sous-évaluée.",
    category: 'fundamental'
  },
  {
    term: "Bénéfice par action (BPA)",
    definition: "Indicateur financier qui mesure la part du bénéfice net d'une entreprise attribuable à chaque action ordinaire en circulation. Il est calculé en divisant le bénéfice net par le nombre d'actions.",
    category: 'fundamental'
  },
  {
    term: "Cash-flow",
    definition: "Flux de trésorerie représentant les entrées et sorties d'argent d'une entreprise. Le cash-flow libre indique la trésorerie disponible après les investissements nécessaires et est un indicateur important de la santé financière.",
    category: 'fundamental'
  },
  {
    term: "ROE (Return On Equity)",
    definition: "Ratio de rentabilité des capitaux propres qui mesure la capacité d'une entreprise à générer des profits à partir de ses fonds propres. Il est calculé en divisant le résultat net par les capitaux propres.",
    category: 'fundamental'
  },
  {
    term: "Dette nette",
    definition: "Mesure de l'endettement d'une entreprise qui soustrait la trésorerie et les équivalents de trésorerie de la dette totale. Elle permet d'évaluer la capacité de l'entreprise à rembourser ses dettes à court terme.",
    category: 'fundamental'
  },
  {
    term: "Marché haussier (Bull Market)",
    definition: "Période prolongée pendant laquelle les prix des actifs augmentent de manière générale, accompagnée d'un optimisme des investisseurs et de perspectives économiques positives.",
    category: 'market'
  },
  {
    term: "Marché baissier (Bear Market)",
    definition: "Période prolongée pendant laquelle les prix des actifs baissent d'au moins 20% par rapport à leurs sommets récents, généralement accompagnée d'un pessimisme des investisseurs et de perspectives économiques négatives.",
    category: 'market'
  },
  {
    term: "Volatilité",
    definition: "Mesure statistique de la dispersion des rendements d'un titre ou d'un indice. Une volatilité élevée indique des variations de prix importantes et rapides, tandis qu'une faible volatilité suggère des mouvements plus stables.",
    category: 'market'
  },
  {
    term: "Liquidité",
    definition: "Facilité avec laquelle un actif peut être acheté ou vendu sur le marché sans affecter significativement son prix. Un marché liquide permet des transactions rapides avec des écarts cours acheteur-vendeur faibles.",
    category: 'market'
  },
  {
    term: "Volume de transactions",
    definition: "Nombre total d'actions ou de contrats échangés pendant une période donnée. Il est utilisé pour confirmer les tendances de prix et évaluer la force d'un mouvement de marché.",
    category: 'market'
  },
  {
    term: "Option d'achat (Call)",
    definition: "Contrat financier qui donne à son détenteur le droit, mais non l'obligation, d'acheter un actif sous-jacent à un prix déterminé (prix d'exercice) avant ou à une date d'expiration spécifique.",
    category: 'derivatives'
  },
  {
    term: "Option de vente (Put)",
    definition: "Contrat financier qui donne à son détenteur le droit, mais non l'obligation, de vendre un actif sous-jacent à un prix déterminé (prix d'exercice) avant ou à une date d'expiration spécifique.",
    category: 'derivatives'
  },
  {
    term: "Contrat à terme (Future)",
    definition: "Accord standardisé pour acheter ou vendre un actif spécifique à un prix prédéterminé à une date future. Contrairement aux options, les contrats à terme créent une obligation pour les deux parties.",
    category: 'derivatives'
  },
  {
    term: "Swap",
    definition: "Contrat dérivé par lequel deux parties s'échangent des flux financiers calculés sur différentes bases (taux fixe contre taux variable, par exemple) pendant une période déterminée.",
    category: 'derivatives'
  },
  {
    term: "Delta",
    definition: "Mesure de la sensibilité du prix d'une option aux variations du prix de l'actif sous-jacent. Un delta de 0,5 signifie que l'option gagnera 0,5€ pour chaque euro de hausse du sous-jacent.",
    category: 'derivatives'
  }
];

const alphabetLetters = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const GlossaryFinancial = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  
  // Filter terms based on active letter or search term
  const getFilteredTerms = () => {
    let filtered = glossaryTerms;
    
    // Filter by search term if present
    if (searchTerm) {
      filtered = glossaryTerms.filter(term => 
        term.term.toLowerCase().includes(searchTerm.toLowerCase()) || 
        term.definition.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filtered;
    }
    
    // Filter by letter if selected and no search term
    if (activeLetter) {
      filtered = glossaryTerms.filter(term => 
        term.term.charAt(0).toUpperCase() === activeLetter
      );
    }
    
    return filtered;
  };

  const filteredTerms = getFilteredTerms();
  
  // Group terms by category for the categorized view
  const termsByCategory = {
    general: filteredTerms.filter(term => term.category === 'general'),
    technical: filteredTerms.filter(term => term.category === 'technical'),
    fundamental: filteredTerms.filter(term => term.category === 'fundamental'),
    market: filteredTerms.filter(term => term.category === 'market'),
    derivatives: filteredTerms.filter(term => term.category === 'derivatives'),
  };
  
  // Clear filters
  const clearFilters = () => {
    setSearchTerm('');
    setActiveLetter(null);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-finance-blue to-finance-dark-blue py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Glossaire Financier</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto text-center mb-8">
              Comprendre les termes et concepts essentiels des marchés financiers
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                type="text"
                placeholder="Rechercher un terme..."
                className="pl-12 py-6 text-lg rounded-full text-black"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </section>
        
        {/* Glossary Content */}
        <section className="py-12 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            {/* Filter UI */}
            <div className="mb-12">
              {/* Alphabet filter */}
              <div className="flex flex-wrap justify-center gap-1 md:gap-2 mb-6">
                {alphabetLetters.map(letter => {
                  const hasTerms = glossaryTerms.some(term => 
                    term.term.charAt(0).toUpperCase() === letter
                  );
                  
                  return (
                    <Button
                      key={letter}
                      variant={activeLetter === letter ? "default" : "outline"}
                      size="sm"
                      className={`min-w-[2.5rem] ${!hasTerms && 'opacity-50 cursor-not-allowed'} ${activeLetter === letter ? 'bg-finance-blue hover:bg-finance-light-blue' : ''}`}
                      disabled={!hasTerms}
                      onClick={() => setActiveLetter(letter)}
                    >
                      {letter}
                    </Button>
                  );
                })}
              </div>
              
              {/* Reset button */}
              {(searchTerm || activeLetter) && (
                <div className="text-center mb-8">
                  <Button 
                    variant="ghost" 
                    onClick={clearFilters}
                    className="text-finance-blue hover:text-finance-light-blue"
                  >
                    Réinitialiser les filtres
                  </Button>
                </div>
              )}
            </div>

            {/* Tabbed content */}
            <Tabs defaultValue="alphabetical" className="max-w-5xl mx-auto">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="alphabetical">Par ordre alphabétique</TabsTrigger>
                <TabsTrigger value="categorized">Par catégorie</TabsTrigger>
              </TabsList>
              
              {/* Alphabetical View */}
              <TabsContent value="alphabetical">
                {filteredTerms.length > 0 ? (
                  <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {filteredTerms.map((term, index) => (
                      <Card key={index}>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">
                            {term.term}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300">
                            {term.definition}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
                    <h3 className="text-xl font-medium mb-2 text-gray-700 dark:text-gray-200">
                      Aucun terme trouvé
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Essayez un autre terme ou réinitialisez les filtres.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              {/* Categorized View */}
              <TabsContent value="categorized">
                {filteredTerms.length > 0 ? (
                  <div className="space-y-12">
                    {/* General Terms */}
                    {termsByCategory.general.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-finance-dark-blue dark:text-white border-b pb-2">
                          Concepts Généraux
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {termsByCategory.general.map((term, index) => (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">
                                  {term.term}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                  {term.definition}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Technical Analysis */}
                    {termsByCategory.technical.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-finance-dark-blue dark:text-white border-b pb-2">
                          Analyse Technique
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {termsByCategory.technical.map((term, index) => (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">
                                  {term.term}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                  {term.definition}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Fundamental Analysis */}
                    {termsByCategory.fundamental.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-finance-dark-blue dark:text-white border-b pb-2">
                          Analyse Fondamentale
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {termsByCategory.fundamental.map((term, index) => (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">
                                  {term.term}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                  {term.definition}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Market Terms */}
                    {termsByCategory.market.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-finance-dark-blue dark:text-white border-b pb-2">
                          Terminologie de Marché
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {termsByCategory.market.map((term, index) => (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">
                                  {term.term}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                  {term.definition}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Derivatives */}
                    {termsByCategory.derivatives.length > 0 && (
                      <div>
                        <h2 className="text-2xl font-bold mb-6 text-finance-dark-blue dark:text-white border-b pb-2">
                          Produits Dérivés
                        </h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                          {termsByCategory.derivatives.map((term, index) => (
                            <Card key={index}>
                              <CardContent className="p-6">
                                <h3 className="text-xl font-semibold mb-2 text-finance-dark-blue dark:text-white">
                                  {term.term}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                  {term.definition}
                                </p>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="mx-auto h-16 w-16 text-gray-300 dark:text-gray-600 mb-4" />
                    <h3 className="text-xl font-medium mb-2 text-gray-700 dark:text-gray-200">
                      Aucun terme trouvé
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Essayez un autre terme ou réinitialisez les filtres.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>
            
            {/* Suggestion CTA */}
            <div className="mt-16 bg-white dark:bg-gray-800 rounded-lg p-8 max-w-3xl mx-auto text-center shadow-sm">
              <h3 className="text-2xl font-semibold mb-3 text-finance-dark-blue dark:text-white">
                Un terme financier manque au glossaire ?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                N'hésitez pas à nous suggérer des termes à ajouter pour enrichir notre glossaire.
              </p>
              <Button className="bg-finance-blue hover:bg-finance-light-blue">
                Suggérer un terme
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default GlossaryFinancial;
