import React from "react";
import Navbar from "../../components/templates/client/navbar/Navbar";
import Footer from "../../components/templates/client/footer/Footer";
import Banner from "../../components/Layouts/Home/Banner";
import CardCategory from "../../components/Layouts/Home/CardCategory";
import Flashsale from "../../components/Layouts/Home/Flashsale";
import TopSelling from "../../components/Layouts/Home/TopSelling";
import Recommended from "../../components/Layouts/Home/Recommended";
import { Head } from "@inertiajs/react";

const Home = () => {
    return (
        <>
            <Head title="Home" />

            <Navbar />
            <Banner />
            <main>
                <CardCategory />
                <Flashsale />
                <TopSelling />
                <Recommended />
            </main>
            <Footer />
        </>
    );
};

export default Home;
