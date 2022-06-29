// import axios from "axios";

export default defineNuxtPlugin((nuxtApp) => {
if(process.client){
    require("bootstrap/dist/js/bootstrap.min.js");
    // const AOS = require('aos')
    // AOS.init({
    //     once: true,
    //     disable: "phone"
    // });
}
})