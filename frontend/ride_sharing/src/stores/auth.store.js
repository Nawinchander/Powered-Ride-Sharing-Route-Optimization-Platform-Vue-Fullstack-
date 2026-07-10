import { defineStore } from "pinia";

import api from "../api/auth.api";

export const useAuthStore =

defineStore("auth",{

state:()=>({

    user:null,

    token:null

}),

actions:{

async login(email,password){

const response = await api.post( "/auth/login",
{
email,
password
} );

this.user = response.data.user;

this.token = response.data.token;

localStorage.setItem( "token", response.data.token );

}

}

});






// import { defineStore }
// from "pinia";

// import api
// from "../api/auth.api";

// export const useAuthStore =
// defineStore(
// "auth",
// {
//     state: () => ({
//         token: null,
//         user: null
//     }),

//     actions: {

//         async login(
//             email,
//             password
//         ) {

//             const response =
//             await api.post(
//                 "/auth/login",
//                 {
//                     email,
//                     password
//                 }
//             );

//             this.token =
//             response.data.accessToken;
//         }
//     }
// });
// // import { defineStore } from "pinia";

// // import api from "../api/auth.api";

// // export const useAuthStore =
// // defineStore("auth", {

// //     state: () => ({
// //         token: null
// //     }),

// //     actions: {

// //         async login(email, password) {

// //             const response =
// //                 await api.post(
// //                     "/auth/login",
// //                     {
// //                         email,
// //                         password
// //                     }
// //                 );

// //             this.token =
// //                 response.data.token;
// //         }
// //     }
// // });