import { Search } from 'lucide-react';

const Header = ({ searchTerm, onSearchChange }: { searchTerm: string; onSearchChange: (value: string) => void }) => {
  return (
 <header className="sticky top-0 z-40" style={{background: 'transparent', backgroundColor: 'transparent'}}>
  <div className="container mx-auto px-4 py-4" style={{background: 'transparent', backgroundColor: 'transparent'}}>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
         <h1 className="text-3xl sm:text-4xl font-bold text-gold gold-glow animate-pulse-glow">
            IMPEL DAWN
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
