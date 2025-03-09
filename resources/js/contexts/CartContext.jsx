import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItemCount, setCartItemCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch cart items dari server
    const fetchCartItems = async () => {
        try {
            const response = await axios.get("/cart");
            if (response.data.cart && response.data.cart.items) {
                setCartItems(response.data.cart.items);
                setCartItemCount(
                    response.data.cart.items.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                    )
                );
            }
        } catch (error) {
            console.error("Error fetching cart:", error);
        }
    };

    // Load cart saat aplikasi dimulai
    useEffect(() => {
        fetchCartItems();
    }, []);

    // Tambahkan produk ke cart dengan update quantity jika sudah ada
    const addToCart = async (product, quantity) => {
        setLoading(true);
        try {
            const response = await axios.post("/cart/add", {
                product_id: product.id,
                quantity: quantity,
            });

            if (response.data.cart && response.data.cart.items) {
                setCartItems(response.data.cart.items);
                setCartItemCount(
                    response.data.cart.items.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                    )
                );
            }

            return { success: true, message: response.data.message };
        } catch (error) {
            let message = "Gagal menambahkan produk ke keranjang";

            if (error.response) {
                if (error.response.status === 401) {
                    message =
                        "Anda harus login untuk menambahkan produk ke keranjang";
                } else if (error.response.data.message) {
                    message = error.response.data.message;
                }
            }

            return { success: false, message };
        } finally {
            setLoading(false);
        }
    };

    // Hapus produk dari cart
    const removeFromCart = async (productId) => {
        try {
            await axios.delete(`/cart/remove/${productId}`);

            // Perbarui state tanpa perlu fetch ulang
            setCartItems((prevItems) =>
                prevItems.filter((item) => item.product.id !== productId)
            );

            // Update total item di cart
            setCartItemCount((prevCount) => prevCount - 1);
        } catch (error) {
            console.error("Error removing item from cart:", error);
        }
    };

    const updateCartItem = async (productId, quantity) => {
        setLoading(true);
        try {
            const response = await axios.put(`/cart/update/${productId}`, {
                quantity,
            });
            if (response.data.cart && response.data.cart.items) {
                setCartItems(response.data.cart.items);
                setCartItemCount(
                    response.data.cart.items.reduce(
                        (sum, item) => sum + item.quantity,
                        0
                    )
                );
            }
        } catch (error) {
            console.error("Error updating cart item:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cartItemCount,
                cartItems,
                addToCart,
                removeFromCart,
                loading,
                updateCartItem,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
