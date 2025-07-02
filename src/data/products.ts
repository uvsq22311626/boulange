export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'pains' | 'viennoiseries' | 'patisseries' | 'sandwichs' | 'boissons';
  image: string;
  isGlutenFree?: boolean;
  isBio?: boolean;
  isHomemade?: boolean;
}

export const products: Product[] = [
  // Pains
  {
    id: 1,
    name: 'Baguette Tradition',
    description: 'La baguette française authentique, croustillante à l\'extérieur et moelleuse à l\'intérieur',
    price: 1.20,
    category: 'pains',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    isHomemade: true,
  },
  {
    id: 2,
    name: 'Pain de Campagne',
    description: 'Pain rustique au levain, parfait pour accompagner tous vos repas',
    price: 2.80,
    category: 'pains',
    image: 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg',
    isBio: true,
    isHomemade: true,
  },
  {
    id: 3,
    name: 'Pain aux Céréales',
    description: 'Mélange de graines et céréales pour un pain riche en saveurs et en nutriments',
    price: 3.20,
    category: 'pains',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    isBio: true,
    isHomemade: true,
  },
  {
    id: 4,
    name: 'Pain Sans Gluten',
    description: 'Délicieux pain sans gluten, moelleux et savoureux',
    price: 4.50,
    category: 'pains',
    image: 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg',
    isGlutenFree: true,
    isHomemade: true,
  },

  // Viennoiseries
  {
    id: 5,
    name: 'Croissant au Beurre',
    description: 'Croissant feuilleté au beurre français, doré et croustillant',
    price: 1.30,
    category: 'viennoiseries',
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
    isHomemade: true,
  },
  {
    id: 6,
    name: 'Pain au Chocolat',
    description: 'Viennoiserie feuilletée avec deux barres de chocolat noir',
    price: 1.40,
    category: 'viennoiseries',
    image: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg',
    isHomemade: true,
  },
  {
    id: 7,
    name: 'Chausson aux Pommes',
    description: 'Pâte feuilletée garnie de compote de pommes maison',
    price: 2.20,
    category: 'viennoiseries',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    isHomemade: true,
  },
  {
    id: 8,
    name: 'Palmier',
    description: 'Pâte feuilletée sucrée en forme de palmier, croustillante et dorée',
    price: 1.80,
    category: 'viennoiseries',
    image: 'https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg',
    isHomemade: true,
  },

  // Pâtisseries
  {
    id: 9,
    name: 'Éclair au Chocolat',
    description: 'Pâte à choux garnie de crème pâtissière et glaçage chocolat',
    price: 3.50,
    category: 'patisseries',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    isHomemade: true,
  },
  {
    id: 10,
    name: 'Tarte aux Fraises',
    description: 'Pâte sablée, crème pâtissière vanille et fraises fraîches de saison',
    price: 18.50,
    category: 'patisseries',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    isHomemade: true,
  },
  {
    id: 11,
    name: 'Millefeuille',
    description: 'Feuilletage croustillant, crème pâtissière et glaçage fondant',
    price: 4.20,
    category: 'patisseries',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg',
    isHomemade: true,
  },
  {
    id: 12,
    name: 'Opéra',
    description: 'Gâteau au chocolat, crème au beurre café et glaçage chocolat',
    price: 5.80,
    category: 'patisseries',
    image: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg',
    isHomemade: true,
  },

  // Sandwichs
  {
    id: 13,
    name: 'Sandwich Jambon Beurre',
    description: 'Pain baguette, jambon blanc de qualité et beurre doux',
    price: 4.50,
    category: 'sandwichs',
    image: 'https://images.pexels.com/photos/1775043/pexels-photo-1775043.jpeg',
    isHomemade: true,
  },
  {
    id: 14,
    name: 'Sandwich Poulet Crudités',
    description: 'Pain de campagne, blanc de poulet, salade, tomates, concombre',
    price: 5.80,
    category: 'sandwichs',
    image: 'https://images.pexels.com/photos/1586947/pexels-photo-1586947.jpeg',
    isHomemade: true,
  },

  // Boissons
  {
    id: 15,
    name: 'Café Expresso',
    description: 'Café italien intense et aromatique',
    price: 1.50,
    category: 'boissons',
    image: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg',
  },
  {
    id: 16,
    name: 'Jus d\'Orange Frais',
    description: 'Jus d\'oranges pressées du jour',
    price: 3.20,
    category: 'boissons',
    image: 'https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg',
  },
];

export const categories = [
  { id: 'tous', name: 'Tous nos produits' },
  { id: 'pains', name: 'Pains' },
  { id: 'viennoiseries', name: 'Viennoiseries' },
  { id: 'patisseries', name: 'Pâtisseries' },
  { id: 'sandwichs', name: 'Sandwichs' },
  { id: 'boissons', name: 'Boissons' },
];