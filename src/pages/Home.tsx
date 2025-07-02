import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Clock, Award, Heart } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/public/2025-02-20.webp)',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="font-playfair text-4xl lg:text-6xl font-bold mb-6">
            La tradition du pain,<br />
            <span className="text-gray-200">chaque jour aux Clayes-sous-Bois</span>
          </h1>
          <p className="text-xl lg:text-2xl mb-8 max-w-3xl mx-auto text-gray-100">
            Découvrez nos pains artisanaux, viennoiseries et pâtisseries 
            préparés avec passion selon les recettes traditionnelles françaises.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/commande"
              className="bg-white hover:bg-gray-100 text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 flex items-center justify-center shadow-lg"
            >
              Commander en ligne
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/produits"
              className="border-2 border-white hover:bg-white hover:text-black font-semibold px-8 py-4 rounded-full transition-all duration-300 backdrop-blur-sm"
            >
              Découvrir nos spécialités
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-black mb-4">
              Pourquoi choisir notre boulangerie ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une boulangerie familiale qui allie tradition et innovation pour vous offrir le meilleur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                Fraîcheur Quotidienne
              </h3>
              <p className="text-gray-600">
                Tous nos produits sont préparés chaque matin avec des ingrédients frais et locaux.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                Savoir-faire Artisanal
              </h3>
              <p className="text-gray-600">
                Plus de 30 ans d'expérience dans l'art de la boulangerie traditionnelle française.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                Passion du Métier
              </h3>
              <p className="text-gray-600">
                Chaque produit est préparé avec amour et dans le respect des traditions ancestrales.
              </p>
            </div>

            <div className="text-center group">
              <div className="bg-black p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:bg-gray-800 transition-colors duration-300">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                Qualité Garantie
              </h3>
              <p className="text-gray-600">
                Ingrédients sélectionnés avec soin, farines de qualité et recettes éprouvées.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-black mb-4">
              Nos Spécialités
            </h2>
            <p className="text-lg text-gray-600">
              Découvrez quelques-unes de nos créations les plus appréciées
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-800 to-black"></div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                    Pains Traditionnels
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Baguettes, pains de campagne, aux céréales... Tous pétris et cuits selon la tradition.
                  </p>
                  <Link
                    to="/produits"
                    className="text-black hover:text-gray-600 font-semibold inline-flex items-center"
                  >
                    Voir nos pains
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-600 to-gray-800"></div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                    Viennoiseries
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Croissants au beurre, pains au chocolat, chaussons aux pommes... Un délice quotidien.
                  </p>
                  <Link
                    to="/produits"
                    className="text-black hover:text-gray-600 font-semibold inline-flex items-center"
                  >
                    Voir nos viennoiseries
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="group cursor-pointer">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600"></div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-black mb-2">
                    Pâtisseries
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Éclairs, tartes aux fruits, millefeuilles... Des créations gourmandes et raffinées.
                  </p>
                  <Link
                    to="/produits"
                    className="text-black hover:text-gray-600 font-semibold inline-flex items-center"
                  >
                    Voir nos pâtisseries
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl lg:text-4xl font-bold text-black mb-4">
              Ce que disent nos clients
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-black fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "La meilleure boulangerie des environs ! Leurs croissants sont un pur délice et l'accueil est toujours chaleureux."
              </p>
              <p className="font-semibold text-black">Marie L.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-black fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Une boulangerie traditionnelle comme on les aime. Le pain de campagne est exceptionnel, je ne peux plus m'en passer !"
              </p>
              <p className="font-semibold text-black">Jean-Pierre M.</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-black fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Service impeccable et produits de qualité. La tarte aux fraises de saison était divine !"
              </p>
              <p className="font-semibold text-black">Sophie D.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;