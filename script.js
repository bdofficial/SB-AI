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
listenBtn.addEventListener('mouseove', (e) => {
  e.preventDefault();
  const msg = new SpeechSynthesisUtterance(
    timesay
  );
  msg.volume = 1;
  msg.rate = 0.7;
  msg.pitch = 1.4;
  window.speechSynthesis.speak(msg);
});}}
//////////mood
var mood = [
    [0, 4, "i am feeling sleepy"], 
    [5, 11, "i am not fine"],    
    [12, 14, "i am not fine"],
    [15, 17, "i am fine,and you?"],
    [18, 19, "i am feeling good"],
    [20, 24, "i am fine,and you?"]
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
//////////////////
if (sss.value.includes("weather")) {
  bbb.value = "it's a shiny day";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.4;
}
if (sss.value == "date"||sss.value == "what is today's date") {
  bbb.value = date;
  bbb.volume = 0.6;
  bbb.rate = 0.6;
  bbb.pitch = 1.7;
}
if (sss.value.includes("time")) {
  bbb.value = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }))
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
///////////////////
/////////////
if (sss.value == "how are you") {
bbb.value = moodsay;
bbb.volume = 0.8;
bbb.rate = 0.45;
bbb.pitch = 1.5;
}
else if (sss.value == "why" & bbb.value == "i am not fine") {
  bbb.value = "because i am sad";
  bbb.volume = 0.8;
  bbb.rate = 0.45;
  bbb.pitch = 1.5;
}
else if (sss.value == "why"& bbb.value == "because i am sad"||sss.value == "why you are sad" & bbb.value == "because i am sad") {
  bbb.value = "because of my health";
  bbb.volume = 0.8;
  bbb.rate = 0.45;
  bbb.pitch = 1.5;
}
else if (sss.value == "why"& bbb.value == "because of my health"|| sss.value == "why what is happened"& bbb.value == "because of my health"||sss.value == "what is happened" & bbb.value == "because of my health") {
  bbb.value = "i am suffering from headache";
  bbb.volume = 0.8;
  bbb.rate = 0.45;
  bbb.pitch = 1.5;
}
else if (sss.value == "why" & bbb.value == "i am suffering from headache") {
  bbb.value = "i don't have good sleep last night";
  bbb.volume = 0.8;
  bbb.rate = 0.45;
  bbb.pitch = 1.5;
}
else if (sss.value == "why" & bbb.value == "i don't have good sleep last night") {
  bbb.value = "do you want to ask something else";
  bbb.volume = 0.8;
  bbb.rate = 0.45;
  bbb.pitch = 1.5;
}
////////
else if (sss.value == "yes of course i am"& bbb.value == "do you want to ask something else"||sss.value == "yes"& bbb.value == "do you want to ask something else"||
sss.value == "of course"& bbb.value == "do you want to ask something else"||sss.value == "yes i want"& bbb.value == "do you want to ask something else"||
sss.value == "yes i want to"& bbb.value == "do you want to ask something else"||sss.value == "yes i want to ask you"& bbb.value == "do you want to ask something else"||
sss.value == "yes i want to ask you many questions"& bbb.value == "do you want to ask something else"||sss.value == "can i ask you"||sss.value == "can i ask you questions"||sss.value == "can i ask you question")
{
  bbb.value = "you can ask me";
  bbb.volume = 0.8;
  bbb.rate = 0.45;
  bbb.pitch = 1.5;
}
if (sss.value == "how old are you")
{
bbb.value = "i am 18th";
bbb.volume = 0.8;
bbb.rate = 0.45;
bbb.pitch = 1.5;
}
else if (sss.value == "why" & bbb.value == "i am 18th") {
   bbb.value = "because i born in 2004";
   bbb.volume = 0.8;
   bbb.rate = 0.45;
   bbb.pitch = 1.5;
 }     
