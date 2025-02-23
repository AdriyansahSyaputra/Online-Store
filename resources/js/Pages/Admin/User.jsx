import React, { useState } from "react";
import Sidebar from "../../components/templates/admin/Sidebar";
import Topbar from "../../components/templates/admin/Topbar";
import Header from "../../components/Layouts/User/Header";
import SearchFilters from "../../components/Layouts/User/SearchFilters";
import UsersTable from "../../components/Layouts/User/UsersTable";
import CardStats from "../../components/Fragments/CardStats";
import { Users, UserCheck, UserX, Activity } from "lucide-react";

const stats = [
    {
        title: "Total Users",
        value: "1,234",
        icon: <Users size={20} className="text-indigo-600" />,
        ratio: "12,5%",
        background: "bg-indigo-100",
        line: "bg-indigo-600",
        condition: "up",
    },
    {
        title: "Active Users",
        value: "1,234",
        icon: <UserCheck size={20} className="text-green-600" />,
        ratio: "12,5%",
        background: "bg-green-100",
        line: "bg-green-600",
        condition: "up",
    },
    {
        title: "Inactive Users",
        value: "1,234",
        icon: <UserX size={20} className="text-red-600" />,
        ratio: "12,5%",
        background: "bg-red-100",
        line: "bg-red-600",
        condition: "down",
    },
    {
        title: "User Growth",
        value: "1,234",
        icon: <Activity size={20} className="text-purple-600" />,
        ratio: "12,5%",
        background: "bg-purple-100",
        line: "bg-purple-600",
        condition: "up",
    }
];

const User = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterRole, setFilterRole] = useState("all");
    const [filterStatus, setFilterStatus] = useState("all");

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

                <main className="p-6 max-w-screen-xl mx-auto space-y-4">
                    <Header />
                    <CardStats stats={stats} />
                    <SearchFilters
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                        filterRole={filterRole}
                        setFilterRole={setFilterRole}
                        filterStatus={filterStatus}
                        setFilterStatus={setFilterStatus}
                    />
                    <UsersTable />
                </main>
            </div>
        </>
    );
};

export default User;
