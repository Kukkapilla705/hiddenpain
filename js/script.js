const title =
"NOT Talking For Days? 😔";

const subtitle =
"But I couldn't stop thinking about you...\n\nI made something special.\n\nPlease don't leave before the end ❤️";

let i=0;

function typeTitle(){

if(i<title.length){

document.getElementById("title").innerHTML+=title.charAt(i);

i++;

setTimeout(typeTitle,70);

}else{

typeSubtitle();

}

}

let j=0;

function typeSubtitle(){

if(j<subtitle.length){

document.getElementById("subtitle").innerHTML+=subtitle.charAt(j);

j++;

setTimeout(typeSubtitle,35);

}

}

typeTitle();

document.getElementById("nextBtn").onclick=function(){

window.location="bond.html";

};

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=5+Math.random()*6+"s";

heart.style.fontSize=15+Math.random()*30+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

}

setInterval(createHeart,300);