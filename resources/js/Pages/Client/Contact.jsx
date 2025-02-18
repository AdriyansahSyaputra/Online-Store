import React from "react";
import Navbar from "../../components/templates/client/navbar/Navbar";
import Footer from "../../components/templates/client/footer/Footer";
import Banner from "../../components/Elements/Banner";
import Header from "../../components/Layouts/Contact/Header";
import CardInfoDesktop from "../../components/Layouts/Contact/CardInfoDesktop";
import CardInfoMobile from "../../components/Layouts/Contact/CardInfoMobile";
import Map from "../../components/Layouts/Contact/Map";
import FormContact from "../../components/Fragments/FormContact";
import { Headset, MessageCircleMore, Mail } from "lucide-react";

const contactSupport = [
    {
        id: 1,
        title: "Hotline",
        desc: "+62 123 456 789",
        icon: Headset,
    },
    {
        id: 2,
        title: "Whatsapp",
        desc: "+62 123 456 789",
        icon: MessageCircleMore,
    },
    {
        id: 3,
        title: "Email",
        desc: "b9f6H@example.com",
        icon: Mail,
    },
];

const Contact = () => {
    return (
        <>
            <Navbar />
            <Banner
                image="/assets/img/banner/about.jpg"
                title="Contact Us"
                subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit turpis egestas libero, primis cursus vulputate commodo fames posuere torquent justo"
            />
            <main className="my-20 px-4 md:px-20">
                <section className="max-w-6xl mx-auto">
                    <div className="w-full md:w-[90%] bg-white rounded-md shadow-md relative p-8">
                        <Header />

                        {/* Form */}
                        <div className="mt-8">
                            <FormContact />
                        </div>

                        {/* Card Info For Desktop */}
                        <CardInfoDesktop contactSupport={contactSupport} />
                    </div>

                    <CardInfoMobile contactSupport={contactSupport} />

                    <Map />
                </section>
            </main>
            <Footer />
        </>
    );
};

export default Contact;
