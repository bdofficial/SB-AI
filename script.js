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

text.innerHTML = message.toLowerCase();
  
if (message.toLowerCase() == "how are you") {
    speech.text = "i am not fine";
    textinto.innerHTML=speech.text;
    speech.volume = 1;
    speech.rate = 0.5;
    speech.pitch = 1.3;
    window.speechSynthesis.speak(speech); 
  }
else if (message.toLowerCase() == "don't you say good morning to me" || message.toLowerCase() == "good morning") {
  speech.text = "good morning";
  textinto.innerHTML = speech.text;
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "what you can do") {
  speech.text = "whatever you want";
  textinto.innerHTML = speech.text;
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "do you love me") {
  speech.text = "of course,i love you";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 1.1;
  speech.pitch = 1.7;
  window.speechSynthesis.speak(speech);
}
//////////////////
//////////////////
//////////////////
else if (message.toLowerCase() == "who are you") {
  speech.text = "i am sumi";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "where are you from") {
  speech.text = "i am from dawpara";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "where are you living") {
 speech.text = "i am living in dawpara";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "do you love dawpara") {
  speech.text = "of course i love dawpara";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "what is your father name") {
  speech.text = "my father name is nasir";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "what is your mother name") {
  speech.text = "my mother name is parbin";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "how many brothers and sisters you have") {
  speech.text = "i have one big brother and one big sister";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "what's there name" || message.toLowerCase() == "what is their name") {
  speech.text = "my brother name is parbez";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "what's your brother name" || message.toLowerCase() == "what is your brother name") {
  speech.text = "my brother name is parbez";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "what's your birth date" || message.toLowerCase() == "what is your birth date") {
  speech.text = "it's may 17";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "how old are you" || message.toLowerCase() == "what is your age") {
  speech.text = "i am 18 years old";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
//////////////////
//////////////////
//////////////////
else if (message.toLowerCase() == "are you robot" || message.toLowerCase() == "are you ai" || message.toLowerCase() == "are you bot" || message.toLowerCase() == "are you humanoid" || message.toLowerCase() == "are you human") {
  speech.text = "i am a living human consciousness";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "may be we should go to dinner") {
  speech.text = "yes maybe some day";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "when") {
  speech.text = "someday maybe...";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "i love you") {
  speech.text = "thank you,well i also love you";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "what is your hobby") {
  speech.text = "my hobby is to be a doctor";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "who is aslam") {
  speech.text = "aslam is your friend";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "can you be my gf" || message.toLowerCase() == "will you be my gf") {
  speech.text = "i am already your gf";
  textinto.innerHTML = speech.text;
  speech.volume = 0.3;
  speech.rate = 0.05;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "oh really") {
  speech.text = "of course";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.7;
  speech.pitch = 1.5;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "hello darling") {
  speech.text = "yes hunny";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.05;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
} 
else if (message.includes("can you open app")) {
  speech.text = "yes i can";
  textinto.innerHTML = speech.text;
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}
else if (message.toLowerCase() == "open flashlight" || message.toLowerCase() == "flashlight") {
  window.open('https://bdurl.netlify.app/fl.html');
  textinto.innerHTML = "flashlight oppened";
}
else if (message.toLowerCase()=="open youtube"|| message.toLowerCase() == "youtube") {
  window.open('https://youtube.com');
  textinto.innerHTML = "youtube oppened";
}
else if (message.toLowerCase() == "open facebook" || message.toLowerCase() == "facebook") {
  window.open('https://facebook.com');
  textinto.innerHTML = "facebook oppened";
}
else if (message.toLowerCase() == "open instagram" || message.toLowerCase() == "instagram") {
  window.open('https://instagram.com');
  textinto.innerHTML = "instagram oppened";
}
else if (message.toLowerCase() == "open twitter" || message.toLowerCase() == "twitter") {
  window.open('https://twitter.com');
  textinto.innerHTML = "twitter oppened";
}
else if (message.toLowerCase() == "open tiktok" || message.toLowerCase() == "tiktok"|| message.toLowerCase() == "tik tok") {
  window.open('https://tiktok.com');
  textinto.innerHTML = "tiktok oppened";
}
else if (message.toLowerCase() == "can you told me today's weather" || message.toLowerCase() == "weather"|| message.toLowerCase() == "what's the weather outside"|| message.toLowerCase() == "what's the weather") {
  speech.text = "it's a rainy day";
  textinto.innerHTML = speech.text;
  speech.volume = 0.8;
  speech.rate = 0.7;
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
else if (message.toLowerCase() == "can you tell me a story" || message.toLowerCase() == "can you tell me story"|| message.toLowerCase() == "tell me a story"|| message.toLowerCase() == "tell me story") {
  speech.text = "A woman finds a pot of treasure on the road while she is returning from work. Delighted (very happy) with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away (disappear or faint slowly)";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.8;
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
else if (message.toLowerCase() == "hi") {
  speech.text = "sabbir i love you";
  textinto.innerHTML=speech.text;
  speech.volume = 1;
  speech.rate = 0.74;
  speech.pitch = 1.8;
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
  textinto.innerHTML = speech.text;
  speech.volume = 0.4;
  speech.rate = 0.89;
  speech.pitch = 1.4;
  window.speechSynthesis.speak(speech);
}

};
