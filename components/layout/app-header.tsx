export function AppHeader() {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-white/10 bg-black/60 px-4 backdrop-blur-md md:px-6">
      <div>
        <p className="text-sm text-zinc-400">Welcome back</p>
        <h1 className="text-lg font-semibold text-white">
          Ready to dominate today?
        </h1>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden rounded-full border border-white/10 bg-zinc-900 px-4 py-2 text-sm text-zinc-400 md:block">
          Search...
        </div>
        <div className="h-10 w-10 rounded-full border border-emerald-500/30 bg-emerald-500/10" />
      </div>
    </header>
  );
}
