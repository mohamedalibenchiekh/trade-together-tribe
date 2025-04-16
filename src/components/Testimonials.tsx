
import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Philippe Martin",
      role: "Trader particulier",
      avatar: "PM",
      content: "Grâce à Trade Together Tribe, j'ai enfin pu structurer mon approche du trading. Les formations sont claires et la communauté est toujours disponible pour répondre à mes questions. Une vraie plus-value dans mon parcours d'investisseur.",
      rating: 5,
    },
    {
      id: 2,
      name: "Sophie Lemaire",
      role: "Investisseuse débutante",
      avatar: "SL",
      content: "En tant que débutante, j'avais peur de me lancer seule dans l'investissement. La plateforme m'a permis d'apprendre progressivement et d'échanger avec des personnes plus expérimentées qui m'ont guidée dans mes premiers pas.",
      rating: 5,
    },
    {
      id: 3,
      name: "Marc Dupont",
      role: "Analyste financier",
      avatar: "MD",
      content: "L'approche collaborative de cette plateforme est rafraîchissante. Même en tant que professionnel, j'ai découvert de nouvelles perspectives grâce aux échanges avec la communauté. Les outils d'analyse sont également très performants.",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-finance-blue dark:text-white">
            Ce que disent <span className="text-finance-green">nos membres</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Découvrez les témoignages de ceux qui ont rejoint notre communauté et développé leurs compétences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'fill-finance-accent text-finance-accent' : 'text-gray-300'}`} 
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-3">
                  <Avatar>
                    <AvatarFallback className="bg-finance-blue text-white">{testimonial.avatar}</AvatarFallback>
                    <AvatarImage src={`/avatars/${testimonial.id}.jpg`} />
                  </Avatar>
                  <div>
                    <h4 className="font-semibold text-finance-dark-blue dark:text-white">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
