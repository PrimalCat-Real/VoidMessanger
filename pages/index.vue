<template>
    <div v-if="toastStore.getIsActive()" class="toast absolute right-10 top-20 min-w-[200px] w-fit h-10 bg-red-600 flex items-center justify-between">
    <h1 class="text-light-default mx-4">{{toastStore.getToastContent()}}</h1>
    <button @click="toastStore.setIsActive(false)" class="h-10 w-10 bg-red-800 flex items-center justify-center fill-light-200 hover:fill-light-default duration-200 transition-colors">
        <svg width="15" height="14" viewBox="0 0 15 14" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.3047 0.289062C12.4922 0.101562 12.7266 0.0078125 13.0078 0.0078125C13.2891 0.0078125 13.5234 0.101562 13.7109 0.289062C13.9141 0.492188 14.0156 0.730469 14.0156 1.00391C14.0156 1.27734 13.9141 1.51562 13.7109 1.71875L8.41406 6.99219L13.7109 12.2891C13.9141 12.4922 14.0156 12.7305 14.0156 13.0039C14.0156 13.2773 13.9141 13.5156 13.7109 13.7188C13.5234 13.9062 13.2891 14 13.0078 14C12.7266 14 12.4922 13.9062 12.3047 13.7188L7.00781 8.42188L1.71094 13.7188C1.52344 13.9062 1.28906 14 1.00781 14C0.726562 14 0.492188 13.9062 0.304688 13.7188C0.101562 13.5156 0 13.2773 0 13.0039C0 12.7305 0.101562 12.4922 0.304688 12.2891L5.60156 6.99219L0.304688 1.71875C0.101562 1.51562 0 1.27734 0 1.00391C0 0.730469 0.101562 0.492188 0.304688 0.289062C0.492188 0.101562 0.726562 0.0078125 1.00781 0.0078125C1.28906 0.0078125 1.52344 0.101562 1.71094 0.289062L7.00781 5.58594L12.3047 0.289062Z" class="fill-inherit"/>
        </svg>
    </button>
    </div>
  <div class="w-full flex-1 flex-col h-full overflow-hidden items-center flex gap-5">
    <!-- input bar -->
    <div class="input-wrapper w-1/2 lg:w-3/4 sm:w-full sm:px-5 absolute bottom-6 items-end left-1/2 flex -translate-x-1/2 ">
        <div class="input flex w-full  h-12 bg-dark-400 rounded-s-xl rounded-t-xl px-4 z-0">
            <svg class="self-center" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.49219 10.9922C2.49219 9.75781 2.72656 8.59375 3.19531 7.5C3.66406 6.40625 4.30859 5.45313 5.12891 4.64062C5.94922 3.82812 6.90625 3.1875 8 2.71875C9.07812 2.23438 10.2422 1.99219 11.4922 1.99219C12.7422 1.99219 13.9062 2.23438 14.9844 2.71875C16.0781 3.1875 17.0352 3.82812 17.8555 4.64062C18.6758 5.45313 19.3203 6.40625 19.7891 7.5C20.2578 8.59375 20.4922 9.75781 20.4922 10.9922C20.4922 12.2422 20.2578 13.4141 19.7891 14.5078C19.3203 15.6016 18.6758 16.5547 17.8555 17.3672C17.0352 18.1797 16.0781 18.8203 14.9844 19.2891C13.9062 19.7578 12.7422 19.9922 11.4922 19.9922C10.2422 19.9922 9.07812 19.7578 8 19.2891C6.90625 18.8203 5.94922 18.1797 5.12891 17.3672C4.30859 16.5547 3.66406 15.6016 3.19531 14.5078C2.72656 13.4141 2.49219 12.2422 2.49219 10.9922ZM11.4922 0C9.97656 0 8.54687 0.289063 7.20312 0.867188C5.875 1.44531 4.71094 2.23047 3.71094 3.22266C2.71094 4.21484 1.92969 5.38281 1.36719 6.72656C0.789063 8.05469 0.5 9.47656 0.5 10.9922C0.5 12.5234 0.789063 13.9531 1.36719 15.2812C1.92969 16.625 2.71094 17.793 3.71094 18.7852C4.71094 19.7773 5.875 20.5625 7.20312 21.1406C8.54687 21.7187 9.97656 22.0078 11.4922 22.0078C13.0078 22.0078 14.4375 21.7187 15.7812 21.1406C17.1094 20.5625 18.2734 19.7773 19.2734 18.7852C20.2734 17.793 21.0547 16.625 21.6172 15.2812C22.1953 13.9531 22.4844 12.5234 22.4844 10.9922C22.4844 9.47656 22.1953 8.05469 21.6172 6.72656C21.0547 5.38281 20.2734 4.21484 19.2734 3.22266C18.2734 2.23047 17.1094 1.44531 15.7812 0.867188C14.4375 0.289063 13.0078 0 11.4922 0ZM7.4375 13.0547C7.3125 12.8203 7.125 12.6641 6.875 12.5859C6.625 12.5078 6.38281 12.5312 6.14844 12.6562C5.91406 12.7656 5.75781 12.9453 5.67969 13.1953C5.60156 13.4453 5.625 13.6875 5.75 13.9219C6.28125 14.9688 7.05859 15.8203 8.08203 16.4766C9.10547 17.1328 10.2422 17.4609 11.4922 17.4609C12.7422 17.4609 13.8789 17.1328 14.9023 16.4766C15.9258 15.8203 16.7031 14.9766 17.2344 13.9453C17.3594 13.7109 17.3789 13.4688 17.293 13.2188C17.207 12.9687 17.0469 12.7813 16.8125 12.6562C16.5938 12.5312 16.3594 12.5117 16.1094 12.5977C15.8594 12.6836 15.6719 12.8438 15.5469 13.0781C15.1719 13.8125 14.6211 14.4062 13.8945 14.8594C13.168 15.3125 12.3672 15.5391 11.4922 15.5391C10.6016 15.5391 9.79687 15.3125 9.07812 14.8594C8.35938 14.4062 7.8125 13.8047 7.4375 13.0547ZM9.5 8.50781C9.5 8.91406 9.375 9.26562 9.125 9.5625C8.875 9.85938 8.57813 10.0078 8.23438 10.0078C7.89062 10.0078 7.59766 9.85938 7.35547 9.5625C7.11328 9.26562 6.99219 8.91406 6.99219 8.50781C6.99219 8.08594 7.11328 7.73047 7.35547 7.44141C7.59766 7.15234 7.89062 7.00781 8.23438 7.00781C8.57813 7.00781 8.875 7.15234 9.125 7.44141C9.375 7.73047 9.5 8.08594 9.5 8.50781ZM14.75 10.0078C15.0938 10.0078 15.3867 9.85938 15.6289 9.5625C15.8711 9.26562 15.9922 8.91406 15.9922 8.50781C15.9922 8.08594 15.8711 7.73047 15.6289 7.44141C15.3867 7.15234 15.0938 7.00781 14.75 7.00781C14.4062 7.00781 14.1094 7.15234 13.8594 7.44141C13.6094 7.73047 13.4844 8.08594 13.4844 8.50781C13.4844 8.91406 13.6094 9.26562 13.8594 9.5625C14.1094 9.85938 14.4062 10.0078 14.75 10.0078Z" fill="#AAAAAA" fill-opacity="0.8"/>
            </svg>
            <input v-model="inputValue" class="w-full h-full bg-transparent outline-none text-light-default px-4" placeholder="Message" type="text">
        </div>
        <div class="wrapper flex items-end h-full z-10">
            <svg width="8" height="16" viewBox="0 0 8 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.85695 17H0V0C0.220565 2.84 1.00111 5.767 2.34279 8.782C3.3759 11.107 5.13814 13.267 7.62835 15.262C7.79839 15.398 7.91746 15.5759 7.96995 15.7722C8.02244 15.9685 8.00589 16.1741 7.92248 16.362C7.83906 16.55 7.69268 16.7114 7.50253 16.8253C7.31238 16.9391 7.08735 17 6.85695 17Z" fill="#212121"/>
        </svg>
        </div> 
        <button @click="sendMsg" class="min-w-[48px] min-h-[48px] h-full max-h-12 bg-dark-400 rounded-full flex items-center justify-center fill-main-default pl-2 hover:bg-main-default hover:fill-light-default transition-colors duration-300">
            <svg width="25" height="26" viewBox="0 0 25 26" class="fill-inherit" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_411_799)">
            <path d="M0.133577 4.81958L1.63358 11.6868C1.69608 11.9524 1.8328 12.1829 2.04373 12.3782C2.25467 12.5735 2.50076 12.679 2.78201 12.6946L13.6805 13.679C13.743 13.679 13.7937 13.7024 13.8328 13.7493C13.8719 13.7961 13.8836 13.8508 13.868 13.9133C13.868 13.9758 13.8484 14.0227 13.8094 14.054C13.7703 14.0852 13.7273 14.1086 13.6805 14.1243L2.78201 15.1086C2.50076 15.1243 2.25467 15.2258 2.04373 15.4133C1.8328 15.6008 1.69608 15.8352 1.63358 16.1165L0.133577 22.9602C0.0867018 23.2102 0.129671 23.4329 0.262483 23.6282C0.395296 23.8235 0.578889 23.9524 0.813264 24.0149C0.907014 24.0305 1.00076 24.0344 1.09451 24.0266C1.18826 24.0188 1.2742 23.9915 1.35233 23.9446L20.8992 14.6868C21.118 14.5774 21.2664 14.4094 21.3445 14.1829C21.4226 13.9563 21.4148 13.7336 21.3211 13.5149C21.2742 13.4368 21.2156 13.3625 21.1453 13.2922C21.075 13.2219 20.993 13.1633 20.8992 13.1165L1.35233 3.85864C1.13358 3.74927 0.914827 3.73755 0.696077 3.82349C0.477327 3.90942 0.313264 4.05395 0.203889 4.25708C0.157014 4.35083 0.129671 4.44458 0.121858 4.53833C0.114046 4.63208 0.117952 4.72583 0.133577 4.81958Z" class="fill-inherit"/>
            </g>
            <defs>
            <clipPath id="clip0_411_799">
            <rect width="24" height="25" fill="white" transform="matrix(1 0 0 -1 0.115234 25.8977)"/>
            </clipPath>
            </defs>
            </svg>
        </button>
    </div>
    <div class="page w-1/2 lg:w-3/4 sm:w-full sm:px-5 overflow-auto">
    <Message v-for="message in vMessages" :time="message.time" :key="message" :inMessage="message.inMessage" :isSended="true">
        <h1>{{message.text}}</h1>     
        <!-- <h2>{{message.time}}</h2> -->
    </Message>
    
    </div>
    <div class="spacer h-40"></div>
  </div>
