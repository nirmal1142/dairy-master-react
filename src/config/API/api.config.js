export const API = {
    endpoint: window.location.hostname === "localhost"
        // ? "http://127.0.0.1:8000"
        // : "http://127.0.0.1:8000",
        ? "http://3.110.196.29:8000/api"
        : "http://3.110.196.29:8000/api",
    // ? process.env.REACT_APP_LOCAL_API
    // : process.env.REACT_APP_PROD_API
};
