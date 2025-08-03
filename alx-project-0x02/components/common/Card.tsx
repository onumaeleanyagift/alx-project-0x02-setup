import React from "react";
import { type CardProps } from "@/interfaces/index";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="rounded-xl shadow-md p-4 bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
};

export default Card;
