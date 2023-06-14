import { createPinia, defineStore } from "pinia";

export const useToastStore = defineStore('toastStore', {
state: () => ({
    toastContent: "test",
    isActive: false,
    toastTimer: null, // New timer property
    }),
actions: {
    getToastContent(){
        return this.toastContent
    },
    setToastContent(toastContent) {
        this.toastContent = toastContent;
    },
    setIsActive(active){
        this.isActive = active
    },
    getIsActive(){
        clearTimeout(this.toastTimer)
        return this.isActive
    },
    showToast() {
        this.isActive = true;
        this.toastTimer = setTimeout(() => {
          this.isActive = false;
        }, 3000);
      },

    
},});