import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <div className="container py-10 mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">Privacy Policy</h1>
      <div className="space-y-6 text-muted-foreground">
        <p>
          At Open House Apps, your privacy is important to us. This Privacy
          Policy explains how we collect, use, and protect your personal
          information when you use our website and services.
        </p>
        <h2 className="text-xl font-bold">Information We Collect</h2>
        <p>
          We may collect personal information that you voluntarily provide to
          us, such as your name, email address, and any other information you
          submit through our contact forms or other interactions with our site.
        </p>
        <h2 className="text-xl font-bold">How We Use Your Information</h2>
        <p>
          We use your information to respond to your inquiries, provide support,
          improve our website, and communicate with you about our projects and
          updates. We do not sell or share your personal information with third
          parties except as required by law.
        </p>
        <h2 className="text-xl font-bold">Cookies & Analytics</h2>
        <p>
          Our website may use cookies and similar technologies to enhance your
          experience and analyze site usage. You can control cookies through
          your browser settings.
        </p>
        <h2 className="text-xl font-bold">Third-Party Links</h2>
        <p>
          Our website may contain links to third-party sites, such as GitHub. We
          are not responsible for the privacy practices or content of those
          sites.
        </p>
        <h2 className="text-xl font-bold">Data Security</h2>
        <p>
          We take reasonable measures to protect your information from
          unauthorized access, disclosure, or loss.
        </p>
        <h2 className="text-xl font-bold">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date.
        </p>
        <h2 className="text-xl font-bold">Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please{' '}
          <Link href="/contact" className="underline">
            contact us
          </Link>
          .
        </p>
        <p className="text-xs text-center text-muted-foreground mt-8">
          Last updated: August 12, 2025
        </p>
      </div>
    </div>
  );
}
