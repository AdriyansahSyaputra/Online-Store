import React from "react";
import { CircleUserRound } from "lucide-react";
import PropsTypes from "prop-types";
import { router } from "@inertiajs/react";

const CardBlog = ({ title, content, category, date, author, slug }) => {

    const handleCLick = () => {
        router.visit(`/blog/${slug}`, {
            state: {
                title,
                content,
                category,
                date,
                author,
                slug,
            },
        });
    };

    return (
        <>
            <div
                onClick={handleCLick}
                className="w-full h-full bg-white rounded-md shadow-md flex flex-col cursor-pointer"
            >
                <div className="w-full h-52 overflow-hidden rounded-t-md">
                    <img
                        src="/assets/img/banner.png"
                        alt=""
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-4 flex flex-col flex-grow">
                    <div className="mb-4">
                        <p className="text-gray-400 text-xs uppercase mb-2">
                            {category} - {date}
                        </p>
                        <h1 className="text-base font-semibold text-slate-700 mb-2">
                            {title}
                        </h1>
                        <p className="text-sm text-slate-600 w-full line-clamp-3">
                            {content}
                        </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center mt-auto">
                        <CircleUserRound size={20} className="text-slate-500" />
                        <p className="text-sm text-slate-500 ml-2">{author}</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardBlog;

CardBlog.propTypes = {
    articles: PropsTypes.array,
    title: PropsTypes.string,
    content: PropsTypes.string,
    category: PropsTypes.string,
    date: PropsTypes.string,
    author: PropsTypes.string,
    slug: PropsTypes.string,
};
