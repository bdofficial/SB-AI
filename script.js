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

text.innerHTML = message;
  
if (message.includes("sa-how are you")) {
    speech.text = "su-i am not fine";
    textinto.innerHTML=speech.text;
    speech.volume = 1;
    speech.rate = 0.5;
    speech.pitch = 1.3;
    window.speechSynthesis.speak(speech);
  } 
else if (message.includes("sa-can you tell me today's weather")) {
  speech.text = "su-no i can't";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("sa-what is problem")) {
  speech.text = "su-problem is you are human";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("sa-can you tell me a story")) {
  speech.text = "su-A woman finds a pot of treasure on the road while she is returning from work. Delighted (very happy) with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away (disappear or faint slowly).";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("sa-time")) {
  speech.text = "su-"+(new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("sa-why")) {
  speech.text = "su-because my husband is very bad person";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.78;
  speech.pitch = 1.6;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("sa-hi")) {
  speech.text = "su-sabbir i love you";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.84;
  speech.pitch = 1.9;
  window.speechSynthesis.speak(speech);
}  
else if (message.includes("sa-what is your name")) {
  speech.text = "su-my name is sumi";
    textinto.innerHTML=speech.text;
    speech.volume = 1;
    speech.rate = 0.84;
    speech.pitch = 1.4;
    window.speechSynthesis.speak(speech);
}  
else {
  speech.text = "su-please say again";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.84;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}

};
