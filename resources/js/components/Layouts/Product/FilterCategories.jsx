import React from "react";
import PropTypes from "prop-types";
import DesktopSidebar from "./Filters/DesktopSidebar";
import MobileSidebar from "./Filters/MobileSidebar";
import FilterOverlay from "./Filters/FilterOverlay";
import MobileFilterButton from "./Filters/MobileFilterButton";

const FilterCategories = ({
    categories,
    selectedCategories,
    handleCheckboxChange,
    isOpen,
    setIsOpen,
    handleClearAll,
    handleApplyFilters,
}) => {
    return (
        <>
            {/* Desktop Sidebar */}
            <DesktopSidebar
                categories={categories}
                selectedCategories={selectedCategories}
                handleCheckboxChange={handleCheckboxChange}
            />

            {/* Mobile Filter Button */}
            <MobileFilterButton
                categories={categories}
                selectedCategories={selectedCategories}
                setIsOpen={setIsOpen}
            />

            {/* Mobile Sidebar */}
            <MobileSidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                categories={categories}
                selectedCategories={selectedCategories}
                handleCheckboxChange={handleCheckboxChange}
                handleClearAll={handleClearAll}
                handleApplyFilters={handleApplyFilters}
            />

            {/* Overlay */}
            <FilterOverlay isOpen={isOpen} setIsOpen={setIsOpen} />
        </>
    );
};

export default FilterCategories;

FilterCategories.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategories: PropTypes.array.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
    handleClearAll: PropTypes.func.isRequired,
    handleApplyFilters: PropTypes.func.isRequired,
};