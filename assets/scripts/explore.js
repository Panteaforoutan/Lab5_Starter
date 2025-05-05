// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  function populateVoiceList() {
    if (typeof speechSynthesis === "undefined") {
      return;
    }

    const voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }

  populateVoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  const playButton = document.querySelector('button');
  playButton.addEventListener('click', () => {
    const textToSpeak = document.getElementById('text-to-speak').value;
    const voiceSelect = document.getElementById('voice-select'); // Corrected ID
    const image = document.querySelector('img');

    if (!textToSpeak.trim()) {
      alert("Please enter some text to speak.");
      return;
    }

    const selectedVoiceName = voiceSelect.selectedOptions[0]?.getAttribute('data-name');
    const voices = speechSynthesis.getVoices();
    const selectedVoice = voices.find(voice => voice.name === selectedVoiceName);

    if (!selectedVoice) {
      alert("Voice not found!");
      return;
    }

    // Create a new SpeechSynthesisUtterance object
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = selectedVoice;

    // Change image to "smiling-open" while speaking
    image.src = 'assets/images/smiling-open.png';

    // When speaking ends, change image back to original
    utterance.onend = () => {
      image.src = 'assets/images/smiling.png'; // Original image
    };

    // Speak the text
    speechSynthesis.speak(utterance);
  });
}
