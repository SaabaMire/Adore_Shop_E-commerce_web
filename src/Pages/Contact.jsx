import React, { useState } from 'react';

const emptyForm = { name: '', email: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    setFormData((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData(emptyForm);
    setSubmitted(true);
  };

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-gray-100 px-4 pb-12 pt-28 sm:pt-32">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-lg bg-white p-5 shadow-lg sm:p-8">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Contact Us</h1>

        {submitted && (
          <p role="status" aria-live="polite" className="mb-6 rounded-md border border-pink-200 bg-pink-50 p-4 text-center font-medium text-pink-800">
            Thanks for contacting us. We’ll respond soon.
          </p>
        )}

        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-pink-500 focus:outline-none focus:ring-pink-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-md bg-pink-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          Send Message
        </button>

        <div className="mt-8 text-center text-gray-600">
          <p className="text-sm font-semibold">Or reach out directly:</p>
          <p className="mt-2 break-words text-xl font-semibold text-gray-800 sm:text-2xl">+252 (617) 144-703</p>
        </div>
      </form>
    </div>
  );
};

export default Contact;
