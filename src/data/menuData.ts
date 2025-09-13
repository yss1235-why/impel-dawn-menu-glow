import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: '1',
    name: 'Dawn Wings',
    category: 'Appetizers',
    price: 299,
    description: 'Crispy chicken wings tossed in our signature dawn sauce with a perfect blend of spices',
    ingredients: ['Chicken Wings', 'Dawn Sauce', 'Secret Spices', 'Fresh Herbs'],
    prepTime: '5-7 mins',
    spiceLevel: 2,
    rating: 4.8,
    emoji: '🍗'
  },
  {
    id: '2',
    name: 'Golden Fries Supreme',
    category: 'Appetizers',
    price: 199,
    description: 'Hand-cut potato fries with our special golden seasoning and cheese sauce',
    ingredients: ['Premium Potatoes', 'Golden Seasoning', 'Cheese Sauce', 'Fresh Parsley'],
    prepTime: '3-5 mins',
    spiceLevel: 1,
    rating: 4.6,
    emoji: '🍟'
  },
  {
    id: '3',
    name: 'Spicy Nachos Deluxe',
    category: 'Appetizers',
    price: 349,
    description: 'Loaded nachos with jalapeños, cheese, salsa, and sour cream',
    ingredients: ['Corn Chips', 'Melted Cheese', 'Jalapeños', 'Salsa', 'Sour Cream'],
    prepTime: '4-6 mins',
    spiceLevel: 3,
    rating: 4.7,
    emoji: '🌮'
  },
  
  // Main Courses
  {
    id: '4',
    name: 'Signature Dawn Burger',
    category: 'Main Courses',
    price: 599,
    description: 'Premium beef patty with our secret dawn sauce, fresh lettuce, tomatoes, and brioche bun',
    ingredients: ['Premium Beef', 'Brioche Bun', 'Dawn Sauce', 'Fresh Vegetables', 'Aged Cheese'],
    prepTime: '8-10 mins',
    spiceLevel: 2,
    rating: 4.9,
    emoji: '🍔'
  },
  {
    id: '5',
    name: 'Royal Chicken Delight',
    category: 'Main Courses',
    price: 549,
    description: 'Grilled chicken breast with herbs, served with garlic rice and seasonal vegetables',
    ingredients: ['Chicken Breast', 'Garlic Rice', 'Mixed Herbs', 'Seasonal Vegetables'],
    prepTime: '12-15 mins',
    spiceLevel: 1,
    rating: 4.7,
    emoji: '🍗'
  },
  {
    id: '6',
    name: 'Impel Special Pizza',
    category: 'Main Courses',
    price: 699,
    description: 'Wood-fired pizza with four premium cheeses, fresh basil, and truffle oil',
    ingredients: ['Hand-Tossed Dough', 'Four Cheeses', 'Fresh Basil', 'Truffle Oil', 'Cherry Tomatoes'],
    prepTime: '10-12 mins',
    spiceLevel: 0,
    rating: 4.8,
    emoji: '🍕'
  },
  {
    id: '7',
    name: 'Fiery Pasta Diablo',
    category: 'Main Courses',
    price: 499,
    description: 'Penne pasta in spicy arrabbiata sauce with grilled vegetables and parmesan',
    ingredients: ['Penne Pasta', 'Arrabbiata Sauce', 'Grilled Vegetables', 'Parmesan', 'Chili Flakes'],
    prepTime: '8-10 mins',
    spiceLevel: 4,
    rating: 4.5,
    emoji: '🍝'
  },
  {
    id: '8',
    name: 'Paneer Tikka Wrap',
    category: 'Main Courses',
    price: 399,
    description: 'Marinated cottage cheese with Indian spices, wrapped in soft naan with mint chutney',
    ingredients: ['Paneer', 'Naan Bread', 'Tikka Marinade', 'Mint Chutney', 'Onions'],
    prepTime: '6-8 mins',
    spiceLevel: 3,
    rating: 4.6,
    emoji: '🌯'
  },
  
  // Sides
  {
    id: '9',
    name: 'Creamy Mac & Cheese',
    category: 'Sides',
    price: 249,
    description: 'Classic macaroni in rich, creamy three-cheese sauce topped with breadcrumbs',
    ingredients: ['Macaroni', 'Three Cheese Blend', 'Cream', 'Breadcrumbs'],
    prepTime: '5-7 mins',
    spiceLevel: 0,
    rating: 4.7,
    emoji: '🧀'
  },
  {
    id: '10',
    name: 'Garden Fresh Salad',
    category: 'Sides',
    price: 199,
    description: 'Mixed greens with cherry tomatoes, cucumber, and house vinaigrette',
    ingredients: ['Mixed Greens', 'Cherry Tomatoes', 'Cucumber', 'House Dressing'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.4,
    emoji: '🥗'
  },
  {
    id: '11',
    name: 'Garlic Bread Supreme',
    category: 'Sides',
    price: 179,
    description: 'Toasted baguette with garlic butter, herbs, and melted mozzarella',
    ingredients: ['Baguette', 'Garlic Butter', 'Mozzarella', 'Italian Herbs'],
    prepTime: '4-5 mins',
    spiceLevel: 1,
    rating: 4.6,
    emoji: '🥖'
  },
  
  // Desserts
  {
    id: '12',
    name: 'Chocolate Lava Cake',
    category: 'Desserts',
    price: 299,
    description: 'Warm chocolate cake with molten center, served with vanilla ice cream',
    ingredients: ['Dark Chocolate', 'Vanilla Ice Cream', 'Fresh Berries'],
    prepTime: '5-6 mins',
    spiceLevel: 0,
    rating: 4.9,
    emoji: '🍰'
  },
  {
    id: '13',
    name: 'Tiramisu Delight',
    category: 'Desserts',
    price: 349,
    description: 'Classic Italian dessert with coffee-soaked ladyfingers and mascarpone cream',
    ingredients: ['Ladyfingers', 'Mascarpone', 'Espresso', 'Cocoa Powder'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.8,
    emoji: '🍮'
  },
  {
    id: '14',
    name: 'Ice Cream Sundae',
    category: 'Desserts',
    price: 249,
    description: 'Three scoops of premium ice cream with chocolate sauce and nuts',
    ingredients: ['Premium Ice Cream', 'Chocolate Sauce', 'Whipped Cream', 'Mixed Nuts', 'Cherry'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.7,
    emoji: '🍨'
  },
  
  // Drinks
  {
    id: '15',
    name: 'Dawn Special Shake',
    category: 'Drinks',
    price: 199,
    description: 'Thick milkshake with vanilla, chocolate swirl, and whipped cream',
    ingredients: ['Milk', 'Vanilla Extract', 'Chocolate Syrup', 'Whipped Cream'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.6,
    emoji: '🥤'
  },
  {
    id: '16',
    name: 'Fresh Lemonade',
    category: 'Drinks',
    price: 99,
    description: 'Freshly squeezed lemons with mint and a hint of ginger',
    ingredients: ['Fresh Lemons', 'Mint Leaves', 'Ginger', 'Sugar Syrup'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.5,
    emoji: '🍋'
  },
  {
    id: '17',
    name: 'Mango Lassi',
    category: 'Drinks',
    price: 149,
    description: 'Traditional yogurt drink with fresh mango pulp and cardamom',
    ingredients: ['Yogurt', 'Mango Pulp', 'Cardamom', 'Sugar'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.7,
    emoji: '🥭'
  },
  {
    id: '18',
    name: 'Craft Cola Float',
    category: 'Drinks',
    price: 179,
    description: 'Premium cola with vanilla ice cream scoop and cherry on top',
    ingredients: ['Craft Cola', 'Vanilla Ice Cream', 'Cherry', 'Whipped Cream'],
    prepTime: '1-2 mins',
    spiceLevel: 0,
    rating: 4.5,
    emoji: '🥤'
  }
];

export const categories = [
  'All Items',
  'Appetizers',
  'Main Courses',
  'Sides',
  'Desserts',
  'Drinks'
];