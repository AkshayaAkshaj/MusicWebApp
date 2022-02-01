song_1="";
song_2="";

rightWristX=0;
rightWristY=0;

leftWristX=0;
leftWristY=0;

function preload(){
song_1=loadSound("IntoTheUnknown.mp3");
song_2=loadSound("LetItGo.mp3");
}
function setup(){
canvas=createCanvas(500,600);
canvas.center()

video=createCapture(VIDEO);
video.center();
video.hide();

poseNet=ml5.poseNet(video, modelLoaded)
poseNet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,500,600);
}
function modelLoaded(){
    console.log("Pose Net is Initialised")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        console.log("Right wrist x= "+rightWristX+" and right wrist y= "+rightWristY);
        console.log("Left Wrist x= "+leftWristX+" and left wrist y= "+leftWristY);
    }
}
