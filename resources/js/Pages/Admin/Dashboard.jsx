    import React, { useState } from "react";
    import Sidebar from "../../components/templates/admin/Sidebar";
    import Topbar from "../../components/templates/admin/Topbar";

    const Dashboard = () => {
        const [isSidebarOpen, setIsSidebarOpen] = useState(false);
        return (
            <>
                <div className="min-h-screen flex bg-gray-100">
                    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />

                    <div
                        className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? "ml-64" : "ml-20"}`}
                    >
                        <Topbar />

                        <main className="p-6">
                            {/* Dashboard content goes here */}
                            <h1 className="text-2xl font-semibold text-gray-800 mb-6">
                                Dashboard
                            </h1>
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <p className="text-gray-600">
                                    Welcome to your admin dashboard
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </>
        );
    };

    export default Dashboard;
