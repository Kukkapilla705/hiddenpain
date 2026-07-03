// -----------------------------
// Elements
// -----------------------------

const balloons = document.querySelectorAll(".balloon");

const popup = document.getElementById("popup");

const photo = document.getElementById("photo");

const title = document.getElementById("title");

const message = document.getElementById("message");

const next = document.getElementById("next");

const finishPopup = document.getElementById("finishPopup");

const openLetter = document.getElementById("openLetter");

const letterContainer = document.getElementById("letterContainer");

const envelope = document.querySelector(".envelope");

const finish = document.getElementById("finish");

const letterText = document.querySelector(".letterText");


// -----------------------------
// Cat GIFs + Pickup Lines
// -----------------------------
const surprises = [

{
img:"https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif",
title:"🐱 Meow... A Secret!",
msg:"This little kitty looked around... and whispered that you're the cutest person ever. 🥺❤️"
},

{
img:"https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif",
title:"😻 Sending Hugs",
msg:"If this kitten could talk, it would probably ask for cuddles... just like I want to send you a big smile today. 🤍"
},

{
img:"https://media.giphy.com/media/v6aOjy0Qo1fIA/giphy.gif",
title:"🌸 Tiny Reminder",
msg:"No matter how your day went, I hope this fluffy little friend made you smile even a little. 🌷"
},

{
img:"https://media.giphy.com/media/ICOgUNjpvO0PC/giphy.gif",
title:"🐾 One More Smile",
msg:"The world becomes a little brighter every time you smile... and this kitty completely agrees. 😸💕"
},

{
img:"https://media.giphy.com/media/3oriO0OEd9QIDdllqo/giphy.gif",
title:"💌 Final Surprise",
msg:"You've collected every little surprise... now it's time to open the one written especially for you. ❤️"
}

];
// -----------------------------
// Count
// -----------------------------

let popped = 0;


// -----------------------------
// Balloon Click
// -----------------------------

balloons.forEach(balloon=>{

balloon.addEventListener("click",function(){

const index = Number(this.dataset.card);

this.classList.add("pop");

setTimeout(()=>{

this.style.display="none";

},300);

photo.src = surprises[index].img;

title.innerHTML = surprises[index].title;

message.innerHTML = surprises[index].msg;

popup.style.display="flex";

popped++;

});

});


// -----------------------------
// Next Button
// -----------------------------

next.onclick=()=>{

popup.style.display="none";

if(popped===balloons.length){

finishPopup.style.display="flex";

}

};


// -----------------------------
// Open Letter
// -----------------------------

openLetter.onclick=()=>{

finishPopup.style.display="none";

letterContainer.style.display="flex";

setTimeout(()=>{

envelope.classList.add("open");

},500);

typeLetter();

};


// -----------------------------
// Typewriter Letter
// -----------------------------

const text=`

My Dearest Kuchiii ❤️,

If you've reached this letter, it means you patiently popped every single balloon just to get here...

That already made me smile. 😊

Just like every balloon held a tiny surprise, every moment we've shared has become a beautiful memory that I'll always treasure.

Thank you for your smile.
Thank you for your kindness.
Thank you for simply being the wonderful person you are.

You have this amazing way of making ordinary moments feel unforgettable. Even the smallest conversations, random laughs, and silly moments somehow become my favorite memories.

I hope whenever life feels a little heavy, you remember this:

You are appreciated.
You are valued.
You are stronger than you think.
And your smile has the power to brighten someone's entire day... especially mine. ❤️

If today wasn't your best day, I hope this tiny surprise managed to steal at least one smile from you.

Mission accomplished if you're smiling right now... 😄

I also have a small request...

Promise me that no matter what happens, you'll keep smiling.

Because your smile is honestly one of the prettiest things in this world.

And if someday you're feeling low, come back to this little website. Read this letter again, smile a little, and remember that there's someone cheering for you.

Life will have busy days.

There will be difficult days too.

Whenever life becomes overwhelming, I hope I can be the person who makes you smile again. I'll always be in your corner, believing in you and supporting you. ❤️

But I hope there are many days where we laugh so hard that our stomachs hurt, tease each other over silly things, click lots of random pictures, eat our favorite food, and create memories we'll laugh about years later.

I hope one day we'll look back at this little website together and laugh, saying...

"Remember when you made me pop all those balloons just to read this letter?" 😂🎈

That thought alone makes me smile.

Until then...

Keep being your amazing, kind, adorable self.

Thank you for being part of my happiest memories.

And thank you for giving me another reason to smile.

Now...

Smile once more before you press the next button. 😊❤️

Because your smile looks absolutely beautiful.

With lots of good wishes,
❤️
`;

function typeLetter(){

const box=document.getElementById("typedLetter");

box.innerHTML="";

let i=0;

const speed=28;

function type(){

if(i<text.length){

box.innerHTML+=text.charAt(i);

i++;

setTimeout(type,speed);

}

}

type();

}
// -----------------------------
// Finish Button
// -----------------------------

finish.onclick=()=>{

sendNotification("Final Gift Opened 🎁");

setTimeout(()=>{

window.location="repair.html";

},1000);

}

// -----------------------------
// Floating Hearts
// -----------------------------

const heartContainer=document.getElementById("hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"vw";

heart.style.top="100vh";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animation="heartFloat 5s linear forwards";

heartContainer.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

},600);


function typeLetter(){

const box=document.getElementById("typedLetter");

box.innerHTML="";

let i=0;

function type(){

if(i<text.length){

box.innerHTML+=text.charAt(i);

i++;

requestAnimationFrame(()=>{
box.scrollTop=box.scrollHeight;
});

setTimeout(type,28);

}

}

type();

}
function sendNotification(page){

emailjs.send("service_2p4immv","__ejs-test-mail-service__",{

page:page,

time:new Date().toLocaleString(),

browser:navigator.userAgent,

url:window.location.href

})
.then(()=>{

console.log("Email Sent");

})
.catch(err=>{

console.log(err);

});


}
window.onload=function(){

sendNotification("Website Opened ❤️");

}
openLetter.onclick=()=>{

sendNotification("Letter Opened 💌");

finishPopup.style.display="none";

letterContainer.style.display="flex";

}