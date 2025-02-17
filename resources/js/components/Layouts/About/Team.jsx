import React, { useState, useEffect } from "react";
import { ChevronRight, ChevronLeft } from "lucide-react";

const teams = [
    {
        id: 1,
        name: "John Doe",
        role: "Ceo",
        image: "/assets/img/team/1.jpg",
    },
    {
        id: 2,
        name: "John Wick",
        role: "Founder",
        image: "/assets/img/team/1.jpg",
    },
    {
        id: 3,
        name: "Jessica Doe",
        role: "Manager",
        image: "/assets/img/team/1.jpg",
    },
    {
        id: 4,
        name: "Clarista De Jong",
        role: "Ceo",
        image: "/assets/img/team/1.jpg",
    },
];

const Team = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [slidesToShow, setSlidesToShow] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
            } else if (window.innerWidth < 1024) {
                setSlidesToShow(2);
            } else {
                setSlidesToShow(4);
            }
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) => {
            const maxIndex = Math.ceil(teams.length / slidesToShow) - 1;

            return prev >= maxIndex ? 0 : prev + 1;
        });
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => {
            const maxIndex = Math.ceil(teams.length / slidesToShow) - 1;
            return prev <= 0 ? maxIndex : prev - 1;
        });
    };

    return (
        <section className="py-16 mb-20 px-4 md:px-10 bg-white">
            {/* Header */}
            <div className="max-w-3xl mx-auto text-center mb-12">
                <span className="text-orange-600 font-semibold tracking-wider uppercase text-sm">
                    Our Team
                </span>
                <h2 className="mt-2 text-4xl font-bold text-gray-900">
                    Meet Our Experts
                </h2>
                <p className="mt-4 text-gray-500 leading-relaxed">
                    Our team of dedicated professionals brings together years of
                    experience and expertise to deliver exceptional results for
                    our clients.
                </p>
            </div>

            {/* Team Cards Container */}
            <div className="relative max-w-7xl mx-auto overflow-hidden px-8">
                <div
                    className="flex transition-all duration-500 ease-in-out"
                    style={{
                        transform: `translateX(-${currentIndex * 100}%)`,
                    }}
                >
                    {teams.map((member) => (
                        <div
                            key={member.id}
                            className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 px-4"
                            style={{
                                transition: "all 0.5s ease-in-out",
                            }}
                        >
                            <div className="group flex flex-col items-center">
                                <div className="relative mb-4 w-48 h-48 mx-auto">
                                    <div className="absolute inset-0 rounded-full border-2 border-orange-200 transform group-hover:scale-105 transition-transform duration-200" />
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-full h-full object-cover rounded-full"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900 text-center">
                                    {member.name}
                                </h3>
                                <p className="mt-1 text-sm font-medium text-orange-600 text-center">
                                    {member.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation Buttons */}
                <div className="lg:hidden">
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 -translate-y-1/2 left-0 md:left-2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-6 h-6 text-gray-600" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 -translate-y-1/2 right-0 md:right-2 p-3 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500 z-10"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-6 h-6 text-gray-600" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Team;