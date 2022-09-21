//////
reply="";
//////
var data = [
    [0, 4, "hello sir"], 
    [5, 11, "Good morning sir"],    
    [12, 14, "Good noon sir"],
    [15, 17, "Good afternoon sir"],
    [18, 19, "Good evening sir"],
    [20, 24, "how are you sir"]
    ],
    hr = new Date().getHours();
for(var i = 0; i < data.length; i++){
    if(hr >= data[i][0] && hr <= data[i][1]){
        timesay=(data[i][2]);
/////////////
const listenBtn = document.querySelector(".sir");
listenBtn.addEventListener('mouseover', (e) => {
  e.preventDefault();
  const msg = new SpeechSynthesisUtterance(
    timesay
  );
  msg.volume = 1;
  msg.rate = 0.8;
  msg.pitch = 1.6;
  window.speechSynthesis.speak(msg);
});}}
//////////mood
var mood = [
    [0, 4, "i am feeling sleepy"], 
    [5, 11, "i am not fine"],    
    [12, 14, "i am not fine"],
    [15, 17, "i am not fine"],
    [18, 19, "i am not fine"],
    [20, 24, "i am not fine"]
    ],
    hr = new Date().getHours();
for(var i = 0; i < mood.length; i++){
    if(hr >= mood[i][0] && hr <= mood[i][1]){
        moodsay=(mood[i][2]);}}
