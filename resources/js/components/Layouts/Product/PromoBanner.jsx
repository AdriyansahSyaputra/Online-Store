import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const bannerPromo = [
    {
        id: 1,
        name: "Tech Promo 1",
        image: "/assets/img/banner/about.jpg",
    },
    {
        id: 2,
        name: "Tech Promo 2",
        image: "/assets/img/banner.png",
    },
    {
        id: 3,
        name: "Tech Promo 3",
        image: "/assets/img/banner/about.jpg",
    },
    {
        id: 4,
        name: "Tech Promo 4",
        image: "/assets/img/banner.png",
    },
    {
        id: 5,
        name: "Tech Promo 5",
        image: "/assets/img/banner/about.jpg",
    },
];

const PromoBanner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === bannerPromo.length - 1 ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? bannerPromo.length - 1 : prev - 1
        );
    };

    // Auto-slide effect
    useEffect(() => {
        let slideInterval;

        if (!isHovered) {
            slideInterval = setInterval(() => {
                nextSlide();
            }, 5000);
        }

        return () => {
            if (slideInterval) {
                clearInterval(slideInterval);
            }
        };
    }, [isHovered]);

    return (
        <div className="max-w-full my-2 px-4 md:px-10">
            <div
                className="relative h-64 md:h-72 rounded-md overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Images */}
                <div
                    className="w-full h-full transition-transform duration-500 ease-in-out"
                    style={{
                        display: "flex",
                        transform: `translateX(-${currentSlide * 100}%)`,
                    }}
                >
                    {bannerPromo.map((banner) => (
                        <div
                            key={banner.id}
                            className="min-w-full h-full relative flex-shrink-0"
                        >
                            <img
                                src={banner.image}
                                alt={banner.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <button
                    className={`absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 
            transition-all duration-300 hover:scale-105 text-slate-600
            ${
                isHovered
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-full opacity-0"
            }`}
                    onClick={prevSlide}
                >
                    <ChevronLeft size={25} />
                </button>
                <button
                    className={`absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 rounded-full p-2 
            transition-all duration-300 hover:scale-105 text-slate-600
            ${
                isHovered
                    ? "translate-x-0 opacity-100"
                    : "translate-x-full opacity-0"
            }`}
                    onClick={nextSlide}
                >
                    <ChevronRight size={25} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {bannerPromo.map((_, index) => (
                        <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-300
                ${currentSlide === index ? "bg-white w-4" : "bg-white/50"}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PromoBanner;