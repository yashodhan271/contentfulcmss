import React from 'react';
import styles from './styles.module.scss';
import Image from 'next/image';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isFilterPagination?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange, isFilterPagination }) => {
  const handlePageChange = (page: number) => {
    onPageChange(page);
    if (isFilterPagination && typeof window !== 'undefined') {
      const element = document.getElementById('filtersHeader');
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className={styles.pagination}>
      <div className={`${styles.arrow} ${styles.left} ${currentPage > 1 && styles.active}`} onClick={() => handlePageChange(currentPage - 1)}></div>
      <p className={styles.pageCopy}>{currentPage} of {totalPages}</p>
      <div className={`${styles.arrow} ${styles.right} ${currentPage < totalPages && styles.active}`} onClick={() => handlePageChange(currentPage + 1)}></div>
    </div>
  );
};

export default Pagination;