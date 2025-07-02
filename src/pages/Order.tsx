import React, { useState } from 'react';
import { products, categories } from '../data/products';
import { ShoppingCart, Minus, Plus, Calendar, Clock, User, Mail, Phone, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Order = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [showCheckout, setShowCheckout] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    notes: '',
  });

  const { cart, addToCart, removeFromCart, clearCart, getTotalPrice, getTotalItems } = useCart();

  const filteredProducts = selectedCategory === 'tous' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const formatPrice = (price: number) => {
    return `${price.toFixed(2).replace('.', ',')} €`;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  const resetOrder = () => {
    setOrderPlaced(false);
    clearCart();
    setShowCheckout(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      notes: '',
    });
  };

  // Get tomorrow's date as minimum date
  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  if (orderPlaced) {
    return (
      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 p-8 rounded-lg border border-green-200">
            <Check className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h1 className="font-playfair text-3xl font-bold text-green-800 mb-4">
              Commande confirmée !
            </h1>
            <p className="text-green-700 mb-6">
              Merci {formData.name} ! Votre commande a été reçue et sera prête le {formData.date} à {formData.time}.
            </p>
            <div className="bg-white p-4 rounded-lg mb-6">
              <h3 className="font-semibold text-gray-800 mb-2">Récapitulatif de votre commande :</h3>
              <div className="text-left space-y-1">
                {cart.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.quantity}x {item.name}</span>
                    <span>{formatPrice(item.price * item.quantity)}</span>
                  </div>
                ))}
                <div className="border-t pt-2 font-bold flex justify-between">
                  <span>Total :</span>
                  <span>{formatPrice(getTotalPrice())}</span>
                </div>
              </div>
            </div>
            <p className="text-green-600 mb-8">
              Vous recevrez un email de confirmation à {formData.email}
            </p>
            <button
              onClick={resetOrder}
              className="bg-black hover:bg-gray-800 text-white px-6 py-3 rounded-lg transition-colors duration-300"
            >
              Nouvelle commande
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-black mb-4">
            Commande en Ligne
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Composez votre commande et venez la récupérer à l'heure qui vous convient. Service Click & Collect disponible.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Products Section */}
          <div className="lg:col-span-3">
            {!showCheckout ? (
              <>
                {/* Category Filter */}
                <div className="flex flex-wrap gap-4 mb-8">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                        selectedCategory === category.id
                          ? 'bg-black text-white'
                          : 'bg-white text-black border border-black hover:bg-black hover:text-white'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-32 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-playfair text-lg font-semibold text-black mb-1">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {product.description}
                        </p>
                        
                        {/* Product badges */}
                        <div className="mb-3 flex flex-wrap gap-1">
                          {product.isBio && (
                            <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                              Bio
                            </span>
                          )}
                          {product.isGlutenFree && (
                            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                              Sans gluten
                            </span>
                          )}
                          {product.isHomemade && (
                            <span className="text-xs bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
                              Fait maison
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="font-bold text-black text-lg">
                            {formatPrice(product.price)}
                          </span>
                          <button
                            onClick={() => addToCart(product)}
                            className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg transition-colors duration-300 flex items-center space-x-2"
                          >
                            <Plus className="h-4 w-4" />
                            <span>Ajouter</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              /* Checkout Form */
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
                <h2 className="font-playfair text-2xl font-bold text-black mb-6">
                  Informations de retrait
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="h-4 w-4 inline mr-2" />
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Mail className="h-4 w-4 inline mr-2" />
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Phone className="h-4 w-4 inline mr-2" />
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="06 12 34 56 78"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Calendar className="h-4 w-4 inline mr-2" />
                        Date de retrait *
                      </label>
                      <input
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleInputChange}
                        min={getTomorrowDate()}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="h-4 w-4 inline mr-2" />
                      Heure de retrait *
                    </label>
                    <select
                      name="time"
                      required
                      value={formData.time}
                      onChange={(e) => setFormData({...formData, time: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="">Choisir une heure</option>
                      <option value="08:00">08:00</option>
                      <option value="08:30">08:30</option>
                      <option value="09:00">09:00</option>
                      <option value="09:30">09:30</option>
                      <option value="10:00">10:00</option>
                      <option value="10:30">10:30</option>
                      <option value="11:00">11:00</option>
                      <option value="11:30">11:30</option>
                      <option value="14:00">14:00</option>
                      <option value="14:30">14:30</option>
                      <option value="15:00">15:00</option>
                      <option value="15:30">15:30</option>
                      <option value="16:00">16:00</option>
                      <option value="16:30">16:30</option>
                      <option value="17:00">17:00</option>
                      <option value="17:30">17:30</option>
                      <option value="18:00">18:00</option>
                      <option value="18:30">18:30</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes spéciales
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      value={formData.notes}
                      onChange={handleInputChange}
                      placeholder="Allergies, demandes particulières, instructions spéciales..."
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      type="button"
                      onClick={() => setShowCheckout(false)}
                      className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 py-3 rounded-lg transition-colors duration-300"
                    >
                      Retour aux produits
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-colors duration-300"
                    >
                      Confirmer la commande
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>

          {/* Cart Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24 border border-gray-100">
              <h2 className="font-playfair text-xl font-bold text-black mb-4 flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Panier ({getTotalItems()})
              </h2>
              
              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Votre panier est vide</p>
                  <p className="text-sm text-gray-400 mt-2">Ajoutez des produits pour commencer</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6 max-h-64 overflow-y-auto">
                    {cart.map((item) => (
                      <div key={item.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm">{item.name}</h4>
                          <p className="text-black font-semibold">
                            {formatPrice(item.price)} × {item.quantity}
                          </p>
                          <p className="text-sm text-gray-600">
                            = {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="bg-gray-200 hover:bg-gray-300 p-1 rounded transition-colors"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          <button
                            onClick={() => addToCart({ id: item.id, name: item.name, price: item.price })}
                            className="bg-black hover:bg-gray-800 text-white p-1 rounded transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4 mb-6">
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total:</span>
                      <span className="text-black">{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {!showCheckout ? (
                      <button
                        onClick={() => setShowCheckout(true)}
                        className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-colors duration-300"
                      >
                        Finaliser la commande
                      </button>
                    ) : (
                      <div className="text-center text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
                        Remplissez le formulaire pour finaliser votre commande
                      </div>
                    )}
                    
                    <button
                      onClick={clearCart}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 rounded-lg transition-colors duration-300 text-sm"
                    >
                      Vider le panier
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;