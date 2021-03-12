(function(){
    window.onload =function(){
    document.getElementById("sbmt").onclick= getAndPrint;
    };

    function getAndPrint(){
        let name = document.getElementById("ac");
        let amnt = document.getElementById("dp");
        let txtarea = document.getElementById("txtArea");
        txtarea.innerHTML += "Account name:  " + name.value + " Balance: " + amnt.value +"\n";
        name.value="";
        amnt.value="";
    }
})();