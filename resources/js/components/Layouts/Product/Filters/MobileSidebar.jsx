import { X } from "lucide-react";
import CategoryList from "../../../Fragments/CategoryList";
import PropTypes from "prop-types";

const MobileSidebar = ({
    isOpen,
    setIsOpen,
    categories,
    selectedCategories,
    handleCheckboxChange,
    handleClearAll,
    handleApplyFilters,
}) => {
    return (
        <div
            className={`fixed inset-y-0 right-0 min-w-80 sm:w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
                isOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
            <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200">
                    <h2 className="text-xl font-bold text-gray-800">Filters</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close filters"
                    >
                        <X size={24} className="text-gray-600" />
                    </button>
                </div>

                {/* Categories */}
                <div className="flex-1 overflow-y-auto">
                    <CategoryList
                        categories={categories}
                        selectedCategories={selectedCategories}
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </div>

                {/* Footer Actions */}
                <div className="p-4 border-t border-gray-200 bg-white">
                    <div className="flex space-x-3">
                        <button
                            onClick={handleClearAll}
                            className="flex-1 px-4 py-2.5 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 active:bg-gray-100 transition-colors"
                        >
                            Clear All
                        </button>
                        <button
                            onClick={handleApplyFilters}
                            className="flex-1 px-4 py-2.5 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 active:bg-blue-800 transition-colors"
                        >
                            Apply Filters{" "}
                            {selectedCategories.length > 0 &&
                                `(${selectedCategories.length})`}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MobileSidebar;

MobileSidebar.propTypes = {
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func,
    categories: PropTypes.array.isRequired,
    selectedCategories: PropTypes.array.isRequired,
    handleCheckboxChange: PropTypes.func.isRequired,
    handleClearAll: PropTypes.func.isRequired,
    handleApplyFilters: PropTypes.func.isRequired,
};