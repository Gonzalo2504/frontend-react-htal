const tokenKey = 'token';

const getToken = () => {
  return localStorage.getItem(tokenKey);
};

const setToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

const removeToken = () => {
  localStorage.removeItem(tokenKey);
};

export default{ getToken, setToken, removeToken };