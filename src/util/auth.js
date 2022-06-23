import jwt_decode from "jwt-decode";
export const TOKEN_KEY = "userInfo";

export const isAuthenticated = () => {
  const userInfo = JSON.parse(localStorage.getItem(TOKEN_KEY));
  if (userInfo?.token) {
    const decoded = jwt_decode(userInfo.token);
    console.log(userInfo.token);
    if (decoded.exp < new Date().getTime() / 1000) {
      localStorage.removeItem(TOKEN_KEY);
      return false;
    }
  }
  return userInfo !== null;
};
