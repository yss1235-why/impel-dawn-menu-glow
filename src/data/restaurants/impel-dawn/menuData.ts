import { MenuItem } from '../types/menu';

export const menuItems: MenuItem[] = [
  // Ramen
  {
    id: '1',
    name: 'Ramen',
    category: 'Ramen',
    price: 150,
    description: 'Traditional Japanese ramen with rich broth, noodles, and fresh toppings',
    ingredients: ['Ramen Noodles', 'Rich Broth', 'Green Onions', 'Seaweed', 'Egg'],
    prepTime: '8-10 mins',
    spiceLevel: 1,
    rating: 4.6,
    emoji: '🍜',
    image: '/images/menu/ramen/ramen.png'
  },
  {
    id: '2',
    name: 'Cheese Ramen',
    category: 'Ramen',
    price: 170,
    description: 'Creamy ramen with melted cheese, creating a fusion of flavors',
    ingredients: ['Ramen Noodles', 'Cheese', 'Rich Broth', 'Green Onions', 'Egg'],
    prepTime: '8-10 mins',
    spiceLevel: 1,
    rating: 4.7,
    emoji: '🍜'
  },

  // Noodles
  {
    id: '3',
    name: 'Veg Noodles',
    category: 'Noodles',
    price: 90,
    description: 'Stir-fried noodles with fresh mixed vegetables and aromatic spices',
    ingredients: ['Noodles', 'Mixed Vegetables', 'Soy Sauce', 'Garlic', 'Ginger'],
    prepTime: '6-8 mins',
    spiceLevel: 2,
    rating: 4.4,
    emoji: '🍝'
  },
  {
    id: '4',
    name: 'Egg Noodles',
    category: 'Noodles',
    price: 100,
    description: 'Classic noodles stir-fried with scrambled eggs and seasonings',
    ingredients: ['Noodles', 'Eggs', 'Onions', 'Soy Sauce', 'Spring Onions'],
    prepTime: '6-8 mins',
    spiceLevel: 2,
    rating: 4.5,
    emoji: '🍝'
  },
  {
    id: '5',
    name: 'C/B Noodles',
    category: 'Noodles',
    price: 110,
    description: 'Chicken and beef noodles with a perfect blend of flavors',
    ingredients: ['Noodles', 'Chicken', 'Beef', 'Vegetables', 'Special Sauce'],
    prepTime: '8-10 mins',
    spiceLevel: 2,
    rating: 4.6,
    emoji: '🍝'
  },
  {
    id: '6',
    name: 'Pork Noodles',
    category: 'Noodles',
    price: 130,
    description: 'Tender pork pieces with noodles in savory sauce',
    ingredients: ['Noodles', 'Pork', 'Vegetables', 'Oyster Sauce', 'Garlic'],
    prepTime: '8-10 mins',
    spiceLevel: 2,
    rating: 4.5,
    emoji: '🍝'
  },
  {
    id: '7',
    name: 'Mix Noodles',
    category: 'Noodles',
    price: 140,
    description: 'Ultimate noodles with chicken, beef, pork and vegetables',
    ingredients: ['Noodles', 'Chicken', 'Beef', 'Pork', 'Mixed Vegetables', 'Special Sauce'],
    prepTime: '10-12 mins',
    spiceLevel: 2,
    rating: 4.7,
    emoji: '🍝'
  },

  // Cup Noodles
  {
    id: '8',
    name: 'Plain Cup Noodles',
    category: 'Cup Noodles',
    price: 50,
    description: 'Simple and quick cup noodles with basic seasoning',
    ingredients: ['Instant Noodles', 'Seasoning Powder', 'Dried Vegetables'],
    prepTime: '3-4 mins',
    spiceLevel: 1,
    rating: 4.0,
    emoji: '🍲'
  },
  {
    id: '9',
    name: 'Sunny Side Up Cup Noodles',
    category: 'Cup Noodles',
    price: 70,
    description: 'Cup noodles topped with a perfectly cooked sunny side up egg',
    ingredients: ['Instant Noodles', 'Sunny Side Up Egg', 'Seasoning', 'Green Onions'],
    prepTime: '4-5 mins',
    spiceLevel: 1,
    rating: 4.3,
    emoji: '🍲'
  },
  {
    id: '10',
    name: 'Chicken Cup Noodles',
    category: 'Cup Noodles',
    price: 80,
    description: 'Cup noodles with tender chicken pieces and rich flavor',
    ingredients: ['Instant Noodles', 'Chicken', 'Chicken Broth', 'Vegetables'],
    prepTime: '4-5 mins',
    spiceLevel: 1,
    rating: 4.4,
    emoji: '🍲'
  },
  {
    id: '11',
    name: 'Beef Cup Noodles',
    category: 'Cup Noodles',
    price: 90,
    description: 'Cup noodles with savory beef and aromatic spices',
    ingredients: ['Instant Noodles', 'Beef', 'Beef Broth', 'Onions', 'Spices'],
    prepTime: '4-5 mins',
    spiceLevel: 2,
    rating: 4.4,
    emoji: '🍲'
  },
  {
    id: '12',
    name: 'Pork Cup Noodles',
    category: 'Cup Noodles',
    price: 100,
    description: 'Cup noodles with tender pork and rich, flavorful broth',
    ingredients: ['Instant Noodles', 'Pork', 'Pork Broth', 'Vegetables', 'Seasonings'],
    prepTime: '4-5 mins',
    spiceLevel: 2,
    rating: 4.5,
    emoji: '🍲'
  },

  // Rolls
  {
    id: '13',
    name: 'Veg Roll',
    category: 'Rolls',
    price: 60,
    description: 'Fresh vegetables wrapped in soft flatbread with tangy sauces',
    ingredients: ['Flatbread', 'Mixed Vegetables', 'Lettuce', 'Cucumber', 'Chutneys'],
    prepTime: '4-6 mins',
    spiceLevel: 2,
    rating: 4.2,
    emoji: '🌯'
  },
  {
    id: '14',
    name: 'Chicken Roll',
    category: 'Rolls',
    price: 80,
    description: 'Grilled chicken pieces wrapped with fresh vegetables and sauces',
    ingredients: ['Flatbread', 'Grilled Chicken', 'Onions', 'Lettuce', 'Special Sauce'],
    prepTime: '5-7 mins',
    spiceLevel: 2,
    rating: 4.5,
    emoji: '🌯'
  },
  {
    id: '15',
    name: 'Beef Roll',
    category: 'Rolls',
    price: 90,
    description: 'Tender beef strips with vegetables wrapped in soft bread',
    ingredients: ['Flatbread', 'Beef Strips', 'Onions', 'Bell Peppers', 'Sauce'],
    prepTime: '5-7 mins',
    spiceLevel: 2,
    rating: 4.4,
    emoji: '🌯'
  },
  {
    id: '16',
    name: 'Pork Roll',
    category: 'Rolls',
    price: 100,
    description: 'Succulent pork with fresh vegetables in a delicious wrap',
    ingredients: ['Flatbread', 'Pork', 'Cabbage', 'Carrots', 'Special Sauce'],
    prepTime: '5-7 mins',
    spiceLevel: 2,
    rating: 4.5,
    emoji: '🌯'
  },

  // Dumplings
  {
    id: '17',
    name: 'Steam Dumplings',
    category: 'Dumplings',
    price: 100,
    description: 'Soft steamed dumplings filled with seasoned meat and vegetables',
    ingredients: ['Dumpling Wrapper', 'Pork/Chicken Filling', 'Cabbage', 'Ginger', 'Seasonings'],
    prepTime: '8-10 mins',
    spiceLevel: 1,
    rating: 4.6,
    emoji: '🥟'
  },
  {
    id: '18',
    name: 'Fried Dumplings',
    category: 'Dumplings',
    price: 110,
    description: 'Crispy pan-fried dumplings with golden exterior and juicy filling',
    ingredients: ['Dumpling Wrapper', 'Pork/Chicken Filling', 'Cabbage', 'Ginger', 'Oil'],
    prepTime: '8-10 mins',
    spiceLevel: 1,
    rating: 4.7,
    emoji: '🥟'
  },

  // Burger
  {
    id: '19',
    name: 'Egg Burger (Regular)',
    category: 'Burger',
    price: 80,
    description: 'Simple burger with fried egg, lettuce and special sauce',
    ingredients: ['Bun', 'Fried Egg', 'Lettuce', 'Tomato', 'Mayo'],
    prepTime: '5-7 mins',
    spiceLevel: 1,
    rating: 4.3,
    emoji: '🍔'
  },
  {
    id: '20',
    name: 'Egg Burger (Large)',
    category: 'Burger',
    price: 100,
    description: 'Bigger version with double egg and extra toppings',
    ingredients: ['Large Bun', 'Double Fried Egg', 'Lettuce', 'Tomato', 'Onions', 'Mayo'],
    prepTime: '6-8 mins',
    spiceLevel: 1,
    rating: 4.4,
    emoji: '🍔'
  },
  {
    id: '21',
    name: 'Chicken Burger (Regular)',
    category: 'Burger',
    price: 140,
    description: 'Juicy chicken patty with fresh vegetables and sauce',
    ingredients: ['Bun', 'Chicken Patty', 'Lettuce', 'Tomato', 'Pickles', 'Special Sauce'],
    prepTime: '7-9 mins',
    spiceLevel: 2,
    rating: 4.6,
    emoji: '🍔'
  },
  {
    id: '22',
    name: 'Chicken Burger (Large)',
    category: 'Burger',
    price: 160,
    description: 'Large chicken burger with extra patty and premium toppings',
    ingredients: ['Large Bun', 'Double Chicken Patty', 'Lettuce', 'Tomato', 'Cheese', 'Special Sauce'],
    prepTime: '8-10 mins',
    spiceLevel: 2,
    rating: 4.7,
    emoji: '🍔'
  },
  {
    id: '23',
    name: 'Ham Burger (Regular)',
    category: 'Burger',
    price: 150,
    description: 'Classic hamburger with beef patty and traditional toppings',
    ingredients: ['Bun', 'Beef Patty', 'Lettuce', 'Tomato', 'Onions', 'Ketchup'],
    prepTime: '7-9 mins',
    spiceLevel: 1,
    rating: 4.5,
    emoji: '🍔'
  },
  {
    id: '24',
    name: 'Ham Burger (Large)',
    category: 'Burger',
    price: 170,
    description: 'Large hamburger with bigger patty and extra cheese',
    ingredients: ['Large Bun', 'Large Beef Patty', 'Cheese', 'Lettuce', 'Tomato', 'Onions', 'Sauce'],
    prepTime: '8-10 mins',
    spiceLevel: 1,
    rating: 4.6,
    emoji: '🍔'
  },
  {
    id: '25',
    name: 'French Fries',
    category: 'Burger',
    price: 100,
    description: 'Crispy golden french fries with a sprinkle of salt',
    ingredients: ['Potatoes', 'Salt', 'Oil'],
    prepTime: '4-6 mins',
    spiceLevel: 0,
    rating: 4.4,
    emoji: '🍟'
  },
  {
    id: '26',
    name: 'Peri-Peri Fries',
    category: 'Burger',
    price: 110,
    description: 'Spicy peri-peri seasoned french fries with a kick',
    ingredients: ['Potatoes', 'Peri-Peri Seasoning', 'Salt', 'Oil'],
    prepTime: '4-6 mins',
    spiceLevel: 3,
    rating: 4.5,
    emoji: '🍟'
  },

  // Chili
  {
    id: '27',
    name: 'Chilli Chicken',
    category: 'Chili',
    price: 150,
    description: 'Spicy chicken pieces in tangy chili sauce with bell peppers',
    ingredients: ['Chicken', 'Bell Peppers', 'Onions', 'Chili Sauce', 'Soy Sauce'],
    prepTime: '10-12 mins',
    spiceLevel: 4,
    rating: 4.7,
    emoji: '🌶️'
  },
  {
    id: '28',
    name: 'Chilli Beef',
    category: 'Chili',
    price: 170,
    description: 'Tender beef strips in fiery chili sauce with vegetables',
    ingredients: ['Beef', 'Bell Peppers', 'Onions', 'Hot Chili Sauce', 'Garlic'],
    prepTime: '12-15 mins',
    spiceLevel: 4,
    rating: 4.6,
    emoji: '🌶️'
  },
  {
    id: '29',
    name: 'Chilli Pork',
    category: 'Chili',
    price: 180,
    description: 'Succulent pork in spicy chili sauce with aromatic spices',
    ingredients: ['Pork', 'Bell Peppers', 'Onions', 'Chili Sauce', 'Special Spices'],
    prepTime: '12-15 mins',
    spiceLevel: 4,
    rating: 4.8,
    emoji: '🌶️'
  },

  // Fried Rice
  {
    id: '30',
    name: 'Veg Fried Rice',
    category: 'Fried Rice',
    price: 100,
    description: 'Aromatic fried rice with mixed vegetables and soy sauce',
    ingredients: ['Rice', 'Mixed Vegetables', 'Soy Sauce', 'Garlic', 'Spring Onions'],
    prepTime: '8-10 mins',
    spiceLevel: 1,
    rating: 4.4,
    emoji: '🍚'
  },
  {
    id: '31',
    name: 'Chicken Fried Rice',
    category: 'Fried Rice',
    price: 130,
    description: 'Classic fried rice with tender chicken pieces and vegetables',
    ingredients: ['Rice', 'Chicken', 'Vegetables', 'Soy Sauce', 'Eggs'],
    prepTime: '10-12 mins',
    spiceLevel: 1,
    rating: 4.6,
    emoji: '🍚'
  },
  {
    id: '32',
    name: 'Beef Fried Rice',
    category: 'Fried Rice',
    price: 130,
    description: 'Savory fried rice with beef strips and aromatic spices',
    ingredients: ['Rice', 'Beef', 'Vegetables', 'Soy Sauce', 'Onions'],
    prepTime: '10-12 mins',
    spiceLevel: 2,
    rating: 4.5,
    emoji: '🍚'
  },
  {
    id: '33',
    name: 'Pork Fried Rice',
    category: 'Fried Rice',
    price: 140,
    description: 'Delicious fried rice with pork and traditional seasonings',
    ingredients: ['Rice', 'Pork', 'Vegetables', 'Soy Sauce', 'Garlic'],
    prepTime: '10-12 mins',
    spiceLevel: 2,
    rating: 4.6,
    emoji: '🍚'
  },
  {
    id: '34',
    name: 'Mix Fried Rice',
    category: 'Fried Rice',
    price: 150,
    description: 'Ultimate fried rice with chicken, beef, pork and vegetables',
    ingredients: ['Rice', 'Chicken', 'Beef', 'Pork', 'Mixed Vegetables', 'Soy Sauce'],
    prepTime: '12-15 mins',
    spiceLevel: 2,
    rating: 4.8,
    emoji: '🍚'
  },

  // Special
  {
    id: '35',
    name: 'Mimi Blending (Hobi Rom Kashai)',
    category: 'Special',
    price: 100,
    description: 'Traditional special dish with unique blend of local flavors',
    ingredients: ['Local Vegetables', 'Special Spices', 'Traditional Seasonings'],
    prepTime: '8-10 mins',
    spiceLevel: 2,
    rating: 4.5,
    emoji: '⭐'
  },
  {
    id: '36',
    name: 'Mimi Blending (Chicken)',
    category: 'Special',
    price: 150,
    description: 'Special chicken preparation with traditional local spices',
    ingredients: ['Chicken', 'Local Spices', 'Traditional Seasonings', 'Special Sauce'],
    prepTime: '10-12 mins',
    spiceLevel: 2,
    rating: 4.6,
    emoji: '⭐'
  },
  {
    id: '37',
    name: 'Mimi Blending (Beef)',
    category: 'Special',
    price: 150,
    description: 'Special beef dish with authentic local flavors and spices',
    ingredients: ['Beef', 'Local Spices', 'Traditional Seasonings', 'Special Sauce'],
    prepTime: '12-15 mins',
    spiceLevel: 2,
    rating: 4.6,
    emoji: '⭐'
  },
  {
    id: '38',
    name: 'Mimi Blending (Pork)',
    category: 'Special',
    price: 150,
    description: 'Traditional pork preparation with unique local seasoning blend',
    ingredients: ['Pork', 'Local Spices', 'Traditional Seasonings', 'Special Sauce'],
    prepTime: '12-15 mins',
    spiceLevel: 2,
    rating: 4.7,
    emoji: '⭐'
  },
  {
    id: '39',
    name: 'Chicken Nuggets',
    category: 'Special',
    price: 150,
    description: 'Crispy golden chicken nuggets with dipping sauces',
    ingredients: ['Chicken Breast', 'Breadcrumbs', 'Seasonings', 'Dipping Sauce'],
    prepTime: '6-8 mins',
    spiceLevel: 1,
    rating: 4.5,
    emoji: '🍗'
  },
  {
    id: '40',
    name: 'Spicy Crunchy Fried Chicken',
    category: 'Special',
    price: 250,
    description: 'Premium spicy fried chicken with extra crunch and bold flavors',
    ingredients: ['Whole Chicken', 'Spicy Coating', 'Special Herbs', 'Hot Spices'],
    prepTime: '15-20 mins',
    spiceLevel: 4,
    rating: 4.8,
    emoji: '🍗'
  },

  // Cold Brew
  {
    id: '41',
    name: 'Coke',
    category: 'Cold Brew',
    price: 50,
    description: 'Classic refreshing cola drink, perfectly chilled',
    ingredients: ['Carbonated Water', 'Cola Syrup', 'Ice'],
    prepTime: '1-2 mins',
    spiceLevel: 0,
    rating: 4.2,
    emoji: '🥤'
  },
  {
    id: '42',
    name: 'Lemon Iced Tea',
    category: 'Cold Brew',
    price: 90,
    description: 'Refreshing iced tea with fresh lemon and mint',
    ingredients: ['Black Tea', 'Fresh Lemon', 'Mint Leaves', 'Ice', 'Sugar'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.5,
    emoji: '🧊'
  },
  {
    id: '43',
    name: 'Mojito',
    category: 'Cold Brew',
    price: 90,
    description: 'Virgin mojito with fresh mint, lime and sparkling water',
    ingredients: ['Fresh Mint', 'Lime', 'Sparkling Water', 'Sugar', 'Ice'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.6,
    emoji: '🍹'
  },
  {
    id: '44',
    name: 'Wild Olive',
    category: 'Cold Brew',
    price: 60,
    description: 'Unique olive-flavored refreshing cold beverage',
    ingredients: ['Olive Extract', 'Sparkling Water', 'Lime', 'Ice'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.1,
    emoji: '🫒'
  },
  {
    id: '45',
    name: 'Impel Down',
    category: 'Cold Brew',
    price: 90,
    description: 'Signature house special cold beverage with secret ingredients',
    ingredients: ['Secret Blend', 'Fruit Extracts', 'Sparkling Water', 'Ice'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.7,
    emoji: '🧊'
  },

  // Shakes
  {
    id: '46',
    name: 'Mango Shake',
    category: 'Shakes',
    price: 80,
    description: 'Creamy mango milkshake with fresh mango pulp',
    ingredients: ['Fresh Mango', 'Milk', 'Ice Cream', 'Sugar'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.6,
    emoji: '🥭'
  },
  {
    id: '47',
    name: 'Strawberry Shake',
    category: 'Shakes',
    price: 80,
    description: 'Rich strawberry milkshake with real strawberry pieces',
    ingredients: ['Strawberries', 'Milk', 'Ice Cream', 'Sugar'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.5,
    emoji: '🍓'
  },
  {
    id: '48',
    name: 'Black Current Shake',
    category: 'Shakes',
    price: 80,
    description: 'Tangy black currant milkshake with a rich purple color',
    ingredients: ['Black Currant', 'Milk', 'Ice Cream', 'Sugar'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.4,
    emoji: '🖤'
  },
  {
    id: '49',
    name: 'Butterscotch Shake',
    category: 'Shakes',
    price: 80,
    description: 'Smooth butterscotch milkshake with caramel flavor',
    ingredients: ['Butterscotch Syrup', 'Milk', 'Ice Cream', 'Caramel'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.5,
    emoji: '🍯'
  },
  {
    id: '50',
    name: 'Chocolate Shake',
    category: 'Shakes',
    price: 80,
    description: 'Rich chocolate milkshake with premium cocoa',
    ingredients: ['Chocolate Syrup', 'Milk', 'Chocolate Ice Cream', 'Cocoa'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.7,
    emoji: '🍫'
  },
  {
    id: '51',
    name: 'Blueberry Shake',
    category: 'Shakes',
    price: 120,
    description: 'Premium blueberry milkshake with fresh blueberries',
    ingredients: ['Fresh Blueberries', 'Milk', 'Vanilla Ice Cream', 'Honey'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.8,
    emoji: '🫐'
  },

  // Hot Beverage
  {
    id: '52',
    name: 'Green Tea (Buckwheat)',
    category: 'Hot Beverage',
    price: 20,
    description: 'Healthy buckwheat green tea with natural antioxidants',
    ingredients: ['Green Tea', 'Buckwheat', 'Hot Water'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.2,
    emoji: '🍵'
  },
  {
    id: '53',
    name: 'Green Tea (Peach)',
    category: 'Hot Beverage',
    price: 20,
    description: 'Refreshing peach-flavored green tea',
    ingredients: ['Green Tea', 'Peach Extract', 'Hot Water'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.3,
    emoji: '🍵'
  },
  {
    id: '54',
    name: 'Lemon Tea',
    category: 'Hot Beverage',
    price: 30,
    description: 'Classic tea with fresh lemon juice and honey',
    ingredients: ['Black Tea', 'Fresh Lemon', 'Honey', 'Hot Water'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.4,
    emoji: '🍋'
  },
  {
    id: '55',
    name: 'Black Tea',
    category: 'Hot Beverage',
    price: 20,
    description: 'Traditional strong black tea, perfectly brewed',
    ingredients: ['Black Tea Leaves', 'Hot Water'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.1,
    emoji: '☕'
  },
  {
    id: '56',
    name: 'Milk Tea (Chai)',
    category: 'Hot Beverage',
    price: 30,
    description: 'Traditional Indian chai with milk and spices',
    ingredients: ['Black Tea', 'Milk', 'Sugar', 'Cardamom', 'Ginger'],
    prepTime: '3-4 mins',
    spiceLevel: 1,
    rating: 4.6,
    emoji: '🫖'
  },
  {
    id: '57',
    name: 'Black Coffee',
    category: 'Hot Beverage',
    price: 30,
    description: 'Strong black coffee for coffee purists',
    ingredients: ['Coffee Beans', 'Hot Water'],
    prepTime: '2-3 mins',
    spiceLevel: 0,
    rating: 4.3,
    emoji: '☕'
  },
  {
    id: '58',
    name: 'White Coffee',
    category: 'Hot Beverage',
    price: 50,
    description: 'Smooth coffee with milk and sugar',
    ingredients: ['Coffee Beans', 'Milk', 'Sugar', 'Hot Water'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.5,
    emoji: '☕'
  },
  {
    id: '59',
    name: 'Coffee Strong',
    category: 'Hot Beverage',
    price: 50,
    description: 'Extra strong coffee for an energy boost',
    ingredients: ['Premium Coffee Beans', 'Hot Water'],
    prepTime: '3-4 mins',
    spiceLevel: 0,
    rating: 4.4,
    emoji: '☕'
  },
  {
    id: '60',
    name: 'Honey-Ginger-Lemon',
    category: 'Hot Beverage',
    price: 60,
    description: 'Healthy herbal drink with honey, ginger and lemon',
    ingredients: ['Fresh Ginger', 'Honey', 'Fresh Lemon', 'Hot Water'],
    prepTime: '3-4 mins',
    spiceLevel: 1,
    rating: 4.6,
    emoji: '🍯'
  }
];

export const categories = [
  'All Items',
  'Ramen',
  'Noodles',
  'Cup Noodles',
  'Rolls',
  'Dumplings',
  'Burger',
  'Chili',
  'Fried Rice',
  'Special',
  'Cold Brew',
  'Shakes',
  'Hot Beverage'
];

