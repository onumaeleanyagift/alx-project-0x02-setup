import React from "react";
import Link from "next/link";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md py-4">
      <div className="container mx-auto px-4">
        <nav>
          <ul className="flex flex-row space-x-6">
            <li>
              <Link href="/home">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/posts">Post</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
