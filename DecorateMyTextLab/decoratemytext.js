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
        field.style.backgroundImage = "0.5"

    } else {
        field.style.fontWeight = "";
        field.style.color = "";
        field.style.textDecoration = "";
        field.style.backgroundImage = "";
    }
}


function pig() {
    var field = document.getElementById("tf").value;
    var words = field.split(/\s+/);
    var result = "";

    for (var i = 0; i < words.length; i++) {
        if (words[i].charAt(0).match("[aeoiuAEOIU]")) {
            changed = words[i] + "ay";
        } else {
            var uniqueW = words[i];
            for (var j = 0; j < uniqueW.length; j++) {
                if (uniqueW[j].match("[aeoiuAEOIU]")) {
                    var changed = uniqueW.substring(j) + uniqueW.substring(0, j) + "ay";
                    break;
                }
            }
        }
        result += changed + " ";
    }
    document.getElementById("tf").value = result;
}

function markov() {
    var words = document.getElementById("tf").value;
    var arr = words.split(/\s+/);
    var result = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length >= 5) {
            arr[i] = "Malkovich";
        }
        result += arr[i] + " ";
    }
    document.getElementById("tf").value = result;

}
