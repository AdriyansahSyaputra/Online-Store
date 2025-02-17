import React from "react";
import PropTypes from "prop-types";
import CardBlog from "../../Elements/CardBlog";

const BlogsSection = ({ articles }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article) => (
                    <CardBlog
                        key={article.id}
                        title={article.title}
                        content={article.content}
                        category={article.category}
                        date={article.date}
                        author={article.author}
                        slug={article.slug}
                    />
                ))}
            </div>
        </>
    );
};

export default BlogsSection;

BlogsSection.propTypes = {
    articles: PropTypes.array,
};