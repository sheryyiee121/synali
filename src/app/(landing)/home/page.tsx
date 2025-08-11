"use client";
import { useState } from "react";
import Link from "next/link";

// Remove bot-related imports
// import MobileModal from "./components/mobile-modal";
// import Recordings from "./components/recordings";
// import WhyChooseUs from "./components/why-choose-us";

const Homepage = () => {
  // Remove showModal state
  // const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white text-black">
      {/* Hero Section */}
      <div className="min-h-[50vh] sm:min-h-[75vh] flex items-center justify-center px-6 sm:px-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 sm:mb-12 animate-slideUp text-indigo-800">
            Synli AI
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mx-auto mb-10 sm:mb-14 animate-slideUp animation-delay-200">
            Easy, affordable and effective marketing solution designed for small business owners. Presented by Haleema Saadia. Cogni Norway AS.
          </p>
          <Link
            href="/signup"
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 sm:py-4 sm:px-10 rounded-full transform hover:scale-105 transition-transform duration-300 animate-slideUp animation-delay-400"
          >
            Get Started
          </Link>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          A little bit about me & Cogni Norway
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-3xl mb-8 sm:mb-10 animate-slideUp animation-delay-200">
          // Add content from presentation about Haleema Saadia and Cogni Norway
          Haleema Saadia presenting Synli AI, an innovative AI tool from Cogni Norway AS.
        </p>
      </div>

      {/* Problems Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          Challenges Faced by Small Businesses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Missed Opportunities</h3>
            <p>Limited resources: Lack of budget and expertise for effective marketing.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Data Overload</h3>
            <p>Overwhelmed by data from multiple platforms.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Low ROI</h3>
            <p>Inefficient spending: Money wasted on underperforming campaigns.</p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          Our Solutions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Data Analysis and Insights</h3>
            <ul className="list-disc pl-6">
              <li>Campaign Performance Tracking</li>
              <li>Customer Segmentation</li>
              <li>Trend Identification</li>
              <li>Competitor Analysis</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Platform Selection and Optimization</h3>
            <ul className="list-disc pl-6">
              <li>Platform Recommendations</li>
              <li>Budget Allocation</li>
              <li>Ad Optimization</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Influencer Marketing</h3>
            <ul className="list-disc pl-6">
              <li>Influencer Discovery</li>
              <li>Budget-Based Recommendations</li>
              <li>Performance Tracking</li>
            </ul>
          </div>
          <div className="p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Reporting and Decision-Making</h3>
            <ul className="list-disc pl-6">
              <li>Customizable Dashboards</li>
              <li>Actionable Recommendations</li>
              <li>ROI Forecasting</li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-8 text-lg font-semibold">AFFORDABLE | USER FRIENDLY | TAILORED TO NORWAY</p>
      </div>

      {/* Why Influencer Niche */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          Why We Selected the Influencer Niche
        </h2>
        <ul className="list-decimal max-w-3xl mx-auto pl-6 space-y-4">
          <li>High Market Demand</li>
          <li>Lack of Affordable & AI-Driven Solutions</li>
          <li>Localized Advantage</li>
          <li>Competitive Edge: ROI Prediction, campaign automation</li>
          <li>Scalability & Future Growth</li>
        </ul>
      </div>

      {/* Customers Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          Who Are Our Customers?
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-3xl mb-8 sm:mb-10">
          Our primary customers are small and medium-sized businesses (SMEs) in Norway looking to leverage influencer marketing to enhance brand visibility, engagement, and sales. These include:
        </p>
        <ul className="list-disc max-w-3xl mx-auto pl-6 space-y-2">
          <li>Local businesses (cafés, boutiques, fitness studios, beauty salons, etc.)</li>
          <li>E-commerce brands selling fashion, beauty, tech, or lifestyle products</li>
          <li>Startups and entrepreneurs seeking affordable marketing solutions</li>
          <li>Marketing agencies managing influencer campaigns for clients</li>
          <li>Event organizers looking for local influencer partnerships</li>
        </ul>
      </div>

      {/* Pricing Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          How Much Do Customers Pay?
        </h2>
        <ul className="list-disc max-w-3xl mx-auto pl-6 space-y-4">
          <li>Freemium Plan: Free access to basic influencer discovery and analytics</li>
          <li>Pay-Per-Use Model: Businesses can pay per influencer collaboration or campaign
            <ul className="list-circle pl-6">
              <li>Micro Campaigns (1-2 influencers): NOK 1,500 – NOK 3,500</li>
              <li>Standard Campaigns (3-5 influencers): NOK 4,000 – NOK 8,000</li>
              <li>Premium Campaigns (5+ influencers with advanced AI insights): NOK 10,000+</li>
            </ul>
          </li>
          <li>Subscription Models (for agencies and frequent users):
            <ul className="list-circle pl-6">
              <li>Basic Plan: NOK 999/month (Limited influencer searches & campaign tracking)</li>
              <li>Pro Plan: NOK 2,499/month (Advanced AI analytics, ROI predictions, influencer vetting)</li>
              <li>Enterprise Plan: Custom pricing for large agencies and brands</li>
            </ul>
          </li>
          <li>Consulting Services</li>
        </ul>
      </div>

      {/* Competitors Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          Who Are the Competitors?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Global Platforms</h3>
            <ul className="list-disc pl-6">
              <li>Upfluence – AI-powered influencer search & campaign management</li>
              <li>Brandwatch – Influencer analytics for enterprise brands</li>
              <li>Influencity – Influencer discovery with engagement insights</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Nordic Competitors</h3>
            <ul className="list-disc pl-6">
              <li>Inzpire.me – Norway-based influencer marketing platform for large-scale campaigns</li>
              <li>United Influencers Oslo – Full-service agency connecting brands with influencers</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Competitive Advantage */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          Competitive Advantage
        </h2>
        <ul className="list-disc max-w-3xl mx-auto pl-6 space-y-4">
          <li>Built for SMEs: Unlike agency-driven competitors, our platform is designed for small businesses with flexible pricing and automation.</li>
          <li>Localized for Norway: AI models are trained in Norwegian language and market trends.</li>
          <li>Fraud Detection & ROI Prediction: Competitors lack robust AI for influencer credibility scoring and predictive campaign analytics.</li>
          <li>Affordable & Pay-Per-Use Options: Most existing tools require expensive monthly subscriptions or agency fees.</li>
        </ul>
      </div>

      {/* Sales & Marketing */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-white">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          Sales & Marketing
        </h2>
        <p className="text-gray-600 text-base sm:text-lg leading-relaxed text-center max-w-3xl mb-8 sm:mb-10">
          Norway has: High digital adoption, Sustainability-driven economy, Government support for innovation.
        </p>
        <h3 className="text-xl font-semibold mb-4 text-center">How will you market and sell the product?</h3>
        <ul className="list-decimal max-w-3xl mx-auto pl-6 space-y-2">
          <li>Content Marketing: Blog posts, videos, case studies</li>
          <li>Social Media Advertising: Targeted ads on Facebook, Instagram</li>
          <li>Partnerships: Collaborate with local business associations</li>
          <li>Free Trials: Attract users with demos</li>
        </ul>
        <p className="text-center mt-8">Norwegian businesses struggle to find local, credible influencers—Synli AI solves this pain point.</p>
        <p className="text-center">Influencer marketing is a $21 billion industry, growing rapidly.</p>
        <p className="text-center">Existing solutions are too complex or expensive for small businesses, creating a huge gap in the market.</p>
        <p className="text-center">63% of marketers are adopting AI in influencer campaigns, but few tools offer SME-friendly automation.</p>
      </div>

      {/* Challenges Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-gray-50">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 animate-slideUp text-indigo-800">
          Challenges
        </h2>
        <ul className="list-decimal max-w-3xl mx-auto pl-6 space-y-2">
          <li>Fake Followers & Engagement Fraud</li>
          <li>High Competition from Established Platforms</li>
          <li>Lack of Trust & Transparency</li>
          <li>Market Education & Adoption</li>
          <li>Budget Constraints of Small Businesses</li>
        </ul>
      </div>

      {/* Thank You Section */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-12 sm:py-20 bg-white text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 text-indigo-800">
          Thank you for your time
        </h2>
      </div>

      // Remove bot-related modal
      // {showModal && (
      //   <MobileModal showModal={showModal} setShowModal={setShowModal} />
      // )}

      // Remove bot sections
      // <Recordings />
      // <WhyChooseUs />
    </div>
  );
};

export default Homepage;
