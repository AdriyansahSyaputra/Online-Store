import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import CardProduct from "../../Elements/CardProduct";
import { ChevronRight, ChevronLeft } from "lucide-react";

const ProductView = ({ products }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [isMobile, setIsMobile] = useState(false);
    const productsPerPage = isMobile ? 8 : products.length;

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener("resize", checkIsMobile);
        return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    const totalPages = Math.ceil(products.length / productsPerPage);
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = isMobile
        ? products.slice(indexOfFirstProduct, indexOfLastProduct)
        : products;

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
    const handlePrev = () => currentPage > 1 && setCurrentPage(currentPage - 1);
    const handleNext = () =>
        currentPage < totalPages && setCurrentPage(currentPage + 1);

    return (
        <>
            <div>
                <div className="grid grid-cols-2 px-4 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 md:gap-6">
                    {currentProducts.map((product) => (
                        <CardProduct key={product.id} product={product} />
                    ))}
                </div>

                {isMobile && (
                    <div className="md:hidden mt-8">
                        <div className="flex items-center justify-between px-4">
                            <button
                                onClick={handlePrev}
                                disabled={currentPage === 1}
                                className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 shadow-sm transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>

                            <div className="flex items-center gap-2">
                                {[...Array(totalPages)].map((_, index) => {
                                    if (
                                        index + 1 === currentPage ||
                                        index + 1 === currentPage - 1 ||
                                        index + 1 === currentPage + 1 ||
                                        index + 1 === 1 ||
                                        index + 1 === totalPages
                                    ) {
                                        return (
                                            <button
                                                key={index}
                                                onClick={() =>
                                                    handlePageChange(index + 1)
                                                }
                                                className={`flex items-center justify-center h-8 w-8 rounded-full text-sm font-medium transition-colors
                        ${
                            currentPage === index + 1
                                ? "bg-blue-500 text-white"
                                : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                                            >
                                                {index + 1}
                                            </button>
                                        );
                                    }
                                    if (
                                        (index + 1 === currentPage - 2 &&
                                            currentPage > 3) ||
                                        (index + 1 === currentPage + 2 &&
                                            currentPage < totalPages - 2)
                                    ) {
                                        return (
                                            <span
                                                key={index}
                                                className="text-gray-400"
                                            >
                                                ...
                                            </span>
                                        );
                                    }
                                    return null;
                                })}
                            </div>

                            <button
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                                className="flex items-center justify-center h-10 w-10 rounded-full bg-white border border-gray-200 shadow-sm transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ProductView;

ProductView.propTypes = {
    products: PropTypes.array.isRequired,
};