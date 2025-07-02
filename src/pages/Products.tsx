import React, { useState } from 'react';
import { products, categories, Product } from '../data/products';
import { Leaf, Award, ShoppingCart, Plus, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [addedProducts, setAddedProducts] = useState<Set<number>>(new Set());
  const { addToCart } = useCart();

  const filteredProducts = selectedCategory === 'tous' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const formatPrice = (price: number) => {
    return `${price.toFixed(2).replace('.', ',')} €`;
  };

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    setAddedProducts(prev => new Set(prev).add(product.id));
    
    // Remove the "added" state after 2 seconds
    setTimeout(() => {
      setAddedProducts(prev => {
        const newSet = new Set(prev);
        newSet.delete(product.id);
        return newSet;
      });
    }, 2000);
  };

  return (
    <div className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="font-playfair text-4xl lg:text-5xl font-bold text-black mb-4">
            Nos Produits Artisanaux
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez toute notre gamme de produits frais, préparés chaque jour avec passion et savoir-faire.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-black text-white shadow-lg'
                  : 'bg-white text-black border border-black hover:bg-black hover:text-white'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
              isAdded={addedProducts.has(product.id)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Aucun produit trouvé dans cette catégorie.</p>
          </div>
        )}
      </div>
    </div>
  );
};

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  isAdded: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart, isAdded }) => {
  const formatPrice = (price: number) => {
    return `${price.toFixed(2).replace('.', ',')} €`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-1">
          {product.isBio && (
            <div className="bg-green-500 p-1 rounded-full">
              <Leaf className="h-3 w-3 text-white" />
            </div>
          )}
          {product.isGlutenFree && (
            <div className="bg-blue-500 p-1 rounded-full">
              <Award className="h-3 w-3 text-white" />
            </div>
          )}
          {product.isHomemade && (
            <div className="bg-black p-1 rounded-full">
              <Award className="h-3 w-3 text-white" />
            </div>
          )}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-playfair text-xl font-semibold text-black mb-2">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-lg text-black">
            {formatPrice(product.price)}
          </span>
          <button 
            onClick={() => onAddToCart(product)}
            className={`px-4 py-2 rounded-lg transition-all duration-300 flex items-center space-x-2 ${
              isAdded 
                ? 'bg-green-500 text-white' 
                : 'bg-black hover:bg-gray-800 text-white'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="h-4 w-4" />
                <span>Ajouté !</span>
              </>
            ) : (
              <>
                <Plus className="h-4 w-4" />
                <span>Ajouter</span>
              </>
            )}
          </button>
        </div>

        {/* Product badges */}
        <div className="flex flex-wrap gap-2">
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
      </div>
    </div>
  );
};

export default Products;