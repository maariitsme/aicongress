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
    showSpinner();
    var email = document.getElementById("email").value;
    checked();
    var flag = 0;
    database.ref('users').once('value',function(snapshot){
        snapshot.forEach(function(child){
        var val = child.val();
        if(val.email==email){
            flag = -1;
            var encrypted = CryptoJS.AES.encrypt("true", "cvrcse");
            localStorage.setItem("verified",encrypted);
            checked();
            return false;
        }
    });
    if(flag == 0){
        closeSpinner();
        window.location="/aicongress/register.html";
        // window.location="/register";
    }
    });
    return false;
}
function checked(){
    var item=localStorage.getItem("verified");
    if(item==null)
    item="false"
    
    if(CryptoJS.AES.decrypt(item, "cvrcse").toString(CryptoJS.enc.Utf8)=="true")
    {
        var url='https://cvrcoe.zoom.us/j/98641842348?pwd=WDVULy9BVU90czVLaUd4NlZNbDMvZz09'
        closeSpinner();
        window.open(url);
        $('#joinModal').modal('hide');
    }
    else{
        
        $('#joinModal').modal('show');
    }
}
function showSpinner(){
    $("#popup").removeClass("popupHide");
}
function closeSpinner(){
    $("#popup").addClass("popupHide");
}