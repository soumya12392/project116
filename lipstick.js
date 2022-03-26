var noseX = 0;
var noseY = 0;
var lipstick;

function preload() {
    lipstick = loadImage("https://i.postimg.cc/W1CVdhbc/lipstick.png");
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
    image(lipstick, noseX, noseY, 50, 30);
}

function take_snapshot() {
    save("lipstickFilter.png");
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
        noseX = results[0].pose.nose.x - 18;
        noseY = results[0].pose.nose.y + 15;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}