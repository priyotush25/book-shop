
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-300">

      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company Information */}
          <div>
            <h2 className="text-2xl font-bold text-sky-400 mb-4">
              BookStore
            </h2>

            <p className="text-sm leading-7 text-gray-400">
              Discover your favorite books and explore a world
              of knowledge, imagination, and inspiration.
              Your next favorite book is waiting for you.
            </p>

            <div className="flex gap-4 mt-5">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"
                className="hover:text-sky-400 transition">
                Facebook
              </a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer"
                className="hover:text-sky-400 transition">
                Instagram
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="hover:text-sky-400 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="/books" className="hover:text-sky-400 transition">
                  All Books
                </a>
              </li>

              <li>
                <a href="/about" className="hover:text-sky-400 transition">
                  About Us
                </a>
              </li>

              <li>
                <a href="/contact" className="hover:text-sky-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Customer Support
            </h3>

            <ul className="space-y-3 text-sm">
              <li>
                <a href="/faq" className="hover:text-sky-400 transition">
                  FAQ
                </a>
              </li>

              <li>
                <a href="/shipping" className="hover:text-sky-400 transition">
                  Shipping Information
                </a>
              </li>

              <li>
                <a href="/returns" className="hover:text-sky-400 transition">
                  Return Policy
                </a>
              </li>

              <li>
                <a href="/privacy" className="hover:text-sky-400 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Contact Us
            </h3>

            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                Email: support@bookstore.com
              </li>

              <li>
                Phone: +880 1700-000000
              </li>

              <li>
                Location: Dhaka, Bangladesh
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-sm text-gray-400 text-center">
            © {new Date().getFullYear()} BookStore. All rights reserved.
          </p>

          <p className="text-sm text-gray-400">
            Made with ❤️ for Book Lovers
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
