
const getLocalStorage = (key) => {
    return JSON.parse(localStorage.getItem(key));
}
const setLocalStorage = (key, value) => {
    const stringifyValue = JSON.stringify(value);
    return localStorage.setItem(key, stringifyValue)
}

const deleteLocalStorage = (key) => {
    localStorage.removeItem(key);
}

export { getLocalStorage, setLocalStorage, deleteLocalStorage }