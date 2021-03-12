
         (function () {
             window.onload =function(){
                document.getElementById("cm").onclick= tudyTimer;
                };
            
                timer = null;
                function tudyTimer(){

                    if (timer === null) {
                        timer = setInterval(rudy, 1000);
                    } else {
                        clearInterval(timer);
                        timer = null;
                    }
                }
            

        
            function rudy() {
                document.getElementById("output").innerHTML += "Rudy! ";
            }
            
        })();