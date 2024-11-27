import Link from 'next/link';
import React, { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number>(1);

  const faqs = [
    {
      question: "What is Drak Earning Platform?",
      answer: "Drak Earning Platform is a read-to-earn platform where users can earn money by reading articles on various topics. Our platform aims to provide a user-friendly interface for users to discover and engage with high-quality content while earning rewards."
    },
    {
      question: "How do I earn money on Drak Earning Platform?",
      answer: "Earning money on Drak Earning Platform is simple! Browse our article library, read articles that interest you, and earn rewards in the form of points or cash. You can redeem your rewards through various payment methods such as bank transfers and others."
    },
    {
      question: "What types of articles can I find on Drak Earning Platform?",
      answer: "Drak Earning Platform features a diverse range of articles on various topics, including news, entertainment, lifestyle, technology, and more. Our content is curated from reputable sources to ensure that you have access to high-quality and engaging articles."
    },
    {
      question: "How do I get paid for reading articles?",
      answer: "Drak Earning Platform uses a point-based system to reward users for reading articles. You earn points for each article you read, and these points can be redeemed for cash or other rewards. The number of points you earn per article may vary depending on the article's length, complexity, and other factors."
    },
    {
      question: "Is Drak Earning Platform free to use?",
      answer: "Yes, Drak Earning Platform is free to use. We don't charge any fees for creating an account or reading articles. You can start earning money by reading articles without any upfront costs."
    }
  ];

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
          Drak Earning Platform FAQs
        </h1>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="rounded-lg shadow-md overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-700 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? 0 : index)}
              >
                <span className="font-medium text-gray-200">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${
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
                <div className="px-6 py-4 bg-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300">
            Still have questions?{' '}
            <Link
              href="/contact" 
              className="text-blue-400 hover:text-blue-500 font-medium"
            >
              Contact our support team
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FAQ; 