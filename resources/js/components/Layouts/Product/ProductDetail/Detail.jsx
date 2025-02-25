import React from "react";
import {
    Star,
    Plus,
    Minus,
    ShoppingCart,
    CreditCard,
    MessageCircleMore,
} from "lucide-react";
import PropTypes from "prop-types";

const Detail = ({ product, quantity, handleIncrease, handleDecrease }) => {

    return (
        <>
            <div className="max-w-full mx-auto md:py-8 md:p-7 bg-white rounded-md shadow-sm flex-1 md:flex md:gap-7 relative">
                <div className="w-full h-full md:w-2/5">
                    {/* Main Image */}
                    <div className="w-full h-full overflow-hidden rounded-md">
                        <img src="/assets/img/banner/about.jpg" alt="" />
                    </div>

                    {/* image previews */}
                    <div className="flex gap-2 mt-3 pl-4 md:mt-3 md:pl-0">
                        <div className="overflow-hidden rounded-sm hover:outline hover:outline-2 hover:outline-orange-500 cursor-pointer w-14 h-14 md:w-20 md:h-20">
                            <img
                                src="/assets/img/banner/about.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden rounded-sm  hover:outline hover:outline-2 hover:outline-orange-500 cursor-pointer w-14 h-14 md:w-20 md:h-20">
                            <img
                                src="/assets/img/banner/about.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="overflow-hidden rounded-sm  hover:outline hover:outline-2 hover:outline-orange-500 cursor-pointer w-14 h-14 md:w-20 md:h-20">
                            <img
                                src="/assets/img/banner/about.jpg"
                                alt=""
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-3/5 mt-4 p-4 md:mt-0 md:p-0">
                    <h1 className="text-base md:text-2xl font-medium text-slate-800">
                        {product.name || "Product Name"}
                    </h1>

                    <div className="flex items-center gap-1 mt-2">
                        <div className="flex items-center">
                            <span className="text-xs md:text-sm text-slate-500">
                                4.9
                            </span>
                            {[...Array(5)].map((_, index) => (
                                <Star
                                    key={index}
                                    className="w-3 h-3 text-yellow-500 fill-yellow-500 ml-1"
                                />
                            ))}
                        </div>

                        {/* Divider Vertical */}
                        <div className="border-l h-4 mx-1 bg-slate-800"></div>

                        <p className="text-xs md:text-sm text-slate-500">
                            243 Reviews
                        </p>
                    </div>

                    <p className="mt-3 text-sm text-slate-700">
                        $ {product.price}
                    </p>

                    {/* Divider Horizontal */}
                    <hr className="my-4 border-slate-200" />

                    {/* Category */}
                    <div className="flex items-center gap-2 mt-4">
                        <p className="text-sm font-medium text-slate-700">
                            Category:
                        </p>
                        <p className="text-sm font-medium text-slate-500">
                            {product.category.name || "Category Name"}
                        </p>
                    </div>

                    {/* Stock */}
                    <div className="flex items-center gap-2 mt-4">
                        <p className="text-sm font-medium text-slate-700">
                            Stock:
                        </p>
                        <p className="text-sm font-medium text-slate-500">
                            {product.stock}
                        </p>
                    </div>

                    {/* Product Sell */}
                    <div className="flex items-center gap-2 mt-4">
                        <p className="text-sm font-medium text-slate-700">
                            Sold:
                        </p>
                        <p className="text-sm font-medium text-slate-500">
                            122
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-slate-700 mt-4">
                        {product.description}
                    </p>

                    {/* Divider Horizontal */}
                    <hr className="my-4 border-slate-200 hidden md:block" />

                    {/* Quantity Button */}
                    <div className="hidden md:flex items-center gap-2 mt-4 ">
                        <p className="text-sm font-medium text-slate-700">
                            Quantity:
                        </p>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleDecrease}
                                className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 transition-all duration-200"
                            >
                                <Minus className="w-4 h-4" />
                            </button>
                            <span className="text-sm font-medium text-slate-700">
                                {quantity}
                            </span>
                            <button
                                onClick={handleIncrease}
                                className="p-2 rounded-md bg-slate-100 hover:bg-slate-200 transition-all duration-200"
                            >
                                <Plus className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Add to Cart & Checkout Button */}
                    <div className="hidden md:flex items-center gap-2 mt-4 w-full md:w-1/2">
                        <button className="p-3 w-full rounded-md bg-amber-500 hover:bg-amber-600 transition-all duration-200 flex items-center gap-2">
                            <ShoppingCart className="w-5 h-5 text-white" />
                            <span className="text-sm font-medium text-white">
                                Add to Cart
                            </span>
                        </button>
                        <button className="p-3 w-full rounded-md bg-amber-500 hover:bg-amber-600 transition-all duration-200 flex items-center gap-2">
                            <CreditCard className="w-5 h-5 text-white" />
                            <span className="text-sm font-medium text-white">
                                Checkout
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Add to Cart & Checkout Button for Mobile */}
            <div className="w-full md:hidden flex items-center gap-2 mt-4 bottom-0 fixed left-0 right-0 bg-white p-2">
                <button className="p-2 border border-slate-700 flex items-center justify-center rounded-md">
                    <MessageCircleMore className="w-7 h-7" />
                </button>
                <button className="p-3 w-full rounded-md bg-amber-500 hover:bg-amber-600 transition-all duration-200 flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium text-white">
                        Add to Cart
                    </span>
                </button>
                <button className="p-3 w-full rounded-md bg-amber-500 hover:bg-amber-600 transition-all duration-200 flex items-center gap-2">
                    <CreditCard className="w-5 h-5 text-white" />
                    <span className="text-sm font-medium text-white">
                        Checkout
                    </span>
                </button>
            </div>
        </>
    );
};

export default Detail;

Detail.propTypes = {
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
    handleIncrease: PropTypes.func.isRequired,
    handleDecrease: PropTypes.func.isRequired,
};