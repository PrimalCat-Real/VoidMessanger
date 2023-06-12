import { createPinia, defineStore } from "pinia";

export const useProfileStore = defineStore('profileStore', {
state: () => ({
    username: "Unknown",
    }),
actions: {
    setUsername(username) {
        this.username = username;
    },
    getUsername() {
        return this.username;
    },
},});