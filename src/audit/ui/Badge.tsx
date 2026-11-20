import { PRIORITY_STYLES, STATUS_STYLES } from './styles';

type Props = {
  kind: 'priority' | 'status' | 'neutral';
  value: string;
  srPrefix?: string;
};

export default function Badge({ kind, value, srPrefix }: Props) {
  const tone =
    kind === 'priority'
      ? PRIORITY_STYLES[value] ?? 'bg-slate-100 text-slate-800 ring-slate-300'
      : kind === 'status'
        ? STATUS_STYLES[value] ?? 'bg-slate-100 text-slate-800 ring-slate-300'
        : 'bg-slate-100 text-slate-800 ring-slate-300';
  return (
    <span
      className={`inline-flex items-center whitespace-nowrap rounded-full px-2 py-0.5 text-[0.6875rem] font-semibold leading-4 ring-1 ring-inset ${tone}`}
    >
      {srPrefix && <span className="sr-only">{srPrefix}: </span>}
      {value}
    </span>
  );
}
