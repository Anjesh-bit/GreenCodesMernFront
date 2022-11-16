import Cookies from 'js-cookie'
const getCookies = (key) => {
    return Cookies.get(key);
}
const setCookies = (key, value) => {
    return Cookies.set(key, value, { expires: 1 });
}

const deleteCookies = (key) => {
    Cookies.remove(key);
}
export { getCookies, setCookies, deleteCookies };