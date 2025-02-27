import React, { useState } from "react";
import PropTypes from "prop-types";
import { Heart, Star, Check, X } from "lucide-react";
import { Link } from "@inertiajs/react";
import axios from "axios";
import { useCart } from "../../contexts/CartContext";

const CardProduct = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
     const [isLoading, setIsLoading] = useState(false);
    const { updateCartItemCount } = useCart();

    const handleAddToCart = async (e) => {
        e.preventDefault(); // Prevent default instead of stopPropagation
        setIsLoading(true);

        try {
            const response = await axios.post("/cart/add", {
                product_id: product.id,
                quantity: quantity,
            });

            // Update cart count with the new total rather than adding quantity
            if (response.data.cart && response.data.cart.items) {
                const totalItems = response.data.cart.items.reduce(
                    (sum, item) => sum + item.quantity,
                    0
                );
                updateCartItemCount(totalItems, true); // Pass true to set absolute value
            }

            alert(response.data.message);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                alert("You must be logged in to add products to cart");
            } else if (error.response && error.response.status === 400) {
                alert(error.response.data.message);
            } else {
                console.error("Error adding to cart:", error);
                alert("Failed to add product to cart");
            }
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
