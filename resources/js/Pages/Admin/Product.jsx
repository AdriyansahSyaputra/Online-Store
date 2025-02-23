import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import Header from "../../components/Layouts/ProductDashboard/Header";
import SearchFilters from "../../components/Layouts/ProductDashboard/SearchFilters";
import ProductTable from "../../components/Layouts/ProductDashboard/ProductTable";
import CardStats from "../../components/Fragments/CardStats";
import { Package, DollarSign, AlertCircle, XCircle } from "lucide-react";


const products = [
    {
        id: 1,
        name: "Smartphone X",
        category: "Electronics",
        price: 899.99,
        stock: 150,
        status: "In Stock",
        sales: 245,
    },
    {
        id: 2,
        name: "Running Shoes",
        category: "Sports",
        price: 129.99,
        stock: 80,
        status: "Low Stock",
        sales: 189,
    },
    {
        id: 3,
        name: "Coffee Maker",
        category: "Home",
        price: 79.99,
        stock: 0,
        status: "Out of Stock",
        sales: 156,
    },
    {
        id: 4,
        name: "Laptop Pro",
        category: "Electronics",
        price: 1299.99,
        stock: 45,
        status: "In Stock",
        sales: 123,
    },
    {
        id: 5,
        name: "Wireless Earbuds",
        category: "Electronics",
        price: 159.99,
        stock: 200,
        status: "In Stock",
        sales: 432,
    },
];

const stats = [
    {
        title: "Total Products",
        value: "1,234",
        icon: <Package size={20} className="text-indigo-600" />,
        ratio: "12,5%",
        background: "bg-indigo-100",
        line: "bg-indigo-600",
        condition: "up",
    },
    {
        title: "Total Sales",
        value: "$56,432",
        icon: <DollarSign size={20} className="text-green-600" />,
        ratio: "12,5%",
        background: "bg-green-100",
        line: "bg-green-600",
        condition: "up",
    },
    {
        title: "Low Stock",
        value: "15",
        icon: <AlertCircle size={20} className="text-yellow-600" />,
        ratio: "4,2%",
        background: "bg-yellow-100",
        line: "bg-yellow-600",
        condition: "down",
    },
    {
        title: "Out of Stock",
        value: "5",
        icon: <XCircle size={20} className="text-red-600" />,
        ratio: "4,2%",
        background: "bg-red-100",
        line: "bg-red-600",
        condition: "down",
    },
]

const Product = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");

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
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                            selectedStatus={selectedStatus}
                            setSelectedStatus={setSelectedStatus}
                            searchQuery={searchQuery}
                            setSearchQuery={setSearchQuery}
                            sortBy={sortBy}
                            setSortBy={setSortBy}
                        />

                        <ProductTable products={products} />
                    </main>
                </div>
            </div>
        </>
    );
};

export default Product;
