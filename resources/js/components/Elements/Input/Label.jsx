import React from "react";
import PropsTypes from "prop-types";

const Label = ({ htmlFor, label }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`absolute -top-2.5 left-12 text-sm bg-white px-2 text-gray-600 transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3.5 peer-placeholder-shown:left-12 peer-focus:-top-2.5 peer-focus:left-12 peer-focus:text-sm peer-focus:text-indigo-600`}
        >
            {label}
        </label>
    );
};

export default Label;

Label.propTypes = {
    htmlFor: PropsTypes.string,
    label: PropsTypes.string,
};