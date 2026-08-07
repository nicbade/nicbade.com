import portfolioPic from '@/imports/portfolioPic.JPG';

const CONSULTING_URL = 'https://truenorth-accessibility.com/';

export default function Home() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Hero / Intro */}
      <section
        style={{ paddingTop: '4rem', paddingBottom: '4.5rem', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <div className="hero-grid">
            {/* Text */}
            <div>
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
                Lead Accessibility Consultant
              </p>
              <h1
                id="hero-heading"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 500,
                  lineHeight: 1.15,
                  maxWidth: '22ch',
              whiteSpace: 'nowrap',
                  marginBottom: '1.25rem',
                  color: 'var(--color-foreground)',
                }}
              >
                Hi, I'm Nic Bade.
              </h1>
              <p
                style={{
                  fontSize: '1.125rem',
                  lineHeight: 1.75,
                  color: 'var(--color-muted)',
                  maxWidth: '52ch',
                  marginBottom: '2rem',
                }}
              >
                I get paid to make sure the internet works for everyone — the screen reader user,
                the person with shaky hands, and anyone whose kiosk experience shouldn't be a
                nightmare.
              </p>
              <a
                href={CONSULTING_URL}
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  padding: '0.65rem 1.5rem',
                  background: 'var(--color-accent)',
                  color: '#fff',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  fontWeight: 600,
                  letterSpacing: '0.01em',
                  borderRadius: '3px',
                  textDecoration: 'none',
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent-hover)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent)';
                }}
              >
                View consulting services
                <span className="sr-only"> (opens an external website)</span>
              </a>
            </div>

            {/* Photo */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'flex-start',
              }}
            >
              <div
                style={{
                  width: '260px',
                  height: '260px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  flexShrink: 0,
                  border: '3px solid var(--color-border)',
                  background: 'var(--color-surface)',
                }}
              >
                <img
                  src={portfolioPic}
                  alt="Nic Bade smiling with his two kids"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                  }}
                />
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* About / Bio */}
      <section
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <h2
            id="about-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
              fontWeight: 500,
              marginBottom: '1.5rem',
            }}
          >
            About me
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
            <p style={{ lineHeight: 1.8, color: 'var(--color-foreground)' }}>
              I'm your Lead Accessibility Consultant — and yes, that means I get paid to make sure
              the internet works for everyone, including the person using a screen reader, the person
              with shaky hands, and the person who just wants your kiosk to not be a nightmare.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--color-foreground)' }}>
              Over 1,000 site audits in, I've basically become a Swiss Army knife of digital
              accessibility. AR/VR? Done it. AI chat features? Yep. Kiosks, websites, apps — if it
              has an interface, I've probably poked at it and told someone it needs alt text.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--color-foreground)' }}>
              Off the clock, I'm a dad chasing kids around, a hockey coach yelling "good hustle!" a
              lot, and someone who's perpetually learning something new. Loyal, connector, loving —
              that's what people say about me, and I'll take it.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--color-foreground)' }}>
              I got into this work because I want to make the world a little better, one accessible
              button at a time.
            </p>
            <p style={{ lineHeight: 1.8, color: 'var(--color-foreground)' }}>
              Want to work together, follow along, or just learn something new about accessibility?{' '}
              <a
                href={CONSULTING_URL}
                rel="noopener noreferrer"
                style={{
                  color: 'var(--color-accent)',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  textDecorationThickness: '1px',
                  textUnderlineOffset: '3px',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent-hover)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'var(--color-accent)';
                }}
              >
                Let's connect.
                <span className="sr-only"> (opens an external website)</span>
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section
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
              gap: '0 3rem',
            }}
          >
            {[
              {
                title: 'WCAG Auditing',
                desc: 'Comprehensive conformance audits against WCAG 2.1 and 2.2 at levels A and AA. Delivered as actionable reports with prioritized findings and remediation guidance.',
              },
              {
                title: 'Assistive Technology Testing',
                desc: 'Manual testing with screen readers (NVDA, JAWS, VoiceOver, TalkBack), voice control, switch access, zoom and magnification tools, keyboard-only navigation, and more.',
              },
              {
                title: 'AR/VR & Emerging Interfaces',
                desc: 'Accessibility evaluation of augmented and virtual reality experiences, AI chat features, kiosks, and other non-traditional interfaces.',
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
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}
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
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                credential: 'Innovation Strategy Certificate',
                org: 'Cornell University',
                year: '2026',
              },
              {
                credential: 'Leading a Culture of Service Excellence Certificate',
                org: 'Cornell University · Leadership',
                year: '2025',
              },
              {
                credential: 'Full Stack Software Engineering Certification',
                org: 'Prime Digital Academy',
                year: '2017',
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
                  <p style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.2rem', maxWidth: 'none' }}>
                    {item.credential}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', maxWidth: 'none' }}>
                    {item.org}
                  </p>
                </div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>
                  {item.year}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <h2
            id="education-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
              fontWeight: 500,
              marginBottom: '2rem',
            }}
          >
            Education
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                institution: 'Prime Digital Academy',
                field: 'Full Stack Software Engineering, Computer Software Engineering',
                year: '2017',
              },
              {
                institution: 'Augsburg University',
                field: 'Generals, Psychology',
                year: '2002–2006',
              },
            ].map((item) => (
              <div
                key={item.institution}
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
                  <p style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '0.2rem', maxWidth: 'none' }}>
                    {item.institution}
                  </p>
                  <p style={{ fontSize: '0.875rem', color: 'var(--color-muted)', maxWidth: 'none' }}>
                    {item.field}
                  </p>
                </div>
                <span style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', fontVariantNumeric: 'tabular-nums', whiteSpace: 'nowrap' }}>
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
