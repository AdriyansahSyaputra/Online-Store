import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const axiosConfig = {
        withCredentials: true,
        headers: { Accept: "application/json" },
    };

    useEffect(() => {
        const initialize = async () => {
            await axios.get("/sanctum/csrf-cookie", axiosConfig);
            fetchCart();
        };
        initialize();
    }, []);

    const fetchCart = async () => {
        try {
            const { data } = await axios.get("/api/cart", axiosConfig);
            setCart(data);
        } catch (error) {
            handleError(error, "fetching cart");
        }
    };

    const addToCart = async (product) => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user) {
            alert("Anda harus login terlebih dahulu!");
            return;
        }

        try {
            await axios.post(
                "/api/cart/add",
                { product_id: product.id },
                axiosConfig
            );
            fetchCart();
        } catch (error) {
            handleError(error, "adding to cart");
        }
    };

    const updateQuantity = async (itemId, quantity) => {
        try {
            await axios.patch(
                "/api/cart/update",
                { item_id: itemId, quantity: quantity },
                axiosConfig
            );
            fetchCart();
        } catch (error) {
            handleError(error, "updating quantity");
        }
    };

    const removeItem = async (itemId) => {
        try {
            await axios.delete(`/api/cart/remove/${itemId}`, axiosConfig);
            fetchCart();
        } catch (error) {
            handleError(error, "removing item");
        }
    };

    const clearCart = async () => {
        try {
            await axios.delete("/api/cart/clear", axiosConfig);
            setCart([]);
        } catch (error) {
            handleError(error, "clearing cart");
        }
    };

    const handleError = (error, action) => {
        console.error(
            `Error ${action}:`,
            error.response?.data?.message || error.message
        );
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, removeItem, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};
