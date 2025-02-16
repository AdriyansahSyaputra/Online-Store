import React, { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import {
    X,
    User,
    Settings,
    Heart,
    LogOut,
} from "lucide-react";
import PropTypes from "prop-types";
import imageDefault from "../../../../assets/img/default.jpg";

const NavbarMobile = ({ menuItems, setIsOpen, isOpen }) => {
    const accountMenu = [
        { title: "Profile", icon: <User />, link: "/profile" },
        { title: "Settings", icon: <Settings />, link: "/settings" },
        { title: "Wishlist", icon: <Heart />, link: "/wishlist" },
    ];

    return (
        <>
            {/* Sidebar Mobile*/}
            <div
                className={`fixed inset-x-0 bottom-0 top-0 bg-white transform max-h-full ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                } transition-transform duration-300 ease-in-out lg:hidden z-50`}
            >
                {/* Mobile Menu Header */}
                <div className="flex justify-end items-center px-6 py-4">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="text-gray-600 hover:text-amber-500"
                    >
                        <X size={24} />
                    </button>
                </div>

                {/* Profile Account */}
                
                    <div className="flex items-center space-x-4 px-6 py-4 border-b border-gray-200">
                        <img
                            src={ imageDefault }
                            alt="Profile"
                            className="w-10 h-10 rounded-lg object-cover border-2 border-gray-300 group-hover:border-blue-500"
                        />
                        <div>
                            <p className="text-sm font-semibold text-gray-800">
                                {"Guest"}
                            </p>
                            <p className="text-xs text-gray-500">
                                email@gmail.com
                            </p>
                        </div>
                    </div>
                
                    {/* <div className="lg:block px-6 border-b border-gray-200 pb-4">
                        <Link to="/login">
                            <button className="px-3 py-2 bg-teal-500 text-slate-100 rounded-md text-sm font-semibold hover:bg-teal-600">
                                Login
                            </button>
                        </Link>
                    </div> */}
            

                {/* Mobile Menu Items */}
                <div
                    className="py-4 h-full"
                    style={{ maxHeight: "calc(70vh - 100px)" }}
                >
                    {/* Menu Items */}
                    <div className="px-6">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">
                            Menu
                        </h2>
                        {menuItems.map((item) => (
                            <div
                                key={item.title}
                                className="flex items-center py-2 hover:bg-gray-100 space-x-4"
                            >
                                <span className="w-5 h-5 text-gray-500">
                                    {item.icon}
                                </span>
                                <a
                                    href={item.link}
                                    className="text-slate-600 hover:text-amber-500 text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Account menu */}
                    <div className="px-6 border-t border-gray-200 py-4 mt-4">
                        <h2 className="text-lg font-semibold text-gray-700 mb-2">
                            Account
                        </h2>
                        {accountMenu.map((item) => (
                            <div
                                key={item.title}
                                className="flex items-center py-2 hover:bg-gray-100 space-x-4"
                            >
                                <span className="w-5 h-5 text-gray-500">
                                    {item.icon}
                                </span>
                                <a
                                    href={item.link}
                                    className="text-slate-600 hover:text-amber-500 text-base font-medium"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.title}
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Logout Button */}

                    <div className="bottom-0 px-6 absolute w-full border-t border-gray-200">
                        <button
                            className="w-full flex items-center space-x-4 py-2 hover:bg-gray-100 my-4"
                        >
                            <LogOut size={20} />
                            <span className="text-slate-600 hover:text-red-500 text-base font-medium">
                                Logout
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavbarMobile;

NavbarMobile.propTypes = {
    menuItems: PropTypes.array.isRequired,
    handleLogout: PropTypes.func.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};