</template>


<script setup>
definePageMeta({
    middleware: [
        'auth',
    ],
})

</script>

<script>
import { AES, enc } from 'crypto-js';
import { useProfileStore } from '~/stores/ProfileStore';
import { useToastStore } from '~/stores/ToastStore';
export default {
    data(){
        return{
            messages: [],
            inputValue: null,
            reciverName: null,
            reciverPublicKey: null,
            lastSeeTime: 1686595509368,
            isOnline: "Online",
            store: useProfileStore(),
            toastStore: useToastStore(),
            username: null,
            vMessages: null,
            // rsaKey: new NodeRSA()
        }
    },
    mounted(){
        // this.username = localStorage.getItem('username');
        this.username = this.store.getUsername()
        this.reciverName = this.store.getReciver()
        // alert(this.username)
        // alert(this.reciverPublicKey);
        const fetchData = async () => {
            if(this.store.getReciver() != null){
                this.reciverName = this.store.getReciver()
                fetch('https://octopus-app-l4b7l.ondigitalocean.app/publicKey/' + this.store.getReciver(),{
                    method: 'GET',
                }).then(response => response.json()).then(data => {
                    this.reciverPublicKey = data.publicKey
                    this.store.setUsername(this.username)
                    console.log("reciver pk",data);
                })
            }
                
            try {
                
                const publicKey = localStorage.getItem('publicKey');
                console.log(publicKey);
                
                    const response = await useFetch('https://octopus-app-l4b7l.ondigitalocean.app/messages', {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
                    },
                    });
                    this.messages = response.data?.value
                    console.log("pk",publicKey);
                    console.log("msg",this.messages);
                    const usernames = this.messages
                        .filter(item => item.username === "new_user2" || item.messages.some(msg => msg.sender === "new_user2"))
                        .map(item => {
                            this.store.pushUser(item.username)
                            })

               
                console.log(usernames);
                let decodedArray = []
                const userMessages = this.messages?.find(item => item.username === this.store.getReciver())?.messages;
                // console.log(userMessages);
                // console.log(userMessages);
                // const username = "ki_2";
                // const uMessages = [];

                // this.messages.forEach(item => {
                // if (item.username === username) {
                //     item.messages.forEach(message => {
                //     uMessages.push(message);
                //     });
                // } else if (item.sender === username || item.receiver === username) {
                //     uMessages.push(item);
                // }
                // });

                // uMessages.sort((a, b) => a.time - b.time);

                // console.log(uMessages);
                for (let index = 0; index < userMessages?.length; index++) {
                    // console.log(JSON.parse(publicKey));
                    // let temp
                    // if(this.messages[index].reciverName == this.reciverName){
                    //     console.log(this.decodeMessage(this.reciverPublicKey, this.messages[index].message));
                    // }else{
                    //     console.log(this.decodeMessage(JSON.parse(publicKey), this.messages[index].message));
                    //     // temp = this.decodeMessage(JSON.parse(publicKey), this.messages[index].message)
                    // }
                //    alert(this.reciverName)
                    // console.log(new Date().getTimezoneOffset() * 60 * 1000);
                    // console.log("outcome",this.reciverName == this.messages[index].receiver);
                    // console.log("income",this.messages[index].receiver == this.username);
                    // console.log(this.messages[0]);
                    let temp = userMessages[index]
                    // console.log(this.reciverPublicKey);
                    
                    let isOutCome = temp.receiver === this.username
                    console.log(temp.message,this.reciverPublicKey, this.decodeMessage(this.reciverPublicKey, temp.message));
                    if(temp?.receiver == this.store.getReciver()){
                        decodedArray.push({"text": this.decodeMessage(this.reciverPublicKey, temp.message), "time": new Date(parseInt(temp.time) + new Date().getTimezoneOffset() * 60 * 1000).toLocaleString("en-US", { month: "short", day: 'numeric', hour: "numeric", minute: "numeric", hour12: true,}), "isWatched": false, "isSended": true, "inMessage": isOutCome, "sender": temp.sender, "receiver": temp.receiver})
                    }else if(temp?.receiver == "new_user2"){
                        decodedArray.push({"text": this.decodeMessage(JSON.parse(publicKey), temp.message), "time": new Date(parseInt(temp.time) + new Date().getTimezoneOffset() * 60 * 1000).toLocaleString("en-US", { month: "short", day: 'numeric', hour: "numeric", minute: "numeric", hour12: true,}), "isWatched": false, "isSended": true, "inMessage": isOutCome, "sender": temp.sender, "receiver": temp.receiver })
                    }
                    // if(temp?.receiver == this.reciverName){
                    //     decodedArray.push({"text": this.decodeMessage(this.reciverPublicKey, temp.message), "time": new Date(parseInt(temp.time) + new Date().getTimezoneOffset() * 60 * 1000).toLocaleString("en-US", { month: "short", day: 'numeric', hour: "numeric", minute: "numeric", hour12: true,}), "isWatched": false, "isSended": true, "inMessage": temp.receiver == this.username, "sender": temp.sender, "receiver": temp.receiver})
                    // }else if(temp?.receiver = this.username){
                    //     decodedArray.push({"text": this.decodeMessage(JSON.parse(publicKey), temp.message), "time": new Date(parseInt(temp.time) + new Date().getTimezoneOffset() * 60 * 1000).toLocaleString("en-US", { month: "short", day: 'numeric', hour: "numeric", minute: "numeric", hour12: true,}), "isWatched": false, "isSended": true, "inMessage": temp.receiver == this.reciverName, "sender": temp.sender, "receiver": temp.receiver})
                    // }

                    // const element = array[index];
                }
                
                if(this.reciverPublicKey != null && this.username != null){
                    this.vMessages = decodedArray;
                }else{
                    console.log(this.reciverName != null);
                }
                

                
                // console.log(decodedArray);
                
                // Handle the response data
                // console.log(response.data?.value?.[0]);
            }catch (error) {
                console.error(error);
                // alert("Error");
            }
        };

            // Execute fetchData immediately when the component is mounted
        fetchData();

            // Set up the interval to execute fetchData every 1 second (adjust as needed)
        setInterval(fetchData, 1300);
        // this.$once("hook:beforeDestroy", () => {
        // // Clean up the interval when the component is unmounted
        //     clearInterval(intervalId);
        // });
    },
    methods: {
        sendMsg(){
            if(this.username != null && this.reciverName != null){
                const serializedKey = localStorage.getItem('privateKey');
            const serializedToken = localStorage.getItem('token');
            const publicKey = localStorage.getItem('publicKey');
            const username = localStorage.getItem('username');
            const algorithm = 'aes-256-cbc';
            if(this.inputValue){
                 const cryptedMsg = this.encodeMessage(this.reciverPublicKey, this.inputValue )
            // console.log(encodeMessage(JSON.parse(publicKey), "test"));
            // const decryptedMsg = this.decodeMessage(JSON.parse(publicKey), "U2FsdGVkX191GzGIkokwht52Bi/0+d4TW81sLmsS7U4=")

            
                fetch('https://octopus-app-l4b7l.ondigitalocean.app/message', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token'))
                    },
                    body: JSON.stringify({
                        receiver: this.store.getReciver(),
                        message: cryptedMsg
                    })
                }).then(response => response.json()).then(data => {
                    console.log("send msg", data);
                    this.inputValue = ""
                });
            }
            }
            
           
            
        },
        decodeMessage(secretKey, cipherText) {
            try {
                const bytes = AES.decrypt(cipherText, secretKey);
                const originalText = bytes.toString(enc.Utf8);
                return originalText;
            } catch (error) {
                // console.error('Decryption error:', error.message);
                return null
                // throw error;
            }
        },
        encodeMessage(secretKey, message) {
            try {
                const cipherText = AES.encrypt(message, secretKey).toString();
                return cipherText;
            } catch (error) {
                // console.error('Encryption error:', error.message);
                return null
                // throw error;
            }
        }
           
            // alert(JSON.parse(localStorage.getItem('token')))
    }
}
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #212121; 
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: #777E83; 
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #AAAAAA; 
}
</style>