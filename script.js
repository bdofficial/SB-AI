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
  
if (message.includes("how are you")) {
    speech.text = "i am not fine";
    textinto.innerHTML=speech.text;
    speech.volume = 1;
    speech.rate = 0.5;
    speech.pitch = 1.3;
    window.speechSynthesis.speak(speech);
  } 
else if (message.includes("can you tell me today's weather")) {
  speech.text = "no i can't";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("what is problem")) {
  speech.text = "problem is you are human";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("can you understand me")) {
  speech.text = "yes i can understand you";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("who is Shanta")) {
  speech.text = "he is your friend";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("can you sing")) {
  speech.text = "yes i can";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("can you tell me a story")) {
  speech.text = "A woman finds a pot of treasure on the road while she is returning from work. Delighted (very happy) with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away (disappear or faint slowly).";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("time")) {
  speech.text = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }));
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("why")) {
  speech.text = "because my husband is very bad person";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.78;
  speech.pitch = 1.6;
  window.speechSynthesis.speak(speech);
}
else if (message.includes("shi")) {
  speech.text = "sabbir i love you";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.84;
  speech.pitch = 1.9;
  window.speechSynthesis.speak(speech);
}  
else if (message.includes("what is your name")) {
  speech.text = "my name is sumi";
    textinto.innerHTML=speech.text;
    speech.volume = 1;
    speech.rate = 0.84;
    speech.pitch = 1.4;
    window.speechSynthesis.speak(speech);
}  
else {
  speech.text = "please say again";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.84;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}

};
