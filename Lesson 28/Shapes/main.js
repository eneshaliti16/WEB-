var btn_circle = document.getElementById('btnCircle');
var btn_rect = document.getElementById('btnRect');
var btn_triangle = document.getElementById('btnTriangle');

var circle = document.getElementById('circle');
var rectangle = document.getElementById('rect');
var triangle = document.getElementById('triangle');

btn_circle.onlick = function(){
    circle.setAttribute("class" , "shape_circle");
}

btn_rect.onlick = function(){
    circle.setAttribute("class" , "shape_rect");
}

btn_triangle.onlick = function(){
    circle.setAttribute("class" , "shape_triangle");
}

circle.onclick = function(){
    circle.setAttribute("class","hide")
}

rect.onclick = function(){
    rect.setAttribute("class","hide")
}

triangle.onclick = function(){
    triangle.setAttribute("class","hide")
}