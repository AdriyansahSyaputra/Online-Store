import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement,
} from "chart.js";
import { Doughnut, Line, Bar } from "react-chartjs-2";

// Register ChartJS components
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    BarElement
);

const Chart = () => {
    // Data untuk Doughnut Chart (Keuangan)
    const doughnutData = {
        labels: ["Pemasukan", "Pengeluaran", "Profit", "Investasi"],
        datasets: [
            {
                data: [45000, 25000, 15000, 10000],
                backgroundColor: [
                    "rgba(34, 197, 94, 0.8)",
                    "rgba(239, 68, 68, 0.8)",
                    "rgba(59, 130, 246, 0.8)",
                    "rgba(168, 85, 247, 0.8)",
                ],
                borderColor: [
                    "rgba(34, 197, 94, 1)",
                    "rgba(239, 68, 68, 1)",
                    "rgba(59, 130, 246, 1)",
                    "rgba(168, 85, 247, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    // Data untuk Bar Chart (Orderan)
    const barData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Completed Orders",
                data: [65, 59, 80, 81, 56, 89],
                backgroundColor: "rgba(34, 197, 94, 0.8)",
            },
            {
                label: "Pending Orders",
                data: [28, 48, 40, 19, 86, 27],
                backgroundColor: "rgba(239, 68, 68, 0.8)",
            },
        ],
    };

    // Data untuk Line Chart (Produk)
    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "Produk Masuk",
                data: [120, 190, 150, 180, 160, 200],
                borderColor: "rgba(59, 130, 246, 1)",
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                tension: 0.4,
                fill: true,
            },
            {
                label: "Produk Terjual",
                data: [90, 150, 120, 160, 145, 180],
                borderColor: "rgba(34, 197, 94, 1)",
                backgroundColor: "rgba(34, 197, 94, 0.1)",
                tension: 0.4,
                fill: true,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: "bottom",
            },
            title: {
                display: false,
            },
        },
    };

    const barOptions = {
        ...chartOptions,
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    color: "rgba(0, 0, 0, 0.1)",
                },
            },
            x: {
                grid: {
                    display: false,
                },
            },
        },
    };

    const doughnutOptions = {
        ...chartOptions,
        cutout: "70%",
    };

    return (
        <div className="p-6 space-y-6">
            {/* Top Charts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Financial Doughnut Chart */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">
                        Financial Overview
                    </h2>
                    <div className="h-[300px] flex items-center justify-center">
                        <Doughnut
                            data={doughnutData}
                            options={doughnutOptions}
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-green-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">
                                Total Pemasukan
                            </p>
                            <p className="text-lg font-semibold text-green-600">
                                Rp 45.000K
                            </p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">
                                Total Pengeluaran
                            </p>
                            <p className="text-lg font-semibold text-red-600">
                                Rp 25.000K
                            </p>
                        </div>
                    </div>
                </div>

                {/* Orders Bar Chart */}
                <div className="bg-white p-6 rounded-xl shadow-lg">
                    <h2 className="text-xl font-semibold mb-4">
                        Order Statistics
                    </h2>
                    <div className="h-[300px]">
                        <Bar data={barData} options={barOptions} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-6">
                        <div className="bg-blue-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">
                                Total Orders
                            </p>
                            <p className="text-lg font-semibold text-blue-600">
                                1,234
                            </p>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg">
                            <p className="text-sm text-gray-600">
                                Avg. Daily Orders
                            </p>
                            <p className="text-lg font-semibold text-purple-600">
                                41
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Line Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4">
                    Product Movement Analytics
                </h2>
                <div className="h-[400px]">
                    <Line data={lineData} options={barOptions} />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Total Produk</p>
                        <p className="text-lg font-semibold text-blue-600">
                            1,000
                        </p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Produk Terjual</p>
                        <p className="text-lg font-semibold text-green-600">
                            845
                        </p>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Stok Tersedia</p>
                        <p className="text-lg font-semibold text-yellow-600">
                            155
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;
