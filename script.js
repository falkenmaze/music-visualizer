let music,fft,w;
function preload()
{
  music = loadSound("music1.mp3");
}

function togglePlay()
{
  if (music.isPlaying())
  {
    music.pause();
  }
  else
  {
    music.loop();
  }
}

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT(0.9, 64);
  background(0);
  w = windowWidth/64;
}

function draw() {
  background(0);
  noStroke();
  fill(255,18,18)
  let spectrum = fft.analyze();
  // console.log(spectrum)
  // spectrum = [200,150,100,250,256,250,257,100,200];
  for(let i = 0; i < spectrum.length; i++)
    {
      let amp = spectrum[i];
      var y = map(amp, 0, 256, windowHeight+10, 0);
      rect(i*w, y, w-10, windowHeight-y);
      if (amp > 245)
      {
        fill(random(255), random(255), random(255));
      }
    }
}
