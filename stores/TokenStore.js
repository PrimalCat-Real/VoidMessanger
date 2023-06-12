import { createPinia, defineStore } from "pinia";

export const useTokenStore= defineStore('tokenStore', {
state: () => ({
    authToken: null,
    }),
actions: {
    setAuthToken(authToken) {
        console.log(authToken);
        this.authToken = authToken;
        console.log(this.authToken);
    },
    getAuthToken() {
        return this.authToken;
    },
},});