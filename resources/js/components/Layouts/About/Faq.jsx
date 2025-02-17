import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        id: 1,
        question: "How can I track my order?",
        answer: `You can track your order by going to the "My Orders" section in your account. Click on the specific order, and you will find a tracking link or details about the shipment status. If you need further assistance, contact our customer support.`,
    },
    {
        id: 2,
        question: "What is your return policy?",
        answer: "We offer a 14-day return policy from the date you receive your order. Items must be unused, in their original packaging, and accompanied by a receipt or proof of purchase. Certain items, like perishable goods or custom products, may not be eligible for returns. Visit our Returns and Refunds page for more details.",
    },
    {
        id: 3,
        question: " Are there additional shipping fees?",
        answer: "Shipping fees depend on your location and the total weight of the order. Standard shipping rates are displayed during checkout. Some products may qualify for free shipping if they meet certain conditions, such as a minimum order amount.",
    },
    {
        id: 4,
        question: " What payment methods do you accept?",
        answer: "We accept a wide range of payment methods, including credit cards, debit cards, and PayPal. You can choose your preferred payment method during checkout.",
    },
    {
        id: 5,
        question: "How can I contact customer support?",
        answer: `You can contact our customer support team via the "Contact Us" page on our website. We offer support through live chat, email, or phone. Our team is available 24/7 to assist with your inquiries or concerns.`,
    },
    {
        id: 6,
        question: "Can I cancel my order after placing it?",
        answer: `Yes, you can cancel your order as long as it hasn’t been processed or shipped. Go to the "My Orders" section in your account, select the order you want to cancel, and click "Cancel Order." If the order has already been shipped, you may need to wait for it to arrive and then request a return.`,
    },
    {
        id: 7,
        question: "What should I do if I receive a damaged or incorrect item?",
        answer: `If you receive a damaged or incorrect item, please contact our customer support immediately. Provide details such as your order number and photos of the damaged or incorrect item. We’ll resolve the issue by offering a replacement, refund, or exchange.`,
    },
    {
        id: 8,
        question: "How do I apply a discount code or coupon?",
        answer: `You can apply a discount code during checkout. Enter the code in the "Promo Code" field and click "Apply." The discount will be reflected in your order total. Ensure the code is valid and not expired before applying it.`,
    },
    {
        id: 9,
        question: "Can I change my delivery address after placing an order?",
        answer: "You may be able to change your delivery address if the order hasn’t been processed or shipped. Contact our customer support as soon as possible with your updated address. If the order is already in transit, we may not be able to modify the delivery address.",
    },
    {
        id: 10,
        question: "Is my personal information secure on your platform?",
        answer: "Yes, we prioritize the security of your personal information. Our website uses advanced encryption methods and complies with data protection regulations. Your payment details are processed securely through trusted payment gateways.",
    },
];

const Faq = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <section className="my-20 pb-10 px-4 md:px-10 max-w-full">
            <div className="w-full mb-10">
                <h1 className="uppercase text-xs md:text-sm text-orange-600 font-semibold text-center">
                    A question people often ask
                </h1>
                <p className="text-center text-3xl mt-1 text-slate-800 font-semibold">
                    See questions related to you
                </p>
                <p className="mx-auto text-center max-w-xl text-sm mt-2 text-slate-600 font-extralight">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Natus molestias quod eos odit asperiores numquam nemo
                    incidunt temporibus adipisci. Quidem.
                </p>
            </div>

            {/* Questions Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {/* Left Column */}
                <div className="space-y-4">
                    {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-2xl shadow-sm"
                        >
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className="text-base font-medium text-gray-900">
                                    {faq.question}
                                </span>
                                {openFaq === faq.id ? (
                                    <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFaq === faq.id
                                        ? "opacity-100"
                                        : "opacity-0 h-0"
                                }`}
                            >
                                <div className="p-6 pt-0 text-gray-600">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Column */}
                <div className="space-y-4">
                    {faqs.slice(Math.ceil(faqs.length / 2)).map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-white rounded-2xl shadow-sm"
                        >
                            <button
                                onClick={() => toggleFaq(faq.id)}
                                className="w-full flex justify-between items-center p-6 text-left"
                            >
                                <span className="text-base font-medium text-gray-900">
                                    {faq.question}
                                </span>
                                {openFaq === faq.id ? (
                                    <Minus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                ) : (
                                    <Plus className="w-5 h-5 text-gray-500 flex-shrink-0" />
                                )}
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                                    openFaq === faq.id
                                        ? "opacity-100"
                                        : "opacity-0 h-0"
                                }`}
                            >
                                <div className="p-6 pt-0 text-gray-600">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default Faq;