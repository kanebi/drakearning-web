import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(1);

  const faqs = [
    {
      question: "How do I get started with your service?",
      answer: "Getting started is easy! Simply create an account by clicking the 'Sign Up' button at the top of the page. Follow the registration process, verify your email, and you'll have immediate access to our basic features. We also offer a guided tutorial for new users."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and bank transfers. All payments are processed securely through our payment partners, and we never store your complete payment information."
    },
    {
      question: "Can I cancel my subscription at any time?",
      answer: "Yes, you can cancel your subscription at any time through your account settings. Once cancelled, you'll continue to have access to the service until the end of your current billing period. We don't offer refunds for partial months, but you won't be charged for the next period."
    },
    {
      question: "Is my data secure with your service?",
      answer: "Yes, we take data security very seriously. We use industry-standard encryption protocols, regular security audits, and maintain strict access controls. Your data is stored in secure servers, and we never share your personal information with third parties without your explicit consent."
    },
    {
      question: "How can I contact customer support?",
      answer: "Our customer support team is available 24/7. You can reach us through: Email: support@yourapp.com, Live Chat on our website, or phone at 1-800-XXX-XXXX. We typically respond to all inquiries within 24 hours."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Frequently Asked Questions
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? 0 : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Still have questions?{' '}
            <a 
              href="/contact" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 