import React from "react";
import { Trash2, Minus, Plus } from "lucide-react";
import { useCart } from "../../../contexts/CartContext";
import axios from "axios";

console.log(useCart());
const CartItem = () => {
    const { cartItems, updateCartItemCount } = useCart();

    const updateItemQuantity = async (itemId, newQuantity) => {
        if (newQuantity < 1) return;

        try {
            await axios.post("/cart/update", {
                item_id: itemId,
                quantity: newQuantity,
            });

            await fetchCartItems(); // Pastikan data selalu terbaru
        } catch (error) {
            console.error("Error updating item quantity:", error);
            alert("Gagal mengubah jumlah produk");
        }
    };

    const removeItem = async (itemId) => {
        try {
            await axios.delete(`/cart/remove/${itemId}`);
            await fetchCartItems(); // Pastikan data selalu terbaru
        } catch (error) {
            console.error("Error removing item:", error);
            alert("Gagal menghapus produk dari keranjang");
        }
    };

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat("us-US", {
            style: "currency",
            currency: "USD",
        }).format(amount);
    };

    // Tampilkan pesan jika keranjang kosong
    if (!cartItems || cartItems.length === 0) {
        return (
            <div className="flex-1 flex items-center justify-center p-6">
                <div className="text-center">
                    <p className="text-gray-500 mb-2">
                        Keranjang belanja Anda kosong
                    </p>
                    <a
                        href="/product"
                        className="text-indigo-600 hover:underline text-sm"
                    >
                        Lihat produk kami
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="flex-1 overflow-y-auto px-2 py-2">
            <div className="space-y-4">
                {cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white rounded-xl p-2 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
                    >
                        <div className="flex gap-4 relative">
                            <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-50 flex-shrink-0">
                                <img
                                    src={
                                        item.product?.image ||
                                        "/assets/img/category/laptop.png"
                                    }
                                    alt={item.product?.name || "Product"}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-gray-800 font-medium mb-1">
                                    {item.product?.name || "Product Name"}
                                </h3>
                                <p className="text-lg font-semibold text-indigo-600">
                                    {formatCurrency(item.product?.price || "0")}
                                </p>

                                <div className="mt-3 flex items-center gap-4">
                                    <span className="text-sm text-gray-600">
                                        Quantity:
                                    </span>
                                    <div className="flex items-center gap-3 bg-gray-50 rounded-lg p-1">
                                        <button
                                            onClick={() =>
                                                updateItemQuantity(
                                                    item.id,
                                                    item.quantity - 1
                                                )
                                            }
                                            className="p-1 hover:bg-white rounded-md transition-colors duration-200"
                                        >
                                            <Minus className="w-4 h-4 text-gray-600" />
                                        </button>
                                        <span className="w-8 text-center font-medium text-gray-800">
                                            {item.quantity}
                                        </span>
                                        <button
                                            onClick={() =>
                                                updateItemQuantity(
                                                    item.id,
                                                    item.quantity + 1
                                                )
                                            }
                                            className="p-1 hover:bg-white rounded-md transition-colors duration-200"
                                        >
                                            <Plus className="w-4 h-4 text-gray-600" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => removeItem(item.id)}
                                className="absolute top-0 right-0 p-2 hover:bg-red-50 rounded-full group transition-colors duration-200"
                            >
                                <Trash2 className="w-4 h-4 text-gray-400 group-hover:text-red-500" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CartItem;
