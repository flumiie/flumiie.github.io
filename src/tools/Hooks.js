import { useState } from 'react';

const useLocalStorage = (currentItem) => {
  const [currentStore, store] = useState(localStorage.getItem(currentItem));

  const setValue = (newItem) => {
    localStorage.setItem(currentItem, newItem);
    store(newItem);
  };

  return [currentStore, setValue];
};

export default useLocalStorage;
