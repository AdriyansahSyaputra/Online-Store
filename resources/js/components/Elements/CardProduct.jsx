import React, { useState } from "react";
import PropTypes from "prop-types";
import { Heart, Star, Check, X } from "lucide-react";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { useCart } from "../../contexts/CartContext";

const CardProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const { addToCart } = useCart();

    const handleAddToCart = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            await addToCart(product.id, quantity);
            alert("Product added to cart!");
        } catch (error) {
            alert("Failed to add product to cart.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="p-4 rounded-md bg-white h-full flex flex-col cursor-pointer">
            <Link href={`/product/${product.slug}`}>
                <div className="relative mb-4">
                    <img
                        src="/assets/img/category/laptop.png"
                        alt={product.name}
                        className="w-full h-32 object-cover rounded-md"
                    />
                    <button
                        onClick={(e) => e.stopPropagation()}
                        className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow hover:bg-gray-100 transition-all duration-200"
                    >
                        <Heart size={20} fill="red" className="text-red-500" />
                    </button>
                </div>

                <div className="flex-1 flex flex-col">
                    <h3 className="text-sm font-medium mb-1 line-clamp-2 min-h-[1rem]">
                        {product.name}
                    </h3>

                    <div className="flex flex-col md:flex-row md:items-center gap-1 mb-2">
                        <div className="flex text-yellow-500">
                            {[...Array(5)].map((_, index) => (
                                <Star size={14} key={index} />
                            ))}
                        </div>
                        <span className="text-xs md:text-sm text-gray-500">
                            {product.reviews} reviews
                        </span>
                    </div>

                    <p className="text-sm font-semibold text-blue-500 mb-3">
                        {product.price}
                    </p>

                    {product.stock ? (
                        <div className="flex items-center mb-4">
                            <Check size={15} className="text-green-500 mr-1" />
                            <span className="text-xs md:text-sm text-gray-500">
                                In Stock
                            </span>
                        </div>
                    ) : (
                        <div className="flex items-center mb-4">
                            <X size={15} className="text-red-500 mr-1" />
                            <span className="text-xs md:text-sm text-red-500">
                                Out Stock
                            </span>
                        </div>
                    )}
                </div>
            </Link>
            <button
                onClick={handleAddToCart}
                disabled={isLoading || product.stock <= 0}
                className="w-full bg-blue-600 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-all duration-200"
            >
                {isLoading ? "Adding..." : "Add To Cart"}
            </button>
        </div>
    );
};

export default CardProduct;

CardProduct.propTypes = {
    product: PropTypes.object.isRequired,
};
