function tipCalc() {
    let subt = document.getElementById("subtot");
    let tip = document.getElementById("tip");
    let rslt = (subt.value * tip.value) / 100;
    var res = document.getElementById("result")
    res.innerHTML = rslt;
}
