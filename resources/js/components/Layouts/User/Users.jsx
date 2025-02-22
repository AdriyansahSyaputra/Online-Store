import React, { useState } from "react";
import {
    Search,
    Filter,
    UserPlus,
    Mail,
    Phone,
    MapPin,
    Download,
    Upload,
    ChevronLeft,
    ChevronRight,
    MoreVertical,
    Edit2,
    Trash2,
    Activity,
    Users,
    UserCheck,
    UserX,
} from "lucide-react";

const UsersDashboard = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filterRole, setFilterRole] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");

    // Sample users data
    const users = [
        {
            id: 1,
            name: "John Doe",
            email: "john@example.com",
            role: "Admin",
            status: "Active",
            location: "New York, USA",
            joinDate: "2024-01-15",
            phone: "+1 234-567-8900",
            lastActive: "2 hours ago",
        },
        {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            role: "Editor",
            status: "Inactive",
            location: "London, UK",
            joinDate: "2024-02-01",
            phone: "+44 234-567-8900",
            lastActive: "5 days ago",
        },
        // Add more sample users as needed
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6">
            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">
                        Users Management
                    </h1>
                    <p className="text-gray-500">
                        Manage and monitor user activities
                    </p>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition-colors">
                    <UserPlus size={20} />
                    Add New User
                </button>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">Total Users</p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                2,345
                            </h3>
                        </div>
                        <div className="bg-blue-100 p-3 rounded-lg">
                            <Users className="text-blue-600 h-6 w-6" />
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
                            <p className="text-gray-500 text-sm">
                                Active Users
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                1,890
                            </h3>
                        </div>
                        <div className="bg-green-100 p-3 rounded-lg">
                            <UserCheck className="text-green-600 h-6 w-6" />
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
                            <p className="text-gray-500 text-sm">
                                Inactive Users
                            </p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                455
                            </h3>
                        </div>
                        <div className="bg-red-100 p-3 rounded-lg">
                            <UserX className="text-red-600 h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="text-red-500 text-sm">↑ 2.4%</span>
                        <span className="text-gray-500 text-sm ml-1">
                            vs last month
                        </span>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-gray-500 text-sm">User Growth</p>
                            <h3 className="text-2xl font-bold text-gray-800">
                                +145
                            </h3>
                        </div>
                        <div className="bg-purple-100 p-3 rounded-lg">
                            <Activity className="text-purple-600 h-6 w-6" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <span className="text-green-500 text-sm">↑ 4.8%</span>
                        <span className="text-gray-500 text-sm ml-1">
                            this month
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

            {/* Users Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                User
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Role
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Status
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Location
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Join Date
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Last Active
                            </th>
                            <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {users.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 rounded-full bg-gray-200 mr-3"></div>
                                        <div>
                                            <div className="font-medium text-gray-900">
                                                {user.name}
                                            </div>
                                            <div className="text-sm text-gray-500">
                                                {user.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {user.role}
                                </td>
                                <td className="px-6 py-4">
                                    <span
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${
                        user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                    }`}
                                    >
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {user.location}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {user.joinDate}
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-500">
                                    {user.lastActive}
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-3">
                                        <button className="text-gray-400 hover:text-gray-600">
                                            <Mail size={16} />
                                        </button>
                                        <button className="text-blue-600 hover:text-blue-800">
                                            <Edit2 size={16} />
                                        </button>
                                        <button className="text-red-600 hover:text-red-800">
                                            <Trash2 size={16} />
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
                        Showing 1 to 10 of 100 users
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="px-3 py-1 border border-gray-200 rounded-lg flex items-center gap-1 hover:bg-gray-50 disabled:opacity-50">
                            <ChevronLeft size={16} />
                            Previous
                        </button>
                        <div className="flex items-center gap-1">
                            <button className="px-3 py-1 bg-blue-600 text-white rounded-lg">
                                1
                            </button>
                            <button className="px-3 py-1 border border-gray-200 rounded-lg hover:bg-gray-50">
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

export default UsersDashboard;