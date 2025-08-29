import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

export default function PrivacyPolicyPage() {
  return (
    <main id="main" className="relative min-h-screen text-foreground">
      {/* Sticky, glassy navbar */}
      <Navbar />

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-12 pt-24">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-6 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Introduction
              </h2>
              <p>
                This Privacy Policy describes how Plate ("we," "us," or "our")
                collects, uses, and shares your personal information when you
                use our restaurant booking platform and related services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <p>
                We collect information you provide directly to us, such as when
                you:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Create an account or profile</li>
                <li>Make restaurant reservations</li>
                <li>Contact our customer support</li>
                <li>Sign up for our newsletter</li>
                <li>Participate in surveys or promotions</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Provide and maintain our services</li>
                <li>Process your restaurant bookings</li>
                <li>Send you important updates and notifications</li>
                <li>Improve our platform and user experience</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send you marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Information Sharing
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal
                information to third parties without your consent, except as
                described in this policy or as required by law.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Your Rights
              </h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent where applicable</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="font-medium">Plate</p>
                <p>Email: privacy@plate.com</p>
                <p>Phone: [Your Phone Number]</p>
                <p>Address: [Your Business Address]</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Updates to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of the new policy on this page and updating the "Last
                Updated" date.
              </p>
              <p className="mt-4 text-sm text-gray-600">
                <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
