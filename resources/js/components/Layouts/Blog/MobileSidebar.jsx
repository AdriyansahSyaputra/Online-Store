import React from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";

const MobileSidebar = ({ isOpen, setIsOpen, categories }) => {
    return (
        <>
            <div
                className={`fixed inset-y-0 right-0 min-w-80 sm:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                    isOpen ? "translate-x-0" : "translate-x-full"
                }`}
            >
                <div className="flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-200">
                        <h2 className="text-xl font-bold text-gray-800">
                            Filters
                        </h2>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            aria-label="Close filters"
                        >
                            <X size={24} className="text-gray-600" />
                        </button>
                    </div>
                    {/* Categories */}
                    <div className="flex-1 overflow-y-auto p-4">
                        {categories.map((category) => {
                            const Icon = category.icon;
                            return (
                                <div
                                    key={category.id}
                                    className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
                                            <Icon
                                                className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors duration-200"
                                                strokeWidth={2}
                                            />
                                        </div>
                                        <span className="text-slate-700 font-medium group-hover:text-slate-900">
                                            {category.name}
                                        </span>
                                    </div>

                                    <span className="text-sm text-slate-400 group-hover:text-indigo-600 transition-colors duration-200">
                                        {category.count} posts
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileSidebar;

MobileSidebar.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    categories: PropTypes.array.isRequired,
};