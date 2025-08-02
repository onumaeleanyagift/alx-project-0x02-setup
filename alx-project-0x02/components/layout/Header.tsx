import React from "react";
import Home from "@/pages/home";
import About from "@/pages/about";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <nav>
          <ul>
            <li>
              <Home />Home
            </li>
            <li>
              <About />About
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
