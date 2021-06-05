const config = {
    apiKey: "AIzaSyB2PEVT3gwlYCSAZildiaSWWL5s6djPBzk",
    authDomain: "iaicaie.firebaseapp.com",
    databaseURL: "https://iaicaie-default-rtdb.firebaseio.com",
    projectId: "iaicaie",
    storageBucket: "iaicaie.appspot.com",
    messagingSenderId: "238532636485",
    appId: "1:238532636485:web:dcfc089c13ff6df767582c"
};

firebase.initializeApp(config);
var database = firebase.database();
var emailError = true;

function register() {
    js = getData();
    database.ref('users').child(js.phone).once('value').then((snapshot) => {
        data = snapshot.val();
        if (data != null)
            $('#failModal').modal('show');
        else
            add(js);
    })
    return false;
}

function add(js) {
    database.ref("users").child(js.phone).set(js);
    document.getElementById("form").reset();
    $('#successModal').modal('show');
}

function getData() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var designation = document.getElementById("designation").value;
    var phone = document.getElementById("phone").value;
    phone = document.getElementById("tel ").value + phone;
    var organization = document.getElementById("organization").value;
    var location = document.getElementById("location").value;
    var area = document.getElementById("area").value;
    return { name, email, designation, phone, organization, location, area };
}
$(document).ready(function() {
    const email =
        document.getElementById('email');
    email.addEventListener('blur', () => {
        let regex =
            /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
        let s = email.value;
        if (regex.test(s)) {
            email.classList.remove(
                'is-invalid');
            emailError = true;
        } else {
            email.classList.add(
                'is-invalid');
            emailError = false;
        }
    });
});