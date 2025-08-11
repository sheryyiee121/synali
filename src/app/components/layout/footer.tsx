"use client";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white text-black font-poppins border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
          <div className="flex flex-col items-start">
            <div className="flex items-center">
              <Image
                className="w-12 h-12 sm:w-16 sm:h-16"
                height={48}
                width={48}
                src={"/logo.png"}
                alt="Synli AI Logo"
              />
              <h2 className="text-xl sm:text-2xl font-bold">Synli AI</h2>
            </div>
            <div className="flex space-x-6 sm:space-x-8 mb-6 sm:mb-8"></div>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              About
            </h3>
            <ul className="text-gray-600 text-sm sm:text-base space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Voice Cloning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Voice Universe
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Ethics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Branding Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Info Section */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Info
            </h3>
            <ul className="text-gray-600 text-sm sm:text-base space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Affiliate Partner
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Resource Hub
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Is it safe?
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
              Online Audio Tools
            </h3>
            <ul className="text-gray-600 text-sm sm:text-base space-y-3 sm:space-y-4">
              <li>
                <a href="#" className="hover:text-purple-600">
                  Text to Speech
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Online Voice Changer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Online Audio Enhancer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Online Vocal Remover
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  Online Echo Remover
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-purple-600">
                  AI STEM Splitter
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Supported Platforms Section */}
        <div className="mt-10 sm:mt-16 text-center">
          <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">
            Supported Platforms
          </h3>
          <div className="flex justify-center flex-wrap gap-6 sm:gap-8">
            <div className="p-3 sm:p-4 bg-gray-100 rounded-full">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.41 16.09V13h-2v-2h2V8.91c0-2.79 1.67-4.31 4.12-4.31.83 0 1.67.08 2.5.25v2.75h-1.67c-1.33 0-1.58.63-1.58 1.58V11h3l-.42 2h-2.58v5.09c-2.87-.86-5-3.54-5-6.09z" />
              </svg>
            </div>
            <div className="p-3 sm:p-4 bg-gray-100 rounded-full">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5 3h14c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2zm12.71 11.29l-5-5c-.39-.39-1.02-.39-1.41 0l-5 5c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 11.41l4.29 4.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41z" />
              </svg>
            </div>
            <div className="p-3 sm:p-4 bg-gray-100 rounded-full">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-9 14H7v-7h3v7zm0-9H7V5h3v3zm7 9h-3v-4c0-1.1-.9-2-2-2s-2 .9-2 2v4H7v-7h3v1.17c.85-.92 2.03-1.17 3.1-1.17 2.21 0 3.9 1.79 3.9 4v3z" />
              </svg>
            </div>
            <div className="p-3 sm:p-4 bg-gray-100 rounded-full">
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
