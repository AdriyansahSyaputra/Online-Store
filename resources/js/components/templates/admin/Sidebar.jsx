import React, { useState } from "react";
import {
    Menu,
    Package,
    User,
    Send,
    Percent,
    Truck,
    CreditCard,
    ScrollText,
    Settings,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import { Link } from "@inertiajs/react";

const menuItems = [
    {
        title: "Dashboard",
        icon: <Menu className="w-5 h-5" />,
        link: "/dashboard",
    },
    {
        title: "Product",
        icon: <Package className="w-5 h-5" />,
        link: "/dashboard/products",
    },
    {
        title: "User",
        icon: <User className="w-5 h-5" />,
        link: "/dashboard/users",
    },
    {
        title: "Discount",
        icon: <Percent className="w-5 h-5" />,
        link: "/dashboard/discount",
    },
    {
        title: "Order",
        icon: <Send className="w-5 h-5" />,
        link: "/dashboard/send",
    },
    {
        title: "Shipping",
        icon: <Truck className="w-5 h-5" />,
        link: "/dashboard/shipping",
    },
    {
        title: "Payment",
        icon: <CreditCard className="w-5 h-5" />,
        link: "/dashboard/payment",
    },
    {
        title: "Report & Analytics",
        icon: <ScrollText className="w-5 h-5" />,
        link: "/dashboard/reports",
    },
    {
        title: "Settings",
        icon: <Settings className="w-5 h-5" />,
        link: "/dashboard/settings",
    },
];

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }) => {
    const [activeItem, setActiveItem] = useState("/dashboard");

    return (
        <aside
            className={`bg-white flex flex-col fixed inset-y-0 shadow-lg transition-all duration-300 ease-in-out ${
                isSidebarOpen ? "w-60" : "w-20"
            }`}
        >
            <div className="py-6 px-4 flex items-center justify-between border-b border-gray-100">
                {isSidebarOpen && (
                    <h1 className="text-xl font-bold text-indigo-600">
                        Shopify
                    </h1>
                )}
                {!isSidebarOpen && (
                    <div className="mx-auto">
                        <h1 className="text-xl font-bold text-indigo-600">S</h1>
                    </div>
                )}

                {/* Tombol Chevron untuk buka/tutup sidebar */}
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="p-2 rounded-full hover:bg-gray-100 text-gray-600 transition-all"
                >
                    {isSidebarOpen ? (
                        <ChevronLeft className="w-5 h-5" />
                    ) : (
                        <ChevronRight className="w-5 h-5" />
                    )}
                </button>
            </div>

            <div className="flex-1 py-4 overflow-y-auto scrollbar-thin">
                <nav className="space-y-1 px-2">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.link}
                            onClick={() => setActiveItem(item.link)}
                            className={`flex items-center ${
                                isSidebarOpen
                                    ? "justify-start"
                                    : "justify-center"
                            } gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                                activeItem === item.link
                                    ? "bg-indigo-50 text-indigo-600"
                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }`}
                        >
                            <div
                                className={
                                    activeItem === item.link
                                        ? "text-indigo-600"
                                        : "text-gray-500"
                                }
                            >
                                {item.icon}
                            </div>

                            {isSidebarOpen && (
                                <span
                                    className={`${
                                        activeItem === item.link
                                            ? "font-medium"
                                            : ""
                                    }`}
                                >
                                    {item.title}
                                </span>
                            )}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* User Section */}
            <div className="p-4 border-t border-gray-100">
                <div
                    className={`flex ${
                        isSidebarOpen ? "justify-start" : "justify-center"
                    }`}
                >
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <User className="w-4 h-4 text-indigo-600" />
                    </div>
                    {isSidebarOpen && (
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700">
                                Admin User
                            </p>
                            <p className="text-xs text-gray-500">
                                admin@example.com
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
