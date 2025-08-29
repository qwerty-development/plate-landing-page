import Navbar from "../components/Navbar";
import SiteFooter from "../components/SiteFooter";

export default function TermsPage() {
  return (
    <main id="main" className="relative min-h-screen text-foreground">
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 py-12 pt-24">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Terms and Conditions
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

            {/* Section 1: Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                1. ACCEPTANCE OF TERMS
              </h2>
              <p className="mb-4">
                Welcome to Plate (&ldquo;we,&rdquo; &ldquo;us,&rdquo;
                &ldquo;our,&rdquo; or the &ldquo;App&rdquo;), a restaurant
                reservation platform operated by Qwerty App. By downloading,
                installing, accessing, or using Plate, you (&ldquo;you,&rdquo;
                &ldquo;your,&rdquo; or &ldquo;User&rdquo;) agree to be bound by
                these Terms and Conditions (&ldquo;Terms&rdquo;). If you do not
                agree to these Terms, please do not use our App.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                1.1 Eligibility
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You must be at least 18 years old to use Plate</li>
                <li>
                  You must have the legal capacity to enter into binding
                  contracts
                </li>
                <li>
                  You must provide accurate, current, and complete information
                  during registration
                </li>
                <li>
                  You are responsible for maintaining the confidentiality of
                  your account credentials
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                1.2 Account Types
              </h3>
              <p className="mb-2">Plate offers the following account types:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  Registered Users: Full access to all features with
                  authenticated account
                </li>
                <li>
                  Guest Users: Limited access to browse restaurants without
                  booking capabilities
                </li>
                <li>OAuth Users: Authenticated via Google or Apple Sign-In</li>
              </ul>
            </section>

            {/* Section 2: Services Provided */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                2. SERVICES PROVIDED
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                2.1 Core Services
              </h3>
              <p className="mb-2">Plate provides the following services:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Restaurant discovery and search</li>
                <li>Real-time table reservation booking</li>
                <li>Restaurant information, menus, and reviews</li>
                <li>Location-based restaurant recommendations</li>
                <li>Social features for sharing dining experiences</li>
                <li>Loyalty program with points and tier benefits</li>
                <li>Special offers and promotional deals</li>
                <li>Group booking coordination</li>
                <li>Waitlist management</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                2.2 Service Availability
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  Services are provided &ldquo;as is&rdquo; and &ldquo;as
                  available&rdquo;
                </li>
                <li>We do not guarantee uninterrupted or error-free service</li>
                <li>
                  We reserve the right to modify, suspend, or discontinue
                  services at any time
                </li>
                <li>
                  Scheduled maintenance may temporarily affect service
                  availability
                </li>
              </ul>
            </section>

            {/* Section 3: User Responsibilities */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                3. USER RESPONSIBILITIES
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                3.1 Account Management
              </h3>
              <p className="mb-2">You agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Provide accurate and complete registration information</li>
                <li>Update your information to keep it current</li>
                <li>Maintain the security of your account credentials</li>
                <li>
                  Notify us immediately of any unauthorized account access
                </li>
                <li>
                  Accept responsibility for all activities under your account
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                3.2 Reservation Obligations
              </h3>
              <p className="mb-2">When making reservations, you agree to:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Provide accurate party size and contact information</li>
                <li>
                  Honor confirmed reservations or cancel within the specified
                  timeframe
                </li>
                <li>Arrive on time for your reservation</li>
                <li>
                  Comply with restaurant-specific policies and dress codes
                </li>
                <li>Pay any required deposits or cancellation fees</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                3.3 Prohibited Conduct
              </h3>
              <p className="mb-2">You shall not:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Make false or fraudulent reservations</li>
                <li>Create multiple accounts to circumvent restrictions</li>
                <li>Resell or commercially exploit reservations</li>
                <li>Use automated systems or bots to make bookings</li>
                <li>Harass, abuse, or harm other users or restaurant staff</li>
                <li>Post false, misleading, or defamatory reviews</li>
                <li>Violate any applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Reverse engineer or decompile the App</li>
              </ul>
            </section>

            {/* Section 4: Booking Policies */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                4. BOOKING POLICIES
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.1 Reservation Confirmation
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Bookings are subject to restaurant availability</li>
                <li>Confirmation is sent via app notification and/or email</li>
                <li>Each booking receives a unique confirmation code</li>
                <li>
                  Some restaurants may require credit card details to secure
                  bookings
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.2 Cancellation Policy
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  Users must cancel reservations at least 2 hours before the
                  booking time
                </li>
                <li>Late cancellations or no-shows may result in penalties</li>
                <li>Repeated violations may lead to account suspension</li>
                <li>Restaurants may have individual cancellation policies</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.3 Modifications
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Reservation modifications are subject to availability</li>
                <li>Changes must be made within the cancellation window</li>
                <li>Party size changes may affect table availability</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                4.4 Group Bookings
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  Group bookings (6+ guests) may have special requirements
                </li>
                <li>Organizers are responsible for coordinating attendees</li>
                <li>Deposits may be required for large parties</li>
              </ul>
            </section>

            {/* Section 5: Loyalty Program */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                5. LOYALTY PROGRAM
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                5.1 Points System
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Users earn loyalty points for completed bookings</li>
                <li>Points calculation based on booking value and frequency</li>
                <li>Points may expire after 12 months of inactivity</li>
                <li>Points have no cash value and cannot be transferred</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                5.2 Membership Tiers
              </h3>
              <p className="mb-2">Our loyalty program includes four tiers:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Bronze: Entry level (0-499 points)</li>
                <li>Silver: Enhanced benefits (500-1,499 points)</li>
                <li>Gold: Premium perks (1,500-2,999 points)</li>
                <li>Platinum: Exclusive privileges (3,000+ points)</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                5.3 Tier Benefits
              </h3>
              <p className="mb-2">
                Benefits may include but are not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Priority reservations</li>
                <li>Exclusive restaurant access</li>
                <li>Special discounts and offers</li>
                <li>Complimentary upgrades</li>
                <li>Birthday rewards</li>
              </ul>
            </section>

            {/* Section 6: Reviews and Content */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                6. REVIEWS AND CONTENT
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                6.1 User-Generated Content
              </h3>
              <p className="mb-2">
                By posting reviews, photos, or other content, you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  Grant us a non-exclusive, worldwide, royalty-free license to
                  use your content
                </li>
                <li>Represent that you own or have rights to the content</li>
                <li>Agree that content must be accurate and not misleading</li>
                <li>
                  Acknowledge we may moderate or remove content at our
                  discretion
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                6.2 Review Guidelines
              </h3>
              <p className="mb-2">Reviews must:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Be based on actual dining experiences</li>
                <li>Be honest and constructive</li>
                <li>Not contain offensive or inappropriate language</li>
                <li>Not include personal information of others</li>
                <li>Comply with our community standards</li>
              </ul>
            </section>

            {/* Section 7: Payment Terms */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                7. PAYMENT TERMS
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                7.1 Payment Processing
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>We do not directly process restaurant payments</li>
                <li>Deposits or prepayments may be required by restaurants</li>
                <li>Payment information is encrypted and securely stored</li>
                <li>
                  You authorize charges for confirmed bookings requiring payment
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                7.2 Refunds
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Refund policies vary by restaurant</li>
                <li>Cancellation fees may be non-refundable</li>
                <li>Disputes should first be resolved with the restaurant</li>
                <li>
                  We may assist in mediation but are not liable for refunds
                </li>
              </ul>
            </section>

            {/* Section 8: Privacy and Data Protection */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                8. PRIVACY AND DATA PROTECTION
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                8.1 Data Collection
              </h3>
              <p className="mb-2">
                We collect and process personal data as outlined in our Privacy
                Policy, including:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Account information (name, email, phone)</li>
                <li>Location data for restaurant recommendations</li>
                <li>Booking history and preferences</li>
                <li>Device and usage information</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                8.2 Data Security
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>We implement industry-standard security measures</li>
                <li>Data is encrypted in transit and at rest</li>
                <li>Regular security audits are conducted</li>
                <li>Users are responsible for account security</li>
              </ul>
            </section>

            {/* Section 9: Third-Party Services */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                9. THIRD-PARTY SERVICES
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                9.1 Restaurant Partners
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Restaurants are independent businesses</li>
                <li>
                  We are not responsible for restaurant services or food quality
                </li>
                <li>Disputes should be resolved directly with restaurants</li>
                <li>Restaurant terms and conditions may apply</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                9.2 External Services
              </h3>
              <p className="mb-2">Our App integrates with:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Google Maps for location services</li>
                <li>Apple/Google for authentication</li>
                <li>Payment processors for transactions</li>
                <li>Analytics services for app improvement</li>
              </ul>
            </section>

            {/* Section 10: Intellectual Property */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                10. INTELLECTUAL PROPERTY
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                10.1 Ownership
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  The App and its original content are owned by Qwerty App
                </li>
                <li>Trademarks, logos, and branding are our property</li>
                <li>
                  Restaurant information is owned by respective establishments
                </li>
                <li>
                  User content remains owned by users with license granted to us
                </li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                10.2 Restrictions
              </h3>
              <p className="mb-2">You may not:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Copy, modify, or distribute our proprietary content</li>
                <li>Use our trademarks without permission</li>
                <li>Create derivative works based on the App</li>
                <li>Remove copyright or proprietary notices</li>
              </ul>
            </section>

            {/* Section 11: Disclaimers and Limitations */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                11. DISCLAIMERS AND LIMITATIONS
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                11.1 Service Disclaimer
              </h3>
              <p className="mb-4 font-semibold">
                THE APP IS PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES OF
                ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
                WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE,
                AND NON-INFRINGEMENT.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                11.2 Limitation of Liability
              </h3>
              <p className="mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>
                  We are not liable for indirect, incidental, or consequential
                  damages
                </li>
                <li>
                  Our total liability shall not exceed $100 or fees paid in the
                  last 12 months
                </li>
                <li>
                  We are not responsible for restaurant service quality or
                  issues
                </li>
                <li>We do not guarantee reservation availability</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                11.3 Indemnification
              </h3>
              <p className="mb-4">
                You agree to indemnify and hold harmless Qwerty App, its
                affiliates, and their respective officers, directors, employees,
                and agents from any claims, damages, losses, or expenses arising
                from your use of the App or violation of these Terms.
              </p>
            </section>

            {/* Section 12: Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                12. DISPUTE RESOLUTION
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                12.1 Governing Law
              </h3>
              <p className="mb-4">
                These Terms are governed by the laws of [Jurisdiction], without
                regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                12.2 Arbitration
              </h3>
              <p className="mb-4">
                Any disputes shall be resolved through binding arbitration in
                accordance with the rules of [Arbitration Body], except where
                prohibited by law.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                12.3 Class Action Waiver
              </h3>
              <p className="mb-4">
                You waive any right to participate in class action lawsuits
                against us.
              </p>
            </section>

            {/* Section 13: Modifications */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                13. MODIFICATIONS
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                13.1 Changes to Terms
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>We may modify these Terms at any time</li>
                <li>Material changes will be notified via the App or email</li>
                <li>Continued use after changes constitutes acceptance</li>
                <li>Previous versions will be archived</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                13.2 Feature Updates
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>App features may be added, modified, or removed</li>
                <li>We strive to improve services continuously</li>
                <li>Major changes will be communicated to users</li>
              </ul>
            </section>

            {/* Section 14: Termination */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                14. TERMINATION
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                14.1 User Termination
              </h3>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>You may terminate your account at any time</li>
                <li>Deletion requests will be processed within 30 days</li>
                <li>Some information may be retained for legal compliance</li>
              </ul>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                14.2 Our Termination Rights
              </h3>
              <p className="mb-2">We may suspend or terminate accounts for:</p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Violation of these Terms</li>
                <li>Fraudulent or illegal activity</li>
                <li>Extended inactivity</li>
                <li>Repeated policy violations</li>
              </ul>
            </section>

            {/* Section 15: Accessibility */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                15. ACCESSIBILITY
              </h2>
              <p className="mb-4">
                We are committed to making Plate accessible to all users,
                including those with disabilities. The App includes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Screen reader compatibility</li>
                <li>Voice control support</li>
                <li>Adjustable text sizes</li>
                <li>High contrast modes</li>
              </ul>
            </section>

            {/* Section 16: Contact Information */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                16. CONTACT INFORMATION
              </h2>
              <p className="mb-4">
                For questions about these Terms, please contact us:
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-4">
                <p className="font-medium">Qwerty App</p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:legal@plate.app"
                    className="text-blue-600 hover:underline"
                  >
                    legal@plate.app
                  </a>
                </p>
                <p>
                  Support:{" "}
                  <a
                    href="mailto:support@plate.app"
                    className="text-blue-600 hover:underline"
                  >
                    support@plate.app
                  </a>
                </p>
                <p>Address: [Company Address]</p>
              </div>
            </section>

            {/* Section 17: Miscellaneous */}
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                17. MISCELLANEOUS
              </h2>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                17.1 Entire Agreement
              </h3>
              <p className="mb-4">
                These Terms constitute the entire agreement between you and
                Qwerty App regarding Plate.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                17.2 Severability
              </h3>
              <p className="mb-4">
                If any provision is found unenforceable, the remaining
                provisions shall continue in effect.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                17.3 No Waiver
              </h3>
              <p className="mb-4">
                Our failure to enforce any right or provision shall not
                constitute a waiver.
              </p>

              <h3 className="text-xl font-medium text-gray-800 mb-3">
                17.4 Assignment
              </h3>
              <p className="mb-4">
                We may assign these Terms; you may not assign them without our
                consent.
              </p>
            </section>

            {/* Footer Information */}
            <div className="border-t border-gray-200 pt-6 mt-8">
              <p className="text-center text-gray-600 mb-4">
                By using Plate, you acknowledge that you have read, understood,
                and agree to be bound by these Terms and Conditions.
              </p>
              <div className="text-center text-sm text-gray-500">
                <p>Version 1.0.0</p>
                <p>Document ID: PLATE-TC-2025-001</p>
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
