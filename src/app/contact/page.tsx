"use client";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact: React.FC = () => {

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <div className="text-gray-800 w-full py-8 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <p className="text-gray-500 mt-2">
          We love to hear from you Get in touch with us.
        </p>
      </div>

      {/* Contact Form and Info Section */}
      <div className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
        <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 md:space-x-10">
          {/* Contact Form */}
          <div className="w-full md:w-2/3">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Send Us a Message
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-500"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-gray-800 text-white py-2 px-4 rounded-md hover:bg-gray-700"
              >
                Submit
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full md:w-1/3 bg-gray-50 p-4 rounded-md shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-600 mb-4">
              Feel free to reach out to us through the following methods:
            </p>
            <ul className="space-y-4 text-gray-800">
              <li className="flex items-center">
                <MapPin className="mr-3 text-md text-gray-500" />
                <span>123 Main Street, Anytown,</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-3 text-md text-gray-500" />
                <a
                  href="mailto:nihalghouri321@gmail.com"
                  className="text-blue-500 hover:underline"
                >
                  nihalghouri321&#39;s@gmail.com  {/* Escaped the single quote */}
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="mr-3 text-md text-gray-500" />
                <a
                  href="tel:+9234567890"
                  className="text-blue-500 hover:underline"
                >
                  +92 (345) 678-890
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
