import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";

const Content = () => {
    const [quantity, setQuantity] = useState(1);

    // Fungsi untuk menambah quantity
    const increaseQuantity = () => {
        setQuantity((prev) => prev + 1);
    };

    // Fungsi untuk mengurangi quantity
    const decreaseQuantity = () => {
        setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
    };

    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="bg-white flex items-center px-3 py-5 relative gap-3">
                    <div className="w-4 h-4 rounded-lg relative">
                        <input type="checkbox" className="w-full h-full" />
                    </div>

                    <div className="w-16 h-16 rounded-md overflow-hidden">
                        <img
                            src="/assets/img/category/laptop.png"
                            alt="Laptop"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="flex flex-col p-2 gap-1">
                        <h1 className="text-xs text-slate-500">Laptop Asus</h1>
                        <p className="text-sm font-semibold text-blue-500">
                            $599
                        </p>
                    </div>

                    <div className="flex items-center gap-3 absolute bottom-3 right-4 border-2 rounded-full py-1 px-2">
                        <button onClick={decreaseQuantity}>
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-sm font-semibold text-slate-500">
                            5
                        </span>

                        <button onClick={increaseQuantity}>
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Content;
