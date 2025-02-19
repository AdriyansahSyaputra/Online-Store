import React, { useState } from "react";
import { Trash2, Minus, Plus } from "lucide-react";

const CartItem = () => {
    const [quantity, setQuantity] = useState(1);

    // Fungsi untuk menambah quantity
    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    // Fungsi untuk mengurangi quantity
    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <>
            <div className="flex-1 overflow-y-auto px-2 py-2">
                <div className="space-y-4">
                    {/* Cart Item */}
                    <div className="bg-white rounded-xl p-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                        <div className="flex gap-4 relative">
                            <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                                <img
                                    src="/assets/img/category/laptop.png"
                                    alt="Product 1"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-gray-800 font-medium mb-1">
                                    Laptop Asus
                                </h3>
                                <p className="text-lg font-semibold text-indigo-600">
                                    $1299
                                </p>

                                <div className="mt-3 flex items-center gap-4">
                                    <span className="text-sm text-gray-600">
                                        Quantity:
                                    </span>
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                        <button
                                            onClick={decreaseQuantity}
                                            className="p-1 hover:bg-white rounded-md transition-colors duration-200"
                                        >
                                            <Minus className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <span className="w-8 text-center font-medium text-gray-800">
                                            {quantity}
                                        </span>
                                        <button
                                            onClick={increaseQuantity}
                                            className="p-1 hover:bg-white rounded-md transition-colors duration-200"
                                        >
                                            <Plus className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button className="absolute top-0 right-0 p-2 hover:bg-red-50 rounded-full group transition-colors duration-200">
                                <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CartItem;
