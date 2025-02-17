import React from "react";
import PropTypes from "prop-types";
import Checkbox from "../Elements/Checkbox";
import Badge from "../Elements/Badge";
import LabelCategory from "../Elements/LabelCategory";

const CategoryItem = ({
    category,
    selectedCategories,
    handleCheckboxChange,
}) => {
    return (
        <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
            <div className="flex items-center space-x-3">
                <Checkbox
                    id={`category-${category.id}`}
                    checked={selectedCategories.includes(category.name)}
                    onChange={() => handleCheckboxChange(category.name)}
                />
                <LabelCategory
                    htmlFor={`category-${category.id}`}
                    text={category.name}
                    isSelected={selectedCategories.includes(category.name)}
                />
            </div>
            <Badge count={category.count} />
        </div>
    );
};

export default CategoryItem;

CategoryItem.propTypes = {
    category: PropTypes.object.isRequired,
    selectedCategories: PropTypes.array.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
};