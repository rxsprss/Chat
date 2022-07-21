
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDfkM4HSMGl-3yA5NzoJS_zCuvdoSJNS1A",
      authDomain: "kwitter-fcd16.firebaseapp.com",
      databaseURL: "https://kwitter-fcd16-default-rtdb.firebaseio.com",
      projectId: "kwitter-fcd16",
      storageBucket: "kwitter-fcd16.appspot.com",
      messagingSenderId: "143740313506",
      appId: "1:143740313506:web:f6a96db6a0d44e2dee5cfb"
    };
    
firebase.initializeApp(config);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!"
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - "+Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;



      //End code
      });});}
getData();


function logout() {
      localStorage.removeItem("room_name");
      localStorage.removeItem("user_name");
      window.location = "index.html";
};

function addRoom() {
window.location = "kwitter_page.html";
};
