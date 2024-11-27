import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Information We Collect
            </h2>
            <div className="space-y-3">
              <p className="leading-relaxed">
                We collect information that you provide directly to us, including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
                <li>Device and usage information</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. How We Use Your Information
            </h2>
            <p className="leading-relaxed">
              We use the collected information for various purposes:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To notify you about changes to our services</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information to improve our services</li>
              <li>To detect, prevent and address technical issues</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Data Security
            </h2>
            <p className="leading-relaxed">
              We implement appropriate security measures to protect your personal information
              against unauthorized access, alteration, disclosure, or destruction. However,
              no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Cookies and Tracking
            </h2>
            <p className="leading-relaxed">
              We use cookies and similar tracking technologies to track activity on our service
              and hold certain information. Cookies are files with small amount of data which
              may include an anonymous unique identifier.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Third-Party Services
            </h2>
            <p className="leading-relaxed">
              Our service may contain links to other sites that are not operated by us.
              We strongly advise you to review the Privacy Policy of every site you visit.
              We have no control over and assume no responsibility for the content,
              privacy policies or practices of any third-party sites or services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              6. Children's Privacy
            </h2>
            <p className="leading-relaxed">
              Our service does not address anyone under the age of 13. We do not knowingly
              collect personally identifiable information from children under 13.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              7. Changes to This Policy
            </h2>
            <p className="leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the
              "Last updated" date.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              8. Contact Us
            </h2>
            <p className="leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-2">
              <li>By email: privacy@yourapp.com</li>
              <li>By visiting our website: www.yourapp.com/contact</li>
            </ul>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;