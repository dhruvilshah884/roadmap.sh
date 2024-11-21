import React from "react";
import Navbar from "../navbar";

const Contact = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />

      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        {/* Contact Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="mt-4 text-lg text-gray-300">
            We would love to hear from you. Feel free to reach out to us with
            any questions or feedback!
          </p>
        </div>

        {/* Contact Form Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column: Contact Form */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white">
              Send us a message
            </h2>
            <form className="mt-6">
              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-white text-lg font-medium"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-white text-lg font-medium"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-white text-lg font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    className="w-full mt-2 p-3 bg-gray-700 text-white rounded-md focus:ring-2 focus:ring-gray-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full mt-6 py-3 bg-gray-900 text-white font-semibold rounded-md hover:bg-gray-700"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Map */}
          <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white">Our Location</h2>
            <div className="mt-6">
              <iframe
                title="location-map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3674.099514852643!2d72.64686591138424!3d22.94656187914035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e896e0dafe3bf%3A0x6c0bcbc54d18254d!2sDharm%20residency.!5e0!3m2!1sen!2sin!4v1732086118815!5m2!1sen!2sin%22%20width=%22600%22%20height=%22450%22%20style=%22border:0;%22%20allowfullscreen=%22%22%20loading=%22lazy%22%20referrerpolicy=%22no-referrer-when-downgrade"
                width="100%"
                height="300"
                style={{ border: "0" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
