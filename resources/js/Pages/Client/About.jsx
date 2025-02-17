import React from "react";
import Navbar from "../../components/templates/client/navbar/Navbar";
import Footer from "../../components/templates/client/footer/Footer";
import Banner from "../../components/Elements/Banner";
import CardSection from "../../components/Layouts/About/CardSection";
import Caption from "../../components/Layouts/About/Caption";
import VisiMisi from "../../components/Layouts/About/VisiMisi";
import Reason from "../../components/Layouts/About/Reason";
import Faq from "../../components/Layouts/About/Faq";
import Slogan from "../../components/Layouts/About/Slogan";
import Timeline from "../../components/Layouts/About/Timeline";
import Team from "../../components/Layouts/About/Team";

const About = () => {
    return (
        <>
            <Navbar />
            <Banner
                title="About Us"
                subtitle="Lorem ipsum dolor sit amet consectetur adipiscing elit turpis egestas libero, primis cursus vulputate commodo fames posuere torquent justo"
                image="/assets/img/banner/about.jpg"
            />
            <main>
                <CardSection />
                <Caption />
                <VisiMisi />
                <Reason />
                <Faq />
                <Slogan />
                <Timeline />
                <Team />
            </main>
            <Footer />
        </>
    );
}

export default About;