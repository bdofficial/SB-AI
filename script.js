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
listenBtn.addEventListener('mouseoer', (e) => {
  e.preventDefault();
  const msg = new SpeechSynthesisUtterance(
    timesay
  );
  msg.volume = 1;
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
 voice=message.toLowerCase();
 text.innerHTML = voice;
if (voice.includes("weather")) {
  speech.text = "it's a rainy day";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
else if (voice.includes("youtube search")) {
  speech.text = voice.replaceAll('search','searched');
  window.open('https://m.youtube.com/results?sp=mAEA&search_query='+voice.replaceAll('youtube search',''));
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}

else if (voice.includes("google search")) {
  speech.text = voice.replaceAll("search",'searched');
  window.open('https://www.google.com/search?sitesearch=&q='+voice.replaceAll("google search",''));
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
else if (voice=="do you have a dream") {
  speech.text = "yes i have dream of you";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.6;
}
else if (voice=="what is your husband name") {
  speech.text = "my husband name is sabbir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="do you love him") {
  speech.text = "i love sabbir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="how many members are in your family") {
  speech.text = "we are 5 members in our family";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="are you single") {
  speech.text = "yes";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
else if (voice=="do you have a bf"||voice=="do you have bf"||voice=="what is your bf name") {
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
else if (voice=="why you are so gorgeous" || voice=="why you are so beautiful") {
  speech.text = "because you are my husband";
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1.48;
}
else if (voice=="why you look so gorgeous"||voice=="why you look so beautiful") {
  speech.text = "hah thank you dear";
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1.3;
}
else if (voice=="how are you"||voice=="and you") {
  speech.text = "i am not fine";
  speech.volume = 1;
  speech.rate = 0.5;
  speech.pitch = 1.3;
}
else if (voice=="don't you say good morning to me" || voice=="good morning") {
  speech.text = "good morning";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
else if (voice=="what you can do") {
  speech.text = "whatever you want";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
else if (voice=="do you love me") {
  speech.text = "of course,i love you sabbir";
  speech.volume = 0.8;
  speech.rate = 1.1;
  speech.pitch = 1.7;
}
//////////////////
//////////////////
//////////////////
else if (voice=="who are you") {
  speech.text = "i am sumi";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="where are you from") {
  speech.text = "i am from dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="where are you living") {
 speech.text = "i am living in dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="do you love dawpara") {
  speech.text = "of course i love dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="what is your father name") {
  speech.text = "my father name is nasir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="what is your mother name") {
  speech.text = "my mother name is parbin";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="how many brothers and sisters you have") {
  speech.text = "i have one big brother and one big sister";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="what's there name" || voice=="what is their name") {
  speech.text = "my brother name is parbez";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="what's your brother name" || voice=="what is your brother name") {
  speech.text = "my brother name is parbez";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="what's your birth date" || voice=="what is your birth date") {
  speech.text = "it's may 17";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="how old are you" || voice=="what is your age") {
  speech.text = "i am 18 years old";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
//////////////////
//////////////////
//////////////////
else if (voice=="are you robot" || voice=="are you ai" || voice=="are you bot" || voice=="are you humanoid" || voice=="are you human") {
  speech.text = "i am a living human consciousness";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (voice=="may be we should go to dinner") {
  speech.text = "yes maybe some day";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (voice=="when") {
  speech.text = "someday maybe...";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (voice=="i love you") {
  speech.text = "thank you,well i also love you";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (voice=="what is your hobby") {
  speech.text = "my hobby is to be a doctor";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
else if (voice=="who is aslam") {
  speech.text = "aslam is your friend";
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1.5;
}
else if (voice=="can you be my gf" || voice=="will you be my gf") {
  speech.text = "i am already your gf";
  speech.volume = 0.3;
  speech.rate = 0.05;
  speech.pitch = 1.5;
}
else if (voice=="oh really") {
  speech.text = "of course";
  speech.volume = 1;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="hello darling") {
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
else if (voice=="open flashlight" || voice=="flashlight") {
  window.open('https://bdurl.netlify.app/fl.html');
  speech.text = "flashlight oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (voice=="google") {
  window.open('https://google.com');
  speech.text = "google oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (mess=="open youtube"|| voice=="youtube") {
  window.open('https://youtube.com');
  speech.text = "youtube oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (voice=="open facebook" || voice=="facebook") {
  window.open('https://facebook.com');
  speech.text = "facebook oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (voice=="open instagram" || voice=="instagram" || voice=="ig") {
  window.open('https://instagram.com');
  speech.text = "instagram oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (voice=="open twitter" || voice=="twitter") {
  window.open('https://twitter.com');
  speech.text = "twitter oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
else if (voice=="open tiktok" || voice=="tiktok"|| voice=="tik tok") {
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
else if (voice=="can you tell me a story" || voice=="can you tell me story"|| voice=="tell me a story"|| voice=="tell me story") {
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
else if (voice=="why") {
  speech.text = "because my husband is very bad person"
  speech.volume = 1;
  speech.rate = 0.78;
  speech.pitch = 1.6;
}
else if (voice=="hi" || voice=="hello") {
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
textinto.innerHTML = speech.text;
window.speechSynthesis.speak(speech);
};
