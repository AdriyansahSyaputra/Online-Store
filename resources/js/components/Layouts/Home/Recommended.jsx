import React, { useState, useEffect } from "react";
import HeaderSection from "../../Elements/HeaderSection";
import CardProduct from "../../Elements/CardProduct";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
        name: "Item 5",
        discount: "-35%",
        price: "$450",
        originalPrice: "$699",
        sold: "30/80",
        reviews: 90,
    },
    {
        id: 6,
        name: "Item 6",
        discount: "-35%",
        price: "$450",
        originalPrice: "$699",
        sold: "30/80",
        reviews: 90,
    },
    {
        id: 7,
        name: "Item 7",
        discount: "-35%",
        price: "$450",
        originalPrice: "$699",
        sold: "30/80",
        reviews: 90,
    },
    {
        id: 8,
        name: "Item 8",
        discount: "-35%",
        price: "$450",
        originalPrice: "$699",
        sold: "30/80",
        reviews: 90,
    },
];

const Recommended = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [visibleProducts, setVisibleProducts] = useState([]);
    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    // Handle window resize
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setIsTablet(window.innerWidth < 1024);
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Update visible products based on current slide and window width
    useEffect(() => {
        const itemsToShow = isMobile ? 2 : isTablet ? 4 : 6;
        const maxStartIndex = products.length - itemsToShow;

        if (currentSlide > maxStartIndex) {
            setCurrentSlide(maxStartIndex);
        }

        setVisibleProducts(products);
    }, [currentSlide, isMobile, isTablet]);

    const handlePrevSlide = () => {
        const itemsToShow = isMobile ? 2 : isTablet ? 4 : 6;
        setCurrentSlide((prev) =>
            prev === 0 ? products.length - itemsToShow : prev - 1
        );
    };

    const handleNextSlide = () => {
        const itemsToShow = isMobile ? 2 : isTablet ? 4 : 6;
        setCurrentSlide((prev) =>
            prev >= products.length - itemsToShow ? 0 : prev + 1
        );
    };

    const getItemWidth = () => {
        if (isMobile) return 50; // 2 columns
        if (isTablet) return 25; // 4 columns
        return 17; // 6 columns
    };

    return (
        <>
            <div className="max-w-[90%] md:max-w-7xl mx-auto md:px-10 mt-10 mb-10">
                {/* Header */}
                <HeaderSection title="Recommended For You" subTitle="See All" />

                {/* Card Section */}
                <div className="relative mt-2">
                    <div className="overflow-hidden">
                        {/* Sliding container */}
                        <div
                            className="flex transition-all duration-300 ease-in-out"
                            style={{
                                transform: `translateX(-${
                                    currentSlide * getItemWidth()
                                }%)`,
                            }}
                        >
                            {visibleProducts.map((product, index) => (
                                <div
                                    className="w-1/2 md:w-1/4 lg:w-1/6 flex-shrink-0 px-1"
                                    key={index}
                                >
                                    <CardProduct product={product} />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Arrow Navigation */}
                    <button
                        className="absolute top-1/2 -translate-y-1/2 left-0 p-2 -translate-x-4 bg-white rounded-full shadow hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10"
                        onClick={handlePrevSlide}
                    >
                        <ChevronLeft size={16} className="text-sm" />
                    </button>
                    <button
                        className="absolute top-1/2 -translate-y-1/2 right-0 p-2 translate-x-4 bg-white rounded-full shadow hover:bg-gray-100 transition-all duration-200 hover:scale-110 z-10"
                        onClick={handleNextSlide}
                    >
                        <ChevronRight size={16} />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Recommended;