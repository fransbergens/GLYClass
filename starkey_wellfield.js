var pixel_scale = 26.57; 
var height;
var hoverl;
var heightSlider;
var hoverlSlider;
var runnout;


function setup() {
    var canvas = createCanvas(265, 194);
    canvas.parent('sketch-holder');
    img = loadImage("./images/Starkey_wellfield.jpg.");
    
    heightSlider = createSlider(1,255,0);
    heightSlider.parent('sketch-holder');
    heightSlider.position(20,20);
    
    hoverlSlider = createSlider(0,255,100);
    hoverlSlider.parent('sketch-holder');
    hoverlSlider.position(20,60);
    
}

function draw(){
    
    image(img, 0, 0, img.width/2, img.height/2);


var diameter = 10 * pixel_scale
    fill(255,0,100,80);
    ellipse(263,156,diameter, diameter);

    fill(255);
    ellipse(263,156,5,5);
    
    text("height", heightSlider.x * 2 + heightSlider.width,35);
    text("H/L", hoverlSlider.x * 2 + hoverlSlider.width,74);
    


}