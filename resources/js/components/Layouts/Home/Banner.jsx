import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            category: "TOP TRENDING",
            title: "Trending",
            subtitle: "Your New Style",
            description: "Limited Time: Online Only!",
            image: "/api/placeholder/600/600",
            buttonText: "SHOP NOW",
        },
        {
            title: "Top Offer",
            subtitle: "Ipad Pro 128GB",
            description: "Discount 20% On Products",
            image: "/api/placeholder/400/400",
        },
        {
            title: "Gamepad",
            subtitle: "Sport Edition 2022",
            description: "Best Choice Of The Year",
            image: "/api/placeholder/400/400",
        },
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="container mx-auto p-4 py-6 bg-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:px-10">
                {/* Main Slider */}
                <div className="md:col-span-2 relative">
                    <div className="bg-purple-900 rounded-2xl p-8 relative overflow-hidden min-h-[400px]">
                        {/* Content */}
                        <div className="relative ml-10 z-10">
                            <div className="text-yellow-400 font-bold mb-2">
                                {slides[0].category}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {slides[0].title}
                            </h1>
                            <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
                                {slides[0].subtitle}
                            </h2>
                            <p className="text-white mb-6">
                                {slides[0].description}
                            </p>
                            <button className="bg-white text-purple-900 px-6 py-2 rounded-full font-bold hover:bg-gray-100 transition-colors">
                                {slides[0].buttonText}
                            </button>
                        </div>

                        {/* Navigation Buttons */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center text-white hover:bg-purple-800/75 transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-purple-800/50 rounded-full flex items-center justify-center text-white hover:bg-purple-800/75 transition-colors"
                        >
                            <ChevronRight size={24} />
                        </button>

                        {/* Dots */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`w-2 h-2 rounded-full transition-colors ${
                                        currentSlide === index
                                            ? "bg-white"
                                            : "bg-white/50"
                                    }`}
                                    onClick={() => setCurrentSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Side Cards */}
                <div className="space-y-4">
                    {/* iPad Card */}
                    <div className="bg-purple-900 rounded-2xl p-6 relative overflow-hidden">
                        <div className="relative ml-6 z-10">
                            <h3 className="text-2xl font-bold text-white mb-1">
                                {slides[1].title}
                            </h3>
                            <h4 className="text-xl font-bold text-yellow-400 mb-2">
                                {slides[1].subtitle}
                            </h4>
                            <p className="text-white text-sm">
                                {slides[1].description}
                            </p>
                        </div>
                    </div>

                    {/* Gamepad Card */}
                    <div className="bg-red-500 rounded-2xl p-6 relative overflow-hidden">
                        <div className="relative ml-6 z-10">
                            <h3 className="text-2xl font-bold text-white mb-1">
                                {slides[2].title}
                            </h3>
                            <h4 className="text-xl font-bold text-yellow-400 mb-2">
                                {slides[2].subtitle}
                            </h4>
                            <p className="text-white text-sm">
                                {slides[2].description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;