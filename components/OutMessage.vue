<template>
  <div class="message flex min-h-8 h-fit sm:h-fit items-end min-w-[23%] max-w-[44%] sm:max-w-[70%] w-full my-2 ml-auto">
    <div class="flex bg-main-default h-full px-4 w-full overflow-hidden text-light-default rounded-s-lg rounded-t-lg items-center justify-between z-0 gap-4 py-1">
        <slot>
        </slot>
         <div class="wrapper h-full flex mt-auto gap-2">
            <h2 class="text-[12px] whitespace-nowrap">{{time}}</h2>
        </div>
    </div>
    <div class="wrapper flex items-end h-full">
        <svg class="z-10" width="8" height="19" viewBox="0 0 10 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.57118 24H0V0C0.275706 4.00941 1.25139 8.14165 2.92849 12.3981C4.21988 15.6805 6.42267 18.7299 9.53544 21.5464C9.74799 21.7384 9.89683 21.9895 9.96244 22.2666C10.028 22.5438 10.0074 22.834 9.9031 23.0993C9.79883 23.3647 9.61585 23.5926 9.37817 23.7534C9.14048 23.9141 8.85919 24.0001 8.57118 24Z" fill="#8774E1"/>
        </svg>
    </div>
</div>
</template>

<script>
export default {
props: {
    time: {
        default: "12:00 Pm",
    }
  }
}
</script>

<style>

</style>