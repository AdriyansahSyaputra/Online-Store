import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import CardStats from "../../components/Layouts/Dashboard/CardStats";
import { Users, Send, Package, CircleDollarSign } from "lucide-react";
import Chart from "../../components/Layouts/Dashboard/Chart";

const stats = [
    {
        title: "Customers",
        value: "1,234",
        icon: <Users size={20} className="text-indigo-600" />,
        ratio: "6,5%",
        background: "bg-indigo-100",
        line: "bg-indigo-600",
    },
    {
        title: "Orders",
        value: "2,345",
        icon: <Send size={20} className="text-green-600" />,
        ratio: "6,5%",
        background: "bg-green-100",
        line: "bg-green-600",
    },
    {
        title: "Products",
        value: "3,456",
        icon: <Package size={20} className="text-blue-600" />,
        ratio: "6,5%",
        background: "bg-blue-100",
        line: "bg-blue-600",
    },
    {
        title: "Profit",
        value: "60%",
        icon: <CircleDollarSign size={20} className="text-teal-600" />,
        ratio: "6,5%",
        background: "bg-teal-100",
        line: "bg-teal-600",
    },
];

const Dashboard = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    return (
        <>
            <div className="min-h-screen flex bg-gray-100">
                <Sidebar
                    isSidebarOpen={isSidebarOpen}
                    setIsSidebarOpen={setIsSidebarOpen}
                />

                <div
                    className={`flex-1 transition-all duration-300 ease-in-out ${
                        isSidebarOpen ? "pl-60" : "pl-20"
                    }`}
                >
                    <Topbar />

                    <main className="p-6 max-w-screen-xl mx-auto">
                        {/* Dashboard content goes here */}
                        <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                            Dashboard
                        </h1>

                        {/* Card Stats */}
                        <CardStats stats={stats} />

                        {/* Charts */}
                        <Chart />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
