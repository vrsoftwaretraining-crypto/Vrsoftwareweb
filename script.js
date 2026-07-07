
/* ==========================
   Typing Animation
========================== */

const typingText = "Building Future with Technology";

const typingElement = document.getElementById("typing");

let index = 0;

function typeText(){

    if(index < typingText.length){

        typingElement.textContent += typingText.charAt(index);

        index++;

        setTimeout(typeText,80);

    }

}

typeText();

/* ==========================
   Mobile Menu
========================== */

const menuToggle = document.getElementById("menu-toggle");

const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click",()=>{

    navLinks.classList.toggle("active");

});

/* ==========================
   Close Menu on Link Click
========================== */

document.querySelectorAll(".nav-links a").forEach(link=>{

    link.addEventListener("click",()=>{

        navLinks.classList.remove("active");

    });

});

/* ==========================
   Buttons
========================== */

document.querySelector(".primary").addEventListener("click",()=>{

    document.getElementById("projects").scrollIntoView({

        behavior:"smooth"

    });

});

document.querySelector(".secondary").addEventListener("click",()=>{

    document.getElementById("contact").scrollIntoView({

        behavior:"smooth"

    });

});

/* ==========================
   Console Message
========================== */

console.log("Welcome to VR Software 🚀");
/* ==========================
   Statistics Counter
========================== */

function animateCounter(id,target){

let count=0;

const element=document.getElementById(id);

const speed=target/60;

const timer=setInterval(()=>{

count+=speed;

if(count>=target){

count=target;

clearInterval(timer);

}

element.textContent=Math.floor(count)+"+";

},25);

}

animateCounter("apps",10);
animateCounter("websites",25);
animateCounter("clients",15);
animateCounter("experience",2);
/* ==========================
   Dark / Light Mode
========================== */

const themeButton=document.getElementById("theme-toggle");

themeButton.addEventListener("click",()=>{

document.body.classList.toggle("light");

if(document.body.classList.contains("light")){

themeButton.textContent="☀️";

}else{

themeButton.textContent="🌙";

}

});
/* ==========================
   Scroll To Top
========================== */

const topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 ||
        document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});
/* ==========================
   Scroll Reveal Animation
========================== */

function revealSections(){

const reveals=document.querySelectorAll(".reveal");

reveals.forEach(section=>{

const windowHeight=window.innerHeight;

const revealTop=section.getBoundingClientRect().top;

const revealPoint=120;

if(revealTop<windowHeight-revealPoint){

section.classList.add("active");

}

});

}

window.addEventListener("scroll",revealSections);

revealSections();
/* ==========================
   Contact Form
========================== */

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});
/* ==========================
   Loading Screen
========================== */

window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},600);

});

/* ==========================
   Welcome Popup
========================== 

setTimeout(()=>{

alert("🚀 Welcome to VR Software!");

},1000);
*/

/* ==========================
   Testimonial Slider
========================== */

const slides = document.querySelectorAll(".testimonial-slide");

let currentSlide = 0;

function showSlide(index){

slides.forEach(slide=>slide.classList.remove("active"));

slides[index].classList.add("active");

}

setInterval(()=>{

currentSlide++;

if(currentSlide>=slides.length){

currentSlide=0;

}

showSlide(currentSlide);

},4000);
if ("serviceWorker" in navigator) {

window.addEventListener("load", () => {

navigator.serviceWorker.register("sw.js")

.then(() => console.log("Service Worker Registered"))

.catch(err => console.log(err));

});

}