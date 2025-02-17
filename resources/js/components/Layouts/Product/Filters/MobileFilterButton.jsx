import React from "react";

import { SlidersHorizontal } from "lucide-react";

const MobileFilterButton = ({ selectedCategories, categories, setIsOpen }) => {
    return (
        <div className="md:hidden sticky top-0 z-30 bg-gray-50 pt-4 px-4">
            <div className="flex items-center justify-between bg-white rounded-lg shadow-sm p-4 mb-4">
                <button
                    onClick={() => setIsOpen(true)}
                    className="flex items-center space-x-2 focus:outline-none active:bg-gray-100 rounded-md px-2 py-1 transition-colors"
                >
                    <SlidersHorizontal size={20} className="text-gray-700" />
                    <span className="font-medium text-gray-700">Filters</span>
                </button>
                <span className="text-sm font-medium text-gray-600">
                    {selectedCategories.length > 0
                        ? `${categories
                              .filter((category) =>
                                  selectedCategories.includes(category.name)
                              )
                              .reduce(
                                  (sum, category) => sum + category.count,
                                  0
                              )} Products`
                        : `${categories.reduce(
                              (sum, category) => sum + category.count,
                              0
                          )} Products`}
                </span>
            </div>
        </div>
    );
};
export default MobileFilterButton;