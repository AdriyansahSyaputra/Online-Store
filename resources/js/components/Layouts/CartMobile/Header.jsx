import React from "react";
import { ArrowLeft, Menu } from "lucide-react";
import PropTypes from "prop-types";

const Header = ({ setIsOpen, isOpen }) => {
    return (
        <>
            <div className="bg-white flex items-center justify-between border-b border-gray-200 shadow-sm py-4 px-3">
                <div className="flex items-center gap-2">
                    <button
                        onClick={() => window.history.back()}
                        className="w-5 h-5"
                    >
                        <ArrowLeft />
                    </button>
                    <h1 className="text-lg font-semibold text-gray-800">
                        Your Cart
                    </h1>
                </div>
                <div>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <Menu className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;

Header.propTypes = {
    setIsOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};