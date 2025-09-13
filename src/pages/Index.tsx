import { useState, useMemo } from 'react';
import Header from '../components/Header';
import CategoryNav from '../components/CategoryNav';
import MenuCard from '../components/MenuCard';
import MenuModal from '../components/MenuModal';
import { menuItems, categories } from '../data/menuData';
import { MenuItem } from '../types/menu';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Items');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredItems = useMemo(() => {
    let items = menuItems;

    // Filter by category
    if (activeCategory !== 'All Items') {
      items = items.filter(item => item.category === activeCategory);
    }

    // Filter by search term
    if (searchTerm) {
      items = items.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.ingredients.some(ing => ing.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    return items;
  }, [searchTerm, activeCategory]);

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedItem(null), 300);
  };

  return (
    <div className="min-h-screen bg-gradient-dark">
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
        ) : (
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

      <MenuModal
        item={selectedItem}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Index;