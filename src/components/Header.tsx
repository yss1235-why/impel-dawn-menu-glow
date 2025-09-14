import { Search } from 'lucide-react';
import { restaurantConfig } from '../config/restaurant';

const Header = ({ searchTerm, onSearchChange }: { searchTerm: string; onSearchChange: (value: string) => void }) => {
  return (
    <header className="sticky top-0 z-40">
      <div className="mx-auto px-4 py-4" style={{background: 'none', backgroundColor: 'transparent', backdropFilter: 'none'}}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4" style={{background: 'transparent'}}>
          <h1 className="text-4xl sm:text-5xl restaurant-name">
            {restaurantConfig.res_name}
          </h1>
          <div className="relative w-full sm:w-96">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search menu items..."
              className="search-input"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
