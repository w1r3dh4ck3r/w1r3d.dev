export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-neutral-950 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-neutral-400">
            Built with Next.js, Tailwind, and Framer Motion
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/w1r3dh4ck3r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-300"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/w1r3dh4ck3r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-emerald-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hi@w1r3d.dev"
              className="text-neutral-400 hover:text-emerald-300"
            >
              Email
            </a>
            <a
              href="/feed.xml"
              className="text-neutral-400 hover:text-emerald-300"
            >
              RSS
            </a>
          </div>
          <p className="text-sm text-neutral-500">
            © {currentYear} w1r3d. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
