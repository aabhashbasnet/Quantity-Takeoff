import React from "react";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-600">
          Please read these terms carefully before using our services.
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto mt-12 bg-white rounded-lg shadow-sm p-8 space-y-8">
        {/* Introduction */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">1. Introduction</h2>
          <p className="mt-2 text-gray-600">
            Welcome to Quantity Takeoff Software ("we," "our," or "us"). These Terms of Service
            govern your use of our software and services. By accessing or using our platform, you
            agree to comply with these terms.
          </p>
        </section>

        {/* Eligibility */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">2. Eligibility</h2>
          <p className="mt-2 text-gray-600">
            You must be at least 18 years old to use our services. By using our platform, you
            represent and warrant that you meet this age requirement.
          </p>
        </section>

        {/* Account Responsibilities */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">3. Account Responsibilities</h2>
          <p className="mt-2 text-gray-600">
            You are responsible for maintaining the confidentiality of your account credentials.
            Any activity that occurs under your account is your responsibility. Notify us
            immediately if you suspect unauthorized access to your account.
          </p>
        </section>

        {/* Intellectual Property */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">4. Intellectual Property</h2>
          <p className="mt-2 text-gray-600">
            All content, trademarks, and intellectual property on our platform are owned by us or
            our licensors. You may not use, reproduce, or distribute any content without our prior
            written consent.
          </p>
        </section>

        {/* Prohibited Activities */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">5. Prohibited Activities</h2>
          <p className="mt-2 text-gray-600">
            You agree not to engage in any of the following activities:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Violating any applicable laws or regulations.</li>
            <li>Using the platform for fraudulent or malicious purposes.</li>
            <li>Uploading or sharing harmful, illegal, or inappropriate content.</li>
            <li>Attempting to gain unauthorized access to our systems or data.</li>
          </ul>
        </section>

        {/* Limitation of Liability */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">6. Limitation of Liability</h2>
          <p className="mt-2 text-gray-600">
            To the fullest extent permitted by law, we shall not be liable for any indirect,
            incidental, or consequential damages arising out of your use of the platform.
          </p>
        </section>

        {/* Termination */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">7. Termination</h2>
          <p className="mt-2 text-gray-600">
            We reserve the right to suspend or terminate your account and access to the platform
            at any time, with or without notice, for any reason, including violations of these
            terms.
          </p>
        </section>

        {/* Changes to Terms */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">8. Changes to Terms</h2>
          <p className="mt-2 text-gray-600">
            We may update these terms from time to time. Any changes will be effective upon posting
            the updated terms on our website. Your continued use of the platform constitutes
            acceptance of the revised terms.
          </p>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-900">9. Contact Information</h2>
          <p className="mt-2 text-gray-600">
            If you have any questions about these terms, please contact us at:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-600">
            <li>Email: support@qtoff.com</li>
            <li>Phone: +1 (123) 456-7890</li>
            <li>Address: 123 Construction Ave, Suite 456, City, State, ZIP</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;