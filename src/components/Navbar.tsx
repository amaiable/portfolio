import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
  { id: 'resume', label: 'Resume' },
];

function Navbar() {
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
  }

  return (
    <nav className="fixed top-0 right-0 left-0 bg-black/80 z-50">
      <div className="container mx-auto flex py-4 items-center justify-between px-4 sm:px-6 flex-wrap gap-4">
        <h1 className="text-2xl font-bold text-white">AM</h1>
        <div className="flex flex-wrap items-center justify-center sm:justify-end gap-2 sm:gap-4">
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
      </div>
    </nav>
  );
}

export default Navbar;
