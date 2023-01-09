const body = document.querySelector("body");
const sheepAudio = new Audio("./assets/sheep-sound.mp3");
let isAudioPlaying = false;

sheepAudio.volume = 0.05;

const playAudio = () => {
  if (isAudioPlaying) return;
  isAudioPlaying = true;
  sheepAudio.play();
  sheepAudio.onended = restartAudio;
};

const restartAudio = () => {
  isAudioPlaying = false;
  playAudio();
};

body.addEventListener("click", playAudio);
body.addEventListener("keydown", playAudio);
