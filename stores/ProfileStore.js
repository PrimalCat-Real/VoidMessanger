import { createPinia, defineStore } from "pinia";

export const useProfileStore = defineStore('profileStore', {
state: () => ({
    username: null,
    reciver: null,
    userList: []
    }),
actions: {
    setUsername(username) {
        this.username = username;
    },
    getUsername() {
        return this.username;
    },
    getUserList(){
        return this.userList;
    },
    setUserList(userList){
        this.userList = userList;
    },
    setReciver(reciver){
        this.reciver = reciver
    },
    getReciver(){
        return this.reciver
    },
    pushUser(user){
        // if(!this.userList.map((user) => {return false})){
            
        // }
        // this.userList.forEach(element => {
        //     if(element.user != user.username){
                
        //     }else{
        //         console.log(element.user);
        //     }
        // });
        // if(t)
        if(!this.userList.includes(user)){
            this.userList.push(user)
        }
        
        
        
    },
},});