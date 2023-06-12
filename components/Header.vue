<template>
  <div class="header w-full h-12 flex-auto bg-dark-400 flex flex-col items-center">
    <div class="wrapper flex w-1/2 lg:w-3/4 sm:w-full sm:px-5 h-full items-center">
        <div class="text flex items-center gap-4">
            <img class="h-9 w-9" src="@/assets/avatar.png" alt="">
            <div class="wrapper flex flex-col justify-start">
              <h1 class="text-md text-light-default font-medium">{{username}}</h1>
              <h2 class="text-light-200 text-sm mb-1">{{onlineStatus}}</h2>
            </div>
            
        </div>
    </div>
  </div>
</template>

<script>
import { useProfileStore } from '~/stores/ProfileStore';
export default {
 data() {
    return {
      lastSeeTime: null,
      store: useProfileStore(),
      username: "new_user2"
    }
  },
  mounted(){
    fetch('https://octopus-app-l4b7l.ondigitalocean.app/profile/' + this.username,{
            method: 'GET',
        }).then(response => response.json()).then(data => {
            this.lastSeeTime = data.lastTimeOnline;
      })
  },
  computed: {
    onlineStatus() {
      console.log("seen time", this.lastSeeTime);
      const date1 = new Date(this.lastSeeTime);
      const date2 = new Date();
      const timeDifference = date2.getTime() - date1.getTime();
      if (timeDifference === 60000) {
          console.log("Last seen:", date1.getTime());
          return "Last seen: " + date1.getTime()
      } else if (date1 < date2) {
          console.log("Online");
          return "Online"
      } else {
          console.log("date1 is later than date2");
          return "Time broken"
      }

    }
  }
}
</script>

<style>

</style>