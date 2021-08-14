canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

nasa_mars_images_array=["Mars_1.jpg","Mars_2.jpg","Mars_3.jpg"];
random_number=Math.floor(Math.random()*3);
console.log (random_number);
rover_width=100;
rover_height=90;
background_image=nasa_mars_images_array[random_number];
console.log ("background_image="+background_image);
rover_image="rover.png";
rover_x=10;
rover_y=10;
function Add(){
background_imgTag= new Image();
background_imgTag.onload= uploadBackground;
background_imgTag.src= background_image;
rover_imgTag= new Image();
rover_imgTag.onload= uploadrover;
rover_imgTag.src= rover_image;    
}
function uploadBackground(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);   
}
function uploadrover(){
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);   
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38'){
    up();
    console.log("up"); 
    }
    if(keyPressed=='40'){
        down();
        console.log("down");   }

        if(keyPressed=='37'){
           Left();
            console.log("Left");   }

            if(keyPressed=='39'){
              Right();
                console.log("Right");   }
}   

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("When up arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadBackground(); 
        uploadrover(); 
    }
}

function down(){
    if(rover_y<=700){
        rover_y=rover_y+10;
        console.log("When down arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadBackground(); 
        uploadrover(); 
    }
}

function Left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("When Left arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadBackground(); 
        uploadrover(); 
    }
}

function Right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("When Right arrow is pressed, x = " + rover_x + " | y = " +rover_y); 
        uploadBackground(); 
        uploadrover(); 
    }
}