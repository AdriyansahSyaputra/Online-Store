import React from "react";
import CategoryList from "../../../Fragments/CategoryList";

const DesktopSidebar = ({
    categories,
    selectedCategories,
    handleCheckboxChange,
}) => {
    return (
        <aside className="hidden md:block w-72 h-full rounded-lg sticky top-4 p-6 shadow-lg bg-white border border-gray-200">
            <h1 className="text-lg font-bold text-gray-800 tracking-wide">
                Product Categories
            </h1>
            <div className="mt-6">
                <CategoryList
                    categories={categories}
                    selectedCategories={selectedCategories}
                    handleCheckboxChange={handleCheckboxChange}
                />
            </div>
        </aside>
    );
};
export default DesktopSidebar;