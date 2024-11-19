"use client"
import { useState } from "react";

const usePaginationLogic = () => {
  const [page, setPage] = useState(1);
  const increment = () => setPage(page + 1);
  const decrement = () => setPage(page - 1);

  if (page <= 0) {
    setPage(1);
  }
  return { page, increment, decrement };
};

export default usePaginationLogic;