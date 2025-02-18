import React from "react";
import PropTypes from "prop-types";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const CardInfoMobile = ({ contactSupport }) => {
    return (
        <div className="mt-16 md:hidden min-w-72 h-full shadow-md bg-slate-700 rounded-xl p-6">
            <h1 className="text-white font-medium text-base w-4/5">
                Hi! We are always here help for you.
            </h1>

            {contactSupport.map((item) => (
                <div
                    key={item.id}
                    className="bg-white/10 backdrop-blur p-4 w-full rounded-xl mt-5 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                    <div className="flex items-center gap-3">
                        <div className="bg-white/20 p-2 rounded-lg">
                            <item.icon size={25} className="text-white" />
                        </div>
                        <div>
                            <h1 className="text-white text-sm font-bold">
                                {item.title}
                            </h1>
                            <p className="text-white/80 text-xs">{item.desc}</p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Divider */}
            <div className="mt-4">
                <div className="w-full h-[1px] bg-gray-500"></div>
            </div>

            <div>
                <h3 className="text-white text-sm font-bold mt-6">
                    Connect with us
                </h3>
                <div className="flex items-center justify-evenly gap-4 mt-4">
                    {[Facebook, Instagram, Linkedin, Twitter].map(
                        (Icon, index) => (
                            <div
                                key={index}
                                className="bg-white/10 p-2 rounded-lg hover:bg-white/20 transition-all duration-300 cursor-pointer"
                            >
                                <Icon size={25} className="text-white" />
                            </div>
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default CardInfoMobile;

CardInfoMobile.propTypes = {
    contactSupport: PropTypes.array.isRequired,
};