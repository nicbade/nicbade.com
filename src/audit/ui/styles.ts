export const btn = {
  base: 'inline-flex items-center justify-center gap-1.5 rounded-md px-3.5 py-2 text-[0.8125rem] font-semibold leading-5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 cursor-pointer',
  primary: 'bg-[#1a5e3f] text-white hover:bg-[#144d33] focus-visible:outline-[#1a5e3f]',
  secondary: 'border border-slate-300 bg-white text-slate-800 hover:bg-slate-50 focus-visible:outline-[#1a5e3f]',
  ghost: 'text-slate-700 hover:bg-slate-100 focus-visible:outline-[#1a5e3f]',
  danger: 'border border-red-200 bg-white text-red-800 hover:bg-red-50 focus-visible:outline-red-700',
};

export const button = (variant: keyof Omit<typeof btn, 'base'> = 'secondary', extra = '') =>
  `${btn.base} ${btn[variant]} ${extra}`;

export const input =
  'block w-full rounded-md border border-slate-400 bg-white px-3 py-2 text-[0.875rem] leading-6 text-slate-900 placeholder:text-slate-500 focus:border-[#1a5e3f] focus:outline-2 focus:outline-offset-0 focus:outline-[#1a5e3f]';

export const label = 'block text-[0.8125rem] font-semibold text-slate-800 mb-1';

export const hint = 'mt-1 text-[0.75rem] leading-5 text-slate-600';

export const card = 'rounded-xl border border-slate-200 bg-white shadow-sm';

export const PRIORITY_STYLES: Record<string, string> = {
  Blocker: 'bg-red-100 text-red-900 ring-red-300',
  Critical: 'bg-orange-100 text-orange-900 ring-orange-300',
  Major: 'bg-amber-100 text-amber-900 ring-amber-300',
  Minor: 'bg-sky-100 text-sky-900 ring-sky-300',
};

export const PRIORITY_BAR: Record<string, string> = {
  Blocker: 'bg-red-700',
  Critical: 'bg-orange-600',
  Major: 'bg-amber-500',
  Minor: 'bg-sky-600',
};

export const STATUS_STYLES: Record<string, string> = {
  Open: 'bg-slate-100 text-slate-900 ring-slate-300',
  'In progress': 'bg-indigo-100 text-indigo-900 ring-indigo-300',
  'Needs retest': 'bg-violet-100 text-violet-900 ring-violet-300',
  Fixed: 'bg-emerald-100 text-emerald-900 ring-emerald-300',
  "Won't fix": 'bg-stone-200 text-stone-900 ring-stone-300',
};
