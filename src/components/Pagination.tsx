import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <div className="flex justify-between items-center mt-4">
      <button
        onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
        disabled={currentPage === 1}
        aria-label="Previous" // Add this line
        className="flex items-center justify-center bg-orange-600 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-500 transition"
      >
        <AiOutlineLeft size={20} />
      </button>
      <span className="text-lg font-semibold text-gray-800">
        {`Page ${currentPage} of ${totalPages}`}
      </span>
      <button
        onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
        disabled={currentPage === totalPages}
        aria-label="Next" // Add this line
        className="flex items-center justify-center bg-orange-600 text-white p-2 rounded-full disabled:opacity-50 disabled:cursor-not-allowed hover:bg-orange-500 transition"
      >
        <AiOutlineRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
