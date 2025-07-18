import React from 'react';
import { UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-sm text-gray-600">@{username}</p>
      <p className="text-sm">📧 {email}</p>
      <p className="text-sm">📞 {phone}</p>
      <p className="text-sm">🌐 <a href={`http://${website}`} target="_blank" className="text-blue-600 underline">{website}</a></p>
      <p className="text-sm">🏢 {company.name}</p>
      <p className="text-sm">📍 {address.street}, {address.city}</p>
    </div>
  );
};

export default UserCard;
