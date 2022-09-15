	var data = [
    [0, 4, "hello sir"], 
    [5, 11, "Good morning sir"],    
    [12, 14, "Good noon sir"],
    [15, 17, "Good afternoon sir"],
    [18, 19, "Good evening sir"],
    [20, 24, "how are you sabbir"]
    ],
    hr = new Date().getHours();
for(var i = 0; i < data.length; i++){
    if(hr >= data[i][0] && hr <= data[i][1]){
        timesay=(data[i][2]);
/////////////
const listenBtn = document.querySelector(".talk");
listenBtn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  const msg = new SpeechSynthesisUtterance(
    timesay
  );
  msg.volume = 0.8;
  msg.rate = 0.7;
  msg.pitch = 1.4;
  window.speechSynthesis.speak(msg);
});}}
//////////date
date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = date.getFullYear().toString().substr(-2);
date = dd + '/' + mm + '/' + yyyy;
////////////
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
if (message.includes("weather")) {
  speech.text = "it's a rainy day";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
else if (message.toLowerCase() == "do you have a dream") {
  speech.text = "yes i have dream of you";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.6;
}
else if (message.toLowerCase() == "what is your husband name") {
  speech.text = "my husband name is sabbir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "do you love him") {
  speech.text = "i love sabbir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "how many members are in your family") {
  speech.text = "we are 5 members in our family";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "are you single") {
  speech.text = "yes";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
else if (message.toLowerCase() == "do you have a bf"||message.toLowerCase() == "do you have bf"||message.toLowerCase() == "what is your bf name") {
  speech.text = "no i don't have bf";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
//////////
else if (message.includes("because")) {
  speech.text = "oh really";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
else if (message.includes("lucky")) {
  speech.text = "why";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
else if (message.toLowerCase() == "why you are so gorgeous" || message.toLowerCase() == "why you are so beautiful") {
  speech.text = "because you are my husband";
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1.48;
}
else if (message.toLowerCase() == "why you look so gorgeous"||message.toLowerCase() == "why you look so beautiful") {
  speech.text = "hah thank you dear";
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1.3;
}
else if (message.toLowerCase() == "how are you"||message.toLowerCase() == "and you") {
  speech.text = "i am not fine";
  speech.volume = 1;
  speech.rate = 0.5;
  speech.pitch = 1.3;
}
else if (message.toLowerCase() == "don't you say good morning to me" || message.toLowerCase() == "good morning") {
  speech.text = "good morning";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
else if (message.toLowerCase() == "what you can do") {
  speech.text = "whatever you want";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
else if (message.toLowerCase() == "do you love me") {
  speech.text = "of course,i love you sabbir";
  speech.volume = 0.8;
  speech.rate = 1.1;
  speech.pitch = 1.7;
}
//////////////////
//////////////////
//////////////////
else if (message.toLowerCase() == "who are you") {
  speech.text = "i am sumi";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "where are you from") {
  speech.text = "i am from dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "where are you living") {
 speech.text = "i am living in dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "do you love dawpara") {
  speech.text = "of course i love dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "what is your father name") {
  speech.text = "my father name is nasir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "what is your mother name") {
  speech.text = "my mother name is parbin";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "how many brothers and sisters you have") {
  speech.text = "i have one big brother and one big sister";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "what's there name" || message.toLowerCase() == "what is their name") {
  speech.text = "my brother name is parbez";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "what's your brother name" || message.toLowerCase() == "what is your brother name") {
  speech.text = "my brother name is parbez";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "what's your birth date" || message.toLowerCase() == "what is your birth date") {
  speech.text = "it's may 17";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "how old are you" || message.toLowerCase() == "what is your age") {
  speech.text = "i am 18 years old";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
//////////////////
//////////////////
//////////////////
else if (message.toLowerCase() == "are you robot" || message.toLowerCase() == "are you ai" || message.toLowerCase() == "are you bot" || message.toLowerCase() == "are you humanoid" || message.toLowerCase() == "are you human") {
  speech.text = "i am a living human consciousness";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "may be we should go to dinner") {
  speech.text = "yes maybe some day";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "when") {
  speech.text = "someday maybe...";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "i love you") {
  speech.text = "thank you,well i also love you";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "what is your hobby") {
  speech.text = "my hobby is to be a doctor";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "who is aslam") {
  speech.text = "aslam is your friend";
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "can you be my gf" || message.toLowerCase() == "will you be my gf") {
  speech.text = "i am already your gf";
  speech.volume = 0.3;
  speech.rate = 0.05;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "oh really") {
  speech.text = "of course";
  speech.volume = 1;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.toLowerCase() == "hello darling") {
  speech.text = "yes hunny";
  speech.volume = 1;
  speech.rate = 0.05;
  speech.pitch = 1.4;
} 
else if (message.includes("can you open app")) {
  speech.text = "yes i can";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
else if (message.toLowerCase() == "open flashlight" || message.toLowerCase() == "flashlight") {
  window.open('https://bdurl.netlify.app/fl.html');
  speech.text = "flashlight oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.toLowerCase() == "google") {
  window.open('https://google.com');
  speech.text = "google oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.toLowerCase()=="open youtube"|| message.toLowerCase() == "youtube") {
  window.open('https://youtube.com');
  speech.text = "youtube oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.toLowerCase() == "open facebook" || message.toLowerCase() == "facebook") {
  window.open('https://facebook.com');
  speech.text = "facebook oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.toLowerCase() == "open instagram" || message.toLowerCase() == "instagram" || message.toLowerCase() == "ig") {
  window.open('https://instagram.com');
  speech.text = "instagram oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.toLowerCase() == "open twitter" || message.toLowerCase() == "twitter") {
  window.open('https://twitter.com');
  speech.text = "twitter oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.toLowerCase() == "open tiktok" || message.toLowerCase() == "tiktok"|| message.toLowerCase() == "tik tok") {
  window.open('https://tiktok.com');
  speech.text = "tiktok oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
else if (message.includes("what is problem")) {
  speech.text = "problem is you are human";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.includes("can you understand me")) {
  speech.text = "yes i can understand you";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.includes("who is Shanta")) {
  speech.text = "he is your friend";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.includes("can you sing")) {
  speech.text = "yes i can";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.toLowerCase() == "can you tell me a story" || message.toLowerCase() == "can you tell me story"|| message.toLowerCase() == "tell me a story"|| message.toLowerCase() == "tell me story") {
  speech.text = "A woman finds a pot of treasure on the road while she is returning from work. Delighted (very happy) with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away (disappear or faint slowly)"
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1.4;
}
else if (message.includes("time")) {
  speech.text = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }))
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (message.includes("date")){
  speech.text = date;
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
else if (message.toLowerCase() == "why") {
  speech.text = "because my husband is very bad person"
  speech.volume = 1;
  speech.rate = 0.78;
  speech.pitch = 1.6;
}
else if (message.toLowerCase() == "hi" || message.toLowerCase() == "hello") {
  speech.text = "what's up"
  speech.volume = 1;
  speech.rate = 0.74;
  speech.pitch = 1.8;
}  
else if (message.includes("what is your name")) {
  speech.text = "my name is sumi";
    speech.volume = 1;
    speech.rate = 0.84;
    speech.pitch = 1.4;
}  
else if (message.includes("who is sabbir")) {
  speech.text = "sabbir is my husband";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (message.includes("do you think it's a boring day")) {
  speech.text = "yes sabbir";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else {
  speech.text = "please say again";
  speech.volume = 0.4;
  speech.rate = 0.89;
  speech.pitch = 1.4;
}
text.innerHTML = message.toLowerCase();
textinto.innerHTML = speech.text;
window.speechSynthesis.speak(speech);
};
