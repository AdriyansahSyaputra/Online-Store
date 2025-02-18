import React from "react";
import PropsTypes from "prop-types";

const Input = ({ type, id, placeholder, name, value, onChange }) => {
    return (
        <>
            <input
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={onChange}
                className={`peer w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg text-gray-700 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300`}
                placeholder={placeholder}
            />
        </>
    );
};

export default Input;

Input.propTypes = {
    type: PropsTypes.string,
    id: PropsTypes.string,
    placeholder: PropsTypes.string,
    name: PropsTypes.string,
    value: PropsTypes.string,
    onChange: PropsTypes.func,
};