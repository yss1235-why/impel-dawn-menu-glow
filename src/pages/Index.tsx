import { useState, useMemo } from 'react';
import { X, Star, Clock, Flame } from 'lucide-react';
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
  
  // New state for Your's Cafe layout
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);

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

  // New handlers for Your's Cafe layout
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    setIsCategoryModalOpen(true);
  };

  const handleCloseCategoryModal = () => {
    setIsCategoryModalOpen(false);
    setTimeout(() => setSelectedCategory(null), 300);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star key={i} className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-red-500 text-red-500' : 'text-gray-300'}`} />
    ));
  };

  const renderSpiceLevel = (level: number) => {
    if (level === 0) return null;
    return (
      <div className="flex items-center gap-2">
        <Flame className="w-4 h-4 text-red-500" />
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${i < level ? 'bg-red-500' : 'bg-gray-300'}`} />
          ))}
        </div>
      </div>
    );
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

 // Check if we should use Your's Cafe layout
  const isYoursCafe = restaurantConfig.menu_data === 'yours-cafe';
  
  // Filter categories for Your's Cafe search
  const filteredCategoriesForYours = useMemo(() => {
    if (!isYoursCafe || !searchTerm) return categories.filter(cat => cat !== 'All Items');
    return categories.filter(cat => 
      cat !== 'All Items' && (
        cat.toLowerCase().includes(searchTerm.toLowerCase()) ||
        menuItems.some(item => 
          item.category === cat && 
          (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
           item.description.toLowerCase().includes(searchTerm.toLowerCase()))
        )
      )
    );
  }, [searchTerm, categories, menuItems, isYoursCafe]);

  const categoryItems = useMemo(() => {
    if (!selectedCategory) return [];
    return menuItems.filter(item => item.category === selectedCategory);
  }, [selectedCategory, menuItems]);

  if (isYoursCafe) {
    return (
      <div className="min-h-screen relative yours-cafe-layout">
        <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
        
        <main className="container mx-auto px-4 py-8 pt-20">
          {/* Greeting Section */}
          <div className="text-center mb-12 greeting-section">
            <h2 className="text-4xl md:text-6xl font-bold text-red-600 mb-4 greeting-text">
              What are you craving for today,
            </h2>
            <p className="text-2xl md:text-3xl text-red-500 salutation">
              Your Highness?
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredCategoriesForYours.map((category, index) => (
              <div
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="category-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="category-emoji">{getCategoryEmoji(category)}</div>
                <h3 className="category-name">{category}</h3>
                <p className="category-count">
                  {menuItems.filter(item => item.category === category).length} items
                </p>
              </div>
            ))}
          </div>
        </main>

        <Footer />

        {/* Category Items Modal */}
        {isCategoryModalOpen && selectedCategory && (
          <div className="modal-overlay" onClick={handleCloseCategoryModal}>
            <div className="category-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h2 className="modal-title">
                  {getCategoryEmoji(selectedCategory)} {selectedCategory}
                </h2>
                <button onClick={handleCloseCategoryModal} className="close-btn">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="modal-content">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {categoryItems.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleItemClick(item)}
                      className="menu-item-card"
                    >
                      <div className="item-header">
                        <h3 className="item-name">{item.name}</h3>
                        <span className="item-price">₹{item.price}</span>
                      </div>
                      <p className="item-description">{item.description}</p>
                      <div className="item-footer">
                        <div className="item-rating">
                          {renderStars(item.rating)}
                          <span className="rating-text">({item.rating})</span>
                        </div>
                        {renderSpiceLevel(item.spiceLevel)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        <MenuModal
          item={selectedItem}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </div>
    );
  }

  return (
   <div className="min-h-screen relative">
      <Header searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      
      <CategoryNav
        categories={categories}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
      />

 <main className="container mx-auto px-4 py-8 pt-26 sm:pt-32">
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
