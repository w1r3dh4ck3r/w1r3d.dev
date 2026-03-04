export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50 py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-gray-600">
            Built with Next.js, Tailwind, and Framer Motion
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/w1r3dh4ck3r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/w1r3dh4ck3r"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hi@w1r3d.dev"
              className="text-gray-600 hover:text-gray-900"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-gray-500">
            © {currentYear} w1r3d. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
