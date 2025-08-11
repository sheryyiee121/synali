import React from "react";
import about from "../../../../public/robot.jpg";
import Navbar from "../../components/layout/header";
import Footer from "../../components/layout/footer";

const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white text-black min-h-screen font-poppins py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-20 animate-slideUp">
            About Us
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 sm:gap-16">
            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center animate-slideUp animation-delay-200">
              <div
                className="w-full max-w-sm sm:max-w-md lg:max-w-lg h-72 sm:h-96 lg:h-[500px] bg-cover bg-center rounded-2xl shadow-lg"
                style={{
                  backgroundImage: `url(${about})`,
                }}
              ></div>
            </div>
            {/* Description Section */}
            <div className="lg:w-1/2 animate-slideUp animation-delay-400">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-purple-600">
                Who We Are
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
                WiseTech Pvt. Ltd, based in Pakistan, is a pioneering AI company
                dedicated to revolutionizing communication through advanced
                calling bots. Our mission is to empower businesses with
                seamless, high-quality voice interactions that enhance customer
                engagement and streamline operations.
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-purple-600">
                Our Vision
              </h2>
              <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                We envision a world where AI-driven communication is natural,
                efficient, and accessible to all. By leveraging cutting-edge
                technologies like natural language processing (NLP) and machine
                learning, we aim to set new standards in the industry, making
                every interaction meaningful and impactful.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
