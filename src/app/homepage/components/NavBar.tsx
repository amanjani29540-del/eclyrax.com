'use client';

import { useState, useEffect } from 'react';
import AccessInfrastructureModal from './AccessInfrastructureModal';

const navLinks = [
  { id: 'nav-arch', label: 'Architecture', href: '#architecture' },
  { id: 'nav-metrics', label: 'Metrics', href: '#metrics' },
  { id: 'nav-deploy', label: 'Deploy', href: '#usecases' },
  { id: 'nav-manifesto', label: 'Manifesto', href: '/manifesto' },
  { id: 'nav-governance', label: 'Governance', href: '/governance' },
  { id: 'nav-security', label: 'Security', href: '/security' },
];

interface AccessFormModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AccessFormModal({ isOpen, onClose }: AccessFormModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/architecture-review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          submissionType: 'Access Request',
          destination: 'access@eclyrax.com',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setFormData({ name: '', email: '', company: '', message: '' });
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(8, 12, 16, 0.85)' }}
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg border"
        style={{
          background: 'var(--color-surface-1)',
          borderColor: 'var(--color-border)',
          borderRadius: '6px',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between p-6 border-b"
          style={{ borderColor: 'var(--color-border)' }}
        >
          <h2
            className="text-2xl font-light"
            style={{
              color: 'var(--color-foreground)',
              fontWeight: 600,
              letterSpacing: '-0.01em',
              lineHeight: '1.15',
            }}
          >
            Get Access
          </h2>
          <button
            onClick={onClose}
            className="font-mono-label text-sm uppercase tracking-wide transition-opacity duration-120"
            style={{ color: 'var(--color-muted-foreground)', opacity: 0.6 }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.6';
            }}
          >
            Close
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label
              className="block text-xs uppercase tracking-wide mb-2"
              style={{
                color: 'var(--color-muted-foreground)',
                fontWeight: 500,
                letterSpacing: '0.03em',
                opacity: 0.75,
              }}
            >
              Name
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border text-sm"
              style={{
                background: 'var(--color-background)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-foreground)',
                borderRadius: '6px',
                fontWeight: 400,
              }}
            />
          </div>

          <div>
            <label
              className="block text-xs uppercase tracking-wide mb-2"
              style={{
                color: 'var(--color-muted-foreground)',
                fontWeight: 500,
                letterSpacing: '0.03em',
                opacity: 0.75,
              }}
            >
              Email
            </label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 border text-sm"
              style={{
                background: 'var(--color-background)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-foreground)',
                borderRadius: '6px',
                fontWeight: 400,
              }}
            />
          </div>

          <div>
            <label
              className="block text-xs uppercase tracking-wide mb-2"
              style={{
                color: 'var(--color-muted-foreground)',
                fontWeight: 500,
                letterSpacing: '0.03em',
                opacity: 0.75,
              }}
            >
              Company
            </label>
            <input
              type="text"
              required
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-4 py-2 border text-sm"
              style={{
                background: 'var(--color-background)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-foreground)',
                borderRadius: '6px',
                fontWeight: 400,
              }}
            />
          </div>

          <div>
            <label
              className="block text-xs uppercase tracking-wide mb-2"
              style={{
                color: 'var(--color-muted-foreground)',
                fontWeight: 500,
                letterSpacing: '0.03em',
                opacity: 0.75,
              }}
            >
              Message
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 border text-sm"
              style={{
                background: 'var(--color-background)',
                borderColor: 'var(--color-border)',
                color: 'var(--color-foreground)',
                borderRadius: '6px',
                fontWeight: 400,
              }}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full"
            style={{ padding: '14px 24px', fontWeight: 600, letterSpacing: '0.04em' }}
          >
            {isSubmitting
              ? 'Submitting...'
              : submitStatus === 'success'
                ? 'Submitted!'
                : 'Submit Request'}
          </button>

          {submitStatus === 'error' && (
            <p
              className="text-sm font-mono-label text-center"
              style={{ color: 'var(--color-destructive)' }}
            >
              Failed to submit. Please try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [accessModalOpen, setAccessModalOpen] = useState(false);

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
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }

    closeMenu();
  };

  const handleGetAccessClick = () => {
    closeMenu();
    setAccessModalOpen(true);
  };

  return (
    <>
      <AccessInfrastructureModal
        isOpen={accessModalOpen}
        onClose={() => setAccessModalOpen(false)}
      />

      {/* Mobile Menu Overlay - Only visible on mobile when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[45] md:hidden"
          style={{
            background: 'rgba(0, 0, 0, 0.25)',
            animation: 'fadeIn 150ms ease-out',
          }}
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Panel - Right Side 50% */}
      <div
        className={`fixed top-0 right-0 h-screen z-[50] md:hidden flex flex-col transition-transform ease-out mt-0 p-0`}
        style={{
          width: '100%',
          background: 'rgba(10, 20, 35, 0.92)',
          borderLeft: 'none',
          transitionDuration: '200ms',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        }}
      >
        {/* Close Button */}
        <button
          onClick={closeMenu}
          className="absolute top-6 right-6 text-lg transition-opacity duration-200"
          style={{ color: 'var(--color-foreground)', opacity: 0.7 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
          aria-label="Close menu"
        >
          ✕
        </button>

        {/* Navigation Items */}
        <nav className="flex flex-col gap-7 mt-20 px-8">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[15px] uppercase tracking-wider transition-colors duration-200 text-center m-0 p-0"
              style={{
                color: 'var(--color-muted-foreground)',
                fontWeight: 500,
                letterSpacing: '0.06em',
                fontFamily: 'Inter, sans-serif',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--color-foreground)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--color-muted-foreground)';
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Header */}
      <header
        className="sticky top-0 z-50 border-b transition-all duration-300"
        style={{
          borderColor: 'var(--color-border)',
          background: scrolled ? 'rgba(8,12,16,0.92)' : 'rgba(8,12,16,0.7)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          height: '64px',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <span
              className="text-xl"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 500,
                letterSpacing: '0.005em',
                color: 'var(--color-foreground)',
              }}
            >
              eclyra<span style={{ fontWeight: 600, color: '#4A90E2' }}>X</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="nav-link font-mono-label text-[11px] uppercase tracking-ultra transition-colors duration-200"
                style={{ color: 'var(--color-muted-foreground)' }}
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
            ))}
          </nav>

          {/* Desktop CTA + Mobile Hamburger */}
          <div className="flex items-center gap-4">
            {/* Mobile Hamburger - Only visible on mobile */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Open menu"
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={`ham-${i}`}
                  className="block w-5 h-px transition-all duration-300"
                  style={{ background: 'var(--color-foreground)' }}
                />
              ))}
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