//////////date
date = new Date();
var dd = String(date.getDate()).padStart(2, '0');
var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = date.getFullYear().toString().substr(-0);
date = dd + '/' + mm + '/' + yyyy;
////////////
const btn = document.querySelector(".body");
// const content = document.querySelector(".content");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onstart = () => {
  console.log("reply is activated");
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
sss.innerHTML="sa-"+voice;
//////////////////
if (voice.includes("weather")) {
  reply = "it's a shiny day";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
if (voice == "date"||voice == "what is today's date") {
  reply = date;
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
if (voice.includes("time")) {
  reply = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }))
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
if (voice == "i am not fine") {
  reply = "why what's happened";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.6;
}
else if (voice.includes("") & reply == "why what's happened") {
  reply = "hope everything will be fine soon";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
/////////////
if (voice == "how are you") {
reply = moodsay;
speech.volume = 0.8;
speech.rate = 0.45;
speech.pitch = 1.5;
}
else if (voice == "why" & reply == "i am not fine") {
  reply = "because i am sad";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (voice == "why"& reply == "because i am sad"||voice == "why you are sad" & reply == "because i am sad") {
  reply = "because of my health";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (voice == "why"& reply == "because of my health"|| voice == "why what is happened"& reply == "because of my health"||voice == "what is happened" & reply == "because of my health") {
reply = "i am suffering from headache";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (voice == "why" & reply == "i am suffering from headache") {
  reply = "i don't have good sleep last night";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (voice == "why" & reply == "i don't have good sleep last night") {
  reply = "do you want to ask something else";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
////////
else if (voice == "yes of course i am"& reply == "do you want to ask something else"||voice == "yes"& reply == "do you want to ask something else"||
voice == "of course"& reply == "do you want to ask something else"||voice == "yes i want"& reply == "do you want to ask something else"||
voice == "yes i want to"& reply == "do you want to ask something else"||voice == "yes i want to ask you"& reply == "do you want to ask something else"||
voice == "yes i want to ask you many questions"& reply == "do you want to ask something else"||voice == "can i ask you"||voice == "can i ask you questions"||voice == "can i ask you question")
{
  reply = "you can ask me";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
if (voice == "how old are you"){
reply = "i am 18th";
speech.volume = 0.8;
speech.rate = 0.45;
speech.pitch = 1.5;
}
else if (voice == "why" & reply == "i am 18th") {
   reply = "because i born in 2004";
   speech.volume = 0.8;
   speech.rate = 0.45;
   speech.pitch = 1.5;
 }     
if (voice == "what does cat say") {
  reply = "maow maow";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.6;
}
if (voice.includes("youtube search")) {
  reply = voice.replaceAll('search','searched');
  window.open('https://m.youtube.com/results?sp=mAEA&search_query='+voice.replaceAll('youtube search',''));
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
if (voice.includes("google search")) {
  reply = voice.replaceAll("search",'searched');
  window.open('https://www.google.com/search?sitesearch=&q='+voice.replaceAll("google search",''));
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
if (voice=="do you have a dream") {
  reply = "yes i have dream of you";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.6;
}
//////////
if (voice=="are you single") {
  reply = "yes";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
if (voice=="do you have a bf"||voice=="do you have bf"||voice=="what is your bf name") {
  reply = "no i don't have bf";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
//////////
if (voice=="why you are so gorgeous" || voice=="why you are so beautiful") {
  reply = "because you are my husband";
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1.48;
}
if (voice=="why you look so gorgeous"||voice=="why you look so beautiful") {
  reply = "hah thank you dear";
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1.3;
}
if (voice=="don't you say good morning to me" || voice=="good morning") {
  reply = "good morning";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
if (voice=="what you can do") {
  reply = "whatever you want";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
if (voice=="do you love me") {
  reply = "of course,i love you sabbir";
  speech.volume = 0.8;
  speech.rate = 1.1;
  speech.pitch = 1.7;
}
//////////////////about
//////////////////about
//////////////////about
/////////dates
if (voice == "what is your birth date") {
  reply = "it's July 30";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "when is your marriage anniversary") {
  reply = "it's on october 3rd";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
//////////////////details
if (voice=="who are you") {
  reply = "i am somaia";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (voice=="where are you from") {
  reply = "i am from dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (voice=="where are you living") {
 reply = "i am living in khalapara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="do you love khalapara") {
  reply = "of course i love dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
/////////////family
if (voice == "how many members are in your family") {
  reply = "we are 7 members in our family";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "what is their name" & reply == "we are 5 members in our family") {
  reply = "my father name is ali asgor,my mother name is janina,my brothers name is sagor and raki,my sirter name is boro bone";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;  
}  
if (voice=="what is your father name") {
  reply = "my father name is ali asgor boiya";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (voice=="what is your mother name") {
  reply = "my mother name is janina";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="how many brothers and sisters you have") {
  reply = "i have tow big brothers and tow big sisters";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "who is elders in your family"
 ||voice == "who is elders"& reply == "i have tow big brothers and tow big sisters") {
   reply = "my big sister";
   speech.volume = 0.8;
   speech.rate = 0.7;
   speech.pitch = 1.5;
}
else if (voice == "who is smallest in your family"
 ||voice == "who is smallest"& reply == "i have tow big brothers and tow big sisters") {
   reply = "me";
   speech.volume = 0.8;
   speech.rate = 0.7;
   speech.pitch = 1.5;
}
else if (voice=="what is your brother and sister name"
 ||voice=="what is your brothers and sisters name"
 || voice=="what is their name" & reply == "i have tow big brothers and tow big sisters") {
  reply = "there name is rakib,sagor,joma and boro bone";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "what is your brothers name" || voice == "what is your brother name") {
  reply = "my brothers name is rakib and sagor";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="what is your big brother name") {
  reply = "my big brother name is rakib";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "what is your small brother name") {
  reply = "my small brother name is sagor";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
/////////husband
if (voice=="what is your husband name") {
  reply = "my husband name is sabbir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice.includes("who is sabbir")) {
  reply = "my husband name is sabbir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "how many members are in your husband family"
||voice == "how many members are in his family" & reply == "my husband name is sabbir") {
reply = "he have 6 members";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "what is your husband family members name"
 ||voice == "what is their name" & reply == "he have 6 members") {
reply = "his father abdul awal,his mother hasina begum,his big brother tanvir alam,his little sister abida sultana and his wife me";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "what is your husband father's name" 
 ||voice == "what is his father's name" & reply == "my husband name is sabbir") {
reply = "my husband's father name is abdul awal";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "what is your husband's mother name" 
 ||voice == "what is his mother name" & reply == "my husband name is sabbir") {
reply = "her name is hasina begum";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "what is your husband's brother name"
 ||voice == "what is his brother name" & reply == "my husband name is sabbir") {
reply = "my husband's brother name is tanvir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice == "what is your husband's sister name"
 ||voice == "what is his sister name" & reply == "my husband name is sabbir") {
reply = "her name is abida sultana";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (voice=="do you love him" & reply == "my husband name is sabbir") {
  reply = "yes";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (voice == "what is your husband birth date"||voice == "what is his birth date" & reply == "my husband name is sabbir") {
  reply = "23 august 2002";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
///////////////////
//////////////////
/////////////////
if (voice=="are you robot" || voice=="are you ai" || voice=="are you bot" || voice=="are you humanoid" || voice=="are you human") {
  reply = "i am a living human consciousness";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (voice=="may be we should go to dinner") {
  reply = "yes maybe some day";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (voice=="when") {
  reply = "someday maybe...";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (voice=="i love you") {
  reply = "thank you,well i also love you";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (voice=="what is your hobby") {
  reply = "my hobby is to be a doctor";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (voice == "who is anisa") {
  reply = "anisa is my brothers daughter";
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1.5;
}
if (voice=="who is aslam") {
  reply = "aslam is your friend";
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1.5;
}
if (voice=="can you be my gf" || voice=="will you be my gf") {
  reply = "i am already your gf";
  speech.volume = 0.3;
  speech.rate = 0.05;
  speech.pitch = 1.5;
}
if (voice=="oh really") {
  reply = "of course";
  speech.volume = 1;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (voice=="hello darling") {
  reply = "yes hunny";
  speech.volume = 1;
  speech.rate = 0.05;
  speech.pitch = 1.4;
} 
if (voice.includes("can you open app")) {
  reply = "yes i can";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
if (voice=="open flashlight" || voice=="flashlight") {
  window.open("fl.html");
  reply = "flashlight oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (voice=="open google"||voice=="google") {
  window.open('https://google.com');
  reply = "google oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (voice=="open youtube") {
  window.open('https://youtube.com');
  reply = "youtube oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (voice=="open facebook") {
  window.open('https://facebook.com');
  reply = "facebook oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (voice=="open instagram"|| voice=="ig") {
  window.open('https://instagram.com');
  reply = "instagram oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (voice=="open twitter") {
  window.open('https://twitter.com');
  reply = "twitter oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (voice=="open tiktok" || voice=="open tik tok") {
  window.open('https://tiktok.com');
  reply = "tiktok oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
if (voice=="can you understand me") {
  reply = "yes i can understand you";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (voice=="who is Shanta") {
  reply = "he is your friend";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (voice=="can you sing") {
  reply = "yes i can";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (voice=="can you tell me a story" || voice=="can you tell me story"|| voice=="tell me a story"|| voice=="tell me story") {
  reply = "A woman finds a pot of treasure on the road while she is returning from work. Delighted (very happy) with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away (disappear or faint slowly)"
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1.4;
}
if (voice.includes("do you think it's a boring day")) {
  reply = "yes sabbir";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
///////
if (voice=="hi" || voice=="hello") {
  reply = timesay;
  speech.volume = 1;
  speech.rate = 0.74;
  speech.pitch = 1.8;
}  
if (voice=="what is your name") {
    reply = "my name is somaiya";
    speech.volume = 1;
    speech.rate = 0.84;
    speech.pitch = 1.4;
}  
///////////////
if (voice.includes("my name is")) {
reply = voice.replaceAll("my name is",'hello');
  name77.innerHTML=voice;
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
name = document.getElementById("name77").value;
if (voice=="what is my name") {
reply = name.replaceAll("my name is",'your name is');
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
///////////
if (voice.includes("my birthday is on")) {
reply = "oky";
  bd7.innerHTML = voice;
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
bd = document.getElementById("bd7").value;
if (voice == "when is my birthday") {
reply = bd.replaceAll("my birthday is on",'your birthday is on');
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
///////////////
if (voice.includes("my blood group is")) {
  reply = "ok";
  bg7.innerHTML = voice;
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
bg = document.getElementById("bg7").value;
if (voice == "what is my blood group") {
  reply = bg.replaceAll("my blood group is", 'your blood group is');
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
///////////////
if (voice.includes("my favourite colour is")) {
  reply = "ok";
  fc7.innerHTML = voice;
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
fc = document.getElementById("fc7").value;
if (voice == "what is my favourite colour") {
  reply = fc.replaceAll("my favourite colour is", 'your favourite colour is');
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
///////////////
if (voice.includes("my wife name is")) {
  reply = "ok";
  mwn7.innerHTML = voice;
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
mwn = document.getElementById("mwn7").value;
if (voice == "what is my wife name") {
  reply = mwn.replaceAll("my wife name is", 'your wife name is');
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
////////
bbb.innerHTML="su-"+reply;
speech.text = reply;
window.speechSynthesis.speak(speech);
};
