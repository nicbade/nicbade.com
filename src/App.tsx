import { useEffect, type MouseEvent } from 'react';
import Home from './pages/Home';

const CONSULTING_URL = 'https://truenorth-accessibility.com/';
const homeHref = import.meta.env.BASE_URL;

function ExternalLinkIcon() {
  return (
    <svg
      aria-hidden="true"
      focusable="false"
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginLeft: '0.3em', verticalAlign: '-0.05em', flexShrink: 0 }}
    >
      <path
        d="M4.5 1.5H2.25A.75.75 0 0 0 1.5 2.25v7.5c0 .414.336.75.75.75h7.5a.75.75 0 0 0 .75-.75V7.5M7.5 1.5h3v3M6 6l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function App() {
  useEffect(() => {
    document.title = 'Home | nicbade.com';
  }, []);

  const navigateHome = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    e.preventDefault();
    if (window.location.pathname !== homeHref.replace(/\/$/, '') && window.location.pathname !== homeHref) {
      window.history.pushState(null, '', homeHref);
    }
    requestAnimationFrame(() => {
      const main = document.getElementById('main-content');
      if (main) main.focus();
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
  };

  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      {/* Site header */}
      <header
        style={{
          borderBottom: '1px solid var(--color-border)',
          position: 'sticky',
          top: 0,
          background: 'var(--color-background)',
          zIndex: 100,
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '1.125rem',
            paddingBottom: '1.125rem',
          }}
        >
          {/* Wordmark */}
          <a
            href={homeHref}
            onClick={navigateHome}
            aria-label="Go to home page"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.0625rem',
              fontWeight: 500,
              color: 'var(--color-foreground)',
              letterSpacing: '-0.01em',
              textDecoration: 'none',
            }}
          >
            Nic Bade
          </a>

          {/* Primary nav */}
          <nav aria-label="Primary">
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                gap: '0.25rem',
                alignItems: 'center',
              }}
            >
              <li>
                <a
                  href={homeHref}
                  onClick={navigateHome}
                  aria-current="page"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    display: 'inline-block',
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href={CONSULTING_URL}
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    fontWeight: 400,
                    color: 'var(--color-foreground)',
                    padding: '0.35rem 0.75rem',
                    borderRadius: '3px',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                    display: 'inline-flex',
                    alignItems: 'center',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-foreground)';
                  }}
                >
                  Consulting
                  <ExternalLinkIcon />
                  <span className="sr-only"> (opens an external website)</span>
                </a>
              </li>
              <li aria-hidden="false">
                <span
                  aria-label="Blog — coming soon"
                  title="Coming soon"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.9375rem',
                    color: 'var(--color-border)',
                    padding: '0.35rem 0.75rem',
                    display: 'inline-block',
                    cursor: 'default',
                    userSelect: 'none',
                  }}
                >
                  Blog
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <Home />

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--color-border)',
          paddingTop: '2.5rem',
          paddingBottom: '2.5rem',
          marginTop: '0',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              color: 'var(--color-muted)',
              margin: 0,
              maxWidth: 'none',
            }}
          >
            © {new Date().getFullYear()} Nic Bade. All rights reserved.
          </p>
          <nav aria-label="Social and contact">
            <ul
              style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
              }}
            >
              <li>
                <a
                  href="mailto:nicbade@me.com"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-muted)',
                    textDecoration: 'none',
                    fontWeight: 400,
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted)';
                  }}
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/nicbade/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-muted)',
                    textDecoration: 'none',
                    transition: 'color 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-muted)';
                  }}
                >
                  LinkedIn
                  <span className="sr-only"> (opens in new tab)</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </>
  );
}
