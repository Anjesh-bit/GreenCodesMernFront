import { useState, useEffect } from "react";

const useDate = (initialValue) => {
  const [date, setDate] = useState(initialValue);

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    setDate(year);
  }, []);
  return [date];
};

export { useDate };
