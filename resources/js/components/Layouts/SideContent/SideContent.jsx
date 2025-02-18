import React from "react";
import PropsTypes from "prop-types";

const SideContent = ({ rounded, title, subHeading }) => {
    return (
        <>
            <div
                className={`hidden md:flex md:w-1/2 bg-blue-500 text-gray-900 h-full flex-col justify-between p-12 relative overflow-hidden ${rounded}`}
            >
                {/* Welcome Back Section */}
                <div className="flex flex-col space-y-2">
                    <h2 className="text-5xl font-bold tracking-tight text-white transform transition-all duration-300 hover:translate-x-2">
                        {title}
                    </h2>
                    <p className="text-white text-lg">{subHeading}</p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center items-center h-80">
                    <img
                        src="/assets/img/banner/interactions.png"
                        alt="Marketplace Interactions"
                        className="max-h-full max-w-full object-contain"
                    />
                </div>

                {/* Marketplace Description Section */}
                <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 transition-all duration-300 hover:shadow-2xl">
                    <blockquote className="relative pl-6 border-l-4 border-gray-300 text-xl font-medium text-gray-700">
                        <span className="absolute left-0 top-0 text-5xl text-gray-300 -ml-10 opacity-50">{`"`}</span>
                        Connect, Trade, Grow - Your Marketplace, Your
                        Opportunity
                    </blockquote>
                    <p className="text-sm mt-4 text-gray-600 tracking-wide">
                        Seamless transactions, endless possibilities. Join a
                        community that transforms connections into success.
                    </p>
                </div>
            </div>
        </>
    );
};

export default SideContent;

SideContent.propTypes = {
    rounded: PropsTypes.string,
    title: PropsTypes.string,
    subHeading: PropsTypes.string,
};
