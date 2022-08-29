//YOUR FIREBASE LINKS
const firebaseConfig = {
      apiKey: "AIzaSyBR-sWTVJ3upZY3nUFN52zjJaonXN6UtT8",
      authDomain: "kwiter-54629.firebaseapp.com",
      databaseURL: "https://kwiter-54629-default-rtdb.firebaseio.com",
      projectId: "kwiter-54629",
      storageBucket: "kwiter-54629.appspot.com",
      messagingSenderId: "167339977608",
      appId: "1:167339977608:web:0c521556a5ca09ff23683d"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
