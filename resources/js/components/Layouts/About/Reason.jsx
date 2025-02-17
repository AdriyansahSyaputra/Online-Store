import React from "react";
import { ShieldCheck, Truck, Tag, Headphones } from "lucide-react";

const reasons = [
    {
        id: 1,
        icon: "ShieldCheck",
        title: "Secure Transactions",
        description:
            "Enjoy a secure shopping experience with advanced encryption and trusted payment gateways.",
    },
    {
        id: 2,
        icon: "Truck",
        title: "Fast Delivery",
        description:
            "Get your orders delivered quickly with our reliable and speedy shipping services.",
    },
    {
        id: 3,
        icon: "Tag",
        title: "Great Deals",
        description:
            "Take advantage of exclusive discounts and unbeatable prices every day.",
    },
    {
        id: 4,
        icon: "Headphones",
        title: "24/7 Support",
        description:
            "Our dedicated customer support team is here to assist you anytime, anywhere.",
    },
];

const icons = {
    ShieldCheck: <ShieldCheck className="w-12 h-12 text-indigo-600 mb-4" />,
    Truck: <Truck className="w-12 h-12 text-indigo-600 mb-4" />,
    Tag: <Tag className="w-12 h-12 text-indigo-600 mb-4" />,
    Headphones: <Headphones className="w-12 h-12 text-indigo-600 mb-4" />,
};

const Reason = () => {
    return (
        <>
            <section className="my-20 py-16 md:py-28 max-w-full px-4 md:px-10 bg-white">
                <div className="w-full">
                    <h1 className="uppercase text-xs md:text-sm text-orange-600 font-semibold text-center">
                        Why Choose Us?
                    </h1>
                    <p className="text-center text-3xl mt-1 text-slate-800 font-semibold">
                        The Best Online Shopping Experience!
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 mt-5 md:mt-10 w-full gap-6">
                    {reasons.map((reason) => (
                        <div
                            key={reason.id}
                            className="transform hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className="flex flex-col items-center h-full p-4 rounded-xl shadow-md hover:shadow-lg">
                                {icons[reason.icon]}
                                <h1 className="text-lg md:text-2xl font-medium text-gray-700">
                                    {reason.title}
                                </h1>
                                <p className="mt-2 text-center text-sm text-gray-700 font-serif px-6 md:px-0">
                                    {reason.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Reason;