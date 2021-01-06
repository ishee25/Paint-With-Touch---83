var last_position_x, last_position_y;
var last_position_of_x, last_position_of_y;
mouseEvent = "empty";

color = "black";
width_of_line=2;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

width = screen.width;
height = screen.height;

new_width = screen.width - 70;
new_height = screen.height - 300;

if(width < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}

canvas.addEventListener("touchstart", my_touchstart);
function my_touchstart(e){
    color = document.getElementById("textColor").value;
    width_of_line = document.getElementById("textWidth").value;

    last_position_x = e.touches[0].clientX - canvas.offsetLeft;
    last_position_y = e.touches[0].clientY - canvas.offsetTop;
}

canvas.addEventListener("touchmove", my_touchmove);
function my_touchmove(e){
    current_position_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    current_position_touch_y = e.touches[0].clientY - canvas.offsetTop;

    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_line;

    console.log("Last position of x and y coordinates = "); 
    console.log("x = " + last_position_x + "y = " + last_position_y);

    ctx.moveTo(last_position_x, last_position_y);

    console.log("Current position of x and y coordinates = "); 
    console.log("x = " + current_position_touch_x + "y = " + current_position_touch_y);

    ctx.lineTo(current_position_touch_x, current_position_touch_y);
    ctx.stroke();

    last_position_x = current_position_touch_x;
    last_position_y = current_position_touch_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
    mouseEvent = "mouseUp";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousedown", my_Mousdown);
function my_Mousdown(e){
    color=document.getElementById("textColor").value;
    width_line = document.getElementById("textWidth").value;
    mouseEvent = "mouseDown";
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_x = e.clientX - canvas.offsetLeft;
    current_position_y = e.clientY - canvas.offsetTop;
    if(mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.moveTo(last_position_of_x, last_position_of_y);
        ctx.lineTo(current_position_x, current_position_y);
        ctx.stroke();
    }

    last_position_of_x = current_position_x;
    last_position_of_y = current_position_y; 
}

function clearArea(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}
