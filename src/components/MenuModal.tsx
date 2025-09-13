import { X, Clock, Flame } from 'lucide-react';
import { MenuItem } from '../types/menu';

interface MenuModalProps {
  item: MenuItem | null;
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal = ({ item, isOpen, onClose }: MenuModalProps) => {
  if (!isOpen || !item) return null;

  const renderSpiceLevel = (level: number) => {
    return (
      <div className="flex items-center gap-2">
        <Flame className="w-4 h-4 text-destructive" />
        <div className="flex gap-1">
          {Array.from({ length: 5 }, (_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full ${
                i < level 
                  ? level <= 2 ? 'bg-spice-1' 
                  : level <= 3 ? 'bg-spice-3'
                  : 'bg-spice-5'
                  : 'bg-muted'
              }`}
            />
          ))}
        </div>
        <span className="text-sm text-muted-foreground">
          {level === 0 ? 'Not Spicy' : level === 1 ? 'Mild' : level === 2 ? 'Medium' : level === 3 ? 'Hot' : level === 4 ? 'Very Hot' : 'Extremely Hot'}
        </span>
      </div>
    );
  };

  return (
    <div className="modal-overlay animate-fade-in" onClick={onClose}>
      <div 
        className="glass-card max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/50 hover:bg-background/70 transition-colors z-10"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          
          {/* Image Section */}
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-xl">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Fallback if image doesn't load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                // Show emoji as fallback
                const emojiDiv = target.nextElementSibling as HTMLElement;
                if (emojiDiv) emojiDiv.style.display = 'flex';
              }}
            />
            
            {/* Emoji Fallback */}
            <div className="absolute inset-0 bg-gradient-dark/80 items-center justify-center text-8xl hidden">
              {item.emoji}
            </div>

            {/* Price Badge */}
            <div className="absolute top-6 right-6 bg-gold text-background px-4 py-2 rounded-full text-lg font-bold shadow-lg">
              ₹{item.price}
            </div>
          </div>
          
          <div className="p-6">
            <h2 className="text-3xl font-bold text-gold mb-2 gold-glow">
              {item.name}
            </h2>
            
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">{item.description}</p>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gold mb-2">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ingredient, index) => (
                    <span key={index} className="ingredient-tag">
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Preparation time: {item.prepTime}</span>
              </div>
              
              {renderSpiceLevel(item.spiceLevel)}
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Rating:</span>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < Math.floor(item.rating) ? 'text-gold' : 'text-muted'}>
                      ★
                    </span>
                  ))}
                  <span className="text-sm text-muted-foreground ml-1">({item.rating})</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuModal;
