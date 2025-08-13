"use client";

import { MessageCircle } from "lucide-react";
import { useState } from "react";

export const FloatingChatButton = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleChatClick = () => {
        // You can customize this to open your preferred chat method
        // For now, it will open a simple alert
        alert("Chat functionality coming soon! Contact us at hello@synli.ai");

        // Alternative options:
        // - Open WhatsApp: window.open("https://wa.me/your-number", "_blank");
        // - Open email: window.open("mailto:hello@synli.ai", "_blank");
        // - Open contact form modal
        // - Integrate with your preferred chat service
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={handleChatClick}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative bg-indigo-600 hover:bg-indigo-700 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
                aria-label="Chat with us"
            >
                <MessageCircle className="w-6 h-6" />

                {/* Optional: Subtle pulse animation */}
                <div className="absolute inset-0 rounded-full bg-indigo-400 animate-ping opacity-20"></div>

                {/* Optional: Hover tooltip */}
                {isHovered && (
                    <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gray-800 text-white text-sm rounded-lg shadow-lg whitespace-nowrap">
                        Chat with us
                        <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                )}
            </button>
        </div>
    );
};
