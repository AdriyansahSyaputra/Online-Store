import React, { useState } from "react";
import { Link } from "@inertiajs/react";
import {
    House,
    Box,
    Info,
    ScrollText,
    SquareUserRound,
    Search,
    ShoppingCart,
    Mail,
    Bell,
    Menu,
} from "lucide-react";
import NavbarMobile from "./NavbarMobile";
import CartSidebarDesktop from "../../../Layouts/CartSidebarDesktop/CartSidebarDesktop";

const menuItems = [
    { title: "Home", icon: <House />, link: "/" },
    { title: "Product", icon: <Box />, link: "/product" },
    { title: "About", icon: <Info />, link: "/about" },
    { title: "Blog", icon: <ScrollText />, link: "/blogs" },
    { title: "Contact", icon: <SquareUserRound />, link: "/contact" },
];

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <>
            <header className="bg-white lg:border-b border-gray-200">
                <div className="mx-auto py-4">
                    <div className="flex flex-wrap items-center justify-between px-4 lg:px-10">
                        {/* Logo */}
                        <div className="flex-shrink-0 hidden lg:block">
                            <a
                                href="/"
                                className="font-semibold text-2xl text-amber-500"
                            >
                                PediaShop
                            </a>
                        </div>

                        {/* Search Input */}
                        <div className="flex-grow max-w-xl mx-4 hidden lg:block">
                            <form action="">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Search products..."
                                        className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-amber-500"
                                    >
                                        <Search size={20} />
                                    </button>
                                </div>
                            </form>
                        </div>

                        {/* Desktop Cart and Auth */}
                        <div className="hidden lg:flex items-center space-x-10 ">
                            <button
                                onClick={() => setIsCartOpen(true)}
                                className="text-slate-700 hover:text-amber-500 hidden lg:flex items-center relative"
                            >
                                <ShoppingCart size={20} />

                                {/* Badge for Cart */}

                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                    5
                                </span>
                            </button>
                            <button className="text-gray-600 hover:text-amber-500 relative">
                                <Mail size={20} />

                                {/* Badge for Messages */}
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                    0
                                </span>
                            </button>
                            <button className="text-gray-600 hover:text-amber-500 relative">
                                <Bell size={20} />

                                {/* Badge for Notifications */}
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                    0
                                </span>
                            </button>
                        </div>

                        {/* User Section */}
                        {/* <div className="hidden lg:flex relative ml-7 lg:ml-0">
                            <div
                                onClick={toggleDropdown}
                                className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg transition-all duration-300"
                            >
                                <img
                                    src={"default.jpg"}
                                    alt="Profile"
                                    className="w-10 h-10 rounded-full object-cover border-2 border-gray-300 group-hover:border-blue-500"
                                />
                                <div>
                                    <p className="text-sm font-semibold text-gray-800">
                                        Guest
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        Online
                                    </p>
                                </div>
                                <ChevronDown
                                    className={`w-4 h-4 ml-2 transform transition-transform ${
                                        isDropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </div>

                            {isDropdownOpen && (
                                <div className="absolute right-0 mt-16 w-56 bg-white shadow-xl rounded-lg border border-gray-100 z-50 overflow-hidden">
                                    <div className="px-4 py-3 border-b border-gray-200">
                                        <p className="text-sm font-medium text-gray-900">
                                            Guest
                                        </p>
                                        <p className="text-xs text-gray-500 truncate">
                                            johndoe@gmail.com
                                        </p>
                                    </div>
                                    <ul className="py-1">
                                        <li>
                                            <a
                                                href="/profile"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            >
                                                <User className="w-4 h-4 mr-2" />{" "}
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/settings"
                                                className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                                            >
                                                <Settings className="w-4 h-4 mr-2" />{" "}
                                                Settings
                                            </a>
                                        </li>
                                        <li>
                                            <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors">
                                                <Heart className="w-4 h-4 mr-2" />{" "}
                                                Wishlist
                                            </button>
                                        </li>
                                        <li>
                                            <hr className="my-1 border-gray-200" />
                                        </li>
                                        <li>
                                            <button className="flex items-center w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors">
                                                <LogOut className="w-4 h-4 mr-2" />{" "}
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div> */}

                        {/* Login Button */}
                        <div className="hidden lg:flex space-x-2">
                            <Link href="/login">
                                <button className="px-3 py-2 bg-teal-500 text-slate-100 rounded-md text-sm font-semibold hover:bg-teal-600">
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>

                    <div className="border-t hidden lg:block border-gray-200 mt-4"></div>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex mt-2 ">
                        <div className="mx-auto flex space-x-8 items-center">
                            {menuItems.map((item) => (
                                <Link
                                    href={item.link}
                                    key={item.title}
                                    className="text-slate-700 hover:text-amber-500 text-base font-medium"
                                >
                                    {item.title}
                                </Link>
                            ))}
                        </div>
                    </nav>

                    {/* Mobile View Top bar */}
                    <div className="lg:hidden flex items-center justify-between mt-4 px-4 lg:px-10">
                        {/* Search Input */}
                        <form action="" className="flex-grow mr-4">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search products..."
                                    className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-amber-500"
                                >
                                    <Search size={20} />
                                </button>
                            </div>
                        </form>

                        {/* Mobile Icons */}
                        <div className="flex items-center space-x-4">
                            <Link href="/cart">
                                <button className="text-slate-700 hover:text-amber-500 items-center relative">
                                    <ShoppingCart size={20} />

                                    {/* Badge for Cart */}

                                    <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                        5
                                    </span>
                                </button>
                            </Link>
                            <button className="text-gray-600 hover:text-amber-500 relative">
                                <Mail size={20} />

                                {/* Badge for Messages */}
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                    0
                                </span>
                            </button>
                            <button className="text-gray-600 hover:text-amber-500 relative">
                                <Bell size={20} />

                                {/* Badge for Notifications */}
                                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-amber-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
                                    0
                                </span>
                            </button>
                            <button
                                className="text-gray-600 hover:text-amber-500"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <Menu size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Bottom Sheet */}
                    <NavbarMobile
                        menuItems={menuItems}
                        setIsOpen={setIsOpen}
                        isOpen={isOpen}
                    />
                </div>
            </header>

            <CartSidebarDesktop
                isCartOpen={isCartOpen}
                setIsCartOpen={setIsCartOpen}
            />
        </>
    );
};

export default Navbar;
