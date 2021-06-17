var firebaseConfig = {
    apiKey: "AIzaSyB2PEVT3gwlYCSAZildiaSWWL5s6djPBzk",
    authDomain: "iaicaie.firebaseapp.com",
    databaseURL: "https://iaicaie-default-rtdb.firebaseio.com",
    projectId: "iaicaie",
    storageBucket: "iaicaie.appspot.com",
    messagingSenderId: "238532636485",
    appId: "1:238532636485:web:dcfc089c13ff6df767582c"
};
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
function check(){
    var email = document.getElementById("email").value;
    console.log(email);
    var flag = 0;
    database.ref('users').once('value',function(snapshot){
        snapshot.forEach(function(child){
        var val = child.val();
        if(val.email==email){
            alert("Yes");
            flag = -1;
            return;
        }
    });
    if(flag == 0)
        alert("No");
    });
}