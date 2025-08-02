import React from "react";
import Link from "next/link";


const Welcome: React.FC = () => {
  return (
    <div>
      <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
        <h1>Welcome to my Airbnb </h1>
        <Link href="/home">
          <button className=" border px-3 py-1 text-lg mt-3  bg-white text-black rounded-full">
            Get Started
          </button>
        </Link>
      </main>
    </div>
  );
};

export default Welcome;
