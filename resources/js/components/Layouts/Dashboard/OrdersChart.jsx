import React from "react";
import { Bar } from "react-chartjs-2";

const OrdersChart = ({ barData, barOptions }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Order Statistics</h2>
            <div className="h-[300px]">
                <Bar data={barData} options={barOptions} />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Total Orders</p>
                    <p className="text-lg font-semibold text-blue-600">1,234</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600">Avg. Daily Orders</p>
                    <p className="text-lg font-semibold text-purple-600">41</p>
                </div>
            </div>
        </div>
    );
};

export default OrdersChart;