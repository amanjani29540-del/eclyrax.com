'use client';

import { useEffect, useState, memo } from 'react';

interface AccessInfrastructureModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function AccessInfrastructureModal({ isOpen, onClose }: AccessInfrastructureModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    companyName: '',
    companyWebsite: '',
    email: '',
    sector: '',
    projectDescription: '',
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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

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
          submissionType: 'Access Infrastructure Request',
          destination: 'access@eclyrax.com',
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    if (submitStatus !== 'success') {
      onClose();
    }
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      contactNumber: '',
      companyName: '',
      companyWebsite: '',
      email: '',
      sector: '',
      projectDescription: '',
    });
    setSubmitStatus('idle');
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{
        background: 'rgba(8, 12, 16, 0.65)',
        animation: 'fadeIn 120ms ease-out',
      }}
      onClick={handleClose}
    >
      <div
        className="relative w-full border flex flex-col"
        style={{
          background: 'var(--color-surface-1)',
          borderColor: 'var(--color-border)',
          borderRadius: '6px',
          maxWidth: '640px',
          width: '92%',
          maxHeight: '85vh',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 font-mono-label text-xs uppercase tracking-wide transition-opacity duration-120 z-20"
          style={{ color: 'var(--color-muted-foreground)', opacity: 0.5 }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.8';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '0.5';
          }}
        >
          ✕
        </button>

        {/* Form or Success Message */}
        {submitStatus === 'success' ? (
          <div className="p-12 text-center">
            <div
              className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6"
              style={{
                background: 'rgba(74, 222, 128, 0.1)',
                border: '1px solid rgba(74, 222, 128, 0.3)',
              }}
            >
              <span style={{ color: '#4ADE80', fontSize: '24px' }}>✓</span>
            </div>
            <h3
              className="text-xl font-light mb-3"
              style={{
                color: 'var(--color-foreground)',
                fontWeight: 600,
                letterSpacing: '-0.01em',
                lineHeight: '1.15',
              }}
            >
              Your request has been received.
            </h3>
            <p
              className="text-sm"
              style={{
                color: 'var(--color-muted-foreground)',
                fontWeight: 400,
                lineHeight: '1.5',
                opacity: 0.65,
              }}
            >
              Our team will respond within 48 hours.
            </p>
          </div>
        ) : (
          <>
            {/* Header - Centered - Always Visible */}
            <div className="text-center px-8" style={{ paddingTop: '32px', paddingBottom: '24px' }}>
              <h2
                className="text-xl font-light mb-3"
                style={{
                  color: 'var(--color-foreground)',
                  fontWeight: 600,
                  letterSpacing: '-0.01em',
                  lineHeight: '1.15',
                }}
              >
                Access Infrastructure
              </h2>
              <p
                className="text-xs leading-relaxed"
                style={{
                  color: 'var(--color-muted-foreground)',
                  fontWeight: 400,
                  lineHeight: '1.5',
                  opacity: 0.65,
                }}
              >
                Provide your institutional details below.
                <br />
                All submissions are reviewed manually.
              </p>
            </div>

            {/* Scrollable Form Container */}
            <div className="overflow-y-auto px-8" style={{ paddingBottom: '32px' }}>
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Row 1: Full Name, Contact Number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-2.5 border text-sm"
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
                      Contact Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      className="w-full px-4 py-2.5 border text-sm"
                      style={{
                        background: 'var(--color-background)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-foreground)',
                        borderRadius: '6px',
                        fontWeight: 400,
                      }}
                    />
                  </div>
                </div>

                {/* Row 2: Company Name, Company Website */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-2.5 border text-sm"
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
                      Company Website *
                    </label>
                    <input
                      type="url"
                      required
                      value={formData.companyWebsite}
                      onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                      className="w-full px-4 py-2.5 border text-sm"
                      style={{
                        background: 'var(--color-background)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-foreground)',
                        borderRadius: '6px',
                        fontWeight: 400,
                      }}
                    />
                  </div>
                </div>

                {/* Row 3: Official Email Address, Sector / Industry */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
                      Official Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 border text-sm"
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
                      Sector / Industry *
                    </label>
                    <select
                      required
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-4 py-2.5 border text-sm"
                      style={{
                        background: 'var(--color-background)',
                        borderColor: 'var(--color-border)',
                        color: 'var(--color-foreground)',
                        borderRadius: '6px',
                        fontWeight: 400,
                      }}
                    >
                      <option value="">Select Sector</option>
                      <option value="Financial Services">Financial Services</option>
                      <option value="Fintech Infrastructure">Fintech Infrastructure</option>
                      <option value="Banking">Banking</option>
                      <option value="Payments">Payments</option>
                      <option value="Marketplaces">Marketplaces</option>
                      <option value="E-commerce Platforms">E-commerce Platforms</option>
                      <option value="Enterprise Platforms">Enterprise Platforms</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Project Description / Infrastructure Context */}
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
                    Project Description / Infrastructure Context *
                  </label>
                  <textarea
                    required
                    value={formData.projectDescription}
                    onChange={(e) =>
                      setFormData({ ...formData, projectDescription: e.target.value })
                    }
                    rows={4}
                    className="w-full px-4 py-2.5 border text-sm"
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
                  {isSubmitting ? 'Submitting...' : 'Submit Access Request'}
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
          </>
        )}
      </div>
    </div>
  );
}

export default memo(AccessInfrastructureModal);
