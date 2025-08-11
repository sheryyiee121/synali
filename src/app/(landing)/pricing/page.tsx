import React from "react";
import Navbar from "../../components/layout/header";
import Footer from "../../components/layout/footer";

const Pricing = () => {
  const pricingTiers = [
    {
      name: "Basic",
      price: "$9/month",
      features: [
        "Up to 100 calls/month",
        "Standard voice quality",
        "Basic support",
        "1 voice customization",
      ],
      buttonText: "Get Started",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
    {
      name: "Pro",
      price: "$29/month",
      features: [
        "Up to 500 calls/month",
        "Premium voice quality",
        "Priority support",
        "5 voice customizations",
        "Campaign adaptability",
      ],
      buttonText: "Upgrade Now",
      buttonColor: "bg-teal-400 hover:bg-teal-500",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      features: [
        "Unlimited calls",
        "Best-in-class voice quality",
        "Dedicated support",
        "Unlimited voice customizations",
        "Advanced analytics",
        "Custom integrations",
      ],
      buttonText: "Contact Us",
      buttonColor: "bg-purple-600 hover:bg-purple-700",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="bg-white text-black min-h-screen font-poppins py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-20 animate-slideUp">
            Pricing Plans
          </h1>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 lg:gap-16 animate-slideUp animation-delay-200">
            {pricingTiers.map((tier) => (
              <div
                key={tier.name}
                className={`flex flex-col items-center p-6 sm:p-8 border rounded-lg shadow-md transition-all duration-300 bg-white w-full lg:w-1/4 ${
                  tier.highlighted
                    ? "lg:scale-110 lg:z-10 border-gray-300 hover:border-purple-600"
                    : "border-gray-300 hover:border-purple-600"
                }`}
                style={{ transformOrigin: "center" }}
              >
                <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                  {tier.name}
                </h2>
                <p className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">
                  {tier.price}
                </p>
                <ul className="text-gray-600 text-base sm:text-lg space-y-6 mb-8 sm:mb-10 text-center">
                  {tier.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex flex-col items-center text-center"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600 mb-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`${tier.buttonColor} text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-full transform hover:scale-105 transition-transform duration-300`}
                >
                  {tier.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Pricing;
