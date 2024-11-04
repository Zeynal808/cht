let btn = document.querySelector(".gonder")
let inp = document.querySelector("input")
const firebaseConfig = {
    apiKey: "AIzaSyA5C2_y3Yi7EnjxGeBZtqb0zBa0MPrYq3E",
    authDomain: "front079.firebaseapp.com",
    projectId: "front079",
    storageBucket: "front079.firebasestorage.app",
    messagingSenderId: "779094346780",
    appId: "1:779094346780:web:61fe5af61c0684072da3d9"
};
firebase.initializeApp(firebaseConfig)
let db = firebase.database().ref()

btn.onclick = function () {
    let ad=inp.value
    db.set({
        ad
    })
    inp.value=""
}
db.on("value",function(snapshot){
    let p=$(`<p>${snapshot.val().ad}</p>`)
    $(".message-box").append(p)
})