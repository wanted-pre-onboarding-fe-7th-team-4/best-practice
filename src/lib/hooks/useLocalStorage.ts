const useLocalStorage = () => {
  const getLocalStorage = (name: string) => {
    const getItem = localStorage.getItem(name);
    if (getItem !== null) {
      return JSON.parse(getItem);
    }
    return null;
  };

  const setLocalStorage = <T>(name: string, item: T) => {
    const setItem = localStorage.setItem(name, JSON.stringify(item));
    return setItem;
  };

  const removeLocalStorage = (name: string) => {
    return localStorage.removeItem(name);
  };

  return { getLocalStorage, setLocalStorage, removeLocalStorage };
};

export default useLocalStorage;
