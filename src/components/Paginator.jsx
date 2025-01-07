import React from 'react';

const Paginator = ({ currentPage, totalPages, onNext, onPrevious, onPageChange }) => {
  const visiblePages = [];
  const MAX_DISPLAY_PAGES = 3;

  const startPage = Math.max(currentPage - Math.floor(MAX_DISPLAY_PAGES / 2), 1);
  const endPage = Math.min(currentPage + Math.floor(MAX_DISPLAY_PAGES / 2), totalPages);

  if (startPage > 1) {
    visiblePages.push(1);
    if (startPage > 2) visiblePages.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    visiblePages.push(i);
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) visiblePages.push('...');
    visiblePages.push(totalPages);
  }

  return (
    <div className='paginator'>
      <button
        onClick={onPrevious}
        disabled={currentPage === 1}
        aria-label='Previous Page'
        className='paginator-btn'
      >
        {'< Previous'}
      </button>

      {visiblePages.map((page, index) => (
        <button
          key={index}
          onClick={() => {
            page !== '...' && onPageChange(page);
          }}
          disabled={page === '...'}
          className={`paginator-btn ${page === currentPage ? 'active' : ''}`}
          aria-label={`Page ${page}`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={onNext}
        disabled={currentPage === totalPages}
        aria-label='Next Page'
        className='paginator-btn'
      >
        {'Next >'}
      </button>
    </div>
  );
};

export default Paginator;
