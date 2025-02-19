import React from "react";

const Footer = () => {
    return (
        <>
            <div className="border-t border-gray-100 px-6 py-4 bg-white">
                <div className="mb-4 flex items-center justify-between">
                    <span className="text-gray-600">Total</span>
                    <span className="text-lg font-semibold text-gray-900">
                        $569
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button
                        className="px-4 py-2.5 rounded-lg text-indigo-600 bg-indigo-50 hover:bg-indigo-100 font-medium transition-colors duration-200"
                    >
                        Clear Cart
                    </button>
                    <button className="px-4 py-2.5 rounded-lg text-white bg-indigo-600 hover:bg-indigo-700 font-medium transition-colors duration-200">
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default Footer;