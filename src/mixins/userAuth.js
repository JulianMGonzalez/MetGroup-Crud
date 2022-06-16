export default {
    data: () => ({
        isLoggedIn: JSON.parse(localStorage.getItem("userMetGroup")) ? true : false,
    }),
};