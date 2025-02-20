import React from "react";

const Footer = () => {
    return (
        <>
            <div className="bg-white flex items-center justify-between fixed bottom-0 w-full p-3">
                <div className="flex items-center gap-2">
                    <div className="relative">
                        <input
                            type="checkbox"
                            className="w-4 h-4"
                        />
                    </div>
                    <label className="text-sm text-slate-600">All</label>
                </div>

                <div className="flex items-center gap-2">
                    <div className="flex flex-col">
                        <h1 className="text-xs text-slate-500 text-end">
                            Total
                        </h1>
                        <p className="text-sm font-semibold text-slate-700">
                            $599.00
                        </p>
                    </div>

                    <button className="bg-green-500 py-2 px-3 rounded-md text-white text-sm hover:bg-green-600">
                        Buy (1)
                    </button>
                </div>
            </div>
        </>
    );
};

export default Footer;
