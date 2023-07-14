function setup() {
    canvas= createCanvas(640,420);
    canvas.center();
}
img="";
function preload(){
    img = loadImage('rauul.jpg');
    
}
function draw(){
    image(img,0,0,640,420);
    fill("red");
    text("kiwi", 45,75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 300, 250);
    fill("red");
    text("lola la locaaa", 350,75);
    noFill();
    stroke("#FF0000")
    rect(30, 60, 700, 250);
}