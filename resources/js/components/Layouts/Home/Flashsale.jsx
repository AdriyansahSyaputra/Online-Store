import React, { useState, useEffect } from "react";
import { AlarmClock, Heart, ChevronRight, ChevronLeft } from "lucide-react";

const products = [
    {
        id: 1,
        name: "Laptop",
        discount: "-41%",
        price: "$555",
        originalPrice: "$899",
        sold: "56/100",
        reviews: 200,
    },
    {
        id: 2,
        name: "Phone",
        discount: "-30%",
        price: "$299",
        originalPrice: "$399",
        sold: "40/100",
        reviews: 150,
    },
    {
        id: 3,
        name: "Headphones",
        discount: "-20%",
        price: "$99",
        originalPrice: "$125",
        sold: "25/50",
        reviews: 80,
    },
    {
        id: 4,
        name: "Camera",
        discount: "-35%",
        price: "$450",
        originalPrice: "$699",
        sold: "30/80",
        reviews: 90,
    },
    {
        id: 5,
        name: "Tablet",
        discount: "-25%",
        price: "$250",
        originalPrice: "$349",
        sold: "40/100",
        reviews: 120,
    },
];

const Flashsale = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [countdown, setCountdown] = useState({
        days: 3,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Handle countdown timer
    useEffect(() => {
        const getInitialTime = () => {
            const savedEndTime = localStorage.getItem("flashSaleEndTime");
            if (savedEndTime) {
                const remaining = parseInt(savedEndTime) - Date.now();
                if (remaining > 0) {
                    return parseInt(savedEndTime);
                }
            }
            // Set new end time (current time + 3 days)
            const newEndTime = Date.now() + 3 * 24 * 60 * 60 * 1000;
            localStorage.setItem("flashSaleEndTime", newEndTime.toString());
            return newEndTime;
        };

        const endTime = getInitialTime();

        const updateCountdown = () => {
            const now = Date.now();
            const remaining = endTime - now;

            if (remaining <= 0) {
                // Reset timer when it reaches zero
                localStorage.removeItem("flashSaleEndTime");
                const newEndTime = Date.now() + 3 * 24 * 60 * 60 * 1000;
                localStorage.setItem("flashSaleEndTime", newEndTime.toString());
                return;
            }

            const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor(
                (remaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            const minutes = Math.floor(
                (remaining % (1000 * 60 * 60)) / (1000 * 60)
            );
            const seconds = Math.floor((remaining % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });
        };

        const timer = setInterval(updateCountdown, 1000);
        return () => clearInterval(timer);
    }, []);

    // Resize handling
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Visible products and slide management
    useEffect(() => {
        const itemsToShow = isMobile ? 2 : 3;
        const maxStartIndex = products.length - itemsToShow;

        if (currentSlide > maxStartIndex) {
            setCurrentSlide(maxStartIndex);
        }
    }, [currentSlide, isMobile]);

    // Slide navigation
    const handlePrevSlide = () => {
        const itemsToShow = isMobile ? 2 : 3;
        setCurrentSlide((prev) =>
            prev === 0 ? products.length - itemsToShow : prev - 1
        );
    };

    const handleNextSlide = () => {
        const itemsToShow = isMobile ? 2 : 3;
        setCurrentSlide((prev) =>
            prev >= products.length - itemsToShow ? 0 : prev + 1
        );
    };

    const getItemWidth = () => {
        if (isMobile) return 50; // 2 columns
        return 33.33; // 3 columns
    };

    const padNumber = (num) => String(num).padStart(2, "0");

    return (
        <div className="max-w-[90%] md:max-w-7xl mx-auto bg-white md:px-10 mt-10 mb-10">
            {/* Header Flash Sale */}
            <div className="p-4 flex-1 md:flex items-center justify-between border-b-2 md:mb-2 border-orange-600">
                <div className="flex mb-1 md:mb-0">
                    <AlarmClock size={25} className="text-orange-600" />
                    <h1 className="text-lg md:text-xl font-bold ml-2 text-orange-600">
                        Flash Sale
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row items-start md:items-center">
                    <h1 className="text-sm md:text-base font-semibold text-gray-600">
                        Offers ends in:{" "}
                    </h1>
                    <div className="md:ml-2 space-x-2 mt-3 md:mt-0">
                        <span className="text-base font-semibold text-white bg-orange-600 px-3 py-1 rounded">
                            {padNumber(countdown.days)}d
                        </span>
                        <span className="text-base font-semibold text-white bg-orange-600 px-3 py-1 rounded">
                            {padNumber(countdown.hours)}h
                        </span>
                        <span className="text-base font-semibold text-white bg-orange-600 px-3 py-1 rounded">
                            {padNumber(countdown.minutes)}m
                        </span>
                        <span className="text-base font-semibold text-white bg-orange-600 px-3 py-1 rounded">
                            {padNumber(countdown.seconds)}s
                        </span>
                    </div>
                </div>
            </div>

            {/* Content: Promo Banner and Product Cards */}
            <div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="flex flex-col lg:flex-row gap-6 mt-6">
                    {/* Promo Banner */}
                    <div className="lg:w-1/3 bg-blue-600 text-white p-8 rounded-lg flex flex-col justify-center">
                        <h1 className="text-3xl font-bold mb-4">HURRY UP</h1>
                        <div className="flex items-baseline gap-1">
                            <span className="text-2xl">SAVE UP TO</span>
                            <span className="text-7xl font-bold">80%</span>
                        </div>
                        <div className="text-lg mt-2 mb-6">
                            THIS WEEK ONLY SHOPPING DAYS
                        </div>
                        <div className="text-8xl font-bold">12.12</div>
                    </div>

                    {/* Product Cards Container */}
                    <div className="lg:w-2/3 relative ">
                        {/* Product Cards Grid */}
                        <div className="overflow-hidden">
                            <div
                                className="flex transition-transform duration-300"
                                style={{
                                    transform: `translateX(-${
                                        currentSlide * getItemWidth()
                                    }%)`,
                                }}
                            >
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="bg-white rounded-lg shadow-md p-4 w-1/2 md:w-1/3 flex-shrink-0 px-2"
                                    >
                                        <div className="bg-red-500 text-white text-sm px-2 py-0.5 rounded w-fit mb-2">
                                            {product.discount}
                                        </div>

                                        <div className="relative mb-4">
                                            <img
                                                src="/assets/img/category/laptop.png"
                                                alt={product.name}
                                                className="w-full h-40 object-cover rounded-lg"
                                            />
                                            <button className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow hover:bg-gray-100">
                                                <Heart
                                                    size={18}
                                                    className="text-gray-400"
                                                />
                                            </button>
                                        </div>
                                        <h3 className="font-medium text-sm mb-2 line-clamp-2">
                                            {product.name}
                                        </h3>
                                        <div className="flex flex-col md:flex-row md:items-center gap-1 mb-2">
                                            <div className="flex text-yellow-400">
                                                {[...Array(5)].map((_, i) => (
                                                    <span key={i}>★</span>
                                                ))}
                                            </div>
                                            <span className="text-gray-500 text-xs md:text-sm">
                                                {product.reviews} reviews
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-blue-600 font-bold">
                                                {product.price}
                                            </span>
                                            <span className="text-gray-400 line-through text-sm">
                                                {product.originalPrice}
                                            </span>
                                        </div>
                                        <div className="text-sm text-gray-500 mb-4">
                                            Sold: {product.sold} products
                                        </div>
                                        <button className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                                            Add To Cart
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Arrows - Repositioned */}
                        {isHovered && (
                            <>
                                <button
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                                    onClick={handlePrevSlide}
                                >
                                    <ChevronLeft size={16} />
                                </button>
                                <button
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                                    onClick={handleNextSlide}
                                >
                                    <ChevronRight size={16} />
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Flashsale;