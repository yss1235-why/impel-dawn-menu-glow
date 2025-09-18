import { useState, useMemo } from 'react';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import MenuCard from '../components/MenuCard';
import MenuModal from '../components/MenuModal';
import Footer from '../components/Footer';
import { restaurantConfig } from '../config/restaurant';
import { MenuItem } from '../types/menu';

// Static imports for both restaurants
import { menuItems as impelDawnItems, categories as impelDawnCategories } from '../data/restaurants/impel-dawn/menuData';
import { yoursCafeMenuItems, yoursCafeCategories } from '../data/restaurants/yours-cafe/menuData';
const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Items');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Select menu data based on config
  const menuItems = restaurantConfig.menu_data === 'yours-cafe' ? yoursCafeMenuItems : impelDawnItems;
  const categories = restaurantConfig.menu_data === 'yours-cafe' ? yoursCafeCategories : impelDawnCategories;
  const filteredItems = useMemo(() => {
  let items = menuItems;

  // Filter by search term first
  if (searchTerm) {
    items = items.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }

  // Filter by category
  if (activeCategory !== 'All Items') {
    items = items.filter(item => item.category === activeCategory);
  }

  return items;
}, [searchTerm, activeCategory]);

  // Group items by category for "All Items" view
  const groupedItems = useMemo(() => {
    if (activeCategory !== 'All Items') {
      return null;
    }

    const grouped: { [key: string]: MenuItem[] } = {};
    
    filteredItems.forEach(item => {
      if (!grouped[item.category]) {
        grouped[item.category] = [];
      }
      grouped[item.category].push(item);
    });

    return grouped;
  }, [filteredItems, activeCategory]);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  // Get emoji for category
const getCategoryEmoji = (categoryName: string) => {
  const categoryEmojis: { [key: string]: string } = {
    // Impel Dawn categories
    'Ramen': '🍜',
    'Noodles': '🍝',
    'Cup Noodles': '🍲',
    'Rolls': '🌯',
    'Dumplings': '🥟',
    'Burger': '🍔',
    'Chili': '🌶️',
    'Fried Rice': '🍚',
    'Special': '⭐',
    'Cold Brew': '🧊',
    'Shakes': '🥤',
    'Hot Beverage': '☕',
    
    // Your's Cafe categories
    'Hot Coffee': '☕',
    'Tea': '🍵',
    'Flavoured Coffee': '☕',
    'Cold Beverages': '🧊',
    'Fresh Juice': '🧃',
    'Fries & Chicken': '🍗',
    'Snacks': '🍿',
    'Pasta': '🍝',
    'Momo': '🥟',
    'Sausage': '🌭',
    'Pastry': '🥐',
    'Desserts': '🍰',
    'Cookies': '🍪',
    'Sandwich': '🥪',
    'Omelette': '🍳',
    'Pizza': '🍕',
    'Sea Food': '🦐'
  };
  return categoryEmojis[categoryName] || '🍽️';
};

  return (
   <div className="min-h-screen">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

      <main className="container mx-auto px-4 py-8">
        {filteredItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-2xl text-muted-foreground">No items found</p>
            <p className="text-sm text-muted-foreground mt-2">Try adjusting your search or filters</p>
          </div>
        ) : activeCategory === 'All Items' && groupedItems ? (
          // Grouped view for "All Items"
          <div className="space-y-12">
            {Object.entries(groupedItems)
              .filter(([_, items]) => items.length > 0)
              .map(([categoryName, items]) => (
                <section key={categoryName} className="space-y-6">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-gold gold-glow flex items-center justify-center gap-3">
                      <span className="text-4xl">{getCategoryEmoji(categoryName)}</span>
                      {categoryName.toUpperCase()}
                      <span className="text-4xl">{getCategoryEmoji(categoryName)}</span>
                    </h2>
                    <div className="mt-2 h-1 w-24 bg-gradient-gold mx-auto rounded-full"></div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                      <MenuCard
                        key={item.id}
                        item={item}
                        onClick={() => handleItemClick(item)}
                        index={index}
                      />
                    ))}
                  </div>
                </section>
              ))}
          </div>
        ) : (
          // Regular grid view for individual categories
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => (
              <MenuCard
                key={item.id}
                item={item}
                onClick={() => handleItemClick(item)}
                index={index}
              />
            ))}
          </div>
        )}
     </main>

      <Footer />

      <MenuModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;
