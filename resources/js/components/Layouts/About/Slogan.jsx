import React from "react";

const Slogan = () => {
    return (
        <div className="my-20 bg-gradient-to-b from-white to-gray-50">
            <section
                className="relative py-24 md:py-28 overflow-hidden bg-cover bg-center opacity-80"
                style={{
                    backgroundImage: "url('/public/img/banner/about.jpg')",
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>

                {/* Content */}
                <div className="relative container mx-auto px-4 text-center">
                    <div className="max-w-4xl mx-auto">
                        <h1 className="text-2xl md:text-4xl font-bold text-white mb-8 leading-tight">
                            Transforming the Way Indonesia Shops Online
                        </h1>
                        <p className="text-base md:text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
                            Discover an unparalleled shopping experience
                            tailored for Indonesians. From advanced technology
                            to seamless transactions, we bring innovation to
                            your fingertips.
                        </p>
                        <div className="flex flex-wrap justify-center space-x-4">
                            <button className="px-6 py-2 bg-white text-indigo-600 text-sm md:text-base rounded-full font-semibold hover:bg-indigo-50 shadow-lg transition-all duration-300">
                                Learn More
                            </button>
                            <button className="px-6 py-2 bg-indigo-600 text-white text-sm md:text-base rounded-full font-semibold hover:bg-indigo-700 shadow-lg transition-all duration-300">
                                Start Shopping
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Slogan;