import React from "react";
import PropTypes from "prop-types";

const CategoryList = ({ categories }) => {
    return (
        <>
            {categories.map((category) => {
                const Icon = category.icon;
                return (
                    <div
                        key={category.id}
                        className="group flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 transition-all duration-200 cursor-pointer"
                    >
                        <div className="flex items-center gap-4">
                            <div className="p-2 rounded-lg bg-slate-100 group-hover:bg-white group-hover:shadow-sm transition-all duration-200">
                                <Icon
                                    className="w-5 h-5 text-slate-600 group-hover:text-indigo-600 transition-colors duration-200"
                                    strokeWidth={2}
                                />
                            </div>
                            <span className="text-slate-700 font-medium group-hover:text-slate-900">
                                {category.name}
                            </span>
                        </div>

                        <span className="text-sm text-slate-400 group-hover:text-indigo-600 transition-colors duration-200">
                            {category.count} posts
                        </span>
                    </div>
                );
            })}
        </>
    );
};

export default CategoryList;

CategoryList.propTypes = {
    categories: PropTypes.array.isRequired,
};
