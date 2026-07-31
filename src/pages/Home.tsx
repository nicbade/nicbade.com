type NavigateFn = (page: 'home' | 'consulting') => void;

export default function Home({ navigate }: { navigate: NavigateFn }) {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero / Intro */}
      <section
        aria-labelledby="hero-heading"
        style={{ paddingTop: '4rem', paddingBottom: '4.5rem', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <p
            style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--color-accent)',
              marginBottom: '1.25rem',
            }}
          >
            Digital Accessibility Professional
          </p>
          <h1
            id="hero-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              maxWidth: '18ch',
              marginBottom: '1.5rem',
              color: 'var(--color-foreground)',
            }}
          >
            I help teams build the web for everyone.
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: 'var(--color-muted)',
              maxWidth: '60ch',
              marginBottom: '2rem',
            }}
          >
            I'm a digital accessibility specialist with over a decade of experience auditing
            interfaces, advising development teams, and delivering training that sticks. My work
            spans WCAG conformance, inclusive design strategy, and helping organizations build
            accessibility into their culture — not just their code.
          </p>
          <button
            onClick={() => navigate('consulting')}
            style={{
              display: 'inline-block',
              padding: '0.65rem 1.5rem',
              background: 'var(--color-accent)',
              color: '#fff',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              fontWeight: 600,
              letterSpacing: '0.01em',
              textDecoration: 'none',
              border: 'none',
              borderRadius: '3px',
              cursor: 'pointer',
              transition: 'background 0.15s',
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent-hover)';
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.background = 'var(--color-accent)';
            }}
          >
            View consulting services
          </button>
        </div>
      </section>

      {/* About / Bio */}
      <section
        aria-labelledby="about-heading"
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
            <div>
              <h2
                id="about-heading"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
                  fontWeight: 500,
                  marginBottom: '1.25rem',
                }}
              >
                About me
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <p style={{ lineHeight: 1.8, color: 'var(--color-foreground)' }}>
                  I've spent my career making the case that accessibility isn't a checkbox — it's a
                  discipline. I work with product teams, designers, engineers, and executives to
                  close the gap between intention and implementation.
                </p>
                <p style={{ lineHeight: 1.8, color: 'var(--color-foreground)' }}>
                  Before going independent, I led accessibility programs at organizations spanning
                  financial services, healthcare, and higher education. I've conducted hundreds of
                  WCAG audits, provided expert witness testimony, and developed training curricula
                  that have reached thousands of practitioners.
                </p>
                <p style={{ lineHeight: 1.8, color: 'var(--color-foreground)' }}>
                  I believe the best accessibility work happens when it's embedded in process, not
                  bolted on at the end. My goal is always to leave teams more capable than I found
                  them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section
        aria-labelledby="expertise-heading"
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <h2
            id="expertise-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
              fontWeight: 500,
              marginBottom: '2.5rem',
            }}
          >
            Areas of expertise
          </h2>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '0',
            }}
          >
            {[
              {
                title: 'WCAG Auditing',
                desc: 'Comprehensive conformance audits against WCAG 2.1 and 2.2 at levels A, AA, and AAA. Delivered as actionable reports with prioritized findings and remediation guidance.',
              },
              {
                title: 'Assistive Technology Testing',
                desc: 'Manual testing with screen readers (NVDA, JAWS, VoiceOver, TalkBack), voice control, switch access, and keyboard-only navigation across browsers and platforms.',
              },
              {
                title: 'Design & Development Advisory',
                desc: 'Embedded consultation during the design and build phases — reviewing wireframes, component libraries, and code before issues become expensive to fix.',
              },
              {
                title: 'Training & Workshops',
                desc: 'Custom training programs for design teams, engineering teams, QA, and product managers. From half-day introductions to multi-week curricula.',
              },
              {
                title: 'Policy & Strategy',
                desc: 'Helping organizations build internal accessibility programs, maturity models, procurement policies, and legal risk frameworks.',
              },
              {
                title: 'Document Accessibility',
                desc: 'Remediation and authoring guidance for PDF, Word, PowerPoint, and Excel documents to meet PDF/UA and WCAG standards.',
              },
            ].map((item) => (
              <article
                key={item.title}
                style={{
                  padding: '1.75rem 0',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                <h3
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem',
                    color: 'var(--color-foreground)',
                    letterSpacing: '0.01em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: 1.7,
                    color: 'var(--color-muted)',
                    maxWidth: 'none',
                  }}
                >
                  {item.desc}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section
        aria-labelledby="credentials-heading"
        style={{ paddingTop: '4rem', paddingBottom: '4rem' }}
      >
        <div className="container">
          <h2
            id="credentials-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
              fontWeight: 500,
              marginBottom: '2rem',
            }}
          >
            Credentials &amp; certifications
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {[
              {
                credential: 'WAS — Web Accessibility Specialist',
                org: 'International Association of Accessibility Professionals (IAAP)',
                year: '2021',
              },
              {
                credential: 'CPACC — Certified Professional in Accessibility Core Competencies',
                org: 'International Association of Accessibility Professionals (IAAP)',
                year: '2019',
              },
              {
                credential: 'DHS Trusted Tester Certification',
                org: 'U.S. Department of Homeland Security',
                year: '2020',
              },
              {
                credential: 'Section 508 Trusted Tester',
                org: 'Federal CIO Council',
                year: '2020',
              },
            ].map((item) => (
              <div
                key={item.credential}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'baseline',
                  gap: '1.5rem',
                  padding: '1.25rem 0',
                  borderTop: '1px solid var(--color-border)',
                  flexWrap: 'wrap',
                }}
              >
                <div>
                  <p
                    style={{
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      marginBottom: '0.2rem',
                      maxWidth: 'none',
                    }}
                  >
                    {item.credential}
                  </p>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-muted)',
                      maxWidth: 'none',
                    }}
                  >
                    {item.org}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: '0.8125rem',
                    color: 'var(--color-muted)',
                    fontVariantNumeric: 'tabular-nums',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
