import React from "react";
import { Mail, ChevronLeft, ChevronRight, Edit2, Trash2 } from "lucide-react";

const UsersTable = () => {
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
    ];

    return (
        <>
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
        </>
    );
};

export default UsersTable;
