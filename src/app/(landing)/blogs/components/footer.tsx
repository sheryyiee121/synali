import { Users, Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const footerLinks = {
  Product: ["Features", "Pricing", "Influencer Discovery", "Analytics"],
  Company: ["About", "Blog", "Careers", "Contact"],
  Resources: ["Help Center", "Community", "Tutorials", "Case Studies"],
  Legal: ["Privacy", "Terms", "Security", "Compliance"],
};

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Users className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-indigo-800">Synli AI</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">
              Easy, affordable and effective marketing solution designed for small business owners.
              Transform your business with AI-powered influencer marketing.
            </p>
            <div className="flex space-x-4">
              <Twitter className="h-5 w-5 text-gray-500 hover:text-indigo-600 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-500 hover:text-indigo-600 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-500 hover:text-indigo-600 cursor-pointer transition-colors" />
              <Mail className="h-5 w-5 text-gray-500 hover:text-indigo-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-gray-800">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-200 pt-8 mt-16 text-center text-gray-500">
          <p>&copy; 2025 Synli AI by Cogni Norway AS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
