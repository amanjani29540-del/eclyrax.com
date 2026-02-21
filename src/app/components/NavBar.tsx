'use client';

import { useState, useEffect, memo } from 'react';

const navLinks = [
  { id: 'nav-arch', label: 'Architecture', href: '#architecture' },
  { id: 'nav-metrics', label: 'Metrics', href: '#metrics' },
  { id: 'nav-deploy', label: 'Deploy', href: '#usecases' },
  { id: 'nav-manifesto', label: 'MANIFESTO', href: '/manifesto' },
  { id: 'nav-governance', label: 'GOVERNANCE', href: '/governance' },
  { id: 'nav-security', label: 'SECURITY', href: '/security' },
];

interface NavBarProps {
  onOpenModal: () => void;
}

function NavBar({ onOpenModal }: NavBarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Disable body scroll when mobile menu is open
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen((v) => !v);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // Skip smooth scroll for external routes
    if (href.startsWith('/')) {
      closeMenu();
      return;
    }

    e.preventDefault();

    // Check if we're on the homepage
    const isHomepage = window.location.pathname === '/' || window.location.pathname === '/homepage';

    if (isHomepage) {
      // Close menu first, then scroll after a brief delay to ensure menu animation doesn't interfere
      closeMenu();
      setTimeout(() => {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      // Navigate to homepage with hash, browser will scroll automatically
      closeMenu();
      window.location.href = '/' + href;
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'nav-scrolled' : ''}`}
        style={{
          background: scrolled ? 'rgba(8,12,16,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          borderBottom: scrolled ? '1px solid var(--color-border)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="text-xl font-sans tracking-tight transition-opacity duration-200 hover:opacity-80 relative z-10"
            style={{ color: 'var(--color-foreground)' }}
          >
            <span className="font-semibold">eclyra</span>
            <span className="font-bold" style={{ color: '#5A9FE5' }}>
              X
            </span>
          </a>

          {/* Desktop Nav - Centered */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-mono-label text-xs uppercase tracking-wide"
                  style={{
                    color: 'var(--color-muted-foreground)',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-foreground)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      'var(--color-muted-foreground)';
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
            aria-label="Toggle menu"
          >
            <span
              className="block w-full h-0.5 transition-all duration-300"
              style={{
                background: 'var(--color-foreground)',
                transform: menuOpen ? 'rotate(45deg) translateY(6px)' : 'none',
              }}
            />
            <span
              className="block w-full h-0.5 transition-all duration-300"
              style={{
                background: 'var(--color-foreground)',
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-full h-0.5 transition-all duration-300"
              style={{
                background: 'var(--color-foreground)',
                transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : 'none',
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 md:hidden"
          style={{ background: 'rgba(8,12,16,0.98)', paddingTop: '80px' }}
        >
          <div className="flex flex-col items-center gap-6 p-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-mono-label text-sm uppercase tracking-wide"
                style={{
                  color: 'var(--color-muted-foreground)',
                  fontWeight: 500,
                  letterSpacing: '0.06em',
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default memo(NavBar);
