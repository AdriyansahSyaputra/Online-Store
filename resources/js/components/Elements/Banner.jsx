import React from "react";
import PropTypes from "prop-types";

const Banner = ({ image, title, subtitle }) => {
    return (
        <>
            <div className="max-w-full relative h-80 md:h-[450px] bg-teal-00">
                <div className="absolute inset-0">
                    <img
                        src={image}
                        alt="Banner"
                        className="w-full h-full object-cover opacity-50 filter"
                    />
                </div>
                <div className="relative max-w-7xl mx-auto py-28 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-slate-100">
                            {title}
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl md:max-w-3xl mx-auto text-slate-100 px-4">
                            {subtitle}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
};