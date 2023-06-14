<template>
  <div class="header w-full max-h-12 h-12 flex-auto bg-dark-400 flex flex-col items-center ">
    <div class="wrapper flex w-1/2 lg:w-3/4 sm:w-full sm:px-5 h-full items-center justify-between">
        <div class="text flex items-center gap-4">
            <img class="h-9 w-9" src="@/assets/avatar.png" alt="">
            <div class="wrapper flex flex-col justify-start">
              <h1 placeholder="search user" class="text-md text-light-default outline-none focus:outline-none ring-0 bg-transparent autofill:bg-transparent font-medium">{{store.getReciver()}}</h1>
              <h2 class="text-light-200 text-sm mb-1">{{onlineStatus}}</h2>
            </div>
            
        </div>
      <div @click.prevent="isOpenList = !isOpenList"  class="wrapper flex stroke-light-200 hover:stroke-light-default transition-colors duration-200 cursor-pointer">
        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 19V17C1 15.9391 1.42143 14.9217 2.17157 14.1716C2.92172 13.4214 3.93913 13 5 13H9C9.96 13 10.84 13.338 11.53 13.901M14 1.13C14.8604 1.3503 15.623 1.8507 16.1676 2.55231C16.7122 3.25392 17.0078 4.11683 17.0078 5.005C17.0078 5.89317 16.7122 6.75608 16.1676 7.45769C15.623 8.1593 14.8604 8.6597 14 8.88M14 17H20M17 14V20M3 5C3 6.06087 3.42143 7.07828 4.17157 7.82843C4.92172 8.57857 5.93913 9 7 9C8.06087 9 9.07828 8.57857 9.82843 7.82843C10.5786 7.07828 11 6.06087 11 5C11 3.93913 10.5786 2.92172 9.82843 2.17157C9.07828 1.42143 8.06087 1 7 1C5.93913 1 4.92172 1.42143 4.17157 2.17157C3.42143 2.92172 3 3.93913 3 5Z" class="stroke-inherit" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </div>
    </div>
      
  </div>
  <div v-if="isOpenList" class="list items-center p-8 absolute top-[10%] left-1/2 -translate-x-1/2 bg-dark-400 rounded-xl shadow-sm min-h-[300px] h-1/2 min-w-[200px] w-1/5 z-50 flex flex-col">
    <svg @click.prevent="isOpenList = !isOpenList"  class="absolute top-4 right-4 stroke-light-200 hover:stroke-light-default transition-colors duration-200 cursor-pointer" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17 1L1 17M17 17L1 1" class="stroke-inherit" stroke-width="2" stroke-linecap="round"/>
    </svg>
    <div class="wrapper overflow-y-auto h-fit flex flex-col items-center mb-4">
      <button @click.prevent="changeReciver(user)" v-for="user in store.getUserList()" class="text-light-200 hover:text-light-default" :key="user">{{user}}</button>
    </div>
    
    <div class="wrapper flex w-full justify-between mt-auto bg-dark-default rounded-lg">
      <input v-model="searchUserInput" type="text" class="text-light-default px-3 outline-none focus:outline-none ring-0 bg-transparent autofill:bg-transparent" placeholder="Search user">
      <button @click="searchUser" class="min-w-[40px] min-h-[40px] h-full max-h-12 bg-light-600 rounded-r-lg flex items-center justify-center fill-main-default pl-2 hover:bg-main-default hover:fill-light-default transition-colors duration-300">
        <svg width="18" class="mr-2" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.146 12.3707 1.888 11.112C0.63 9.85333 0.000666667 8.316 0 6.5C0 4.68333 0.629333 3.146 1.888 1.888C3.14667 0.63 4.684 0.000666667 6.5 0C8.31667 0 9.854 0.629333 11.112 1.888C12.37 3.14667 12.9993 4.684 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.81267 10.5623 9.688 9.687C10.5633 8.81167 11.0007 7.74933 11 6.5C11 5.25 10.5623 4.18733 9.687 3.312C8.81167 2.43667 7.74933 1.99933 6.5 2C5.25 2 4.18733 2.43767 3.312 3.313C2.43667 4.18833 1.99933 5.25067 2 6.5C2 7.75 2.43767 8.81267 3.313 9.688C4.18833 10.5633 5.25067 11.0007 6.5 11Z" fill="black"/>
        </svg>

      </button>
    </div>
    
  </div>
  
</template>

<script>
import { useToastStore } from '~/stores/ToastStore';
import { useProfileStore } from '~/stores/ProfileStore';
export default {
 data() {
    return {
      lastSeeTime: null,
      store: useProfileStore(),
      username: "cataction2",
      isOpenList: false,
      searchUserInput: null,
      userList: [],
      toastStore: useToastStore(),
    }
  },
  methods:{
  },
  mounted(){
    const fetchData = async () => {
      if(this.store.getReciver() != null){
        fetch('https://octopus-app-l4b7l.ondigitalocean.app/profile/' + this.store.getReciver(),{
            method: 'GET',
        }).then(response => response.json()).then(data => {
            if(data.ok){
              this.lastSeeTime = data.lastTimeOnline;
            }
            
      })
      }
      
    }
    
    fetchData()
    setInterval(fetchData, 10000);
  },
  methods:{
     async searchUser() {
      try {
        const response = await fetch('https://octopus-app-l4b7l.ondigitalocean.app/profile/' + this.searchUserInput, {
          method: 'GET',
        });
       if (response.ok) {
          const data = await response.json();
          // if (!this.userList.find(data)) {
          //   this.userList.push(data);
          // }
          this.userList.push(data?.username);
          this.store.getUserList().push(data);
          console.log(data);
        }else{
          this.toastStore.setToastContent("User: " + this.searchUserInput + " don't exist")
          this.toastStore.showToast()
        }
      } catch (error) {
        console.error('An error occurred:', error);
        // Handle the error here, such as showing an error message to the user
      }
    },
    changeReciver(reciver){
      this.store.setReciver(reciver)
    }
  },
  computed: {
    onlineStatus() {
      console.log("seen time", this.lastSeeTime);
      const date1 = new Date(this.lastSeeTime);
      const date2 = new Date();
      const timeDifference = date2.getTime() - date1.getTime();
      if(this.username.length > 0){
        if (timeDifference >= 60000) {
          console.log("Last seen", date1.getTime());
          return "Last seen " + date1.toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true,}) + " " + date1.toLocaleString("en-US", { month: "short", day: 'numeric', year: "numeric"})
        } else if (date1 < date2) {
            console.log("Online");
            return "Online"
        } else {
            console.log("date1 is later than date2");
            return "Time don't exist"
        }
      }
      

    }
  }
}
</script>

<style>

</style>