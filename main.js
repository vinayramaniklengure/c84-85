canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d")
rover_width=100
rover_height=90
rover_x=10
rover_y=10
var ran=Math.floor(Math.random()*5)
background_imagearr=["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"]
background_image=background_imagearr[ran]
rover_image="rover.png"
function add(){
    background_imagetag=new Image()
    background_imagetag.onload=uploadBackground
    background_imagetag.src=background_image
    rover_imagetag=new Image()
    rover_imagetag.onload=uploadRover
    rover_imagetag.src=rover_image

}
function uploadBackground(){
    ctx.drawImage(background_imagetag,0,0,canvas.width,canvas.height)
}
function uploadRover(){
    ctx.drawImage(rover_imagetag,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keypress=e.keyCode
    console.log(keypress)
if(keypress==38){
    up()
    console.log("up")
}
if(keypress==40){
    down()
    console.log("down")
}
if(keypress==37){
    left()
console.log("left")
}
if(keypress==39){
    right()
    console.log("right")
}
}
function up(){
    if(rover_y>=0){
        rover_y=rover_y-10
        console.log("when up arrow key is pressed x= "+rover_x+" | y= "+rover_y)
        uploadBackground()
        uploadRover()

    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10
        console.log("when up arrow key is pressed x= "+rover_x+" | y= "+rover_y)
        uploadBackground()
        uploadRover()
        
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10
        console.log("when up arrow key is pressed x= "+rover_x+" | y= "+rover_y)
        uploadBackground()
        uploadRover()
        
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10
        console.log("when up arrow key is pressed x= "+rover_x+" | y= "+rover_y)
        uploadBackground()
        uploadRover()
        
    }
}