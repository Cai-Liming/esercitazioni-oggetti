// Create and display a variable:
function button1(){
    const car = {
        type:"Fiat",
        model: "500",
        color: "white"
    }
 
    document.getElementById("demo").innerHTML= "the car is type " +" "+ car.type + " "+"the model is" + " " + car.model;

}