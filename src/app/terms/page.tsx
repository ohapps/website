import Link from 'next/link';

export default function TermsPage() {
  return (
    <div className="container py-10 mx-auto max-w-3xl">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Terms &amp; Conditions
      </h1>
      <div className="space-y-6 text-muted-foreground">
        <p>
          Welcome to Open House Apps. By accessing or using our website, you
          agree to be bound by these Terms and Conditions. Please read them
          carefully.
        </p>
        <h2 className="text-xl font-bold">Use of Website</h2>
        <p>
          You may use this website for lawful purposes only. You agree not to
          use the site in any way that may damage, disable, or impair the
          website or interfere with any other party&apos;s use of the website.
        </p>
        <h2 className="text-xl font-bold">Intellectual Property</h2>
        <p>
          All content and materials on this website, unless otherwise stated,
          are the intellectual property of Open House Apps or its contributors.
          You may view, download, and print content for personal, non-commercial
          use only. For open-source projects, please refer to the specific
          project&apos;s license.
        </p>
        <h2 className="text-xl font-bold">User Content</h2>
        <p>
          If you submit any content to our website (such as feedback or
          contributions), you grant us the right to use, reproduce, and display
          such content as necessary to operate and improve our services.
        </p>
        <h2 className="text-xl font-bold">Third-Party Links</h2>
        <p>
          Our website may contain links to third-party websites. We are not
          responsible for the content or practices of those sites. Accessing
          third-party sites is at your own risk.
        </p>
        <h2 className="text-xl font-bold">Disclaimer</h2>
        <p>
          This website and its content are provided &quot;as is&quot; without
          warranties of any kind. We do not guarantee the accuracy,
          completeness, or reliability of any information on the site.
        </p>
        <h2 className="text-xl font-bold">Limitation of Liability</h2>
        <p>
          Open House Apps shall not be liable for any damages arising from your
          use of this website or any linked third-party sites.
        </p>
        <h2 className="text-xl font-bold">Changes to These Terms</h2>
        <p>
          We may update these Terms and Conditions from time to time. Any
          changes will be posted on this page with an updated effective date.
        </p>
        <h2 className="text-xl font-bold">Contact Us</h2>
        <p>
          If you have any questions about these Terms and Conditions, please{' '}
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
