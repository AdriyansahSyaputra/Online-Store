import React from "react";
import PropTypes from "prop-types";

const Badge = ({ count }) => {
    return (
        <span className="text-sm text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
            {count}
        </span>
    );
};

export default Badge;

Badge.propTypes = {
    count: PropTypes.number.isRequired,
};