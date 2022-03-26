var noseX = 0;
var noseY = 0;
var moustache;

function preload() {
    moustache = loadImage("https://i.postimg.cc/nhM9fXw8/moustache.png");
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(moustache, noseX, noseY, 50, 30);
}

function take_snapshot() {
    save("moustacheFilter.png");
}

function back() {
    window.location = "index.html";
}

function modelLoaded() {
    console.log("PoseNet is initialized");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 10;
        noseY = results[0].pose.nose.y + 10;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}