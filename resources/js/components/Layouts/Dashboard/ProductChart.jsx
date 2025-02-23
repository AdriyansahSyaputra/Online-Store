import React from "react";
import { Line } from "react-chartjs-2";

const ProductChart = ({ lineData, barOptions }) => {
    return (
        <div className="bg-white p-6 rounded-md shadow-md">
            <h2 className="text-xl font-semibold mb-4">
                Product Movement Analytics
            </h2>
            <div className="h-[315px] w-full">
                <Line data={lineData} options={barOptions} />
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total Produk</p>
                    <p className="text-lg font-semibold text-blue-600">1,000</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Produk Terjual</p>
                    <p className="text-lg font-semibold text-green-600">845</p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Stok Tersedia</p>
                    <p className="text-lg font-semibold text-yellow-600">155</p>
                </div>
            </div>
        </div>
    );
};

export default ProductChart;
