import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState({ items: [], total_price: 0 });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    // Fungsi untuk mengambil data keranjang
    const fetchCart = async () => {
        setLoading(true);
        setError(null);

        try {
            // Ambil CSRF token terlebih dahulu
            await axios.get("/sanctum/csrf-cookie");

            // Ambil data keranjang
            const { data } = await axios.get("/api/cart");
            setCart(data);
        } catch (error) {
            console.error(
                "Error mengambil data keranjang:",
                error.response?.data?.message || error.message
            );
            setError(
                error.response?.data?.message ||
                    "Terjadi kesalahan saat mengambil data keranjang"
            );
        } finally {
            setLoading(false);
        }
    };

    // Ambil data keranjang saat komponen dimuat
    useEffect(() => {
        fetchCart();
    }, []);

    // Tambahkan produk ke keranjang
    const addToCart = async (product_id, quantity = 1) => {
        setLoading(true);
        setError(null);

        try {
            // Ambil CSRF token terlebih dahulu
            await axios.get("/sanctum/csrf-cookie");

            // Tambahkan produk ke keranjang
            const { data } = await axios.post("/api/cart/add", {
                product_id,
                quantity,
            });

            setCart({
                items: data.items,
                total_price: data.total_price,
            });

            return { success: true, message: data.message };
        } catch (error) {
            console.error(
                "Error menambahkan ke keranjang:",
                error.response?.data?.message || error.message
            );
            setError(
                error.response?.data?.message ||
                    "Terjadi kesalahan saat menambahkan produk ke keranjang"
            );
            return {
                success: false,
                message: error.response?.data?.message || "Terjadi kesalahan",
            };
        } finally {
            setLoading(false);
        }
    };

    // Perbarui jumlah produk di keranjang
    const updateQuantity = async (item_id, quantity) => {
        setLoading(true);
        setError(null);

        try {
            // Ambil CSRF token terlebih dahulu
            await axios.get("/sanctum/csrf-cookie");

            // Perbarui jumlah produk
            const { data } = await axios.patch("/api/cart/update", {
                item_id,
                quantity,
            });

            setCart({
                items: data.items,
                total_price: data.total_price,
            });

            return { success: true, message: data.message };
        } catch (error) {
            console.error(
                "Error memperbarui jumlah:",
                error.response?.data?.message || error.message
            );
            setError(
                error.response?.data?.message ||
                    "Terjadi kesalahan saat memperbarui jumlah produk"
            );
            return {
                success: false,
                message: error.response?.data?.message || "Terjadi kesalahan",
            };
        } finally {
            setLoading(false);
        }
    };

    // Hapus produk dari keranjang
    const removeItem = async (itemId) => {
        setLoading(true);
        setError(null);

        try {
            // Ambil CSRF token terlebih dahulu
            await axios.get("/sanctum/csrf-cookie");

            // Hapus produk dari keranjang
            const { data } = await axios.delete(`/api/cart/remove/${itemId}`);

            setCart({
                items: data.items,
                total_price: data.total_price,
            });

            return { success: true, message: data.message };
        } catch (error) {
            console.error(
                "Error menghapus produk:",
                error.response?.data?.message || error.message
            );
            setError(
                error.response?.data?.message ||
                    "Terjadi kesalahan saat menghapus produk dari keranjang"
            );
            return {
                success: false,
                message: error.response?.data?.message || "Terjadi kesalahan",
            };
        } finally {
            setLoading(false);
        }
    };

    // Kosongkan keranjang
    const clearCart = async () => {
        setLoading(true);
        setError(null);

        try {
            // Ambil CSRF token terlebih dahulu
            await axios.get("/sanctum/csrf-cookie");

            // Kosongkan keranjang
            const { data } = await axios.post("/api/cart/clear");

            setCart({
                items: [],
                total_price: 0,
            });

            return { success: true, message: data.message };
        } catch (error) {
            console.error(
                "Error mengosongkan keranjang:",
                error.response?.data?.message || error.message
            );
            setError(
                error.response?.data?.message ||
                    "Terjadi kesalahan saat mengosongkan keranjang"
            );
            return {
                success: false,
                message: error.response?.data?.message || "Terjadi kesalahan",
            };
        } finally {
            setLoading(false);
        }
    };

    return (
        <CartContext.Provider
            value={{
                cart: cart.items,
                cartItems: cart.items,
                totalPrice: cart.total_price,
                loading,
                error,
                addToCart,
                updateQuantity,
                removeItem,
                clearCart,
                refreshCart: fetchCart,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
