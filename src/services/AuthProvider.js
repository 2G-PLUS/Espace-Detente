import { reactive, readonly } from 'vue';

const authState = reactive({
    isAuthenticated: false,
    user: null,
});

// eslint-disable-next-line no-unused-vars
function login(username, password) {
    authState.isAuthenticated = true;
    authState.user = { username };
}

function isAuthenticated() {
    return authState.isAuthenticated;
}

function logout() {
    authState.isAuthenticated = false;
    authState.user = null;
}

export default readonly({
    state: authState,
    login,
    logout,
    isAuthenticated,
});
