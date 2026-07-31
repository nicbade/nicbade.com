export default function Consulting() {
  return (
    <main id="main-content" tabIndex={-1}>
      {/* Page header */}
      <section
        aria-labelledby="consulting-heading"
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
            Independent Consulting
          </p>
          <h1
            id="consulting-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2rem, 5vw, 3rem)',
              fontWeight: 500,
              lineHeight: 1.15,
              maxWidth: '22ch',
              marginBottom: '1.5rem',
            }}
          >
            Practical accessibility expertise, when and where you need it.
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              lineHeight: 1.75,
              color: 'var(--color-muted)',
              maxWidth: '58ch',
            }}
          >
            I work with teams of all sizes — from early-stage startups to enterprise organizations —
            to identify accessibility barriers, reduce legal risk, and build lasting internal
            capability. Every engagement is tailored to your context, your codebase, and your goals.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        aria-labelledby="services-heading"
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <h2
            id="services-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
              fontWeight: 500,
              marginBottom: '2.5rem',
            }}
          >
            Services
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {[
              {
                num: '01',
                title: 'Accessibility Audits',
                desc: 'Manual and automated auditing of websites, web applications, and mobile apps. I test with real assistive technologies, not just automated scanners, and deliver prioritized findings reports with severity ratings, WCAG criteria mapping, and specific remediation steps your engineers can act on immediately.',
              },
              {
                num: '02',
                title: 'Design System Review',
                desc: 'Early-stage review of component libraries and design systems before they ship at scale. Color contrast analysis, focus management patterns, keyboard interaction models, and semantic HTML recommendations — the kind of upstream work that prevents downstream remediation debt.',
              },
              {
                num: '03',
                title: 'VPAT / ACR Preparation',
                desc: 'Accurate, defensible Voluntary Product Accessibility Templates (VPATs) and Accessibility Conformance Reports (ACRs) based on real testing. I can also review VPATs prepared by your team or vendors.',
              },
              {
                num: '04',
                title: 'Training & Capability Building',
                desc: 'Custom workshops and training for designers, engineers, QA testers, and content authors. Topics range from WCAG fundamentals to advanced ARIA patterns and assistive technology testing techniques. Available in-person or remote.',
              },
              {
                num: '05',
                title: 'Embedded Advisory',
                desc: 'Ongoing advisory arrangements — joining sprint reviews, Slack channels, or design critiques on a retainer basis. Best for teams that want accessibility expertise in the room, not just in a quarterly report.',
              },
              {
                num: '06',
                title: 'Legal & Litigation Support',
                desc: "Expert analysis and testimony in ADA Title III, Section 508, and AODA proceedings. I've provided technical analysis for counsel in demand letter responses, mediation, and litigation contexts.",
              },
            ].map((item) => (
              <article
                key={item.num}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2.5rem 1fr',
                  gap: '1.5rem',
                  padding: '2rem 0',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    paddingTop: '0.2rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {item.num}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      marginBottom: '0.6rem',
                      color: 'var(--color-foreground)',
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.75,
                      color: 'var(--color-muted)',
                      maxWidth: 'none',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Who I work with */}
      <section
        aria-labelledby="clients-heading"
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <h2
            id="clients-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
              fontWeight: 500,
              marginBottom: '1.25rem',
            }}
          >
            Who I work with
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--color-muted)',
              marginBottom: '2.5rem',
              maxWidth: '60ch',
            }}
          >
            I've worked across industries and organization sizes. A few common contexts:
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '0',
            }}
          >
            {[
              'Financial services & fintech',
              'Healthcare & health tech',
              'Federal & state government',
              'Higher education',
              'E-commerce & retail',
              'Media & publishing',
              'SaaS & enterprise software',
              'Non-profits & civic tech',
            ].map((sector) => (
              <li
                key={sector}
                style={{
                  padding: '0.875rem 0',
                  borderTop: '1px solid var(--color-border)',
                  fontSize: '0.9375rem',
                  color: 'var(--color-foreground)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-block',
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                />
                {sector}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Process */}
      <section
        aria-labelledby="process-heading"
        style={{ paddingTop: '4rem', paddingBottom: '4rem', borderBottom: '1px solid var(--color-border)' }}
      >
        <div className="container">
          <h2
            id="process-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
              fontWeight: 500,
              marginBottom: '2.5rem',
            }}
          >
            How I work
          </h2>
          <ol
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              counterReset: 'process',
            }}
          >
            {[
              {
                step: 'Discovery',
                desc: "We start with a scoping conversation — what you've built, what you've already tested, what your timeline and compliance targets are. I'll ask the right questions to size the engagement accurately and propose the right approach.",
              },
              {
                step: 'Audit & Testing',
                desc: 'I test your product manually with keyboard and assistive technology, supplemented by automated tooling. I examine components, flows, and documents against WCAG success criteria and record findings with detailed reproduction steps.',
              },
              {
                step: 'Findings Report',
                desc: 'You receive a structured report with every issue categorized by WCAG criterion, severity, and effort estimate. Each finding includes a clear description, the affected user groups, and specific remediation guidance — not just a list of problems.',
              },
              {
                step: 'Remediation Support',
                desc: "I'm available to answer engineering questions during the fix cycle, review pull requests, and help prioritize when the backlog is large. The goal is to transfer knowledge, not just fix a list.",
              },
              {
                step: 'Verification',
                desc: 'Once fixes are implemented, I re-test affected areas to verify resolution and update the report. You leave with an accurate record of your conformance status.',
              },
            ].map((item, i) => (
              <li
                key={item.step}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '2.5rem 1fr',
                  gap: '1.5rem',
                  padding: '2rem 0',
                  borderTop: '1px solid var(--color-border)',
                }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8125rem',
                    fontWeight: 600,
                    color: 'var(--color-accent)',
                    paddingTop: '0.2rem',
                    letterSpacing: '0.05em',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '1.0625rem',
                      fontWeight: 600,
                      marginBottom: '0.6rem',
                    }}
                  >
                    {item.step}
                  </h3>
                  <p
                    style={{
                      fontSize: '0.9375rem',
                      lineHeight: 1.75,
                      color: 'var(--color-muted)',
                      maxWidth: 'none',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section
        aria-labelledby="contact-cta-heading"
        style={{ paddingTop: '4rem', paddingBottom: '5rem' }}
      >
        <div className="container">
          <h2
            id="contact-cta-heading"
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.4rem, 3vw, 1.75rem)',
              fontWeight: 500,
              marginBottom: '1rem',
            }}
          >
            Let's work together
          </h2>
          <p
            style={{
              fontSize: '1rem',
              lineHeight: 1.8,
              color: 'var(--color-muted)',
              maxWidth: '55ch',
              marginBottom: '2rem',
            }}
          >
            If you're working on an accessibility challenge — or want to get ahead of one — I'd like
            to hear about it. I typically respond to new enquiries within one business day.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a
              href="mailto:hello@example.com"
              style={{
                display: 'inline-block',
                padding: '0.65rem 1.5rem',
                background: 'var(--color-accent)',
                color: '#fff',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '3px',
                transition: 'background 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent-hover)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = 'var(--color-accent)';
              }}
            >
              Get in touch
            </a>
            <a
              href="https://example-consulting.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                padding: '0.65rem 1.5rem',
                background: 'transparent',
                color: 'var(--color-accent)',
                fontFamily: 'var(--font-sans)',
                fontSize: '0.9375rem',
                fontWeight: 600,
                textDecoration: 'none',
                borderRadius: '3px',
                border: '1.5px solid var(--color-accent)',
                transition: 'background 0.15s, color 0.15s',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'var(--color-accent)';
                el.style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = 'transparent';
                el.style.color = 'var(--color-accent)';
              }}
            >
              Visit consulting site ↗
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
