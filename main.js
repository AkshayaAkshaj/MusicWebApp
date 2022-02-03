song_1="";
song_2="";
leftWristScore=0;
letItGo=0;

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
    stroke("#e60000");
    fill("#e60000");
    
    if(leftWristScore>0.2){
        circle(leftWristX,leftWristY,20);
        song_1.stop();
    if(song_2.isPlaying()==false){

  
    
    leftY=Number(leftWristY);
    left_remove_decimal=floor(leftY);
    letItGo=left_remove_decimal/500;
    song_2.play();
    document.getElementById("song_name").innerHTML="Let It Go";
}
    }
}
function modelLoaded(){
    console.log("Pose Net is Initialised")
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWristScore=results[0].pose.keypoints[9].score;
        console.log("Left Wrist Score = "+leftWristScore);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;

        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;

        console.log("Right wrist x= "+rightWristX+" and right wrist y= "+rightWristY);
        console.log("Left Wrist x= "+leftWristX+" and left wrist y= "+leftWristY);

  
    }
}
