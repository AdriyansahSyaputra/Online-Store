import React from "react";

const Header = () => {
    return (
        <div className="flex items-center mb-8">
            <div>
                <h1 className="text-2xl font-bold text-gray-800">
                    Order Management
                </h1>
                <p className="text-gray-500">
                    Manage and organize your orders and deliveries
                </p>
            </div>
        </div>
    );
};

export default Header;
