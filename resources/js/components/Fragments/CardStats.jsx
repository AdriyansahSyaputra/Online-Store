import React from "react";
import PropTypes from "prop-types";
import { ArrowUp, ArrowDown } from "lucide-react";

const CardStats = ({ stats }) => {
    return (
        <div className="grid grid-cols-2 w-full gap-5 lg:grid-cols-4">
            {stats.map((stat, index) => (
                <div
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm flex flex-col relative"
                >
                    <div className="flex items-start">
                        {/* Garis Vertikal */}
                        <div className={`w-1 h-14 mr-4 ${stat.line}`}></div>

                        {/* Informasi utama */}
                        <div className="flex flex-col">
                            <p className="text-base text-gray-400">
                                {stat.title}
                            </p>
                            <p className="text-2xl text-slate-700 font-medium">
                                {stat.value}
                            </p>
                        </div>

                        {/* Icon Users */}
                        <div
                            className={`${stat.background} p-2 rounded-md absolute right-4 top-4`}
                        >
                            {stat.icon}
                        </div>
                    </div>

                    {/* Statistik Perubahan - Dipindah ke bawah */}
                    <div className="flex items-center mt-3">
                        {stat.condition === "up" ? (
                            <ArrowUp size={14} className="mr-1 text-green-600" />
                        ) : (
                            <ArrowDown
                                size={14}
                                className="mr-1 text-red-600"
                            />
                        )}
                        <span className="font-medium text-green-600">
                            {stat.ratio}
                        </span>
                        <span className="text-gray-500 ml-1">
                            Since last month
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardStats;

CardStats.propTypes = {
    stats: PropTypes.array.isRequired,
};