import { Button } from '@/components/ui/button';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
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
    <>
      <nav className="fixed top-0 right-0 left-0 z-50 bg-black/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-6">
          <h1 className="text-2xl font-bold text-white">AM</h1>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
