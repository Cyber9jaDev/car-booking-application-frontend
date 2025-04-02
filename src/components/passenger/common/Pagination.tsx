"use client";

import { useState } from 'react';
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

// interface PaginationProps {
//   totalPages?: number;
//   currentPage?: number;
//   onPageChange?: (page: number) => void;
// }

export default function Pagination (){
  const [page, setPage] = useState(1);
  const totalPages = 28;

  const handlePageChange = (newPage: number) => {
    const validatedPage = Math.max(1, Math.min(newPage, totalPages));
    setPage(validatedPage);
    // onPageChange?.(validatedPage);
  };

  return (
    <section className="w-full flex items-center justify-center my-20">
      <ul className="flex items-center gap-2 p-0 list-none">
        {/* First Page */}
        <li 
          onClick={() => handlePageChange(1)}
          className={`inline-flex items-center justify-center border border-blue-500 rounded-md p-2 text-white ${
            page === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-blue-500/20'
          }`}
        >
          <ChevronsLeft className="w-4 h-4" />
        </li>

        {/* Previous Page */}
        <li 
          onClick={() => handlePageChange(page - 1)}
          className={`inline-flex items-center justify-center border border-blue-500 rounded-md p-2 text-white mr-4 ${
            page === 1 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-blue-500/20'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
        </li>

        {/* Current Page Indicator */}
        <li className="inline-flex items-center text-gray-700 dark:text-gray-300">
          Page <span className="mx-1 font-medium">{page}</span> of <span className="mx-1 font-medium">{totalPages}</span>
        </li>

        {/* Next Page */}
        <li 
          onClick={() => handlePageChange(page + 1)}
          className={`inline-flex items-center justify-center border border-blue-500 rounded-md p-2 text-white ml-4 ${
            page === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-blue-500/20'
          }`}
        >
          <ChevronRight className="w-4 h-4" />
        </li>

        {/* Last Page */}
        <li 
          onClick={() => handlePageChange(totalPages)}
          className={`inline-flex items-center justify-center border border-blue-500 rounded-md p-2 text-white ${
            page === totalPages ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:bg-blue-500/20'
          }`}
        >
          <ChevronsRight className="w-4 h-4" />
        </li>
      </ul>
    </section>
  );
};

;