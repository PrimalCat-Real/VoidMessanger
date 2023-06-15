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
      <h2 class="w-3/4 text-light-200 mb-6">Wellcome Back, login!</h2>
    </div>
    <form  @submit.prevent="loginSend" class="wrapper text-center flex items-center flex-col mb-24 gap-5 w-1/4 xl:w-1/3 lg:w-2/3 sm:w-full">
      <input v-model="username" type="text" placeholder="Username"  class="h-10 w-3/4 placeholder:text-sm rounded-lg px-3 py-1 outline-none border-[1.5px] !text-light-default border-light-600 focus:border-main-default active:border-main-default  hover:border-main-default transition-colors duration-200 bg-transparent">
      <input v-model="password" type="password" placeholder="Password" class="h-10 w-3/4 placeholder:text-sm rounded-lg px-3 py-1 outline-none border-[1.5px] !text-light-default border-light-600 focus:border-main-default active:border-main-default  hover:border-main-default transition-colors duration-200  bg-transparent">
      <button @click.prevent="loginSend"  type="submit" class="h-10 w-3/4 outline-none hover:text-light-default bg-light-default rounded-lg px-3 py-1 outline-1 text-dark-400 focus:none  hover:bg-main-default text-lg transition-colors duration-200 font-medium">Login</button>
       <h1 class="text-light-200 mb-2">Don't have account? <span @click.prevent=" useRouter().push('/register')" class="text-main-default cursor-pointer font-semibold">Sign Up</span></h1>
    </form>
    
  </div>
</template>

<script>
import { useProfileStore } from '~/stores/ProfileStore';
import { useTokenStore } from '~/stores/TokenStore';
export default {
  data() {
    return {
      username: null,
      password: null,
      token: null,
      publicKey: null,
      errors: null,
      store: useTokenStore(),
      profileSotre: useProfileStore(),
    }
  },
  methods: {
    loginSend() {
      if (this.validateForm()) {
        fetch('https://octopus-app-l4b7l.ondigitalocean.app/login', {
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
            console.log(data);
            this.token = data.token
            this.publicKey = data.publicKey
            const publicUsername = data.username


            
            localStorage.setItem('token', JSON.stringify(this.token));
            localStorage.setItem('publicKey', JSON.stringify(this.publicKey));
            localStorage.setItem('username', JSON.stringify(publicUsername));

            this.profileSotre.setUsername(data.username);
            this.store.setAuthToken(this.token)
            const router = useRouter();
            router.push("/")
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
            this.errors = error
          });
      }
      // if(this.errors == null){
        // this.store.setAuthToken(this.token)
        // const router = useRouter();
        // router.push("/")
      // }
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

