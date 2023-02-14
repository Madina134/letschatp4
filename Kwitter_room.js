ser_name = localStorage.getItem("user_name"); room_name = localStorage.getItem("room_name");
var  firebaseConfig = {
    apiKey: "AIzaSyAt1c2d8NeDS9Exflf6bg8qn3T_VqeWvqg",
    authDomain: "lets-chat-web-app-1a2bd.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-1a2bd-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-1a2bd",
    storageBucket: "lets-chat-web-app-1a2bd.appspot.com",
    messagingSenderId: "1077203643166",
    appId: "1:1077203643166:web:820fe90ec073c895bd770f",
    measurementId: "G-BZZG8WQFMT"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "Kwitter_message.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
