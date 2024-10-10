document.write("<h1> Objects in JavaScript </h1>")

var car = {
    manufacturer : "Toyota",
    model   :   "Fielder",
    price   :   500000,

    carinfo: function()
    {
        return ("Brand: "+this.manufacturer+"<br>" + "Model: "+this.model+"<br>"+"Price: "+this.price+"<br>"+this.color+"<br>");
        // This is toyota car information");
       
    }
   
}

document.write(car.manufacturer+"<br>");

document.write("<br>");

document.write(car.carinfo());

car.color="Red";
document.write("<br>");
document.write(car.carinfo());

delete car.model;
document.write("<br>");
document.write(car.carinfo());

/*
document.write(typeof(car)+"<br>");

var str1=new String();

document.write(typeof(str1));

*/
/*

function car(brand, type, cost)
{
 this.manufacturer = brand;
 this.model=type;
 this.price=cost;

 this.carInfo = function()
 {
    return ("Brand: "+this.manufacturer+"<br>" + "Model: "+this.model+"<br>"+"Price: "+this.price+"<br>");
 }
}

//var c=new cars("Toyota", "Noah",5000);

var c=new car("Audi","SuperX",5000);
document.write(c.carInfo());

var c1=new car("Toyota", "Supra", 7000);
document.write(c1.carInfo());
*/



