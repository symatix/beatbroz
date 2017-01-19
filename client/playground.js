//playground.js

acontext = new webkitAudioContext() || new AudioContext;  

//Now we can create an instance of our waveform generator and play it.

waveform = new Synth(acontext);

maxim1 = new Maxim();
maxim2 = new Maxim();
maxim3 = new Maxim();
maxim4 = new Maxim();
maxim5 = new Maxim();

player1 = maxim1.loadFile("drums.wav");
player1.loop
player2 = maxim2.loadFile("hh-fill.wav");
player2.loop
player3 = maxim3.loadFile("arp.wav");
player3.loop
player4 = maxim4.loadFile("vibe.wav");
player4.loop
player5 = maxim5.loadFile("leadfx.wav");
player5.loop

playAll = function() {

	player1.play();
	player2.play();
	player3.play();
	player4.play();
	player5.play();
}
stopAll = function() {

	player1.stop(0);
	player2.stop(0);
	player3.stop(0);
	player4.stop(0);
	player5.stop(0);
}

setSpeed = function(speed) {

	player1.speed(speed);
	player2.speed(speed);
	player3.speed(speed);
	player4.speed(speed);
	player5.speed(speed);

}

setVolume1 = function(gain) {

	player1.volume(gain);

}

setVolume2 = function(gain) {

	player2.volume(gain);

}

setVolume3 = function(gain) {

	player3.volume(gain);

}
setVolume4 = function(gain) {

	player4.volume(gain);

}
setVolume5 = function(gain) {

	player5.volume(gain);

}

filter1 = function(freq, res) {
	player1.setFilter(freq, res)
}

filter2 = function(freq, res) {
	player2.setFilter(freq, res)
}

filter3 = function(freq, res) {
	player3.setFilter(freq, res)
}

filter4 = function(freq, res) {
	player4.setFilter(freq, res)
}

