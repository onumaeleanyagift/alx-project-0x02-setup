import React from "react";
import Header from "@/components/layout/Header";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
        <h1>This is the Home Page</h1>
      </main>
    </div>
  );
};

export default Home;
