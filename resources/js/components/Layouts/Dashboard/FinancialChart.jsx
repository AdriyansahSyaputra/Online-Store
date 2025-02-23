import React from "react";
import { Doughnut } from "react-chartjs-2";

const FinancialChart = ({ doughnutData, doughnutOptions }) => {
    return (
        <>
            {/* Financial Doughnut Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-xl font-semibold mb-4">
                    Financial Overview
                </h2>
                <div className="h-[300px] flex items-center justify-center">
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                </div>
                <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600">Total Pemasukan</p>
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
        </>
    );
};

export default FinancialChart;
