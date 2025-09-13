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
      className="glass-card card-3d p-4 cursor-pointer group animate-slide-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {item.emoji}
      </div>
      <h3 className="text-lg font-semibold text-gold mb-2 group-hover:text-gold-light transition-colors">
        {item.name}
      </h3>
      <p className="text-2xl font-bold text-primary mb-2">₹{item.price}</p>
      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
        {item.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          {renderStars(item.rating)}
          <span className="text-xs text-muted-foreground ml-1">({item.rating})</span>
        </div>
        {renderSpiceLevel(item.spiceLevel)}
      </div>
    </div>
  );
};

export default MenuCard;