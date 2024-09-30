import React from "react";

interface UserCardProps {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    company: {
      name: string;
    };
  };
  onClick: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  const initials = `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`;

  return (
    <div
      onClick={onClick}
      className="p-4 bg-white rounded-lg shadow-md border border-transparent hover:border-orange-400 hover:shadow-lg transition cursor-pointer"
    >
      <div className="flex space-x-4 mb-2">
        <div className="h-12 w-12 rounded-full bg-orange-400 text-white flex items-center justify-center text-lg font-semibold">
          {initials}
        </div>

        <div>
          <h2 className="text-lg font-semibold">
            {`${user.firstName} ${user.lastName}`}
            <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-lg inline-block mt-1">
              {user.company.name}
            </span>
          </h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-500">{user.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
