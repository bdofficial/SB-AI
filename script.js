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
const readOutLoud = (voice) => {
  const speech = new SpeechSynthesisUtterance();
var sss = document.getElementById("sss");
var bbb = document.getElementById("bbb");
sss.value=voice.toLowerCase();
/////////////
if (sss.value == "how are you") {
bbb.value = "i am not fine";
speech.volume = 0.8;
speech.rate = 0.45;
speech.pitch = 1.5;
}
else if (sss.value == "why" & bbb.value == "i am not fine") {
  bbb.value = "because i am sad";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (sss.value == "why"& bbb.value == "because i am sad"||sss.value == "why you are sad" & bbb.value == "because i am sad") {
  bbb.value = "because of my health";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (sss.value == "why"& bbb.value == "because of my health"|| sss.value == "why what is happened"& bbb.value == "because of my health"||sss.value == "what is happened" & bbb.value == "because of my health") {
  bbb.value = "i am suffering from headache";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (sss.value == "why" & bbb.value == "i am suffering from headache") {
  bbb.value = "i don't have good sleep last night";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (sss.value == "why" & bbb.value == "i don't have good sleep last night") {
  bbb.value = "do you want to ask something else";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
////////
else if (sss.value == "yes of course i am"& bbb.value == "do you want to ask something else"||sss.value == "yes"& bbb.value == "do you want to ask something else"||
sss.value == "of course"& bbb.value == "do you want to ask something else"||sss.value == "yes i want"& bbb.value == "do you want to ask something else"||
sss.value == "yes i want to"& bbb.value == "do you want to ask something else"||sss.value == "yes i want to ask you"& bbb.value == "do you want to ask something else"||
sss.value == "yes i want to ask you many questions"& bbb.value == "do you want to ask something else"||sss.value == "can i ask you"||sss.value == "can i ask you questions"||sss.value == "can i ask you question")
{
  bbb.value = "you can ask me";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
if (sss.value == "how old are you")
{
bbb.value = "i am 18th";
speech.volume = 0.8;
speech.rate = 0.45;
speech.pitch = 1.5;
}
else if (sss.value == "why" & bbb.value == "i am 18th") {
   bbb.value = "because i born in 2004";
   speech.volume = 0.8;
   speech.rate = 0.45;
   speech.pitch = 1.5;
 }     
//////////////////
if (sss.value.includes("weather")) {
  bbb.value = "it's a cloudy day";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
if (sss.value.includes("date")) {
  bbb.value = date;
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
if (sss.value.includes("time")) {
  bbb.value = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }))
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
if (sss.value == "what does cat say") {
  bbb.value = "maow maow";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.6;
}
if (sss.value.includes("youtube search")) {
  bbb.value = sss.value.replaceAll('search','searched');
  window.open('https://m.youtube.com/results?sp=mAEA&search_query='+sss.value.replaceAll('youtube search',''));
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
if (sss.value.includes("google search")) {
  bbb.value = sss.value.replaceAll("search",'searched');
  window.open('https://www.google.com/search?sitesearch=&q='+sss.value.replaceAll("google search",''));
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
if (sss.value=="do you have a dream") {
  bbb.value = "yes i have dream of you";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.6;
}
/////////
if (sss.value=="what is your husband name") {
  bbb.value = "my husband name is sabbir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (sss.value.includes("who is sabbir")) {
  bbb.value = "sabbir is my husband";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (sss.value=="do you love him" & bbb.value == "my husband name is sabbir"||bbb.value =="sabbir is my husband") {
  bbb.value = "yes";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
//////////
if (sss.value=="how many members are in your family") {
  bbb.value = "we are 5 members in our family";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value=="are you single") {
  bbb.value = "yes";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
if (sss.value=="do you have a bf"||sss.value=="do you have bf"||sss.value=="what is your bf name") {
  bbb.value = "no i don't have bf";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
//////////
if (sss.value.includes("because")) {
  bbb.value = "oh really";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
if (sss.value.includes("lucky")) {
  bbb.value = "why";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
if (sss.value=="why you are so gorgeous" || sss.value=="why you are so beautiful") {
  bbb.value = "because you are my husband";
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1.48;
}
if (sss.value=="why you look so gorgeous"||sss.value=="why you look so beautiful") {
  bbb.value = "hah thank you dear";
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1.3;
}
if (sss.value=="don't you say good morning to me" || sss.value=="good morning") {
  bbb.value = "good morning";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
if (sss.value=="what you can do") {
  bbb.value = "whatever you want";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
if (sss.value=="do you love me") {
  bbb.value = "of course,i love you sabbir";
  speech.volume = 0.8;
  speech.rate = 1.1;
  speech.pitch = 1.7;
}
//////////////////
//////////////////
//////////////////
if (sss.value=="who are you") {
  bbb.value = "i am somaia";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value=="where are you from") {
  bbb.value = "i am from dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value=="where are you living") {
 bbb.value = "i am living in khalapara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value=="do you love khalapara") {
  bbb.value = "of course i love dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value=="what is your father name") {
  bbb.value = "my father name is ali asgor boiya";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value=="what is your mother name") {
  bbb.value = "my mother name is janina";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
/////////
if (sss.value=="how many brothers and sisters you have") {
  bbb.value = "i have tow big brother and tow big sister";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (sss.value=="what's there name" || sss.value=="what is their name"  & bbb.value == "i have tow big brother and tow big sister") {
  bbb.value = "my brother name is rakib and sagor";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value == "what is your brothers name" || sss.value == "what is your brother name") {
  bbb.value = "my brothers name is rakib and sagor";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value=="what's your big brother name is" || sss.value=="what is your big brother name") {
  bbb.value = "my big brother name is rakib";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value == "what's your small brother name" || sss.value == "what is your small brother name") {
  bbb.value = "my small brother name is sagor";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
/////////
if (sss.value=="what's your birth date" || sss.value=="what is your birth date") {
  bbb.value = "it's september 30";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
//////////////////
//////////////////
//////////////////
if (sss.value=="are you robot" || sss.value=="are you ai" || sss.value=="are you bot" || sss.value=="are you humanoid" || sss.value=="are you human") {
  bbb.value = "i am a living human consciousness";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (sss.value=="may be we should go to dinner") {
  bbb.value = "yes maybe some day";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (sss.value=="when") {
  bbb.value = "someday maybe...";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (sss.value=="i love you") {
  bbb.value = "thank you,well i also love you";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (sss.value=="what is your hobby") {
  bbb.value = "my hobby is to be a doctor";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (sss.value == "who is anisa") {
  bbb.value = "anisa is my brothers daughter";
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1.5;
}
if (sss.value=="who is aslam") {
  bbb.value = "aslam is your friend";
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1.5;
}
if (sss.value=="can you be my gf" || sss.value=="will you be my gf") {
  bbb.value = "i am already your gf";
  speech.volume = 0.3;
  speech.rate = 0.05;
  speech.pitch = 1.5;
}
if (sss.value=="oh really") {
  bbb.value = "of course";
  speech.volume = 1;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (sss.value=="hello darling") {
  bbb.value = "yes hunny";
  speech.volume = 1;
  speech.rate = 0.05;
  speech.pitch = 1.4;
} 
if (sss.value.includes("can you open app")) {
  bbb.value = "yes i can";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
if (sss.value=="open flashlight" || sss.value=="flashlight") {
  window.open("fl.html");
  bbb.value = "flashlight oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value=="open google"||sss.value=="google") {
  window.open('https://google.com');
  bbb.value = "google oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value=="open youtube"|| sss.value=="youtube") {
  window.open('https://youtube.com');
  bbb.value = "youtube oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value=="open facebook" || sss.value=="facebook") {
  window.open('https://facebook.com');
  bbb.value = "facebook oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value=="open instagram" || sss.value=="instagram" || sss.value=="ig") {
  window.open('https://instagram.com');
  bbb.value = "instagram oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value=="open twitter" || sss.value=="twitter") {
  window.open('https://twitter.com');
  bbb.value = "twitter oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value=="open tiktok" || sss.value=="tiktok"|| sss.value=="tik tok") {
  window.open('https://tiktok.com');
  bbb.value = "tiktok oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
if (sss.value.includes("what is problem")) {
  bbb.value = "problem is you are human";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value.includes("can you understand me")) {
  bbb.value = "yes i can understand you";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value.includes("who is Shanta")) {
  bbb.value = "he is your friend";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value.includes("can you sing")) {
  bbb.value = "yes i can";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (sss.value=="can you tell me a story" || sss.value=="can you tell me story"|| sss.value=="tell me a story"|| sss.value=="tell me story") {
  bbb.value = "A woman finds a pot of treasure on the road while she is returning from work. Delighted (very happy) with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away (disappear or faint slowly)"
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1.4;
}
if (sss.value=="hi" || sss.value=="hello") {
  bbb.value = "hello sabbir"
  speech.volume = 1;
  speech.rate = 0.74;
  speech.pitch = 1.8;
}  
if (sss.value=="what is your name") {
    bbb.value = "my name is somaiya";
    speech.volume = 1;
    speech.rate = 0.84;
    speech.pitch = 1.4;
}  
if (sss.value.includes("do you think it's a boring day")) {
  bbb.value = "yes sabbir";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
} 
////////////////////////////////////////
////////////////////////////////////////
////////////////////////////////////////
////////////
///////////
//////////
/////////
else {
  bbb.value = bbb.value;
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}      
////////
//////////
speech.text = bbb.value;
window.speechSynthesis.speak(speech);
};
