import React from "react";
import Header from "@/components/layout/Header";

const Welcome: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
        <h1>Welcome to my Airbnb </h1>
        <button className=" border px-3 py-1 text-lg mt-3  bg-white text-black rounded-full">
          Get Started
        </button>
      </main>
    </div>
  );
};

export default Welcome;
