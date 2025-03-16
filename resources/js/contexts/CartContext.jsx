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
        axios.get("/sanctum/csrf-cookie").then(fetchCart);
    }, []);

    const fetchCart = async () => {
        try {
            const { data } = await axios.get("/api/cart", axiosConfig);
            setCart(data);
        } catch (error) {
            console.error(
                "Error fetching cart:",
                error.response?.data?.message || error.message
            );
        }
    };

    const addToCart = async (product) => {
        try {
            await axios.post(
                "/api/cart/add",
                { product_id: product.id },
                axiosConfig
            );
            fetchCart();
        } catch (error) {
            console.error(
                "Error adding to cart:",
                error.response?.data?.message || error.message
            );
        }
    };

    const updateQuantity = async (itemId, quantity) => {
        try {
            await axios.patch(
                "/api/cart/update",
                { item_id: itemId, quantity },
                axiosConfig
            );
            fetchCart();
        } catch (error) {
            console.error(
                "Error updating quantity:",
                error.response?.data?.message || error.message
            );
        }
    };

    const removeItem = async (itemId) => {
        try {
            await axios.post(`/api/cart/remove/${itemId}`, {}, axiosConfig);
            fetchCart();
        } catch (error) {
            console.error(
                "Error removing item:",
                error.response?.data?.message || error.message
            );
        }
    };

    const clearCart = async () => {
        try {
            await axios.post("/api/cart/clear", {}, axiosConfig);
            setCart([]);
        } catch (error) {
            console.error(
                "Error clearing cart:",
                error.response?.data?.message || error.message
            );
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, addToCart, updateQuantity, removeItem, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
};