if (sss.value == "what does cat say") {
  bbb.value = "maow maow";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.6;
}
if (sss.value.includes("youtube search")) {
  bbb.value = sss.value.replaceAll('search','searched');
  window.open('https://m.youtube.com/results?sp=mAEA&search_query='+sss.value.replaceAll('youtube search',''));
  bbb.volume = 0.8;
  bbb.rate = 0.5;
  bbb.pitch = 1.4;
}
if (sss.value.includes("google search")) {
  bbb.value = sss.value.replaceAll("search",'searched');
  window.open('https://www.google.com/search?sitesearch=&q='+sss.value.replaceAll("google search",''));
  bbb.volume = 0.8;
  bbb.rate = 0.5;
  bbb.pitch = 1.4;
}
if (sss.value=="do you have a dream") {
  bbb.value = "yes i have dream of you";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.6;
}
//////////
if (sss.value=="are you single") {
  bbb.value = "yes";
  bbb.volume = 0.8;
  bbb.rate = 0.5;
  bbb.pitch = 1.4;
}
if (sss.value=="do you have a bf"||sss.value=="do you have bf"||sss.value=="what is your bf name") {
  bbb.value = "no i don't have bf";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.4;
}
//////////
if (sss.value.includes("because")) {
  bbb.value = "oh really";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.4;
}
if (sss.value.includes("lucky")) {
  bbb.value = "why";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.4;
}
if (sss.value=="why you are so gorgeous" || sss.value=="why you are so beautiful") {
  bbb.value = "because you are my husband";
  bbb.volume = 1;
  bbb.rate = 0.9;
  bbb.pitch = 1.48;
}
if (sss.value=="why you look so gorgeous"||sss.value=="why you look so beautiful") {
  bbb.value = "hah thank you dear";
  bbb.volume = 1;
  bbb.rate = 0.8;
  bbb.pitch = 1.3;
}
if (sss.value=="don't you say good morning to me" || sss.value=="good morning") {
  bbb.value = "good morning";
  bbb.volume = 0.6;
  bbb.rate = 0.6;
  bbb.pitch = 1.7;
}
if (sss.value=="what you can do") {
  bbb.value = "whatever you want";
  bbb.volume = 0.6;
  bbb.rate = 0.6;
  bbb.pitch = 1.7;
}
if (sss.value=="do you love me") {
  bbb.value = "of course,i love you sabbir";
  bbb.volume = 0.8;
  bbb.rate = 1.1;
  bbb.pitch = 1.7;
}
//////////////////about
//////////////////about
//////////////////about
/////////dates
if (sss.value == "what is your birth date") {
  bbb.value = "it's July 30";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "when is your marriage anniversary") {
  bbb.value = "it's on october 3rd";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
//////////////////details
if (sss.value=="who are you") {
  bbb.value = "i am somaia";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
if (sss.value=="where are you from") {
  bbb.value = "i am from dawpara";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
if (sss.value=="where are you living") {
 bbb.value = "i am living in khalapara";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value=="do you love khalapara") {
  bbb.value = "of course i love dawpara";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
/////////////family
if (sss.value == "how many members are in your family") {
  bbb.value = "we are 7 members in our family";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "what is their name" & bbb.value == "we are 5 members in our family") {
  bbb.value = "my father name is ali asgor,my mother name is janina,my brothers name is sagor and raki,my sirter name is boro bone";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;  
}  
if (sss.value=="what is your father name") {
  bbb.value = "my father name is ali asgor boiya";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
if (sss.value=="what is your mother name") {
  bbb.value = "my mother name is janina";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value=="how many brothers and sisters you have") {
  bbb.value = "i have tow big brothers and tow big sisters";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "who is elders in your family"
 ||sss.value == "who is elders"& bbb.value == "i have tow big brothers and tow big sisters") {
   bbb.value = "my big sister";
   bbb.volume = 0.8;
   bbb.rate = 0.7;
   bbb.pitch = 1.5;
}
else if (sss.value == "who is smallest in your family"
 ||sss.value == "who is smallest"& bbb.value == "i have tow big brothers and tow big sisters") {
   bbb.value = "me";
   bbb.volume = 0.8;
   bbb.rate = 0.7;
   bbb.pitch = 1.5;
}
else if (sss.value=="what is your brother and sister name"
 ||sss.value=="what is your brothers and sisters name"
 || sss.value=="what is their name" & bbb.value == "i have tow big brothers and tow big sisters") {
  bbb.value = "there name is rakib,sagor,joma and boro bone";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "what is your brothers name" || sss.value == "what is your brother name") {
  bbb.value = "my brothers name is rakib and sagor";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value=="what is your big brother name") {
  bbb.value = "my big brother name is rakib";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "what is your small brother name") {
  bbb.value = "my small brother name is sagor";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
/////////husband
if (sss.value=="what is your husband name") {
  bbb.value = "my husband name is sabbir";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value.includes("who is sabbir")) {
  bbb.value = "my husband name is sabbir";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "how many members are in your husband family"
||sss.value == "how many members are in his family" & bbb.value == "my husband name is sabbir") {
bbb.value = "he have 6 members";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "what is your husband family members name"
 ||sss.value == "what is their name" & bbb.value == "he have 6 members") {
bbb.value = "his father abdul awal,his mother hasina begum,his big brother tanvir alam,his little sister abida sultana and his wife me";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "what is your husband father's name" 
 ||sss.value == "what is his father's name" & bbb.value == "my husband name is sabbir") {
bbb.value = "my husband's father name is abdul awal";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "what is your husband's mother name" 
 ||sss.value == "what is his mother name" & bbb.value == "my husband name is sabbir") {
bbb.value = "her name is hasina begum";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "what is your husband's brother name"
 ||sss.value == "what is his brother name" & bbb.value == "my husband name is sabbir") {
bbb.value = "my husband's brother name is tanvir";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value == "what is your husband's sister name"
 ||sss.value == "what is his sister name" & bbb.value == "my husband name is sabbir") {
bbb.value = "her name is abida sultana";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
else if (sss.value=="do you love him" & bbb.value == "my husband name is sabbir") {
  bbb.value = "yes";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
if (sss.value == "what is your husband birth date"||sss.value == "what is his birth date" & bbb.value == "my husband name is sabbir") {
  bbb.value = "23 august 2002";
  bbb.volume = 0.8;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
///////////////////
//////////////////
/////////////////
if (sss.value=="are you robot" || sss.value=="are you ai" || sss.value=="are you bot" || sss.value=="are you humanoid" || sss.value=="are you human") {
  bbb.value = "i am a living human consciousness";
  bbb.volume = 0.8;
  bbb.rate = 0.5;
  bbb.pitch = 1.5;
}
if (sss.value=="may be we should go to dinner") {
  bbb.value = "yes maybe some day";
  bbb.volume = 0.8;
  bbb.rate = 0.5;
  bbb.pitch = 1.5;
}
if (sss.value=="when") {
  bbb.value = "someday maybe...";
  bbb.volume = 0.8;
  bbb.rate = 0.5;
  bbb.pitch = 1.5;
}
if (sss.value=="i love you") {
  bbb.value = "thank you,well i also love you";
  bbb.volume = 0.8;
  bbb.rate = 0.5;
  bbb.pitch = 1.5;
}
if (sss.value=="what is your hobby") {
  bbb.value = "my hobby is to be a doctor";
  bbb.volume = 0.8;
  bbb.rate = 0.5;
  bbb.pitch = 1.5;
}
if (sss.value == "who is anisa") {
  bbb.value = "anisa is my brothers daughter";
  bbb.volume = 0.8;
  bbb.rate = 0.8;
  bbb.pitch = 1.5;
}
if (sss.value=="who is aslam") {
  bbb.value = "aslam is your friend";
  bbb.volume = 0.8;
  bbb.rate = 0.8;
  bbb.pitch = 1.5;
}
if (sss.value=="can you be my gf" || sss.value=="will you be my gf") {
  bbb.value = "i am already your gf";
  bbb.volume = 0.3;
  bbb.rate = 0.05;
  bbb.pitch = 1.5;
}
if (sss.value=="oh really") {
  bbb.value = "of course";
  bbb.volume = 1;
  bbb.rate = 0.7;
  bbb.pitch = 1.5;
}
if (sss.value=="hello darling") {
  bbb.value = "yes hunny";
  bbb.volume = 1;
  bbb.rate = 0.05;
  bbb.pitch = 1.4;
} 
if (sss.value.includes("can you open app")) {
  bbb.value = "yes i can";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
///////////////////
if (sss.value=="open flashlight" || sss.value=="flashlight") {
  window.open("fl.html");
  bbb.value = "flashlight oppened";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
if (sss.value=="open google"||sss.value=="google") {
  window.open('https://google.com');
  bbb.value = "google oppened";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
if (sss.value=="open youtube") {
  window.open('https://youtube.com');
  bbb.value = "youtube oppened";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
if (sss.value=="open facebook") {
  window.open('https://facebook.com');
  bbb.value = "facebook oppened";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
if (sss.value=="open instagram"|| sss.value=="ig") {
  window.open('https://instagram.com');
  bbb.value = "instagram oppened";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
if (sss.value=="open twitter") {
  window.open('https://twitter.com');
  bbb.value = "twitter oppened";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
if (sss.value=="open tiktok" || sss.value=="open tik tok") {
  window.open('https://tiktok.com');
  bbb.value = "tiktok oppened";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
///////////////////
if (sss.value=="can you understand me") {
  bbb.value = "yes i can understand you";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
if (sss.value=="who is Shanta") {
  bbb.value = "he is your friend";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
if (sss.value=="can you sing") {
  bbb.value = "yes i can";
  bbb.volume = 1;
  bbb.rate = 0.4;
  bbb.pitch = 1.4;
}
if (sss.value=="can you tell me a story" || sss.value=="can you tell me story"|| sss.value=="tell me a story"|| sss.value=="tell me story") {
  bbb.value = "A woman finds a pot of treasure on the road while she is returning from work. Delighted (very happy) with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away (disappear or faint slowly)"
  bbb.volume = 1;
  bbb.rate = 0.8;
  bbb.pitch = 1.4;
}
if (sss.value=="hi" || sss.value=="hello") {
  bbb.value = "hello sabbir"
  bbb.volume = 1;
  bbb.rate = 0.74;
  bbb.pitch = 1.8;
}  
if (sss.value=="what is your name") {
    bbb.value = "my name is somaiya";
    bbb.volume = 1;
    bbb.rate = 0.84;
    bbb.pitch = 1.4;
}  
if (sss.value.includes("do you think it's a boring day")) {
  bbb.value = "yes sabbir";
  bbb.volume = 0.8;
  bbb.rate = 0.45;
  bbb.pitch = 1.5;
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
  bbb.volume = 0.8;
  bbb.rate = 0.45;
  bbb.pitch = 1.5;
}      
////////
//////////
speech.text = bbb.value;
window.speechSynthesis.speak(speech);
};
