export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only z-[60] bg-slate-900 px-4 py-2 text-sm font-medium text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Skip to content
    </a>
  );
}
