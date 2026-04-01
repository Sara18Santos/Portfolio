import React from "react";

export const ContactForm = () => {
  return (
    <form className="mx-auto bg-white border-2 border-gray-300 dark:bg-zinc-900 dark:border-gray-700 rounded-lg shadow-md p-8">
      <div>
        <label
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          id="name"
          type="text"
          placeholder="Your name"
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Your email"
        />
      </div>
      <div className="mt-4">
        <label
          className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 dark:text-gray-300 leading-tight focus:outline-none focus:shadow-outline"
          id="message"
          rows={4}
          placeholder="Your message"
        ></textarea>
      </div>
      <div className="mt-4">
        <button
          className="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline dark:bg-white dark:text-zinc-900 hover:bg-gray-600 dark:hover:bg-gray-600"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
