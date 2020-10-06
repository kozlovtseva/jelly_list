export const setToken = (token) => {
    localStorage.setItem("token", token);
};

export const removeToken = (token) => {
    localStorage.removeItem("token");
};

export const isAuthenticated = () => {
    return Boolean(localStorage.getItem("token"));
};
