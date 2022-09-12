
document.getElementById('submit').onclick = function (a) {
    a.preventDefault();
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var name = row.insertCell(0);
    var email = row.insertCell(1);
    var mobile = row.insertCell(2);
    var location = row.insertCell(3);
    var country = row.insertCell(4);
    var state = row.insertCell(5);
    var District = row.insertCell(6);
    var time = row.insertCell(7);
    name.innerHTML = document.getElementById("name").value;
    email.innerHTML = document.getElementById("mail").value;
    mobile.innerHTML = document.getElementById("mobile").value;
    location.innerHTML = document.getElementById("location").value;
    country.innerHTML = document.getElementById("country").value;
    state.innerHTML = document.getElementById("state").value;
    District.innerHTML = document.getElementById("District").value;
    time.innerHTML = `<button type="button" class="btn btn-danger"  onclick="myFunction(this)" >Delete</button>`;

    return false;
}

$("#name").keypress(function (e) {
    if (e.which > 48 && e.which < 57) { return false; }
});

$("#mobile").keypress(function (e) {
    if (e.which == 8) { return true }
    else {
        if (e.which < 48 || e.which > 57) { return false; }
    }
});
function validateEmail() {
    var mail = document.getElementById('mail').value;
    var mailformat = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (mail.match(mailformat)) {
        document.querySelector('#mail').style.border = '1px solid green';
        return true;
    }
    else {
        document.querySelector('#mail').style.border = '1px solid red';
        return false;
    }
}
function date() {
    var curdate = new Date();
    document.getElementById("date").innerHTML = curdate.getDate() + "/" + (curdate.getMonth() + 1) + "/" + curdate.getFullYear() + "<br>" + curdate.getHours() + ":" + curdate.getMinutes();

}
function myFunction(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table").deleteRow(i);
}