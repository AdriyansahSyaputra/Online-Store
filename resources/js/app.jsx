import "./bootstrap";
import "../css/app.css";

import { createInertiaApp } from "@inertiajs/react";
import { createRoot } from "react-dom/client";
import { CartProvider } from "./contexts/CartContext";

createInertiaApp({
    title: (title) => {
        if (!title) return "Shopify"; // Jika title kosong, gunakan default

        const cleanTitle = title.split("/").pop();

        return `${cleanTitle} - Shopify`;
    },
    resolve: (name) => {
        const pages = import.meta.glob("./Pages/**/*.jsx", { eager: true });
        return pages[`./Pages/${name}.jsx`];
    },
    setup({ el, App, props }) {
        createRoot(el).render(
            <CartProvider>
                <App {...props} />
            </CartProvider>
        );
    },
});
