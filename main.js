function setup(){
    video=createCapture(VIDEO);
    video.size(550, 500);
  canvas=createCanvas(500, 500) ;
  canvas.position(560, 100);
  poseNet=ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotresult);
}
function draw(){
    background('#83ff73');
}
function modelLoaded(){
    console.log('poseNet is successfully initialized')
}
function gotresult(results){
    if(results.length>0){
        console.log(results);
    }
}