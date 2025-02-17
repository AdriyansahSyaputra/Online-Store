import React from "react";
import PropTypes from "prop-types";
import CategoryItem from "./CategoryItem";

const CategoryList = ({
    categories,
    selectedCategories,
    handleCheckboxChange,
}) => {
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
};

export default CategoryList;

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
    selectedCategories: PropTypes.array.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};
