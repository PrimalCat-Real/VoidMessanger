<script setup>
definePageMeta({
  layout: "auth",
});
</script>


<template>
  <div class="wrapper flex flex-col items-center justify-center gap-5 w-full h-full font-noto">
    <div class="text-wrapper text-center flex items-center flex-col gap-1 w-1/4 xl:w-1/3 lg:w-2/3 sm:w-full">
      <div class="circle flex items-center justify-center rounded-lg w-[200px] h-[200px] mb-8">
        <IconLogo></IconLogo>
      </div>
      <h1 class="text-light-default">Void</h1>
      <h2 class="w-3/4 text-light-200 mb-6">Register to start chating</h2>
    </div>
    <div class="wrapper text-center flex items-center flex-col mb-24 gap-5 w-1/4 xl:w-1/3 lg:w-2/3 sm:w-full">
      <input v-model="username" type="text" placeholder="Username"  class="h-10 w-3/4 placeholder:text-sm rounded-lg px-3 py-1 outline-none border-[1.5px] !text-light-default border-light-600 focus:border-main-default active:border-main-default  hover:border-main-default transition-colors duration-200 bg-transparent">
      <input v-model="password" type="password" placeholder="Password" class="h-10 w-3/4 placeholder:text-sm rounded-lg px-3 py-1 outline-none border-[1.5px] !text-light-default border-light-600 focus:border-main-default active:border-main-default  hover:border-main-default transition-colors duration-200  bg-transparent">
      <button @click.prevent="registerSend" @submit="registerSend" type="submit"  class=" h-10 w-3/4 hover:text-light-default bg-light-default rounded-lg px-3 py-1 outline-1 text-dark-400 hover:bg-main-default text-lg transition-colors duration-200 font-medium">Register</button>
      <h1 class="text-light-200 mb-2">Have account? <span @click.prevent=" useRouter().push('/login')" class="text-main-default cursor-pointer font-semibold">Log In</span></h1>
    </div>
    
  </div>
</template>

<script>
import { root } from 'postcss';
import { useProfileStore } from '~/stores/ProfileStore';
export default {
  data() {
    return {
      username: null,
      password: null,
      privateKey: null,
      errors: null,
      profileSotre: useProfileStore(),
    }
  },
  setup(){
    
  },
  methods: {
    registerSend() {
      if (this.validateForm()) {
        fetch('https://octopus-app-l4b7l.ondigitalocean.app/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response data
            console.log(data.privateKey);
            this.privateKey = data.privateKey

            // Serialize and store the private key in local storage
            localStorage.setItem('privateKey', JSON.stringify(this.privateKey));
            const publicUsername = data.username
            this.profileSotre.setUsername(data.username);
            const serializedKeyR = localStorage.getItem('privateKey');
            localStorage.setItem('username', JSON.stringify(publicUsername));
            if (serializedKeyR) {
              // Deserialize the private key
              console.log(JSON.parse(serializedKeyR));
            }
            this.errors = null
            // router.push("test/");
          })
          .catch(error => {
            // Handle any errors
            this.errors = error
            console.error(error);
            alert("Error")
          });
      }
      if(this.errors == null){
        const router = useRouter();
        router.push("/")
        // .then(() => {
        // location.reload();
      // });
      }
    },
    validateForm() {
      if (!this.username || !this.password) {
        // Display an error message or perform any other validation logic
        console.log("Please fill in all fields");
        return false;
      }
      console.log(this.password, this.username);
      return true;
    }
  }
}
</script>

<style>

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  transition: 9999s ease-in-out 0s;
  
}

</style>

