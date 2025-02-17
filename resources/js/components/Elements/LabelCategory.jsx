import React from "react";
import PropTypes from "prop-types";

const LabelCategory = ({ htmlFor, text, isSelected }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`text-base cursor-pointer select-none ${
                isSelected ? "text-blue-600 font-medium" : "text-gray-700"
            }`}
        >
            {text}
        </label>
    );
};

export default LabelCategory;

LabelCategory.propTypes = {
    htmlFor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
};