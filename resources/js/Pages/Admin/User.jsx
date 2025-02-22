import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import Users from "../../components/Layouts/User/Users";

const User = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    return (
        <>
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

                <main className="p-6 max-w-screen-xl mx-auto">
                    <Users />
                </main>
            </div>
        </>
    );
};

export default User;
