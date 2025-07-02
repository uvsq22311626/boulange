import React from 'react';
import { Users, Award, Heart, Clock } from 'lucide-react';

const About = () => {
  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-black mb-4">
            Notre Histoire
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez l'histoire de notre boulangerie familiale et l'équipe passionnée qui perpétue les traditions artisanales.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="font-playfair text-3xl font-bold text-black mb-6">
              Une tradition familiale depuis 1985
            </h2>
            <p className="text-gray-600 mb-6">
              Notre boulangerie a été fondée en 1985 par Michel et Claire Dubois, un couple passionné par l'art de la boulangerie traditionnelle française. Installés aux Clayes-sous-Bois, ils ont rapidement conquis le cœur des habitants avec leurs produits authentiques et leur accueil chaleureux.
            </p>
            <p className="text-gray-600 mb-6">
              Aujourd'hui, leur fils Antoine a repris le flambeau, perpétuant les recettes familiales tout en apportant sa propre créativité. Notre engagement reste le même : offrir des produits de qualité exceptionnelle, préparés avec amour et dans le respect des traditions.
            </p>
            <p className="text-gray-600">
              Chaque matin, nous nous levons avant l'aube pour pétrir, façonner et cuire nos pains et viennoiseries, afin que vous puissiez savourer la fraîcheur et l'authenticité de nos créations.
            </p>
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg h-96"></div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="font-playfair text-3xl font-bold text-black text-center mb-12">
            Notre Équipe
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-800 to-black rounded-full h-32 w-32 mx-auto mb-4"></div>
              <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                Antoine Dubois
              </h3>
              <p className="text-black font-medium mb-2">Maître Boulanger</p>
              <p className="text-gray-600 text-sm">
                Passionné depuis l'enfance, Antoine perpétue la tradition familiale avec créativité et excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-600 to-gray-800 rounded-full h-32 w-32 mx-auto mb-4"></div>
              <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                Sophie Martin
              </h3>
              <p className="text-black font-medium mb-2">Pâtissière</p>
              <p className="text-gray-600 text-sm">
                Diplômée des Beaux-Arts culinaires, Sophie crée nos pâtisseries avec un œil artistique unique.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-gradient-to-br from-gray-400 to-gray-600 rounded-full h-32 w-32 mx-auto mb-4"></div>
              <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                Marie Leclerc
              </h3>
              <p className="text-black font-medium mb-2">Vendeuse & Accueil</p>
              <p className="text-gray-600 text-sm">
                Le sourire de notre boulangerie, Marie vous accueille chaque jour avec chaleur et bonne humeur.
              </p>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50 rounded-lg p-12 mb-20">
          <h2 className="font-playfair text-3xl font-bold text-black text-center mb-12">
            Nos Engagements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-black mb-2">
                Qualité Premium
              </h3>
              <p className="text-gray-600 text-sm">
                Sélection rigoureuse des matières premières et respect des méthodes traditionnelles.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-black mb-2">
                Fait Maison
              </h3>
              <p className="text-gray-600 text-sm">
                Tous nos produits sont préparés sur place, sans conservateurs ni additifs artificiels.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-black mb-2">
                Circuit Court
              </h3>
              <p className="text-gray-600 text-sm">
                Partenariat avec des producteurs locaux pour soutenir l'économie régionale.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-lg font-semibold text-black mb-2">
                Fraîcheur
              </h3>
              <p className="text-gray-600 text-sm">
                Production quotidienne pour une fraîcheur garantie et un goût incomparable.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h2 className="font-playfair text-3xl font-bold text-black text-center mb-12">
            Témoignages de nos Clients
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4 italic">
                "Cela fait 15 ans que je viens ici et je n'ai jamais été déçue. La qualité est constante et l'équipe est formidable. C'est ma boulangerie de cœur !"
              </p>
              <div className="flex items-center">
                <div className="bg-black rounded-full h-10 w-10 mr-3"></div>
                <div>
                  <p className="font-semibold text-black">Françoise B.</p>
                  <p className="text-sm text-gray-500">Cliente fidèle</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4 italic">
                "Les meilleurs croissants de la région ! Et que dire de leurs pâtisseries... Un vrai régal pour les yeux et les papilles."
              </p>
              <div className="flex items-center">
                <div className="bg-gray-600 rounded-full h-10 w-10 mr-3"></div>
                <div>
                  <p className="font-semibold text-black">Thomas R.</p>
                  <p className="text-sm text-gray-500">Habitant des Clayes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;