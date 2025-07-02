import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send, Facebook, Instagram } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    alert('Merci pour votre message ! Nous vous répondrons rapidement.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-black mb-4">
            Contactez-nous
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Une question, une suggestion ou envie de nous rendre visite ? N'hésitez pas à nous contacter !
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-black mb-8">
              Informations pratiques
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-black p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Adresse</h3>
                  <p className="text-gray-600">
                    123 Avenue de Paris<br />
                    78340 Les Clayes-sous-Bois<br />
                    France
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black p-3 rounded-full">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Téléphone</h3>
                  <p className="text-gray-600">
                    <a href="tel:+33139123456" className="hover:text-black transition-colors">
                      01 39 12 34 56
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black p-3 rounded-full">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Email</h3>
                  <p className="text-gray-600">
                    <a href="mailto:contact@boulangerie-clayes.fr" className="hover:text-black transition-colors">
                      contact@boulangerie-clayes.fr
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-black p-3 rounded-full">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Horaires d'ouverture</h3>
                  <div className="text-gray-600 space-y-1">
                    <p><span className="font-medium">Lundi - Vendredi:</span> 7h00 - 19h30</p>
                    <p><span className="font-medium">Samedi:</span> 7h00 - 19h00</p>
                    <p><span className="font-medium">Dimanche:</span> 7h00 - 13h00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h3 className="font-playfair text-xl font-semibold text-black mb-4">
                Suivez-nous
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-black hover:bg-gray-800 p-3 rounded-full transition-colors duration-300"
                >
                  <Facebook className="h-6 w-6 text-white" />
                </a>
                <a
                  href="#"
                  className="bg-black hover:bg-gray-800 p-3 rounded-full transition-colors duration-300"
                >
                  <Instagram className="h-6 w-6 text-white" />
                </a>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="mt-6 bg-green-50 p-4 rounded-lg border border-green-200">
              <p className="text-sm text-green-800 mb-2">
                <strong>WhatsApp Business</strong>
              </p>
              <a
                href="https://wa.me/33139123456"
                className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors duration-300"
              >
                <Phone className="h-4 w-4 mr-2" />
                Contacter par WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-playfair text-2xl font-bold text-black mb-8">
              Envoyez-nous un message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                  placeholder="Votre message..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black hover:bg-gray-800 text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="h-5 w-5 mr-2" />
                Envoyer le message
              </button>
            </form>

            <p className="text-sm text-gray-500 mt-4">
              * Champs obligatoires. Nous vous répondrons dans les plus brefs délais.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <h2 className="font-playfair text-2xl font-bold text-black text-center mb-8">
            Nous trouver
          </h2>
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center border border-gray-200">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-black mx-auto mb-4" />
              <p className="text-gray-600">
                Carte Google Maps intégrée<br />
                123 Avenue de Paris, 78340 Les Clayes-sous-Bois
              </p>
              <a
                href="https://maps.google.com/?q=Les+Clayes-sous-Bois"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 bg-black hover:bg-gray-800 text-white px-6 py-2 rounded-lg transition-colors duration-300"
              >
                Voir sur Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;