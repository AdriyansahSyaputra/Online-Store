import React, { memo } from "react";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";

const CategoryList = memo(
    ({ categories, selectedCategories, handleCheckboxChange }) => {
        if (categories.length === 0) {
            return <div className="p-4 md:p-0">No categories available.</div>;
        }
        return (
            <div className="p-4 md:p-0">
                {categories.map((category) => (
                    <CategoryItem
                        key={category.id}
                        category={category}
                        selectedCategories={selectedCategories}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                ))}
            </div>
        );
    }
);

export default CategoryList;

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategories: PropTypes.array.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};
