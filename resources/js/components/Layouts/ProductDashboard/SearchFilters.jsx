import React from "react";
import { Search, Upload, Download } from "lucide-react";
import PropTypes from "prop-types";

const SearchFilters = ({ selectedCategory, setSelectedCategory, selectedStatus, setSelectedStatus, searchQuery, setSearchQuery, sortBy, setSortBy }) => {
    return (
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
                        onChange={(e) => setSelectedCategory(e.target.value)}
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
                        <option value="price-high">Price: High to Low</option>
                        <option value="price-low">Price: Low to High</option>
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
    );
};

export default SearchFilters;

SearchFilters.propTypes = {
    selectedCategory: PropTypes.string.isRequired,
    setSelectedCategory: PropTypes.func.isRequired,
    selectedStatus: PropTypes.string.isRequired,
    setSelectedStatus: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    sortBy: PropTypes.string.isRequired,
    setSortBy: PropTypes.func.isRequired,
}; 