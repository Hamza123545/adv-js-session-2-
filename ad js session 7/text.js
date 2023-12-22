document.addEventListener("DOMContentLoaded", function () {
    let voices = [];
    let voiceSelect = document.getElementById("floatingSelect");
    let textToRead = document.getElementById("floatingTextarea");
    let listenButton = document.querySelector(".btn-primary");

    // Populate voices
    window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();

        // Clear existing options
        voiceSelect.innerHTML = "";

        voices.forEach((voice, i) => {
            voiceSelect.options[i] = new Option(voice.name);
        });
    };

    // Event listener for voice selection
    voiceSelect.addEventListener("change", () => {
        let selectedVoice = voices[voiceSelect.selectedIndex];
        textToRead.lang = selectedVoice.lang;
    });

    // Event listener for the Listen button
    listenButton.addEventListener("click", () => {
        let speech = new SpeechSynthesisUtterance();
        speech.text = textToRead.value;

        // Select the chosen voice
        speech.voice = voices[voiceSelect.selectedIndex];

        window.speechSynthesis.speak(speech);
    });
});
