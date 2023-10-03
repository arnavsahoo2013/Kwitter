const firebaseConfig = {
      apiKey: "AIzaSyABsHgDwQVBb_Vp1v4wNhNk7m1abR2OF44",
      authDomain: "kwitter-b132c.firebaseapp.com",
      databaseURL: "https://kwitter-b132c-default-rtdb.firebaseio.com",
      projectId: "kwitter-b132c",
      storageBucket: "kwitter-b132c.appspot.com",
      messagingSenderId: "626122415737",
      appId: "1:626122415737:web:2d57945711b3518476bea8",
      measurementId: "G-J06Y157XLP"
    };
  
  //ADD YOUR FIREBASE LINKS
  
  firebase.initializeApp(firebaseConfig);

  user=localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML="Welcome "+user+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("room_name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
  Room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(Room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", Room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

