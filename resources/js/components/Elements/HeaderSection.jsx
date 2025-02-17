import React from "react";
import PropTypes from "prop-types";
import { ChevronRight } from "lucide-react";

const HeaderSection = ({ title, subTitle }) => {
    return (
        <div className="p-4 flex-1 md:flex items-center bg-white justify-between rounded-md">
            <div>
                <h1 className="text-base md:text-xl font-semibold">{title}</h1>
            </div>
            <div className="hidden md:flex items-center space-x-2 cursor-pointer text-orange-600">
                <h1 className="text-md font-light">{subTitle}</h1>
                <ChevronRight size={16} />
            </div>
        </div>
    );
};

export default HeaderSection;

HeaderSection.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};