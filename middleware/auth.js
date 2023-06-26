import { useTokenStore } from '~/stores/TokenStore';
// let token = useTokenStore().getAuthToken()
let isAuth = false
export default defineNuxtRouteMiddleware((to, from) => {
    // const token = JSON.parse(localStorage.getItem('token'))
    if(to.path === "/" &&  useTokenStore().getAuthToken() == null){
        return navigateTo('/login')
    }else{
        console.log(useTokenStore().getAuthToken());
    }
})