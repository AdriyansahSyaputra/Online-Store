import React from "react";
import {
    Edit2,
    Trash2,
    MoreVertical,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import PropTypes from "prop-types";

const OrderTable = ({ orders }) => {
    return (
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <table className="w-full">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Product
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            ID
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Customer
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Price
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Date
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Status
                        </th>
                        <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {orders.map((order) => (
                        <tr key={order.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4">
                                <div className="flex items-center">
                                    <div className="h-10 w-10 rounded-lg bg-gray-200 mr-3"></div>
                                    <div className="text-sm text-gray-500">
                                        {order.product}
                                    </div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {order.id}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-900">
                                {order.customer}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {order.price}
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">
                                {order.date}
                            </td>
                            <td className="px-6 py-4">
                                <span
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                    ${
                        order.status === "Shipped"
                            ? "bg-green-100 text-green-800"
                            : order.status === "Delivered"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                    }`}
                                >
                                    {order.status}
                                </span>
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
    );
};

export default OrderTable;

OrderTable.propTypes = {
    orders: PropTypes.array.isRequired,
};
