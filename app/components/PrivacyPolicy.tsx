"use client";

export default function PrivacyPolicy() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-6">
        Effective Date: <strong>[Insert Date]</strong>
      </p>

      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-2">
            1. Information We Collect
          </h2>
          <p>
            <strong>a. Personal Information You Provide:</strong> We may collect
            data like your name, email, and payment info if you voluntarily
            provide them.
          </p>
          <p>
            <strong>b. Automatically Collected Data:</strong> This includes IP
            address, browser/device type, usage patterns, and interaction data.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            2. How We Use Your Information
          </h2>
          <ul className="list-disc list-inside">
            <li>To operate and improve Mint Mogul</li>
            <li>Send newsletters (opt-in only)</li>
            <li>Analyze usage and protect the site</li>
            <li>Track affiliate link performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            3. Cookies & Tracking Technologies
          </h2>
          <p>
            We use cookies to analyze traffic, remember preferences, and track
            affiliate referrals. You can control cookies via browser settings.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            4. Third-Party Tools & Affiliate Links
          </h2>
          <p>
            Affiliate links may earn us commissions. These links lead to
            third-party sites governed by their own privacy policies.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            5. Data Sharing & Disclosure
          </h2>
          <p>
            We do not sell your data. We may share limited info with trusted
            service providers or legal authorities if required.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
          <p>
            We use industry-standard protections to secure your data, though no
            system is 100% secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Your Privacy Rights</h2>
          <p>
            You may request to access, update, or delete your data. Contact us
            at <strong>[your@email.com]</strong>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Children's Privacy</h2>
          <p>
            Mint Mogul is not intended for children under 13. We do not
            knowingly collect data from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">
            9. Changes to This Policy
          </h2>
          <p>
            We may update this policy. Please review the "Effective Date"
            regularly.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
          <p>
            Email:{" "}
            <a
              href="mailto:your@email.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              your@email.com
            </a>
          </p>
          <p>
            Website:{" "}
            <a
              href="https://www.mintmogul.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              www.mintmogul.com
            </a>
          </p>
        </section>
      </div>
    </section>
  );
}
