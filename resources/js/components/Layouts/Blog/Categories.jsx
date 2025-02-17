import React, { useState } from "react";
import {
    Monitor,
    Smartphone,
    Cloud,
    Database,
    Code,
} from "lucide-react";
import CategoryList from "./CategoryList";
import MobileFilterButton from "./MobileFilterButton";
import MobileSidebar from "./MobileSidebar";

const Categories = () => {
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        { id: 1, name: "Technology", icon: Monitor, count: 12 },
        { id: 2, name: "Mobile", icon: Smartphone, count: 8 },
        { id: 3, name: "Cloud", icon: Cloud, count: 15 },
        { id: 4, name: "Database", icon: Database, count: 6 },
        { id: 5, name: "Programming", icon: Code, count: 20 },
    ];

    return (
        <>
            <aside className="hidden md:block w-80 p-6 bg-white rounded-xl shadow-md mb-8">
                <div className="mb-4">
                    <h2 className="text-2xl font-bold text-slate-800">
                        Categories
                    </h2>
                    <p className="text-sm text-slate-500 mt-1">
                        Browse articles by topic
                    </p>
                </div>

                <CategoryList categories={categories} />
            </aside>

            {/* Mobile Filter Button */}
            <MobileFilterButton setIsOpen={setIsOpen} />

            {/* Mobile Sidebar */}
            <MobileSidebar
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                categories={categories}
            />

            {/* Overlay */}
            {isOpen && (
                <div
                    onClick={() => setIsOpen(false)}
                    className="fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-300 z-40"
                ></div>
            )}
        </>
    );
};

export default Categories;
