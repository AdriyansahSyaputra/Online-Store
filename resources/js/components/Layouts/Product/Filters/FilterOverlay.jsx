import React from "react";
import PropTypes from "prop-types";

const FilterOverlay = ({ isOpen, setIsOpen }) => {
    return isOpen ? (
        <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
        ></div>
    ) : null;
};
export default FilterOverlay;

FilterOverlay.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
};
