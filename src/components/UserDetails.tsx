import React from "react";
import {
  FaEnvelope,
  FaPhone,
  FaBuilding,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

interface UserDetailsProps {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: {
      name: string;
      address: {
        address: string;
        city: string;
        state: string;
        stateCode: string;
        postalCode: string;
        coordinates: {
          lat: number;
          lng: number;
        };
        country: string;
      };
      department: string;
      title: string;
    };
  };
}

const UserDetails: React.FC<UserDetailsProps> = ({ user }) => {
  const { address } = user.company;

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg h-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
      <div className="bg-orange-100 p-4 rounded-lg shadow-md flex flex-col h-full">
        <h2 className="text-xl font-semibold mb-2 truncate">{`${user.firstName} ${user.lastName}`}</h2>
        <ul className="text-gray-700 space-y-1">
          <li className="flex items-center">
            <FaEnvelope className="text-orange-500 mr-2" />
            <p className="break-words overflow-hidden">{user.email}</p>
          </li>
          <li className="flex items-center">
            <FaPhone className="text-orange-500 mr-2" />
            <p className="break-words overflow-hidden">{user.phone}</p>
          </li>
        </ul>
      </div>

      <div className="bg-blue-100 p-4 rounded-lg shadow-md flex flex-col h-full">
        <h3 className="text-lg font-medium mb-2">Company</h3>
        <ul className="text-gray-700 space-y-1">
          <li className="flex items-center">
            <FaBuilding className="text-blue-500 mr-2" />
            <p className="break-words overflow-hidden">{user.company.name}</p>
          </li>
          <li className="flex items-center">
            <FaMapMarkerAlt className="text-blue-500 mr-2" />
            <p className="break-words overflow-hidden">{`${address.address}, ${address.city}, ${address.state}`}</p>
          </li>
        </ul>
      </div>

      <div className="bg-green-100 p-4 rounded-lg shadow-md flex flex-col h-full">
        <h3 className="text-lg font-medium mb-2">Location</h3>
        <ul className="text-gray-700 space-y-1">
          <li className="flex items-center">
            <FaMapMarkerAlt className="inline text-green-500 mr-2" />
            <p className="break-words overflow-hidden">{`${address.postalCode}, ${address.country}`}</p>
          </li>
          <li className="text-gray-700">
            Coordinates:{" "}
            <span className="font-semibold">{`(${address.coordinates.lat.toFixed(
              5
            )}, ${address.coordinates.lng.toFixed(5)})`}</span>
          </li>
        </ul>
      </div>

      <div className="bg-yellow-100 p-4 rounded-lg shadow-md flex flex-col h-full">
        <h3 className="text-lg font-medium mb-2">Position</h3>
        <ul className="text-gray-700 space-y-1">
          <li className="flex items-center">
            <FaBriefcase className="text-yellow-500 mr-2" />
            <p className="break-words overflow-hidden">
              {user.company.department}
            </p>
          </li>
          <li className="flex items-center">
            <FaBriefcase className="text-yellow-500 mr-2" />
            <p className="break-words overflow-hidden">{user.company.title}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDetails;
