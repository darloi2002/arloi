// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAQd7fQAjFn0QhaU3tQPI4z4TGZCRBgRYM",
    authDomain: "fir-96db9.firebaseapp.com",
    databaseURL: "https://fir-96db9-default-rtdb.firebaseio.com",
    projectId: "fir-96db9",
    storageBucket: "fir-96db9.appspot.com",
    messagingSenderId: "342146084148",
    appId: "1:342146084148:web:a1e071a8dca06915734961",
    measurementId: "G-TH2G9RGDM9"
};

firebase.initialzeApp(firebaseConfig);

var database = firebase.database();


getIP.addEventListener('click', () => {
    database.ref().set({
        name: 'sds'
    })
})

// function InsertData() {
//     const start = Date.now();

//         set(ref(db, "TheChatApp/" + (99999999999999 - start).toString()), {
//                 Sender: user,
//                 SendTo: user == 1 ? 0 : 1,
//                 Content: inputchat.value,
//                 CreateTime: start,
//                 OrderTime: 99999999999999 - start,
//             })
//             .then(() => {})
//             .catch((error) => {
//                 alert("unsuccesful, error" + error);
//             });
// }