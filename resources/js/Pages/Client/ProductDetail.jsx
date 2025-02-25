import React, { useState } from "react";
import Navbar from "../../components/templates/client/navbar/Navbar";
import Footer from "../../components/templates/client/footer/Footer";
import Detail from "../../components/Layouts/Product/ProductDetail/Detail";
import { usePage } from "@inertiajs/react";

const ProductDetail = () => {
    const { product } = usePage().props;
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => {
        setQuantity((prevQuantity) => prevQuantity + 1);
    };

    const handleDecrease = () => {
        setQuantity((prevQuantity) =>
            prevQuantity > 1 ? prevQuantity - 1 : 1
        );
    };
    return (
        <>
            <Navbar />
            <main className="px-4 md:px-10 lg:px-16 my-6">
                <Detail
                    product={product}
                    quantity={quantity}
                    handleDecrease={handleDecrease}
                    handleIncrease={handleIncrease}
                />
            </main>
            <Footer />
        </>
    );
};

export default ProductDetail;
