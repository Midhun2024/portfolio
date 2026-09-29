import { navItems, sectionIds } from '@/config/routes';
import { useNavigationController } from '@/controllers/useNavigationController';
import { cn } from '@/utils/cn';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Navbar() {
  const { activeSection, isMobileMenuOpen, isScrolled, toggleMobileMenu, closeMobileMenu } = useNavigationController(
    Object.values(sectionIds)
  );

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-soft py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <a 
          href="#" 
          className="text-xl font-bold tracking-tight text-foreground"
          onClick={closeMobileMenu}
        >
          {siteConfig.name.split(' - ')[0]}<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary relative py-1',
                activeSection === item.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full layout-indicator" />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md shadow-soft border-t border-border p-6 flex flex-col gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                'text-lg font-medium py-2 transition-colors',
                activeSection === item.href.substring(1) ? 'text-primary' : 'text-muted-foreground'
              )}
              onClick={closeMobileMenu}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
