import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
  { id: 'resume', label: 'Resume' },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (!element) {
      return;
    }
    const navHeight = 64;
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - navHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    setIsMobileMenuOpen(false);
  }

  return (
    <nav className="fixed top-0 right-0 left-0 bg-black z-50">
      <div className="container mx-auto flex py-4 items-center justify-between px-4 sm:px-6">
        <h1 className="text-2xl font-bold text-white">AM</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center justify-end gap-4">
          {navItems.map((navItem) => (
            <Button
              key={navItem.id}
              className="cursor-pointer"
              onClick={() => scrollToSection(navItem.id)}
            >
              {navItem.label}
            </Button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="text-white hover:bg-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-t border-white/10 flex flex-col items-center py-4 shadow-lg shadow-black/50">
          {navItems.map((navItem) => (
            <Button
              key={navItem.id}
              variant="ghost"
              className="cursor-pointer w-full text-white py-6 text-lg hover:bg-white/10"
              onClick={() => scrollToSection(navItem.id)}
            >
              {navItem.label}
            </Button>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;
