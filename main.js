function setup(){
  video=createCapture(VIDEO);
  video.size(550,500);
  canvas=createCanvas(550,400);
  canvas.position(560,100);
  poseNet=ml5.poseNet(video,modelLoaded);
  poseNet.on("pose",gotPoses);
}

function gotPoses(result){
  if(result.length>0){
    console.log(result);
  }
}

function modelLoaded(){
  console.log("MagzineLoaded");
}

function draw(){
  background("aqua");
}