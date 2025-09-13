import { Star } from 'lucide-react';
import { MenuItem } from '../types/menu';

interface MenuCardProps {
  item: MenuItem;
  onClick: () => void;
  index: number;
}

const MenuCard = ({ item, onClick, index }: MenuCardProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-3 h-3 ${i < Math.floor(rating) ? 'star fill-current' : 'star-empty'}`}
      />
    ));
  };

  const renderSpiceLevel = (level: number) => {
    return (
      <div className="flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className={`spice-dot ${
              i < level 
                ? level <= 2 ? 'bg-spice-1' 
                : level <= 3 ? 'bg-spice-3'
                : 'bg-spice-5'
                : 'bg-muted'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <div
      onClick={onClick}
      className="glass-card card-3d cursor-pointer group animate-slide-up overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden rounded-t-xl">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            // Fallback if image doesn't load
            const target = e.target as HTMLImageElement;
            target.style.display = 'none';
            // Show emoji as fallback
            const emojiDiv = target.nextElementSibling as HTMLElement;
            if (emojiDiv) emojiDiv.style.display = 'flex';
          }}
        />
        
        {/* Emoji Fallback (hidden by default, shown if image fails) */}
        <div className="absolute inset-0 bg-gradient-dark/80 items-center justify-center text-6xl hidden">
          {item.emoji}
        </div>
        
        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-gold text-background px-3 py-1 rounded-full text-sm font-bold shadow-lg">
          ₹{item.price}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-4 space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold text-gold group-hover:text-gold-light transition-colors line-clamp-2 flex-1">
            {item.name}
          </h3>
          <span className="text-2xl ml-2 group-hover:scale-110 transition-transform duration-300">
            {item.emoji}
          </span>
        </div>
        
        <p className="text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
          {item.description}
        </p>
        
        {/* Rating and Spice Level */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1">
            {renderStars(item.rating)}
            <span className="text-xs text-muted-foreground ml-1">({item.rating})</span>
          </div>
          {item.spiceLevel > 0 && renderSpiceLevel(item.spiceLevel)}
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
