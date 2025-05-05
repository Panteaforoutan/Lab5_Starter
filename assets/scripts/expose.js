// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();
function init() {
  // TODO
  const hornSelect = document.getElementById('horn-select');
  const image = document.querySelector('img[alt="No image selected"]');
  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button');
  let confetti = false;

  hornSelect.addEventListener('change', function () {
    const horn = hornSelect.value;

    let imagePath = 'assets/images/no-image.png'; // default
    let audioPath = '';

    if (horn === 'air-horn') {
      imagePath = 'assets/images/air-horn.svg';
      audioPath = 'assets/audio/air-horn.mp3';
    } else if (horn === 'car-horn') {
      imagePath = 'assets/images/car-horn.svg';
      audioPath = 'assets/audio/car-horn.mp3';
    } else if (horn === 'party-horn') {
      imagePath = 'assets/images/party-horn.svg';
      audioPath = 'assets/audio/party-horn.mp3';
      confetti = true;
    }

    image.src = imagePath;
    audio.src = audioPath;

  });

  playButton.addEventListener('click', () => {
    audio.play();
    if (confetti) {
      jsConfetti.addConfetti();
    }
  });

  const volumeSlider = document.getElementById('volume');
  const volumeIcon = document.querySelector('img[alt="Volume level 2"]');

  volumeSlider.addEventListener('input', function () {
    const volume = Number(volumeSlider.value);
    audio.volume = volume / 100;

    if (volume === 0) {
      volumeIcon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume >= 1 && volume < 33) {
      volumeIcon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume >= 33 && volume < 66) {
      volumeIcon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volumeIcon.src = 'assets/icons/volume-level-3.svg';
    }

  });


}