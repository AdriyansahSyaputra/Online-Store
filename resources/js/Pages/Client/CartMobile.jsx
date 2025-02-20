import React, { useState } from "react";
import { House, Box, Info, ScrollText, SquareUserRound } from "lucide-react";
import Header from "../../components/Layouts/CartMobile/Header";
import Content from "../../components/Layouts/CartMobile/Content";
import Footer from "../../components/Layouts/CartMobile/Footer";
import NavbarMobile from "../../components/templates/client/navbar/NavbarMobile";
import { Head } from "@inertiajs/react";

const menuItems = [
    { title: "Home", icon: <House />, link: "/" },
    { title: "Product", icon: <Box />, link: "/product" },
    { title: "About", icon: <Info />, link: "/about" },
    { title: "Blog", icon: <ScrollText />, link: "/blogs" },
    { title: "Contact", icon: <SquareUserRound />, link: "/contact" },
];

const CartMobile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <Head title="Cart" />

            <div className="w-full h-screen relative">
                <Header setIsOpen={setIsOpen} isOpen={isOpen} />

                <Content />

                <Footer />

                {/* Mobile Navigation Bottom Sheet */}
                <NavbarMobile
                    menuItems={menuItems}
                    setIsOpen={setIsOpen}
                    isOpen={isOpen}
                />
            </div>
        </>
    );
};

export default CartMobile;
