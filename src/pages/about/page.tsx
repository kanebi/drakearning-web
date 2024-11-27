import React from 'react';

const AboutPage = () => {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">
        About Us
      </h1>
      <div className="space-y-4">
        <p>
          Welcome to our platform! We&apos;re dedicated to creating a vibrant community where users can engage, 
          share, and connect with others who share similar interests.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">Our Platform</h2>
        <p>
          Our platform provides a space for meaningful interactions and content sharing. We strive to maintain 
          a high-quality user experience while ensuring our services remain free and accessible to everyone.
        </p>
        <h2 className="text-xl font-semibold mt-6 mb-2">How We Operate</h2>
        <p>
          To keep our platform running and continuously improve our services, we generate revenue through:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Carefully selected advertisements that provide value to our users</li>
          <li>User engagement features and premium content options</li>
          <li>Partnership programs with trusted brands</li>
        </ul>
        <p className="mt-4">
          We&apos;re committed to maintaining transparency about our business model while ensuring that 
          advertisements and monetization efforts never compromise the quality of your experience.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;