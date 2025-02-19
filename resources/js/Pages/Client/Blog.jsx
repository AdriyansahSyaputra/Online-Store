import React from "react";
import Navbar from "../../components/templates/client/navbar/Navbar";
import Footer from "../../components/templates/client/footer/Footer";
import Banner from "../../components/Elements/Banner";
import TrendingBlog from "../../components/Layouts/Blog/TrendingBlog";
import Categories from "../../components/Layouts/Blog/Categories";
import BlogsSection from "../../components/Layouts/Blog/BlogSection";
import articles from "../../utils/articles";
import { Head } from "@inertiajs/react";

const Blog = () => {
    return (
        <>
            <Head title="Blog" />
            <Navbar />
            <Banner
                image="/assets/img/banner/about.jpg"
                title="Our Blogs"
                subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit turpis egestas libero, primis cursus vulputate commodo fames posuere torquent justo"
            />
            <main className="px-4 md:px-10 my-20">
                {/* Mobile View */}
                <div className="lg:hidden">
                    <Categories />
                    <TrendingBlog articles={articles} />
                    <BlogsSection articles={articles} />
                </div>

                {/* Desktop View */}
                <div className="hidden lg:flex md:gap-10">
                    <BlogsSection articles={articles} />
                    <div>
                        <Categories />
                        <TrendingBlog articles={articles} />
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Blog;