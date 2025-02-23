import React from "react";
import { UserPlus } from "lucide-react";

const Header = () => {
    return (
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
    );
}

export default Header;