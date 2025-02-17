import React from "react";
import PropTypes from "prop-types";
import { SlidersHorizontal } from "lucide-react";

const MobileFilterButton = ({ setIsOpen }) => {
    return (
        <>
            <div className="md:hidden sticky top-0 z-30 pt-4">
                <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 mb-4">
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center space-x-2 focus:outline-none active:bg-gray-100 rounded-md px-2 py-1 transition-colors"
                    >
                        <SlidersHorizontal
                            size={20}
                            className="text-gray-700"
                        />
                        <span className="font-medium text-gray-700">
                            Filters
                        </span>
                    </button>
                    <span className="text-sm font-medium text-gray-600">
                        44 Blogs
                    </span>
                </div>
            </div>
        </>
    );
};

export default MobileFilterButton;

MobileFilterButton.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
};