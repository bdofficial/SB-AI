const btn = document.querySelector(".talk");
// const content = document.querySelector(".content");

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("Voice is activated");
};

recognition.onresult = (event) => {
  console.log(event);
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  // content.textContent = transcript;
  readOutLoud(transcript);
};
////////
btn.addEventListener("click", () => {
  recognition.start();
});
////////
const readOutLoud = (message) => {
  const speech = new SpeechSynthesisUtterance();
if (message.includes("how are you")) {
    speech.text = "i am not fine";
    speech.volume = 1;
    speech.rate = 0.5;
    speech.pitch = 1.3;
    window.speechSynthesis.speak(speech);
  } 

else if (message.includes("time")) {
  speech.text = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("why")) {
  speech.text = "because my husband is very bad person";
  speech.volume = 1;
  speech.rate = 0.78;
  speech.pitch = 1.6;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("hi")) {
  speech.text = "sabbir i love you";
  speech.volume = 1;
  speech.rate = 0.84;
  speech.pitch = 1.9;
  window.speechSynthesis.speak(speech);
}  
else if (message.includes("what is your name")) {
  speech.text = "my name is sumi";
    speech.volume = 1;
    speech.rate = 0.84;
    speech.pitch = 1.4;
    window.speechSynthesis.speak(speech);
}  
else {
  speech.text = "say again";
  speech.volume = 1;
  speech.rate = 0.84;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}


};
