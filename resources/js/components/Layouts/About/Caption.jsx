import React from "react";

const Caption = () => {
    return (
        <>
            <section className="my-20 py-10 px-4 md:px-10 bg-white">
                <div className="max-w-full">
                    <h1 className="uppercase text-xs md:text-sm text-orange-600 font-semibold text-center">
                        Welcome to PediaShop
                    </h1>
                    <p className="text-center text-3xl mt-1 text-slate-800 font-semibold">
                        Our Perfect Store
                    </p>

                    <div className="flex flex-col md:flex-row mt-5 md:mt-10 w-full gap-6">
                        <div className="w-full md:w-1/2 p-4">
                            <h1 className="text-xl font-semibold text-start">
                                PediaShop Digital E-commerce
                            </h1>
                            <p className="text-start text-sm md:text-base mt-2 font-extralight text-slate-700">
                                Lorem ipsum dolor sit, amet consectetur
                                adipisicing elit. Maiores nostrum perspiciatis
                                eos aut, ipsam totam quas illum non magni at
                                sequi voluptatem obcaecati, repellat provident,
                                cum iusto! Hic, doloremque labore. Laudantium
                                fugit minima optio inventore ratione, modi
                                fugiat quae distinctio in! Recusandae, harum
                                provident, eum facilis nam quam est enim dolor
                                neque fuga delectus omnis quo aut, fugit sed
                                soluta molestiae esse quibusdam magni temporibus
                                nobis cupiditate corporis! Aut sunt atque omnis
                                consequuntur nesciunt aliquid.
                            </p>
                        </div>
                        <div className="w-full md:w-1/2 overflow-hidden rounded-md">
                            <img
                                src="/assets/img/banner/about.jpg"
                                alt="About Us"
                                className="w-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Caption;
