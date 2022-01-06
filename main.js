video="";
status= "";

function preload() {
video= createCapture(VIDEO)
video.hide();

}

function setup() {

canvas= createCanvas(480,380);
canvas.center();

}

function draw() {

image(video, 0 , 0, 480, 380);

if (status!=""){

    r= random(255);
    g= random(255);
    b= random(255);
    objectDetector.detect(video,gotResult);
 
    for(i= 0; i<objects.length; i++) {
 
 document.getElementById("status").innerHTML="status: object detected";
 document.getElementById("number_objects").innerHTML="no of object detected are"+objects.length;
 fill(r, g, b);
 percent= floor(objects[i].confidence*100);
 text(objects[i].label+" - "+percent+"%", objects[i].x, objects[i].y);
 noFill();
 stroke(r, g, b);
 rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
 
    }
 
 }

}

function start() {

objectdetector= ml5.objectDetector('cocossd', modelloaded);
document.getElementById("status").innerHTML="status: object is totaly dtechted :))))";

}

function modelloaded(){

console.log("model loaded");
status= true;
}

function gotResult(error, results) {

    if (error){
    
    console.log(error);
    
    }
    
    console.log(results);
    
    objects= results;
    
    }

