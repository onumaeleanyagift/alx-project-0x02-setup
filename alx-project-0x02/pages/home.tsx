import React from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
        <h1>This is the Home Page</h1>

        <div>
          <Card
            title="Top Villa"
            content="Explore luxurious villas with great views."
          />
          <Card
            title="Self Check-in"
            content="Properties with flexible check-in options."
          />
          <Card title="Beachfront" content="Stay close to the ocean." />
        </div>
      </main>
    </div>
  );
};

export default Home;
