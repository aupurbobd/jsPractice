
document.write("<h2>Testing if... else statements</h2>");

var x=8;

if(x<10)
{
    document.write("x is less than 10 <br>");
}
else if(x=10){
    document.write("X is equal to 10<br>");
}
else
{
    document.write("X is greater than 10 <br>");
}


var y = 0;

if(y>0 && y%2==0)
{
    document.write(y, " is positive and even<br>");
}
else if(y>0 && y%2!=0)
{
    document.write(y, " is positive and odd<br>");
}
else if(y<0 && y%2==0)
{
    document.write(y, " is negative and even<br>");
}

else if(y<0 && y%2!=0)
{
    document.write(y, " is negative and odd<br>");
}
else
{
    document.write(y," is zero");
}