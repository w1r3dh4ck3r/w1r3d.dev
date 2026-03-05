import { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact — w1r3d.dev',
  description: 'Get in touch with me.',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">Get in Touch</h1>
        <p className="mt-4 text-lg text-gray-600">
          Have a project in mind? Let's talk about it.
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-2">
        {/* Contact Form */}
        <div>
          <h2 className="text-xl font-bold text-gray-900 mb-6">Send me a message</h2>
          <ContactForm />
        </div>

        {/* Contact Info */}
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="mt-2 text-gray-600">
              <a
                href="mailto:hi@w1r3d.dev"
                className="text-blue-600 hover:text-blue-700"
              >
                hi@w1r3d.dev
              </a>
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Social</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="https://github.com/w1r3dh4ck3r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/w1r3dh4ck3r"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Availability</h3>
            <p className="mt-2 text-gray-600">
              Usually available for new projects. Response time: 24-48 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
