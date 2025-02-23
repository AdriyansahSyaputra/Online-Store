import React from "react";
import { Search, Upload, Download } from "lucide-react";
import PropTypes from "prop-types";

const SearchFilters = ({ searchQuery, setSearchQuery, filterRole, setFilterRole, filterStatus, setFilterStatus }) => {
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
                            placeholder="Search users..."
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex gap-4">
                    <select
                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filterRole}
                        onChange={(e) => setFilterRole(e.target.value)}
                    >
                        <option value="all">All Roles</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                        <option value="user">User</option>
                    </select>
                    <select
                        className="px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                    >
                        <option value="all">All Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
            </div>

            <div className="flex justify-between items-center">
                <div className="flex gap-2">
                    <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                        <Upload size={16} />
                        Import Users
                    </button>
                    <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg flex items-center gap-2 hover:bg-gray-50">
                        <Download size={16} />
                        Export Users
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchFilters;

SearchFilters.propTypes = {
    searchQuery: PropTypes.string.isRequired,
    setSearchQuery: PropTypes.func.isRequired,
    filterRole: PropTypes.string.isRequired,
    setFilterRole: PropTypes.func.isRequired,
    filterStatus: PropTypes.string.isRequired,
    setFilterStatus: PropTypes.func.isRequired,
};