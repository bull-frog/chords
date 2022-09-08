window.AudioContext = window.webkitAudioContext || window.AudioContext;
const audioCtx = new AudioContext();
const osc_root = audioCtx.createOscillator();
const osc_third = audioCtx.createOscillator();
const osc_fifth = audioCtx.createOscillator();
osc_root.connect(audioCtx.destination);
osc_third.connect(audioCtx.destination);
osc_fifth.connect(audioCtx.destination);

var freq_root;
var freq_third;
var freq_fifth;

// 開始時
function start() {
	osc_root.start();
	osc_third.start();
	osc_fifth.start();

	change(261.626, 329.638, 391.995);

	document.getElementById("layout_start").remove();
}

// 周波数変更
function change(r, t, f) {

	if (r && t && f) {
		freq_root = r;
		document.getElementById("slider_root").value = freq_root;
		freq_third = t;
		document.getElementById("slider_third").value = freq_third;
		freq_fifth = f;
		document.getElementById("slider_fifth").value = freq_fifth;
	} else {
		freq_root = Math.round(document.getElementById("slider_root").valueAsNumber * 1000) / 1000;
		freq_third = Math.round(document.getElementById("slider_third").valueAsNumber * 1000) / 1000;
		freq_fifth = Math.round(document.getElementById("slider_fifth").valueAsNumber * 1000) / 1000;
	}

	document.getElementById("label_root").innerHTML = freq_root;
	document.getElementById("label_third").innerHTML = freq_third;
	document.getElementById("label_fifth").innerHTML = freq_fifth;

	osc_root.frequency.value = freq_root;
	osc_third.frequency.value = freq_third;
	osc_fifth.frequency.value = freq_fifth;
}