  var firebaseConfig = {
  apiKey: "AIzaSyDnX63pXAYaIDuF3blZ5Gnbevp9vjQgwmw",
  authDomain: "kwitter2-46125.firebaseapp.com",
  databaseURL: "https://kwitter2-46125-default-rtdb.firebaseio.com",
  projectId: "kwitter2-46125",
  storageBucket: "kwitter2-46125.appspot.com",
  messagingSenderId: "977104956716",
  appId: "1:977104956716:web:3343a2fc1130b5b3009089"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  function send(){
    msg=document.getElementById("mgs").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });
    document.getElementById("msg").value="";


  }