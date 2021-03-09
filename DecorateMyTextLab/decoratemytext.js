

function helloalert() {
    alert("Hello, world!");
}
function bigdeco() {

    document.getElementById("tf").style.fontSize = "24pt";
}

function myCheck() {
    alert("Textbox checked")
}

function checkbold() {
    var field = document.getElementById("tf");
    if (document.getElementById("chb").checked == true) {
        field.style.fontWeight = "bold";
        field.style.color = "green";
        field.style.textDecoration = "underline";
        field.style.backgroundImage = " url('https://courses.cs.washington.edu/courses/cse190m/10su/labs/5/hundred-dollar-bill.jpg'";

    } else {
        field.style.fontWeight = "";
        field.style.color = "";
        field.style.textDecoration = "";
        field.style.backgroundImage = "";
    }
}
