(function () {
    "use strict"
    window.onload = function () {
        document.getElementById("animSelect").onchange = animationPicker;
        document.getElementById("startbtn").onclick = animationRunner;
        document.getElementById("stopbtn").onclick = animationStopper;
        document.getElementById("sizeSelect").onchange = sizeAdjuster;
    };


    function animationPicker() {
        let anim = document.getElementById("animSelect");
        let disp = document.getElementById("tbx")
        if (anim.value === "blank") {
            disp.innerHTML = BLANK;
        } else if (anim.value === "exercise") {
            disp.innerHTML = EXERCISE;
        } else if (anim.value === "juggler") {
            disp.innerHTML = JUGGLER;
        } else if (anim.value === "bike") {
            disp.innerHTML = BIKE;
        } else if (anim.value === "dive") {
            disp.innerHTML = DIVE;
        } else if (anim.value === "custom") {
            disp.innerHTML = CUSTOM;
            disp.readOnly = false;
        }
    }

    function sizeAdjuster() {
        let anim = document.getElementById("sizeSelect");
        let disp = document.getElementById("tbx")
        if (anim.value === "tiny") {
            disp.style.fontSize = "7pt";
        } else if (anim.value === "small") {
            disp.style.fontSize = "10pt";
        } else if (anim.value === "medium") {
            disp.style.fontSize = "12pt";
        } else if (anim.value === "large") {
            disp.style.fontSize = "16pt";
        } else if (anim.value === "extralarge") {
            disp.style.fontSize = "24pt";
        } else if (anim.value === "xxl") {
            disp.style.fontSize = "42pt";
        }
    }

    var x = null;
    var i;
    function animationRunner() {
        let anim = document.getElementById("tbx");
        let prts = anim.innerHTML.split("=====");
        let speed;

        if (document.getElementById("spdsel").checked) {
            speed = 170;
        } else {
            speed = 250;
        }

        x = setInterval(animator, speed);

        function animator() {
            if (i === undefined) {
                i = 0;
            } else if (i < (prts.length - 1)) {
                i += 1;
            } else if (i === (prts.length - 1)) {
                i = 0
            }

            anim.innerHTML = prts[i];
            document.getElementById("startbtn").disabled = true;
            document.getElementById("animSelect").disabled = true;

        }
    }

    function animationStopper() {
        clearInterval(x);
        animationPicker();
        document.getElementById("startbtn").disabled = false;
        document.getElementById("animSelect").disabled = false;

    }
})();