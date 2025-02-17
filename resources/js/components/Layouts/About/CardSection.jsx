import React from "react";
import { Users, Globe2, Trophy, Star } from "lucide-react";

const stats = [
    {
        icon: Users,
        count: "1M+",
        label: "Active Customers",
        description:
            "Join the millions of satisfied customers who trust our platform for their shopping needs. We are proud to serve a growing community.",
    },
    {
        icon: Globe2,
        count: "34",
        label: "Regions Covered",
        description:
            "We are expanding globally, with our services now available in over 34 regions, bringing convenience to customers worldwide.",
    },
    {
        icon: Trophy,
        count: "50+",
        label: "Awards & Recognitions",
        description:
            "Our platform has earned over 50 prestigious awards for excellence in service, customer satisfaction, and innovation.",
    },
    {
        icon: Star,
        count: "4.9",
        label: "Best Rating",
        description:
            "Our customers have rated us 4.9 out of 5, showcasing our commitment to providing an exceptional shopping experience.",
    },
];

const CardSection = () => {
    return (
        <>
            {/* Stats Section with Animation */}
            <section className="my-20 px-4 md:px-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="transform hover:-translate-y-2 transition-all duration-300"
                            >
                                <div className="flex flex-col h-full items-center p-8 bg-white rounded-xl shadow-md hover:shadow-lg">
                                    <stat.icon className="w-12 h-12 text-indigo-600 mb-4" />
                                    <h3 className="text-3xl font-bold text-gray-900">
                                        {stat.count}
                                    </h3>
                                    <p className="text-gray-600 font-semibold">
                                        {stat.label}
                                    </p>
                                    <p className="text-sm text-gray-600 text-center font-serif mt-3">
                                        {stat.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default CardSection;