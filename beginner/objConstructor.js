document.write("<h1><u>Object Constructor</u></h1>");

/*
var rect = new Object();

rect.length=20;
rect.width=10;

rect.getArea = function()
{
    return rect.length * rect.width;
}

rect.getPerimeter = function()
{
    return 2*(this.length+this.width);
}

document.write("The lenght is "+rect.length+"<br>The width is "+rect.width+"<br>The Area is "+rect.getArea()+"<br>The Perimeter is "+rect.getPerimeter());

*/

function rect(ln,wd)
{
    this.length = ln;
    this.width = wd;

  this.getArea = function()
{
    return this.length * this.width;
}

this.getPerimeter = function()
{
    return 2*(this.length+this.width);
}

}

var r1 = new rect(50,30);

document.write(r1.length);

document.write(r1.getArea());
document.write(r1.getPerimeter());

//document.write("The lenght is "+r1.length+"<br>The width is "+r1.width+"<br>The Area is "+r1.getArea()+"<br>The Perimeter is "+r1.getPerimeter());


