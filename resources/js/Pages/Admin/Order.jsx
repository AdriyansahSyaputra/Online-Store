import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import CardStats from "../../components/Fragments/CardStats";
import {
    ShoppingBag,
    ClipboardPaste,
    DollarSign,
    ClockAlert,
} from "lucide-react";
import Header from "../../components/Layouts/Order/Header";
import SearchFilters from "../../components/Layouts/Order/SearchFilters";
import OrderTable from "../../components/Layouts/Order/OrderTable";

const stats = [
    {
        title: "Total Orders",
        value: "1,234",
        icon: <ShoppingBag size={20} className="text-indigo-600" />,
        ratio: "6,5%",
        background: "bg-indigo-100",
        line: "bg-indigo-600",
        condition: "up",
    },
    {
        title: "In Shipping",
        value: "1,234",
        icon: <ClipboardPaste size={20} className="text-blue-600" />,
        ratio: "6,5%",
        background: "bg-blue-100",
        line: "bg-blue-600",
        condition: "up",
    },
    {
        title: "Revenue",
        value: "1,234",
        icon: <DollarSign size={20} className="text-green-600" />,
        ratio: "6,5%",
        background: "bg-green-100",
        line: "bg-green-600",
        condition: "up",
    },
    {
        title: "Pending Orders",
        value: "1,234",
        icon: <ClockAlert size={20} className="text-teal-600" />,
        ratio: "6,5%",
        background: "bg-teal-100",
        line: "bg-teal-600",
        condition: "up",
    },
];

const orders = [
    {
        id: "ORD001",
        customer: "John Doe",
        product: "Laptop",
        price: "$100.00",
        date: "2023-08-01",
        status: "Pending",
    },
    {
        id: "ORD002",
        customer: "Jane Smith",
        product: "Smartphone",
        price: "$200.00",
        date: "2023-08-02",
        status: "Shipped",
    },
    {
        id: "ORD003",
        customer: "Michael Johnson",
        product: "Tablet",
        price: "$150.00",
        date: "2023-08-03",
        status: "Delivered",
    },
]

const Order = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterRole, setFilterRole] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");

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

                    <main className="p-6 max-w-screen-xl mx-auto space-y-4">
                        <Header />
                        <CardStats stats={stats} />
                        <SearchFilters
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            filterRole={filterRole}
                            setFilterRole={setFilterRole}
                            filterStatus={filterStatus}
                            setFilterStatus={setFilterStatus}
                        />
                        <OrderTable orders={orders} />/
                    </main>
                </div>
            </div>
        </>
    );
};

export default Order;
