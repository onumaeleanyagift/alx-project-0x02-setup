import React from "react";
import { UserProps } from "@/interfaces";


const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border p-4 rounded shadow-sm bg-white">
      <h2 className="text-lg font-bold">{name}</h2>
      <p className="text-sm text-gray-700">{email}</p>
      <p className="text-xs text-gray-500">
        {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
