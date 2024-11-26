import { component$ } from '@builder.io/qwik';

export default component$(() => {
  const faqs = [
    {
      question: "How much can I earn?",
      answer: "You can earn up to 4 naira per article read."
    },
    // Add more FAQs
  ];

  return (
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8">
        Frequently Asked Questions
      </h1>
      
      <div class="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} class="border rounded-lg p-4">
            <h3 class="font-semibold text-lg">{faq.question}</h3>
            <p class="mt-2 text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}); 