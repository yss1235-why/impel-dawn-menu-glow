const Footer = () => {
  return (
    <footer className="bg-background/80 backdrop-blur-md border-t border-border/20 py-6 mt-12">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground mb-3">
          Design and developed by <span className="text-gold font-semibold">Innovative Archive</span>
        </p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Follow us:</span>
          
            <a href="https://www.instagram.com/innovative_archive"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light transition-colors duration-300 text-sm font-medium"
          >
            @innovative_archive
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
