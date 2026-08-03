import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Consulting from './pages/Consulting';

type Page = 'home' | 'consulting';

const pageTitles: Record<Page, string> = {
  home: 'Home | nicbade.com',
  consulting: 'Consulting | nicbade.com',
};

export default function App() {
  const [page, setPage] = useState<Page>('home');

  useEffect(() => {
    document.title = pageTitles[page];
  }, [page]);

  const navigate = (target: Page) => {
    setPage(target);
    // Move focus to main content after navigation
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
          <button
            onClick={() => navigate('home')}
            aria-label="Go to home page"
            style={{
              background: 'none',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              fontFamily: 'var(--font-serif)',
              fontSize: '1.0625rem',
              fontWeight: 500,
              color: 'var(--color-foreground)',
              letterSpacing: '-0.01em',
            }}
          >
            Nic Bade
          </button>

          {/* Primary nav */}
          <nav aria-label="Primary navigation">
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
              {(
                [
                  { label: 'Home', target: 'home' },
                  { label: 'Consulting', target: 'consulting' },
                ] as { label: string; target: Page }[]
              ).map(({ label, target }) => {
                const isCurrent = page === target;
                return (
                  <li key={target}>
                    <button
                      onClick={() => navigate(target)}
                      aria-current={isCurrent ? 'page' : undefined}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontFamily: 'var(--font-sans)',
                        fontSize: '0.9375rem',
                        fontWeight: isCurrent ? 600 : 400,
                        color: isCurrent ? 'var(--color-accent)' : 'var(--color-foreground)',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '3px',
                        textDecoration: 'none',
                        transition: 'color 0.15s',
                        position: 'relative',
                      }}
                      onMouseEnter={(e) => {
                        if (!isCurrent)
                          (e.currentTarget as HTMLButtonElement).style.color =
                            'var(--color-accent)';
                      }}
                      onMouseLeave={(e) => {
                        if (!isCurrent)
                          (e.currentTarget as HTMLButtonElement).style.color =
                            'var(--color-foreground)';
                      }}
                    >
                      {label}
                    </button>
                  </li>
                );
              })}
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
      {page === 'home' ? (
        <Home navigate={navigate} />
      ) : (
        <Consulting />
      )}

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
