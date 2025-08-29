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

          <div className="space-y-8 text-gray-700">
            {/* Header Information */}
            <div className="text-center border-b border-gray-200 pb-6">
              <p className="text-sm text-gray-600 mb-2">
                <strong>Effective Date:</strong> January 1, 2025
              </p>
              <p className="text-sm text-gray-600">
                <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>

            {/* Section 1: Introduction */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. INTRODUCTION
              </h2>
              <p className="mb-4">
                Welcome to Plate's Privacy Policy. Qwerty App ("we," "us,"
                "our") is committed to protecting your privacy and ensuring the
                security of your personal information. This Privacy Policy
                explains how we collect, use, disclose, and safeguard your
                information when you use our mobile application Plate ("App").
              </p>
              <p className="mb-4">
                By using Plate, you consent to the data practices described in
                this policy. If you do not agree with our policies and
                practices, please do not use our App.
              </p>
            </section>

            {/* Section 2: Information We Collect */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. INFORMATION WE COLLECT
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                2.1 Information You Provide Directly
              </h3>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Account Registration
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Password (encrypted)</li>
                <li>Profile photo (optional)</li>
                <li>Date of birth (optional)</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Profile Information
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Dietary restrictions and preferences</li>
                <li>Favorite cuisines</li>
                <li>Allergies</li>
                <li>Preferred party size</li>
                <li>Special occasion dates</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Booking Information
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Reservation details (date, time, party size)</li>
                <li>Special requests</li>
                <li>Dietary notes</li>
                <li>Guest information (for group bookings)</li>
                <li>Table preferences</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                2.2 Information Collected Automatically
              </h3>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Device Information
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Device ID and type</li>
                <li>Operating system and version</li>
                <li>App version</li>
                <li>Language and timezone settings</li>
                <li>Screen resolution</li>
                <li>IP address</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Location Data
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>GPS coordinates (when permitted)</li>
                <li>City and district</li>
                <li>Proximity to restaurants</li>
                <li>Location history (for recommendations)</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Usage Data
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>App interactions and navigation</li>
                <li>Search queries</li>
                <li>Viewed restaurants</li>
                <li>Booking patterns</li>
                <li>Feature usage statistics</li>
                <li>Session duration</li>
                <li>Crash reports and performance data</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                2.3 Information from Third Parties
              </h3>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                OAuth Providers
              </h4>
              <p className="mb-2">When you sign in using Google or Apple:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Name</li>
                <li>Email address</li>
                <li>Profile picture</li>
                <li>Unique identifier</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Restaurant Partners
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Booking confirmations</li>
                <li>Check-in status</li>
                <li>Dining completion</li>
                <li>Loyalty point transactions</li>
              </ul>

              <h4 className="text-lg font-medium text-gray-800 mb-2">
                Social Features
              </h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Friend connections</li>
                <li>Shared posts and reviews</li>
                <li>Social interactions</li>
              </ul>
            </section>

            {/* Section 3: How We Use Your Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. HOW WE USE YOUR INFORMATION
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                3.1 Service Provision
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Process and confirm restaurant reservations</li>
                <li>Send booking reminders and updates</li>
                <li>Provide customer support</li>
                <li>Enable account management</li>
                <li>Facilitate loyalty program participation</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                3.2 Personalization
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Customize restaurant recommendations</li>
                <li>Suggest restaurants based on preferences</li>
                <li>Remember favorite restaurants</li>
                <li>Provide location-based suggestions</li>
                <li>Tailor special offers</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                3.3 Communication
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Send booking confirmations</li>
                <li>Provide reservation reminders</li>
                <li>Notify about special offers (with consent)</li>
                <li>Send important service updates</li>
                <li>Respond to inquiries and support requests</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                3.4 Improvement and Analytics
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Analyze app usage patterns</li>
                <li>Improve features and user experience</li>
                <li>Conduct research and development</li>
                <li>Monitor app performance</li>
                <li>Prevent fraud and ensure security</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                3.5 Legal and Safety
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Comply with legal obligations</li>
                <li>Enforce our Terms and Conditions</li>
                <li>Protect rights and safety</li>
                <li>Prevent fraudulent activity</li>
                <li>Respond to legal requests</li>
              </ul>
            </section>

            {/* Section 4: Information Sharing and Disclosure */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. INFORMATION SHARING AND DISCLOSURE
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.1 Restaurant Partners
              </h3>
              <p className="mb-2">
                We share limited information with restaurants for bookings:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Name and contact details</li>
                <li>Party size and reservation time</li>
                <li>Special requests and dietary requirements</li>
                <li>Loyalty tier status</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.2 Service Providers
              </h3>
              <p className="mb-2">We work with third-party services for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Cloud hosting (Supabase)</li>
                <li>Authentication (Google, Apple)</li>
                <li>Maps and location (Google Maps)</li>
                <li>Push notifications (Expo)</li>
                <li>Analytics (anonymized data)</li>
                <li>Error tracking (Sentry)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.3 Business Transfers
              </h3>
              <p className="mb-4">
                In case of merger, acquisition, or sale of assets, your
                information may be transferred to the successor entity.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.4 Legal Requirements
              </h3>
              <p className="mb-2">
                We may disclose information when required by:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Court orders or subpoenas</li>
                <li>Government authorities</li>
                <li>Law enforcement requests</li>
                <li>Legal proceedings</li>
                <li>Protection of our rights</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.5 Consent-Based Sharing
              </h3>
              <p className="mb-2">With your explicit consent, we may share:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Reviews and ratings publicly</li>
                <li>Social posts with friends</li>
                <li>Profile information based on privacy settings</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.6 Aggregated Data
              </h3>
              <p className="mb-2">
                We may share anonymized, aggregated data that cannot identify
                you for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Industry research</li>
                <li>Restaurant insights</li>
                <li>Marketing analysis</li>
                <li>Public reports</li>
              </ul>
            </section>

            {/* Section 5: Data Storage and Security */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. DATA STORAGE AND SECURITY
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                5.1 Security Measures
              </h3>
              <p className="mb-2">
                We implement industry-standard security including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Encryption: TLS/SSL for data in transit</li>
                <li>Database encryption: AES-256 for data at rest</li>
                <li>Access controls: Role-based permissions</li>
                <li>Regular audits: Security assessments</li>
                <li>Secure authentication: bcrypt password hashing</li>
                <li>Session management: Secure token handling</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                5.2 Data Storage
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Primary servers: Secure cloud infrastructure</li>
                <li>Geographic location: [Data center locations]</li>
                <li>Backup systems: Regular encrypted backups</li>
                <li>Retention periods: As outlined in Section 6</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                5.3 Incident Response
              </h3>
              <p className="mb-2">In case of a data breach:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Immediate investigation and containment</li>
                <li>Notification within 72 hours where required</li>
                <li>User notification if personal data affected</li>
                <li>Cooperation with authorities</li>
              </ul>
            </section>

            {/* Section 6: Data Retention */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. DATA RETENTION
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                6.1 Active Accounts
              </h3>
              <p className="mb-4">
                We retain your data while your account is active and as needed
                to provide services.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                6.2 Retention Periods
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Account data: Duration of account + 30 days</li>
                <li>Booking history: 3 years for loyalty tracking</li>
                <li>
                  Reviews: Indefinitely (anonymized after account deletion)
                </li>
                <li>Marketing data: Until consent withdrawn</li>
                <li>Legal compliance data: As required by law</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                6.3 Deletion Requests
              </h3>
              <p className="mb-2">Upon account deletion request:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Processing within 30 days</li>
                <li>Removal of personally identifiable information</li>
                <li>Retention of anonymized data for analytics</li>
                <li>Legal compliance data retained as required</li>
              </ul>
            </section>

            {/* Section 7: Your Privacy Rights */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. YOUR PRIVACY RIGHTS
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                7.1 Access Rights
              </h3>
              <p className="mb-2">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Download your data (data portability)</li>
                <li>Object to certain processing</li>
                <li>Restrict processing in certain circumstances</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                7.2 Privacy Controls
              </h3>
              <p className="mb-2">Through the App, you can:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Manage notification preferences</li>
                <li>Control location sharing</li>
                <li>Set profile visibility</li>
                <li>Manage marketing communications</li>
                <li>Control social sharing settings</li>
                <li>Adjust data analytics participation</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                7.3 Marketing Preferences
              </h3>
              <p className="mb-2">You can opt-out of marketing by:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Updating app notification settings</li>
                <li>Using unsubscribe links in emails</li>
                <li>Contacting support</li>
                <li>Adjusting privacy settings</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                7.4 Do Not Track
              </h3>
              <p className="mb-4">
                The App does not currently respond to Do Not Track signals.
              </p>
            </section>

            {/* Section 8: Cookies and Tracking */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. COOKIES AND TRACKING
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                8.1 App Analytics
              </h3>
              <p className="mb-2">
                We use analytics to understand usage patterns:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Session tracking</li>
                <li>Feature usage metrics</li>
                <li>Performance monitoring</li>
                <li>Crash reporting</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                8.2 Advertising IDs
              </h3>
              <p className="mb-2">We may use mobile advertising IDs for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Attributed app installations</li>
                <li>Retargeting campaigns (with consent)</li>
                <li>Analytics purposes</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                8.3 Third-Party SDKs
              </h3>
              <p className="mb-2">Integrated SDKs may collect:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Device information</li>
                <li>Usage patterns</li>
                <li>Performance metrics</li>
              </ul>
            </section>

            {/* Section 9: Children's Privacy */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. CHILDREN'S PRIVACY
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                9.1 Age Restrictions
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Plate is not intended for users under 18</li>
                <li>We do not knowingly collect data from minors</li>
                <li>Parents may contact us to remove minor's data</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                9.2 Parental Controls
              </h3>
              <p className="mb-2">If we discover data from users under 18:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Immediate deletion of account</li>
                <li>Removal of all associated data</li>
                <li>Notification to provided email</li>
              </ul>
            </section>

            {/* Section 10: International Data Transfers */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. INTERNATIONAL DATA TRANSFERS
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                10.1 Cross-Border Transfers
              </h3>
              <p className="mb-2">
                Your data may be transferred to countries with different privacy
                laws. We ensure appropriate safeguards through:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Standard contractual clauses</li>
                <li>Privacy Shield frameworks (where applicable)</li>
                <li>Adequacy decisions</li>
                <li>Consent for specific transfers</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                10.2 User Location
              </h3>
              <p className="mb-4">
                Regardless of your location, we apply the protections described
                in this policy.
              </p>
            </section>

            {/* Section 11: California Privacy Rights (CCPA) */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. CALIFORNIA PRIVACY RIGHTS (CCPA)
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                11.1 California Residents
              </h3>
              <p className="mb-2">Additional rights under CCPA include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Right to know categories of data collected</li>
                <li>Right to know data sale/disclosure practices</li>
                <li>Right to opt-out of data sales</li>
                <li>Right to non-discrimination</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                11.2 "Do Not Sell"
              </h3>
              <p className="mb-4">
                We do not sell personal information as defined by CCPA.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                11.3 Shine the Light
              </h3>
              <p className="mb-4">
                California residents may request information about disclosures
                to third parties for marketing.
              </p>
            </section>

            {/* Section 12: European Privacy Rights (GDPR) */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. EUROPEAN PRIVACY RIGHTS (GDPR)
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                12.1 Legal Basis
              </h3>
              <p className="mb-2">We process data based on:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Consent: For marketing and optional features</li>
                <li>Contract: To provide reservation services</li>
                <li>Legitimate interests: For service improvement</li>
                <li>Legal obligations: For compliance</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                12.2 EU/EEA Rights
              </h3>
              <p className="mb-2">Additional rights include:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Right to lodge complaints with supervisory authorities</li>
                <li>Right to withdraw consent</li>
                <li>Right to object to profiling</li>
                <li>Rights related to automated decision-making</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                12.3 Data Protection Officer
              </h3>
              <p className="mb-4">
                Contact our DPO at:{" "}
                <a
                  href="mailto:dpo@plate.app"
                  className="text-blue-600 hover:underline"
                >
                  dpo@plate.app
                </a>
              </p>
            </section>

            {/* Section 13: Third-Party Links */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. THIRD-PARTY LINKS
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                13.1 External Websites
              </h3>
              <p className="mb-2">The App may contain links to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Restaurant websites</li>
                <li>Payment processors</li>
                <li>Social media platforms</li>
                <li>Review sites</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                13.2 Third-Party Policies
              </h3>
              <p className="mb-4">
                We are not responsible for privacy practices of third-party
                sites. Please review their policies separately.
              </p>
            </section>

            {/* Section 14: Privacy Policy Updates */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. PRIVACY POLICY UPDATES
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                14.1 Modifications
              </h3>
              <p className="mb-2">We may update this policy to reflect:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Legal requirement changes</li>
                <li>New features or services</li>
                <li>User feedback</li>
                <li>Industry best practices</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                14.2 Notification
              </h3>
              <p className="mb-2">Material changes will be notified via:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>In-app notifications</li>
                <li>Email to registered users</li>
                <li>Prominent notice in the App</li>
                <li>Update to "Last Updated" date</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                14.3 Acceptance
              </h3>
              <p className="mb-4">
                Continued use after changes constitutes acceptance of updated
                policy.
              </p>
            </section>

            {/* Section 15: Accessibility */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. ACCESSIBILITY
              </h2>
              <p className="mb-4">
                We strive to make our privacy practices accessible to all users.
                If you need this policy in an alternative format, please contact
                us.
              </p>
            </section>

            {/* Section 16: Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                16. CONTACT INFORMATION
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                16.1 Privacy Inquiries
              </h3>
              <p className="mb-2">For privacy-related questions:</p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-medium">Privacy Officer</p>
                <p>Qwerty App</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:privacy@plate.app"
                    className="text-blue-600 hover:underline"
                  >
                    privacy@plate.app
                  </a>
                </p>
                <p>Phone: [Privacy Hotline]</p>
                <p>Address: [Company Address]</p>
              </div>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                16.2 Data Protection Officer
              </h3>
              <p className="mb-4">
                DPO Contact:{" "}
                <a
                  href="mailto:dpo@plate.app"
                  className="text-blue-600 hover:underline"
                >
                  dpo@plate.app
                </a>
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                16.3 Support
              </h3>
              <p className="mb-4">
                General support:{" "}
                <a
                  href="mailto:support@plate.app"
                  className="text-blue-600 hover:underline"
                >
                  support@plate.app
                </a>
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                16.4 Complaints
              </h3>
              <p className="mb-4">
                If you're unsatisfied with our response, you may contact your
                local data protection authority.
              </p>
            </section>

            {/* Section 17: Consent and Acknowledgment */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                17. CONSENT AND ACKNOWLEDGMENT
              </h2>
              <p className="mb-4">By using Plate, you acknowledge that:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You have read and understood this Privacy Policy</li>
                <li>
                  You consent to the collection and use of your information as
                  described
                </li>
                <li>You are at least 18 years old</li>
                <li>You understand your privacy rights</li>
              </ul>
            </section>

            {/* Footer Information */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-center text-gray-600 mb-4">
                Your privacy is important to us. We are committed to protecting
                your personal information and being transparent about our data
                practices.
              </p>
              <div className="text-center text-sm text-gray-500">
                <p>Version 1.0.0</p>
                <p>Document ID: PLATE-PP-2025-001</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <SiteFooter />
    </main>
  );
}
