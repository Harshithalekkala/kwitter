const firebaseConfig = {
      apiKey: "AIzaSyABbCaxcIJhgcA7CwTOK7Dx1gZG-jxMYI8",
      authDomain: "kwitter-twitter-f85ad.firebaseapp.com",
      databaseURL: "https://kwitter-twitter-f85ad-default-rtdb.firebaseio.com",
      projectId: "kwitter-twitter-f85ad",
      storageBucket: "kwitter-twitter-f85ad.appspot.com",
      messagingSenderId: "833558578201",
      appId: "1:833558578201:web:9b95d27b9dcf267f4b9688",
      measurementId: "G-ML9RBMQQVJ"
    };

    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function send() {
    message=document.getElementById("Message") .value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:message,
          like:0
    }); 
    document.getElementById("Message").value="";
    
}