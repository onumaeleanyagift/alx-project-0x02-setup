import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
        <h1>This is the About Page</h1>

        <div className="space-x-4">
          <Button label="Small Rounded" size="small" shape="rounded-sm" />
          <Button label="Medium Rounded" size="medium" shape="rounded-md" />
          <Button label="Large Circle" size="large" shape="rounded-full" />
        </div>
      </main>
    </div>
  );
};

export default About;
