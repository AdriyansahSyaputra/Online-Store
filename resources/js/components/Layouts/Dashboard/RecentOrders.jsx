import React from "react";
import { ArrowRight, ArrowLeft } from "lucide-react";

const RecentOrders = () => {
    return (
        <div className="w-80 bg-white rounded-md shadow-md overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-600 to-indigo-600">
                <h1 className="text-xl font-semibold text-white">
                    Recent Orders
                </h1>
                <div className="flex items-center gap-2">
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                        <ArrowLeft className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105">
                        <ArrowRight className="w-5 h-5 text-white" />
                    </button>
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
                <div className="space-y-4">
                    {/* Order Card */}
                    {[1, 2, 3, 4, 5].map((item) => (
                        <div key={item} className="p-2 border bg-gray-50 rounded-lg shadow-sm">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <img
                                        src="/assets/img/default.jpg"
                                        alt="User"
                                        className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                                    />
                                    <div className="ml-3">
                                        <h2 className="text-md font-semibold text-gray-800">
                                            Marvel John Doe
                                        </h2>
                                        <p className="text-sm text-gray-600">
                                            $523.00
                                        </p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm text-gray-500">
                                        2 days ago
                                    </p>
                                    <span className="inline-block mt-2 px-2 py-1 bg-yellow-100 rounded-full text-xs text-yellow-700 font-medium">
                                        Pending
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecentOrders;
