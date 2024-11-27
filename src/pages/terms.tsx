import React from 'react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Terms and Conditions
        </h1>

        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Acceptance of Terms
            </h2>
            <p className="leading-relaxed">
              By accessing and using this application, you accept and agree to be bound by the terms
              and conditions outlined here. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. User Responsibilities
            </h2>
            <p className="leading-relaxed">
              Users are responsible for maintaining the confidentiality of their account information
              and for all activities that occur under their account. Users must notify us immediately
              of any unauthorized use of their account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Privacy Policy
            </h2>
            <p className="leading-relaxed">
              Our privacy policy explains how we collect, use, and protect your personal information.
              By using our services, you agree to our privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Service Modifications
            </h2>
            <p className="leading-relaxed">
              We reserve the right to modify or discontinue our services at any time without prior notice.
              We shall not be liable to you or any third party for any modification, suspension, or
              discontinuance of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              5. Limitation of Liability
            </h2>
            <p className="leading-relaxed">
              We shall not be liable for any indirect, incidental, special, consequential, or punitive
              damages resulting from your use or inability to use the service.
            </p>
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

export default Terms;