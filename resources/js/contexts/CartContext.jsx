import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { router } from "@inertiajs/react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children, authUser }) => {
    const [cart, setCart] = useState({ items: [], total_price: 0 });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Fungsi untuk mengambil data keranjang
    const fetchCart = async () => {
        // Jika user belum login, jangan ambil data keranjang
        if (!authUser) {
            setCart({ items: [], total_price: 0 });
            return;
        }

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

    // Ambil data keranjang saat komponen dimuat atau auth status berubah
    useEffect(() => {
        fetchCart();
    }, [authUser]); // Dependensi ditambahkan untuk reload ketika status auth berubah

    // Fungsi untuk memeriksa login dan mengarahkan jika belum login
    const checkLoginAndProceed = async () => {
        // Periksa apakah user sudah login
        if (!authUser) {
            try {
                // Coba verifikasi status login dulu
                const response = await axios.get("/api/user");
                if (response.data && response.data.id) {
                    // User ternyata sudah login, lanjutkan
                    return true;
                }
            } catch (error) {
                // Gagal verifikasi, arahkan ke login
                const currentPath = window.location.pathname;
                router.visit("/login", {
                    data: { intended: currentPath },
                });
                return false;
            }
        }
        return true;
    };

    // Tambahkan produk ke keranjang
    const addToCart = async (product_id, quantity = 1) => {
        // Cek status login terlebih dahulu
        if (!(await checkLoginAndProceed())) {
            return { success: false, message: "Silakan login terlebih dahulu" };
        }

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
        // Cek status login terlebih dahulu
        if (!(await checkLoginAndProceed())) {
            return { success: false, message: "Silakan login terlebih dahulu" };
        }

        // Pastikan quantity minimum 1
        if (quantity < 1) {
            return { success: false, message: "Jumlah minimal adalah 1" };
        }

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
        // Cek status login terlebih dahulu
        if (!(await checkLoginAndProceed())) {
            return { success: false, message: "Silakan login terlebih dahulu" };
        }

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
        // Cek status login terlebih dahulu
        if (!(await checkLoginAndProceed())) {
            return { success: false, message: "Silakan login terlebih dahulu" };
        }

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

    // Hitung jumlah item di keranjang
    const cartItemCount =
        cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0;

    return (
        <CartContext.Provider
            value={{
                cart: cart.items,
                cartItems: cart.items,
                totalPrice: cart.total_price,
                cartItemCount, // Tambahkan properti baru untuk menghitung jumlah item
                loading,
                error,
                addToCart,
                updateQuantity,
                removeItem,
                clearCart,
                refreshCart: fetchCart,
                isAuthenticated: !!authUser, // Tambahkan properti untuk mengecek status auth
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
