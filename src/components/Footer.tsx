import React from 'react';
import { MapPin, Phone, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-gray-300" />
                <span>123 Avenue de Paris<br />78340 Les Clayes-sous-Bois</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gray-300" />
                <a href="tel:+33139123456" className="hover:text-gray-300 transition-colors">
                  01 39 12 34 56
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Horaires</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-gray-300" />
                <div>
                  <p>Lun - Ven: 7h00 - 19h30</p>
                  <p>Samedi: 7h00 - 19h00</p>
                  <p>Dimanche: 7h00 - 13h00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white text-black p-2 rounded-full hover:bg-gray-200 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-300">
                Boulangerie artisanale depuis 1985
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © 2024 Boulangerie Artisanale Les Clayes-sous-Bois. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;