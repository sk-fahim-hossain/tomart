import React from "react";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="bg-gray-100 p-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Privacy Policy</h2>

          <p className="text-lg mb-4">
            At T-MART, we are committed to protecting your privacy. This Privacy
            Policy outlines how we collect, use, and safeguard your personal
            information when you visit our website or interact with our
            services.
          </p>

          <h3 className="text-2xl font-bold mb-4">Information We Collect</h3>

          <p className="text-lg mb-4">
            We may collect various types of information, including but not
            limited to:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">
              Personal information (e.g., name, email address)
            </li>
            <li className="mb-2">
              Device information (e.g., IP address, browser type)
            </li>
            <li className="mb-2">
              Usage data (e.g., pages visited, interactions)
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">
            How We Use Your Information
          </h3>

          <p className="text-lg mb-4">
            We use the collected information for various purposes, including:
          </p>

          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2">Providing and personalizing our services</li>
            <li className="mb-2">
              Analyzing website performance and user behavior
            </li>
            <li className="mb-2">
              Communicating with you about promotions and updates
            </li>
          </ul>

          <h3 className="text-2xl font-bold mb-4">Data Security</h3>

          <p className="text-lg mb-4">
            We implement security measures to protect your personal information
            from unauthorized access, disclosure, alteration, and destruction.
          </p>

          <h3 className="text-2xl font-bold mb-4">Your Choices</h3>

          <p className="text-lg mb-4">
            You have the right to opt-out of certain data collection and choose
            your preferences. You can manage your choices through our website
            settings or by contacting us directly.
          </p>

          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>

          <p className="text-lg mb-6">
            If you have any questions or concerns regarding our Privacy Policy,
            please contact us at{" "}
            <a href="mailto:privacy@tmarttoys.com">privacy@tmarttoys.com</a>.
          </p>

          <p className="text-lg">
            This Privacy Policy was last updated on February 1, 2024.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
