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
    [15, 17, "i am not fine"],
    [18, 19, "i am not fine"],
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
  console.log("value is activated");
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
var bbb = document.getElementById("bbb");
value=message.toLowerCase();
sss.innerHTML="sa-"+value;
//////////////////
if (value.includes("weather")) {
  value = "it's a shiny day";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
if (value == "date"||value == "what is today's date") {
  value = date;
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
if (value.includes("time")) {
  value = (new Date().toLocaleTimeString([], { hour: '2-digit', minute: "2-digit" }))
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
/////////////
if (value == "how are you") {
value = moodsay;
speech.volume = 0.8;
speech.rate = 0.45;
speech.pitch = 1.5;
}
else if (value == "why" & value == "i am not fine") {
  value = "because i am sad";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (value == "why"& value == "because i am sad"||value == "why you are sad" & value == "because i am sad") {
  value = "because of my health";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (value == "why"& value == "because of my health"|| value == "why what is happened"& value == "because of my health"||value == "what is happened" & value == "because of my health") {
  value = "i am suffering from headache";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (value == "why" & value == "i am suffering from headache") {
  value = "i don't have good sleep last night";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
else if (value == "why" & value == "i don't have good sleep last night") {
  value = "do you want to ask something else";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
////////
else if (value == "yes of course i am"& value == "do you want to ask something else"||value == "yes"& value == "do you want to ask something else"||
value == "of course"& value == "do you want to ask something else"||value == "yes i want"& value == "do you want to ask something else"||
value == "yes i want to"& value == "do you want to ask something else"||value == "yes i want to ask you"& value == "do you want to ask something else"||
value == "yes i want to ask you many questions"& value == "do you want to ask something else"||value == "can i ask you"||value == "can i ask you questions"||value == "can i ask you question")
{
  value = "you can ask me";
  speech.volume = 0.8;
  speech.rate = 0.45;
  speech.pitch = 1.5;
}
if (value == "how old are you")
{
value = "i am 18th";
speech.volume = 0.8;
speech.rate = 0.45;
speech.pitch = 1.5;
}
else if (value == "why" & value == "i am 18th") {
   value = "because i born in 2004";
   speech.volume = 0.8;
   speech.rate = 0.45;
   speech.pitch = 1.5;
 }     
if (value == "what does cat say") {
  value = "maow maow";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.6;
}
if (value.includes("youtube search")) {
  value = value.replaceAll('search','searched');
  window.open('https://m.youtube.com/results?sp=mAEA&search_query='+value.replaceAll('youtube search',''));
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
if (value.includes("google search")) {
  value = value.replaceAll("search",'searched');
  window.open('https://www.google.com/search?sitesearch=&q='+value.replaceAll("google search",''));
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
if (value=="do you have a dream") {
  value = "yes i have dream of you";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.6;
}
//////////
if (value=="are you single") {
  value = "yes";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.4;
}
if (value=="do you have a bf"||value=="do you have bf"||value=="what is your bf name") {
  value = "no i don't have bf";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
//////////
if (value.includes("because")) {
  value = "oh really";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
if (value.includes("lucky")) {
  value = "why";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.4;
}
if (value=="why you are so gorgeous" || value=="why you are so beautiful") {
  value = "because you are my husband";
  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1.48;
}
if (value=="why you look so gorgeous"||value=="why you look so beautiful") {
  value = "hah thank you dear";
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1.3;
}
if (value=="don't you say good morning to me" || value=="good morning") {
  value = "good morning";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
if (value=="what you can do") {
  value = "whatever you want";
  speech.volume = 0.6;
  speech.rate = 0.6;
  speech.pitch = 1.7;
}
if (value=="do you love me") {
  value = "of course,i love you sabbir";
  speech.volume = 0.8;
  speech.rate = 1.1;
  speech.pitch = 1.7;
}
//////////////////about
//////////////////about
//////////////////about
/////////dates
if (value == "what is your birth date") {
  value = "it's July 30";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "when is your marriage anniversary") {
  value = "it's on october 3rd";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
//////////////////details
if (value=="who are you") {
  value = "i am somaia";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (value=="where are you from") {
  value = "i am from dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (value=="where are you living") {
 value = "i am living in khalapara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value=="do you love khalapara") {
  value = "of course i love dawpara";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
/////////////family
if (value == "how many members are in your family") {
  value = "we are 7 members in our family";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "what is their name" & value == "we are 5 members in our family") {
  value = "my father name is ali asgor,my mother name is janina,my brothers name is sagor and raki,my sirter name is boro bone";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;  
}  
if (value=="what is your father name") {
  value = "my father name is ali asgor boiya";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (value=="what is your mother name") {
  value = "my mother name is janina";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value=="how many brothers and sisters you have") {
  value = "i have tow big brothers and tow big sisters";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "who is elders in your family"
 ||value == "who is elders"& value == "i have tow big brothers and tow big sisters") {
   value = "my big sister";
   speech.volume = 0.8;
   speech.rate = 0.7;
   speech.pitch = 1.5;
}
else if (value == "who is smallest in your family"
 ||value == "who is smallest"& value == "i have tow big brothers and tow big sisters") {
   value = "me";
   speech.volume = 0.8;
   speech.rate = 0.7;
   speech.pitch = 1.5;
}
else if (value=="what is your brother and sister name"
 ||value=="what is your brothers and sisters name"
 || value=="what is their name" & value == "i have tow big brothers and tow big sisters") {
  value = "there name is rakib,sagor,joma and boro bone";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "what is your brothers name" || value == "what is your brother name") {
  value = "my brothers name is rakib and sagor";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value=="what is your big brother name") {
  value = "my big brother name is rakib";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "what is your small brother name") {
  value = "my small brother name is sagor";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
/////////husband
if (value=="what is your husband name") {
  value = "my husband name is sabbir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value.includes("who is sabbir")) {
  value = "my husband name is sabbir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "how many members are in your husband family"
||value == "how many members are in his family" & value == "my husband name is sabbir") {
value = "he have 6 members";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "what is your husband family members name"
 ||value == "what is their name" & value == "he have 6 members") {
value = "his father abdul awal,his mother hasina begum,his big brother tanvir alam,his little sister abida sultana and his wife me";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "what is your husband father's name" 
 ||value == "what is his father's name" & value == "my husband name is sabbir") {
value = "my husband's father name is abdul awal";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "what is your husband's mother name" 
 ||value == "what is his mother name" & value == "my husband name is sabbir") {
value = "her name is hasina begum";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "what is your husband's brother name"
 ||value == "what is his brother name" & value == "my husband name is sabbir") {
value = "my husband's brother name is tanvir";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value == "what is your husband's sister name"
 ||value == "what is his sister name" & value == "my husband name is sabbir") {
value = "her name is abida sultana";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
else if (value=="do you love him" & value == "my husband name is sabbir") {
  value = "yes";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (value == "what is your husband birth date"||value == "what is his birth date" & value == "my husband name is sabbir") {
  value = "23 august 2002";
  speech.volume = 0.8;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
///////////////////
//////////////////
/////////////////
if (value=="are you robot" || value=="are you ai" || value=="are you bot" || value=="are you humanoid" || value=="are you human") {
  value = "i am a living human consciousness";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (value=="may be we should go to dinner") {
  value = "yes maybe some day";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (value=="when") {
  value = "someday maybe...";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (value=="i love you") {
  value = "thank you,well i also love you";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (value=="what is your hobby") {
  value = "my hobby is to be a doctor";
  speech.volume = 0.8;
  speech.rate = 0.5;
  speech.pitch = 1.5;
}
if (value == "who is anisa") {
  value = "anisa is my brothers daughter";
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1.5;
}
if (value=="who is aslam") {
  value = "aslam is your friend";
  speech.volume = 0.8;
  speech.rate = 0.8;
  speech.pitch = 1.5;
}
if (value=="can you be my gf" || value=="will you be my gf") {
  value = "i am already your gf";
  speech.volume = 0.3;
  speech.rate = 0.05;
  speech.pitch = 1.5;
}
if (value=="oh really") {
  value = "of course";
  speech.volume = 1;
  speech.rate = 0.7;
  speech.pitch = 1.5;
}
if (value=="hello darling") {
  value = "yes hunny";
  speech.volume = 1;
  speech.rate = 0.05;
  speech.pitch = 1.4;
} 
if (value.includes("can you open app")) {
  value = "yes i can";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
if (value=="open flashlight" || value=="flashlight") {
  window.open("fl.html");
  value = "flashlight oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (value=="open google"||value=="google") {
  window.open('https://google.com');
  value = "google oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (value=="open youtube") {
  window.open('https://youtube.com');
  value = "youtube oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (value=="open facebook") {
  window.open('https://facebook.com');
  value = "facebook oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (value=="open instagram"|| value=="ig") {
  window.open('https://instagram.com');
  value = "instagram oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (value=="open twitter") {
  window.open('https://twitter.com');
  value = "twitter oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (value=="open tiktok" || value=="open tik tok") {
  window.open('https://tiktok.com');
  value = "tiktok oppened";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
///////////////////
if (value=="can you understand me") {
  value = "yes i can understand you";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (value=="who is Shanta") {
  value = "he is your friend";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (value=="can you sing") {
  value = "yes i can";
  speech.volume = 1;
  speech.rate = 0.4;
  speech.pitch = 1.4;
}
if (value=="can you tell me a story" || value=="can you tell me story"|| value=="tell me a story"|| value=="tell me story") {
  value = "A woman finds a pot of treasure on the road while she is returning from work. Delighted (very happy) with her luck, she decides to keep it. As she is taking it home, it keeps changing. However, her enthusiasm refuses to fade away (disappear or faint slowly)"
  speech.volume = 1;
  speech.rate = 0.8;
  speech.pitch = 1.4;
}
if (value=="hi" || value=="hello") {
  value = "hello sabbir"
  speech.volume = 1;
  speech.rate = 0.74;
  speech.pitch = 1.8;
}  
if (value=="what is your name") {
    value = "my name is somaiya";
    speech.volume = 1;
    speech.rate = 0.84;
    speech.pitch = 1.4;
}  
if (value.includes("do you think it's a boring day")) {
  value = "yes sabbir";
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
value = value;
bbb.innerHTML="su-"+value;
window.speechSynthesis.speak(speech);
};
