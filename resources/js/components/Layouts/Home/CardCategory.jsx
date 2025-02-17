import React, { useState, useRef, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const CardCategory = () => {
    const scrollContainerRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [autoScrollPaused, setAutoScrollPaused] = useState(false);

    const categories = [
        {
            name: "Smartphone",
            image: "/assets/img/category/smartphone.png",
        },
        {
            name: "Laptop & Computer",
            image: "/assets/img/category/laptop.png",
        },
        {
            name: "Tablet",
            image: "/assets/img/category/tablet.png",
        },
        {
            name: "Television",
            image: "/assets/img/category/Television.png",
        },
        {
            name: "Headphone",
            image: "/assets/img/category/headphone.png",
        },
        {
            name: "Gamepad/Console",
            image: "/assets/img/category/gamepad.png",
        },
        {
            name: "Tools",
            image: "/assets/img/category/tools.png",
        },
        {
            name: "Smart Watch",
            image: "/assets/img/category/smartwatch.png",
        },
    ];

    // Auto scroll function
    useEffect(() => {
        let interval;
        if (!autoScrollPaused) {
            interval = setInterval(() => {
                if (scrollContainerRef.current) {
                    const container = scrollContainerRef.current;
                    const itemWidth = container.offsetWidth / 2; // 2 items at a time
                    const maxScroll =
                        container.scrollWidth - container.offsetWidth;

                    let newScrollPosition = container.scrollLeft + itemWidth;

                    // Reset to start if we reach the end
                    if (newScrollPosition >= maxScroll) {
                        newScrollPosition = 0;
                    }

                    container.scrollTo({
                        left: newScrollPosition,
                        behavior: "smooth",
                    });
                }
            }, 4000);
        }

        return () => clearInterval(interval);
    }, [autoScrollPaused]);

    // Mouse/Touch event handlers
    const handleMouseDown = (e) => {
        setIsDragging(true);
        setAutoScrollPaused(true);
        setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        setAutoScrollPaused(false);
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
        setAutoScrollPaused(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        e.preventDefault();
        const x = e.pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2; // Scroll speed multiplier
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    // Touch event handlers
    const handleTouchStart = (e) => {
        setIsDragging(true);
        setAutoScrollPaused(true);
        setStartX(e.touches[0].pageX - scrollContainerRef.current.offsetLeft);
        setScrollLeft(scrollContainerRef.current.scrollLeft);
    };

    const handleTouchMove = (e) => {
        if (!isDragging) return;

        const x = e.touches[0].pageX - scrollContainerRef.current.offsetLeft;
        const walk = (x - startX) * 2;
        scrollContainerRef.current.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        setAutoScrollPaused(false);
    };

    // Manual scroll buttons
    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const itemWidth = container.offsetWidth / 2;
            const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
            container.scrollBy({ left: scrollAmount, behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="max-w-[90%] md:max-w-7xl mx-auto px-4 lg:px-8 mt-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-xl md:text-2xl font-bold text-slate-800">
                        Browse by Category
                    </h1>

                    {/* Navigation arrows - only visible on mobile */}
                    <div className="flex gap-2 md:hidden">
                        <button
                            onClick={() => scroll("left")}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-slate-600" />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-slate-600" />
                        </button>
                    </div>
                </div>

                {/* Scrollable container */}
                <div
                    ref={scrollContainerRef}
                    className="overflow-x-auto md:overflow-visible hide-scrollbar cursor-grab active:cursor-grabbing"
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <div className="grid grid-flow-col md:grid-flow-row md:grid-cols-8 auto-cols-[25%] md:auto-cols-auto gap-4 md:gap-6">
                        {categories.map((category, index) => (
                            <div
                                key={index}
                                className="w-full mt-3 transform transition-transform duration-300"
                            >
                                <div className="flex flex-col items-center space-y-3">
                                    <div className="relative group">
                                        {/* Category circle with gradient background */}
                                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center shadow-sm transition-all duration-300 group-hover:shadow-md">
                                            {/* Hover ring effect */}
                                            <div className="absolute inset-0 rounded-full ring-2 ring-blue-400 opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300"></div>

                                            <img
                                                src={category.image}
                                                alt={category.name}
                                                className="w-12 h-12 md:w-14 md:h-14 object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                        </div>
                                    </div>

                                    <h2 className="text-xs md:text-base font-medium text-slate-700 text-center">
                                        {category.name}
                                    </h2>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardCategory;