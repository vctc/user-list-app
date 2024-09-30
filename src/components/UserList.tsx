import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setSearchTerm } from "../redux/userSlice";
import { RootState, AppDispatch } from "../redux/store";
import UserCard from "./UserCard";
import UserDetails from "./UserDetails";
import Pagination from "./Pagination";
import { AiOutlineSearch, AiOutlineUser } from "react-icons/ai";

const UserList: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const users = useSelector((state: RootState) => state.users.filteredUsers);
  const totalPages = useSelector((state: RootState) => state.users.totalPages);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState<any>(null);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchUsers(currentPage)).finally(() => {
      setLoading(false);
    });
  }, [dispatch, currentPage]);

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    setSearch("");
    dispatch(setSearchTerm(""));
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <div className="flex h-screen">
      <div className="w-2/5 bg-gray-50 p-6 border-r border-gray-200 flex flex-col">
        <h1 className="text-2xl font-semibold mb-6">User List</h1>
        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={handleSearchChange}
          className="mb-4 p-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-full">
              <div className="loader"></div>
            </div>
          ) : users.length === 0 ? (
            <div className="flex items-center justify-center h-full text-center">
              <div className="text-gray-500 text-lg">
                <AiOutlineSearch size={40} className="mb-2 mx-auto" />
                <p>No results found for "{search}"</p>
                <p>Please try a different search term.</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {users.map((user: any) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onClick={() => handleUserClick(user)}
                />
              ))}
            </div>
          )}
        </div>
        <div className="mt-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
      <div className="w-3/5 p-6">
        {selectedUser ? (
          <UserDetails user={selectedUser} />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <AiOutlineUser size={100} className="text-gray-300 mb-4" />
            <h2 className="text-gray-500 text-2xl">Select a User</h2>
            <p className="text-gray-400">
              Click on a user from the list to view details.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;
