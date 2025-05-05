import React from 'react';

const Privacy = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: May 2024</p>
        
        <div className="prose prose-lg max-w-none">
          <p>
            At Organica AI Solutions, we take your privacy seriously. This Privacy Policy explains how we collect, 
            use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Information We Collect</h2>
          
          <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Personal Data</h3>
          <p>
            We may collect personal identification information, including but not limited to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Company information</li>
            <li>IP address and browser information</li>
          </ul>
          
          <h3 className="text-xl font-medium text-gray-800 mt-6 mb-3">Usage Data</h3>
          <p>
            We may also collect information on how you access and use our website and services, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Pages visited and time spent</li>
            <li>Buttons clicked and features used</li>
            <li>Device information and browser type</li>
            <li>Referring websites</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing and maintaining our services</li>
            <li>Improving our website and user experience</li>
            <li>Communicating with you about updates or inquiries</li>
            <li>Analyzing usage patterns to enhance functionality</li>
            <li>Complying with legal obligations</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Cookies and Tracking Technologies</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our website and store certain information. 
            Cookies are files with small amounts of data that may include an anonymous unique identifier.
          </p>
          <p>
            You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, 
            if you do not accept cookies, you may not be able to use some portions of our service.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals to facilitate our service, provide the service on our behalf, 
            perform service-related activities, or assist us in analyzing how our service is used.
          </p>
          <p>
            These third parties have access to your personal data only to perform these tasks on our behalf and are 
            obligated not to disclose or use it for any other purpose.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Security</h2>
          <p>
            The security of your data is important to us, but remember that no method of transmission over the Internet 
            or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to 
            protect your personal data, we cannot guarantee its absolute security.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Your Data Protection Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access, update, or delete your information</li>
            <li>The right to rectification if information is inaccurate</li>
            <li>The right to object to processing of your information</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new 
            Privacy Policy on this page and updating the "Last updated" date at the top of this page.
          </p>
          <p>
            You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy 
            are effective when they are posted on this page.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-none pl-0 mb-4">
            <li>By email: contact@organicaai.com</li>
            <li>By phone: +1-215-888-8748</li>
            <li>By mail: 1438 N7th st., Philadelphia PA0, 19122, USA</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 