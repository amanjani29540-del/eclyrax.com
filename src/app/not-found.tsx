export default function NotFound() {
  return (
    <html>
      <body>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
          <div style={{ textAlign: 'center', maxWidth: '28rem' }}>
            <h1 style={{ fontSize: '6rem', fontWeight: 'bold', opacity: 0.2, marginBottom: '1.5rem' }}>404</h1>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '500', marginBottom: '0.5rem' }}>Page Not Found</h2>
            <p style={{ opacity: 0.7, marginBottom: '2rem' }}>
              The page you're looking for doesn't exist.
            </p>
            <a
              href="/"
              style={{
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '500',
                backgroundColor: '#3b82f6',
                color: 'white',
                textDecoration: 'none'
              }}
            >
              Back to Home
            </a>
          </div>
        </div>
      </body>
    </html>
  );
}