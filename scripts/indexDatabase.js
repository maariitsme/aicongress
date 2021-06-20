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
            alert("Yes");
            flag = -1;
            var encrypted = CryptoJS.AES.encrypt("true", "cvrcse");
            localStorage.setItem("verified",encrypted);
            checked();
            return;
        }
    });
    if(flag == 0){
        closeSpinner();
        alert("no")
        window.location="/aicongress/register.html";
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
        closeSpinner();
        window.open("https://cvrcoe.zoom.us/j/6842415570?pwd=UGltNHBEYm94ZE9XbFh5dHE0dmo2UT09");
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