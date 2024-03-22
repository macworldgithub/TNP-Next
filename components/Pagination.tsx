
'use client'
const Pagination = ({ currentPage, totalPages , setCurr }) => {
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePageChange = (page) => {
   setCurr(page)
  };

  return (
    <div className="flex items-center gap-2 my-8">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-2 py-[2px] border-[1px] border-gray-400 text-sm"
      >
        &lt;&lt;
      </button>
      {pageNumbers.map((page) => (
        <button
          key={page}
          onClick={() => handlePageChange(page)}
          className={` ${currentPage === page ? 'text-white' : ''} ${currentPage === page ? 'bg-blue-500' : ''} px-2 py-[2px] border-[1px] border-gray-400 `}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className=" px-2 py-[2px] border-[1px] border-gray-400 text-sm"
      >
        &gt;&gt;
      </button>
    </div>
  );
};

export default Pagination;
