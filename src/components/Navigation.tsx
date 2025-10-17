import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeDropdownOpen, setIsResumeDropdownOpen] = useState(false);
  const [isMobileResumeDropdownOpen, setIsMobileResumeDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-card py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-bold"
            style={{
              background: 'linear-gradient(45deg, #667eea 0%, #764ba2 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              filter: 'drop-shadow(0 4px 8px rgba(102, 126, 234, 0.3))'
            }}
          >
            AWIN
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
            ))}
            <div className="relative">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-background transition-all"
                onClick={() => setIsResumeDropdownOpen(!isResumeDropdownOpen)}
              >
                Resume <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              {isResumeDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 bg-background border border-foreground/20 rounded-lg shadow-lg z-50 min-w-[120px]">
                  <a
                    href="/AVINASH-PAWAR-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setIsResumeDropdownOpen(false)}
                  >
                    View
                  </a>
                  <a
                    href="/AVINASH-PAWAR-Resume.pdf"
                    download="AVINASH-PAWAR-Resume.pdf"
                    className="block px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-foreground/10"
                    onClick={() => setIsResumeDropdownOpen(false)}
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 flex flex-col gap-4 bg-background/95 backdrop-blur-md p-4 rounded-lg border border-foreground/10"
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-foreground/80 hover:text-primary transition-colors py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="relative">
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-background w-full justify-between"
                onClick={() => setIsMobileResumeDropdownOpen(!isMobileResumeDropdownOpen)}
              >
                Resume <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              {isMobileResumeDropdownOpen && (
                <div className="mt-2 bg-background/95 border border-foreground/20 rounded-lg">
                  <a
                    href="/AVINASH-PAWAR-Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors"
                    onClick={() => setIsMobileResumeDropdownOpen(false)}
                  >
                    View
                  </a>
                  <a
                    href="/AVINASH-PAWAR-Resume.pdf"
                    download="AVINASH-PAWAR-Resume.pdf"
                    className="block px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-colors border-t border-foreground/10"
                    onClick={() => setIsMobileResumeDropdownOpen(false)}
                  >
                    Download
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navigation;
