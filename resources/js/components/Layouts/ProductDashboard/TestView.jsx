import React, { useState } from "react";
import {
    Search,
    Plus,
    Edit2,
    Trash2,
    MoreVertical,
    Download,
    Upload,
    ChevronLeft,
    ChevronRight,
    Package,
    DollarSign,
    AlertCircle,
    XCircle,
} from "lucide-react";

const TestView = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [selectedStatus, setSelectedStatus] = useState("all");
    const [searchQuery, setSearchQuery] = useState("");
    const [sortBy, setSortBy] = useState("newest");

    // Sample data
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

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Product Management
                    </h1>
                    <p className="text-gray-500">
                        Manage and organize your product inventory
                    </p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    <Plus size={20} />
                    Add New Product
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">
                                Total Products
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                1,234
                            </h3>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <Package className="text-blue-600 h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="text-green-500 text-sm">↑ 12.5%</span>
                        <span className="text-gray-500 text-sm ml-1">
                            vs last month
                        </span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Total Sales</p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                $45,678
                            </h3>
                        </div>
                        <div className="bg-green-100 p-3 rounded-lg">
                            <DollarSign className="text-green-600 h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="text-green-500 text-sm">↑ 8.2%</span>
                        <span className="text-gray-500 text-sm ml-1">
                            vs last month
                        </span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Low Stock</p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                12
                            </h3>
                        </div>
                        <div className="bg-yellow-100 p-3 rounded-lg">
                            <AlertCircle className="text-yellow-600 h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="text-red-500 text-sm">↑ 2.4%</span>
                        <span className="text-gray-500 text-sm ml-1">
                            needs attention
                        </span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">
                                Out of Stock
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                8
                            </h3>
                        </div>
                        <div className="bg-red-100 p-3 rounded-lg">
                            <XCircle className="text-red-600 h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="text-red-500 text-sm">↓ -1.8%</span>
                        <span className="text-gray-500 text-sm ml-1">
                            vs last month
                        </span>
                    </div>
                </div>
            </div>

            {/* Search and Filters */}
            <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
                <div className="flex flex-col md:flex-row gap-4 mb-6">
                    <div className="flex-1">
                        <div className="relative">
                            <Search
                                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                                size={20}
                            />
                            <input
                                type="text"
                                placeholder="Search products..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <select
                            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={selectedCategory}
                            onChange={(e) =>
                                setSelectedCategory(e.target.value)
                            }
                        >
                            <option value="all">All Categories</option>
                            <option value="electronics">Electronics</option>
                            <option value="sports">Sports</option>
                            <option value="home">Home</option>
                        </select>
                        <select
                            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={selectedStatus}
                            onChange={(e) => setSelectedStatus(e.target.value)}
                        >
                            <option value="all">All Status</option>
                            <option value="in-stock">In Stock</option>
                            <option value="low-stock">Low Stock</option>
                            <option value="out-of-stock">Out of Stock</option>
                        </select>
                        <select
                            className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="price-high">
                                Price: High to Low
                            </option>
                            <option value="price-low">
                                Price: Low to High
                            </option>
                        </select>
                    </div>
                </div>

                <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                            <Upload size={16} />
                            Import
                        </button>
                        <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                            <Download size={16} />
                            Export
                        </button>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span>Show:</span>
                        <select className="px-2 py-1 border border-gray-200 rounded-lg">
                            <option>10</option>
                            <option>25</option>
                            <option>50</option>
                            <option>100</option>
                        </select>
                        <span>entries</span>
                    </div>
                </div>
            </div>

            {/* Products Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Product
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Category
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Price
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Stock
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Status
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Sales
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {products.map((product) => (
                            <tr key={product.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-lg bg-gray-200 mr-3"></div>
                                        <div>
                                            <div className="font-medium text-gray-900">
                                                {product.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                #{product.id}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {product.category}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-900">
                                    ${product.price}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {product.stock}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${
                        product.status === "In Stock"
                            ? "bg-green-100 text-green-800"
                            : product.status === "Low Stock"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                    }`}
                                    >
                                        {product.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {product.sales}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    <div className="flex items-center gap-3">
                                        <button className="text-blue-600 hover:text-blue-800">
                                            <Edit2 size={16} />
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            <Trash2 size={16} />
                                        </button>
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <MoreVertical size={16} />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* Pagination */}
                <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200">
                    <div className="text-sm text-gray-500">
                        Showing 1 to 5 of 50 entries
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded-lg flex items-center gap-1 hover:bg-gray-50 disabled:opacity-50">
                            <ChevronLeft size={16} />
                            Previous
                        </button>
                        <div className="flex items-center gap-1">
                            <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50">
                                1
                            </button>
                            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
                                2
                            </button>
                            <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50">
                                3
                            </button>
                            <span className="px-2">...</span>
                            <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50">
                                10
                            </button>
                        </div>
                        <button className="px-3 py-1 border border-gray-200 rounded-lg flex items-center gap-1 hover:bg-gray-50">
                            Next
                            <ChevronRight size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestView;
