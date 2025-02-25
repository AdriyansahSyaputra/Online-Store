import React, { useState, useEffect, useCallback } from "react";
import Navbar from "../../components/templates/client/navbar/Navbar";
import Footer from "../../components/templates/client/footer/Footer";
import PromoBanner from "../../components/Layouts/Product/PromoBanner";
import FilterCategories from "../../components/Layouts/Product/FilterCategories";
import ProductView from "../../components/Layouts/Product/ProductView";
import { Head } from "@inertiajs/react";

const Product = ({ products, categories }) => {
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleCheckboxChange = (categoryId) => {
        setSelectedCategories((prev) =>
            prev.includes(categoryId)
                ? prev.filter((id) => id !== categoryId)
                : [...prev, categoryId]
        );
    };

    const handleClearAll = () => {
        setSelectedCategories([]);
        setFilteredProducts(products);
    };

    const handleApplyFilters = useCallback(() => {
        setIsOpen(false);

        // Filter produk berdasarkan kategori
        if (selectedCategories.length === 0) {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) =>
                selectedCategories.includes(product.category_id)
            );
            setFilteredProducts(filtered);
        }
    }, [selectedCategories, products]);

    useEffect(() => {
        const handleResize = () => {
            // Memeriksa lebar layar untuk menentukan apakah mobile atau desktop
            setIsMobile(window.innerWidth < 768);
        };

        // Menambahkan event listener ketika ukuran layar berubah
        window.addEventListener("resize", handleResize);

        // Panggil handleResize agar langsung mengetahui keadaan awal
        handleResize();

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        // Jika di desktop, filter langsung diterapkan ketika kategori dipilih
        if (!isMobile) {
            handleApplyFilters();
        }
    }, [selectedCategories, isMobile, handleApplyFilters]);

    // Efek untuk menutup filter saat beralih dari mobile ke desktop
    useEffect(() => {
        if (!isMobile) {
            setIsOpen(false);
        }
    }, [isMobile]);

    return (
        <>
            <Head title="Product" />
            <Navbar />
            <PromoBanner />
            <main className="md:flex md:px-10 gap-6 my-10">
                <FilterCategories
                    selectedCategories={selectedCategories}
                    handleCheckboxChange={handleCheckboxChange}
                    categories={categories}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    handleClearAll={handleClearAll}
                    handleApplyFilters={handleApplyFilters}
                />
                <ProductView products={filteredProducts} />
            </main>
            <Footer />
        </>
    );
};

export default Product;
