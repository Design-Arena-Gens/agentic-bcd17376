export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-lg border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/5 px-2 py-0.5 text-xs text-gray-600 dark:text-gray-300">
      {children}
    </span>
  );
}
