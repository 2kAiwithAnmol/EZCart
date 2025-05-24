import React from "react";

const Contact = () => {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
      <p className="text-gray-600 mb-6">
        Have questions or feedback? Fill out the form below and we'll get back to you.
      </p>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full border border-gray-300 p-2 rounded"
        />
        <textarea
          rows="4"
          placeholder="Your Message"
          className="w-full border border-gray-300 p-2 rounded"
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
