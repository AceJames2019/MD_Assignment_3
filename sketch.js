let sound
let button
let fft,waveform
function preload(){
  sound = loadSound("The Truth That You Leave.mp3")
}

function setup() {
  createCanvas(windowWidth,windowHeight,WEBGL);
  button = createButton('playMusic');
  button.position(width / 2, height*0.6);
  button.mousePressed(playSound);

  fft = new p5.FFT()
  waveform = fft.waveform()
  console.log(waveform)

}

function draw() {
  background(220);
  cylinder(50,200)
}

function playSound(){
  if(!sound.isPlaying()){
    sound.play()
  }
}