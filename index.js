function realtimeclock() {
    var rt = new Date();
    var hours = rt.getHours();
    var minutes = rt.getMinutes();
    var seconds = rt.getSeconds();

    var amPm = (hours < 12) ? "AM" : "PM";
    hours = (hours > 12) ? hours - 12 : hours;
    hours = ("0" + hours).slice(-2);
    minutes = ("0" + minutes).slice(-2);
    seconds = ("0" + seconds).slice(-2);
    //console.log(hours)
    document.getElementById('tclock').innerHTML = hours;
    document.getElementById('tclock1').innerHTML = minutes;
    document.getElementById('tclock2').innerHTML = seconds;
    document.getElementById('tclock3').innerHTML = amPm;
    setTimeout(realtimeclock, 1000);

}
realtimeclock();
images1 = ['./images/morning.jpg', './images/lunch.jpg', './images/dinnerTime.jpg', './images/sleepingTime.jpg', './images/partyTime.jpg', './images/freetime.jpg'];

let image = document.getElementById('image');
/*setInterval(() => {
    let rad=Math.floor(Math.random()*4);
    image.src=images1[rad];
}, 1000);*/
let rt1 = new Date();
let hr1 = rt1.getHours();
let minuttes1 = rt1.getMinutes();
console.log(hr1);
let texta=['BREAKFAST TIME', 'LUNCH TIME', 'DINNER TIME','PARTY TIME','DEFUALT IMAGE']
let imageIndex=5;
let textim=4;
document.getElementById('imd').innerHTML = texta[4];
image.src = images1[5];

const ts1 = document.querySelector('.ts1');
const ts2 = document.querySelector('.ts2');
const ts3 = document.querySelector('.ts3');
greet = ['GOOD MORNING!!', 'GOOD AFTERNOON!!', 'GOOD NIGHT!!', 'PARTY IS STARTED!!','DEFAULT IMAGES'];

let greeti=4;
document.getElementById('gt').innerHTML = "DEFUALT IMAGES!!";
ts1.addEventListener('click', ch1);
ts2.addEventListener('click', ch2);
ts3.addEventListener('click', ch3);
function ch1(){
  console.log(ts1.value);
  if (ts1.value == hr1){
    image.src = images1[0];
    imageIndex=0;
    textim=0;
    greeti=0;
    document.getElementById('gt').innerHTML = greet[0];
    document.getElementById('imd').innerHTML = texta[textim];
  }
  else{
    image.src = images1[5];
    document.getElementById('imd').innerHTML = texta[textim];
    document.getElementById('gt').innerHTML = "TIME NOT MATCH";
  }
};

function ch2(){
  console.log(ts2.value);
  if (ts2.value == hr1){
    image.src = images1[1];
    imageIndex=1;
    textim=1;
    greeti=1;
    document.getElementById('imd').innerHTML = texta[textim];
    document.getElementById('gt').innerHTML = greet[1];
    
  }
  else{
    image.src = images1[5];
    document.getElementById('imd').innerHTML = texta[textim];
    document.getElementById('gt').innerHTML = "TIME NOT MATCH";
  }
};

function ch3(){
  console.log(ts3.value);
  if (ts3.value == hr1){
    image.src = images1[2];
    imageIndex=2;
    textim=2;
    greeti=2;
    document.getElementById('imd').innerHTML = texta[textim];
    document.getElementById('gt').innerHTML = greet[2];
  }
  else{
    image.src = images1[5];
    document.getElementById('imd').innerHTML = texta[textim];
    document.getElementById('gt').innerHTML = "TIME NOT MATCH";
  }
};

let pt = document.getElementById('partytime');

let flag=0;
  pt.addEventListener('click', patytime);  


function patytime() {
  if(flag==0){
    image.src = images1[4];
    flag=1;
    
    document.getElementById('imd').innerHTML = texta[3];
    document.getElementById('gt').innerHTML = "PARTY IS STARTED!!";
  }
  else 
  {
    flag=0;
    document.getElementById('imd').innerHTML = texta[textim];
    image.src =images1[imageIndex];
    document.getElementById('gt').innerHTML = greet[greeti];
  }
  
}
