// import './styles.css';

console.log("gopi")
function setTrafficLightsTimings(){

            let yellowColor = document.getElementById("yellowLight");
            yellowColor.style.backgroundColor = "black";
            let greenColor = document.getElementById("greenLight");
            greenColor.style.backgroundColor = "black";
            let redColor = document.getElementById("redLight");
            redColor.style.backgroundColor = "red";

            setTimeout(() => {
                
                redColor.style.backgroundColor = "black";
                yellowColor.style.backgroundColor = "yellow";
                greenColor.style.backgroundColor = "black";
            },3000)
            
            setTimeout(() => {
                
                redColor.style.backgroundColor = "black";
                yellowColor.style.backgroundColor = "black";
                greenColor.style.backgroundColor = "green";

            },3500)
        }

setInterval(setTrafficLightsTimings,7500);


