import { useEffect, useRef } from 'react';
import PageView from './PageView';
import ProjectsView from './ProjectsView';
import ProjectView from './ProjectView';
import { hrefFor, parseRoute, useHash } from './router';
import { useAuditData } from './store';

export default function AuditHub() {
  const hash = useHash();
  const route = parseRoute(hash);
  const data = useAuditData();
  const mainRef = useRef<HTMLElement>(null);
  const firstRender = useRef(true);

  const project = route.view !== 'projects' ? data.projects.find((p) => p.id === route.projectId) : undefined;
  const page = route.view === 'page' ? data.pages.find((p) => p.id === route.pageId && p.projectId === route.projectId) : undefined;
  const missing = (route.view !== 'projects' && !project) || (route.view === 'page' && !page);

  const title = missing ? 'Not found' : page?.name ?? project?.name ?? 'Audit projects';

  useEffect(() => {
    document.title = `${title} | Audit Hub | nicbade.com`;
  }, [title]);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    mainRef.current?.querySelector<HTMLElement>('h1')?.focus();
    window.scrollTo({ top: 0 });
  }, [hash]);

  const crumbs: { label: string; href?: string }[] = [{ label: 'Projects', href: hrefFor.projects() }];
  if (project) crumbs.push({ label: project.name, href: hrefFor.project(project.id) });
  if (project && page) crumbs.push({ label: page.name, href: hrefFor.page(project.id, page.id) });

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      <a
        href="#hub-main"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Skip to main content
      </a>
      <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-6 gap-y-1 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="grid h-8 w-8 place-items-center rounded-lg bg-[#1a5e3f] text-[0.75rem] font-bold text-white"
            >
              A11y
            </span>
            <p className="m-0 font-serif text-lg leading-tight">
              <a href={hrefFor.projects()} className="text-slate-900 no-underline hover:underline">
                Audit Hub
              </a>
            </p>
          </div>
          <a href={import.meta.env.BASE_URL} className="text-[0.8125rem] text-slate-700">
            Back to nicbade.com
          </a>
        </div>
        {crumbs.length > 1 && (
          <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 pb-2 sm:px-6">
            <ol className="m-0 flex list-none flex-wrap items-center gap-1 p-0 text-[0.8125rem]">
              {crumbs.map((c, i) => {
                const last = i === crumbs.length - 1;
                return (
                  <li key={i} className="flex items-center gap-1">
                    {i > 0 && (
                      <span aria-hidden="true" className="text-slate-400">
                        /
                      </span>
                    )}
                    {last ? (
                      <a href={c.href} aria-current="page" className="font-semibold text-slate-900 no-underline">
                        {c.label}
                      </a>
                    ) : (
                      <a href={c.href} className="text-slate-700">
                        {c.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ol>
          </nav>
        )}
      </header>

      <main id="hub-main" ref={mainRef} tabIndex={-1} className="mx-auto max-w-7xl px-4 py-8 outline-none sm:px-6">
        {missing ? (
          <div>
            <h1 tabIndex={-1} className="m-0 text-3xl">
              Not found
            </h1>
            <p>
              That project or page does not exist in this browser. <a href={hrefFor.projects()}>Return to all projects</a>.
            </p>
          </div>
        ) : route.view === 'page' && project && page ? (
          <PageView key={page.id} project={project} page={page} />
        ) : route.view === 'project' && project ? (
          <ProjectView key={project.id} project={project} />
        ) : (
          <ProjectsView />
        )}
      </main>
    </div>
  );
}
