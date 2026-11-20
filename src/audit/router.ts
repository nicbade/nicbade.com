import { useSyncExternalStore } from 'react';

export const HUB_PREFIX = '#/audits';

export type HubRoute =
  | { view: 'projects' }
  | { view: 'project'; projectId: string }
  | { view: 'page'; projectId: string; pageId: string };

function subscribe(cb: () => void) {
  window.addEventListener('hashchange', cb);
  return () => window.removeEventListener('hashchange', cb);
}

export function useHash(): string {
  return useSyncExternalStore(subscribe, () => window.location.hash);
}

export function isHubHash(hash: string) {
  return hash === HUB_PREFIX || hash.startsWith(`${HUB_PREFIX}/`);
}

export function parseRoute(hash: string): HubRoute {
  const parts = hash.slice(HUB_PREFIX.length).split('/').filter(Boolean).map(decodeURIComponent);
  if (parts[0] === 'projects' && parts[1]) {
    if (parts[2] === 'pages' && parts[3]) return { view: 'page', projectId: parts[1], pageId: parts[3] };
    return { view: 'project', projectId: parts[1] };
  }
  return { view: 'projects' };
}

export const hrefFor = {
  projects: () => HUB_PREFIX,
  project: (projectId: string) => `${HUB_PREFIX}/projects/${encodeURIComponent(projectId)}`,
  page: (projectId: string, pageId: string) =>
    `${HUB_PREFIX}/projects/${encodeURIComponent(projectId)}/pages/${encodeURIComponent(pageId)}`,
};

export function navigate(href: string) {
  window.location.hash = href;
}
