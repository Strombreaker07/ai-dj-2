song1 = "";
song2 = "";

function preload()
{
    song1 = loadSound("dna.mp3")
    song2 = loadSound("cradles.mp3")
}

function setup()
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 500);
    //(var, x, y, width, height);
}

function play()
{
    song1.play();
    //song2.play();
}

function pause()
{
    song1.pause();
    //song2.pause();
}