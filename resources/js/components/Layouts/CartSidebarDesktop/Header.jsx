import React from "react";
import { ShoppingBag, X } from "lucide-react";
import PropTypes from "prop-types";

const Header = ({ setIsCartOpen, isCartOpen }) => {
    return (
        <div className="px-6 py-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <ShoppingBag className="text-indigo-600 w-5 h-5" />
                    <h1 className="text-xl font-semibold text-gray-800">
                        Your Cart
                    </h1>
                </div>
                <button
                    onClick={() => setIsCartOpen(!isCartOpen)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                >
                    <X className="w-5 h-5 text-gray-500" />
                </button>
            </div>
        </div>
    );
};

export default Header;

Header.propTypes = {
    setIsCartOpen: PropTypes.func.isRequired,
    isCartOpen: PropTypes.bool.isRequired,
};