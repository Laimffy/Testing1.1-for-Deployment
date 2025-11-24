import React from 'react';

const Contact: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We will get back to you shortly.");
    // In a real app, you would handle form submission here.
    (e.target as HTMLFormElement).reset();
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <div className="bg-white p-8 rounded-lg shadow-md border border-purple-200">
        <h1 className="text-4xl font-bold text-purple-900 mb-6 text-center">Contact Harmony Team</h1>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4 text-purple-800">
            <div>
              <h2 className="text-xl font-semibold">Email</h2>
              <a href="mailto:support@harmony.bsu.edu" className="text-purple-600 hover:underline">support@harmony.bsu.edu</a>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Office</h2>
              <p>Computer Engineering Department, Batangas State University</p>
            </div>
            <p className="pt-4 text-sm text-purple-600">We reply within 48 hours. For urgent campus accessibility issues contact campus security.</p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-purple-800">Name</label>
              <input type="text" id="name" name="name" required className="mt-1 block w-full p-2 border border-purple-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-purple-800">Email</label>
              <input type="email" id="email" name="email" required className="mt-1 block w-full p-2 border border-purple-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
             <div>
              <label htmlFor="subject" className="block text-sm font-medium text-purple-800">Subject</label>
              <input type="text" id="subject" name="subject" required className="mt-1 block w-full p-2 border border-purple-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-purple-800">Message</label>
              <textarea id="message" name="message" rows={4} required className="mt-1 block w-full p-2 border border-purple-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"></textarea>
            </div>
            <button type="submit" className="w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
