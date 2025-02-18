import PropsTypes from "prop-types";
import React from "react";
import { router } from "@inertiajs/react";

const TrendingBlog = ({ articles }) => {

    const handleClick = (article) => {
        router.visit(`/blog/${article.slug}`, {
            data: article,
        });
    };

    return (
        <aside className="min-w-80 p-4 mb-10 md:mb-0">
            {/* Header */}
            <div className="flex items-center gap-3 mb-6">
                <h2 className="text-lg font-semibold text-slate-800">
                    Trending News
                </h2>
                <div className="flex-1 h-0.5 bg-slate-200"></div>
            </div>  

            {/* Blog Posts List */}
            <div className="space-y-2">
                {articles
                    .filter((article) => article.rating > 4.8)
                    .map((article) => (
                        <article
                            key={article.id}
                            onClick={() => handleClick(article)}
                            className="group cursor-pointer hover:bg-slate-50 rounded-lg transition-colors duration-200 p-2"
                        >
                            <div className="flex gap-4">
                                <div className="flex-shrink-0">
                                    <img
                                        src="/assets/img/banner.png"
                                        alt={article.title}
                                        className="w-24 h-20 object-cover rounded-lg"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-sm font-medium text-slate-800 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
                                        {article.title}
                                    </h3>
                                    <div className="flex items-center mt-2 gap-2">
                                        <span className="text-xs text-slate-500">
                                            {article.date}
                                        </span>
                                        <span className="inline-block w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span className="text-xs text-blue-600 hover:text-blue-700">
                                            Read more
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
            </div>
        </aside>
    );
};

export default TrendingBlog;

TrendingBlog.propTypes = {
    articles: PropsTypes.array.isRequired,
};