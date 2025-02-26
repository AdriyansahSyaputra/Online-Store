import React from "react";
import Header from "./Header";
import CartItem from "./CartItem";
import Footer from "./Footer";

const CartSidebarDesktop = ({ isCartOpen, setIsCartOpen}) => {
  return (
    <>
      <aside
        className={`bg-white shadow-xl fixed top-0 right-0 w-96 h-full z-30 ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        } transform transition-transform duration-300`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <Header setIsCartOpen={setIsCartOpen} isCartOpen={isCartOpen} />

          {/* Cart Items */}
          <CartItem />

          {/* Footer */}
          <Footer />
        </div>
      </aside>

      {/* Overlay */}
      {isCartOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-20"
          onClick={() => setIsCartOpen(false)}
        />
      )}
    </>
  );
};

export default CartSidebarDesktop;