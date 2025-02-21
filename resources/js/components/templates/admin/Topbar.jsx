import React, { useState, useRef, useEffect } from "react";
import {
    Search,
    Bell,
    ChevronDown,
    ChevronUp,
    MessageSquareText,
    User,
    Settings,
    LogOut,
    Sun,
    Moon,
} from "lucide-react";

const Topbar = () => {
    const [showProfileDropdown, setShowProfileDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showMessages, setShowMessages] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const profileRef = useRef(null);
    const notificationRef = useRef(null);
    const messageRef = useRef(null);

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                profileRef.current &&
                !profileRef.current.contains(event.target)
            ) {
                setShowProfileDropdown(false);
            }
            if (
                notificationRef.current &&
                !notificationRef.current.contains(event.target)
            ) {
                setShowNotifications(false);
            }
            if (
                messageRef.current &&
                !messageRef.current.contains(event.target)
            ) {
                setShowMessages(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="w-full h-16 bg-white shadow-sm flex items-center px-6 sticky top-0 z-10">
            <div className="flex items-center justify-between w-full">
                <div className="relative">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="w-64 md:w-96 h-10 border border-gray-200 rounded-lg pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-indigo-100 focus:border-indigo-300 transition-all"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>

                <div className="flex items-center gap-4">
                    {/* Theme Toggle */}
                    <button
                        onClick={() => setDarkMode(!darkMode)}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                        {darkMode ? (
                            <Sun className="w-5 h-5 text-gray-600" />
                        ) : (
                            <Moon className="w-5 h-5 text-gray-600" />
                        )}
                    </button>

                    {/* Notifications */}
                    <div className="relative" ref={notificationRef}>
                        <button
                            className={`p-2 rounded-full ${
                                showNotifications
                                    ? "bg-indigo-50"
                                    : "hover:bg-gray-100"
                            } transition-colors relative`}
                            onClick={() =>
                                setShowNotifications(!showNotifications)
                            }
                        >
                            <Bell
                                className={`w-5 h-5 ${
                                    showNotifications
                                        ? "text-indigo-500"
                                        : "text-gray-600"
                                }`}
                            />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        {showNotifications && (
                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                                <div className="px-4 py-2 border-b border-gray-100">
                                    <h3 className="font-medium text-gray-700">
                                        Notifications
                                    </h3>
                                </div>
                                <div className="max-h-72 overflow-y-auto">
                                    {[1, 2, 3].map((item) => (
                                        <div
                                            key={item}
                                            className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50"
                                        >
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0 bg-indigo-100 rounded-full p-2">
                                                    <Bell className="h-4 w-4 text-indigo-600" />
                                                </div>
                                                <div className="ml-3 w-0 flex-1">
                                                    <p className="text-sm font-medium text-gray-700">
                                                        New order received
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Order #12345 needs your
                                                        attention
                                                    </p>
                                                    <p className="text-xs text-gray-400 mt-1">
                                                        2 min ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="px-4 py-2 border-t border-gray-100">
                                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                                        View all notifications
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Messages */}
                    <div className="relative" ref={messageRef}>
                        <button
                            className={`p-2 rounded-full ${
                                showMessages
                                    ? "bg-indigo-50"
                                    : "hover:bg-gray-100"
                            } transition-colors relative`}
                            onClick={() => setShowMessages(!showMessages)}
                        >
                            <MessageSquareText
                                className={`w-5 h-5 ${
                                    showMessages
                                        ? "text-indigo-500"
                                        : "text-gray-600"
                                }`}
                            />
                            <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                        </button>

                        {showMessages && (
                            <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                                <div className="px-4 py-2 border-b border-gray-100">
                                    <h3 className="font-medium text-gray-700">
                                        Messages
                                    </h3>
                                </div>
                                <div className="max-h-72 overflow-y-auto">
                                    {[1, 2].map((item) => (
                                        <div
                                            key={item}
                                            className="px-4 py-3 hover:bg-gray-50 border-b border-gray-50"
                                        >
                                            <div className="flex items-start">
                                                <div className="flex-shrink-0">
                                                    <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center">
                                                        <User className="h-4 w-4 text-gray-600" />
                                                    </div>
                                                </div>
                                                <div className="ml-3 w-0 flex-1">
                                                    <p className="text-sm font-medium text-gray-700">
                                                        Jane Doe
                                                    </p>
                                                    <p className="text-xs text-gray-500 truncate">
                                                        Can you check the latest
                                                        design updates?
                                                    </p>
                                                    <p className="text-xs text-gray-400 mt-1">
                                                        5 min ago
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="px-4 py-2 border-t border-gray-100">
                                    <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium">
                                        View all messages
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Line Vertical */}
                <div className="w-px h-8 bg-gray-200 mx-4 hidden md:block"></div>

                {/* Profile Account */}
                <div className="relative" ref={profileRef}>
                    <button
                        className="flex items-center gap-3 py-1 px-2 rounded-lg hover:bg-gray-50 transition-colors"
                        onClick={() =>
                            setShowProfileDropdown(!showProfileDropdown)
                        }
                    >
                        <div className="w-8 h-8 rounded-full bg-indigo-100 overflow-hidden flex items-center justify-center">
                            <img
                                src="/api/placeholder/32/32"
                                alt="John Doe"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div className="hidden md:block text-left">
                            <p className="text-sm font-medium text-gray-700">
                                John Doe
                            </p>
                            <p className="text-xs text-gray-500">
                                Administrator
                            </p>
                        </div>
                        {showProfileDropdown ? (
                            <ChevronUp className="w-4 h-4 text-gray-500" />
                        ) : (
                            <ChevronDown className="w-4 h-4 text-gray-500" />
                        )}
                    </button>

                    {showProfileDropdown && (
                        <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 border border-gray-100">
                            <div className="px-4 py-2 border-b border-gray-100 md:hidden">
                                <p className="text-sm font-medium text-gray-700">
                                    John Doe
                                </p>
                                <p className="text-xs text-gray-500">
                                    Administrator
                                </p>
                            </div>

                            <a
                                href="/profile"
                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <User className="w-4 h-4 text-gray-500" />
                                <span>Profile</span>
                            </a>

                            <a
                                href="/settings"
                                className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                            >
                                <Settings className="w-4 h-4 text-gray-500" />
                                <span>Settings</span>
                            </a>

                            <div className="border-t border-gray-100 my-1"></div>

                            <a
                                href="/logout"
                                className="flex items-center gap-3 px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                            >
                                <LogOut className="w-4 h-4 text-red-500" />
                                <span>Logout</span>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Topbar;