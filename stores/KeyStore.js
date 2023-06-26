import { createPinia, defineStore } from "pinia";

export const useKeyStore= defineStore('keyStore', {
state: () => ({
    publicKey: null,
    privateKey: null
    }),
actions: {
    setPublicKey(publicKey) {
        this.publicKey = publicKey;
    },
    getPublicKey() {
        return this.publicKey;
    },
    setPrivateKey(privateKey) {
        this.privateKey = privateKey;
    },
    getPrivateKey() {
        return this.privateKey;
    },
},});