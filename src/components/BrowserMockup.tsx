interface BrowserMockupProps {
  url?: string;
  children: React.ReactNode;
}

export default function BrowserMockup({ url = 'https://example.com', children }: BrowserMockupProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-white/10">
      {/* Chrome bar */}
      <div className="flex items-center gap-2 bg-neutral-900 px-4 py-2.5 border-b border-white/10">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
        </div>
        <div className="flex-1 text-center">
          <span className="text-xs text-neutral-500 bg-neutral-800 px-3 py-1 rounded-md">
            {url}
          </span>
        </div>
      </div>
      {/* Content area */}
      <div className="bg-neutral-950">
        {children}
      </div>
    </div>
  );
}
