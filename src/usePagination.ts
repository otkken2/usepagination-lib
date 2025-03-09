import { useState } from 'react';

export const usePagination = <T,>(rowsPerPage: number, allData: T[]) => {
  const [currentPageNumber, setCurrentPageNumber] = useState(1);

  const pageCount = Math.ceil(allData?.length / rowsPerPage);

  const currentPageData = allData?.slice(
    (currentPageNumber - 1) * rowsPerPage,
    currentPageNumber * rowsPerPage,
  );

  const handleChangePage = (event: unknown, newPage: number) => {
    setCurrentPageNumber(newPage);
  };

  return { pageCount, currentPageData, currentPageNumber, handleChangePage };
};
