// ==============================
// ENGLISH FOR IT INTERACTIONS
// ==============================



/* Reveal animation on scroll */

const hiddenElements = document.querySelectorAll(
'.content-section, .term-card, .card, .step, .students li'
);


const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add('show');

}

});

},

{
threshold:0.15
}

);


hiddenElements.forEach(el=>{

el.classList.add('hidden');

observer.observe(el);

});



/* Hero typing effect */

const title =
document.querySelector(".hero h1");

const originalText =
title.innerText;

title.innerText="";

let i=0;

function typeWriter(){

if(i < originalText.length){

title.textContent +=
originalText.charAt(i);

i++;

setTimeout(typeWriter,70);

}

}

typeWriter();




/* Active menu highlight while scrolling */

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll("nav a");


window.addEventListener(
"scroll",

()=>{

let current="";

sections.forEach(section=>{

const top=
section.offsetTop-150;

if(pageYOffset >= top){

current=
section.getAttribute("id");

}

});


navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")==="#"+current
){

link.classList.add("active");

}

});

}

);




/* Small hover glow effect */

const cards =
document.querySelectorAll(
'.term-card, .card'
);

cards.forEach(card=>{

card.addEventListener(
'mousemove',

()=>{

card.style.transform =
'translateY(-6px) scale(1.02)';

});

card.addEventListener(
'mouseleave',

()=>{

card.style.transform =
'translateY(0) scale(1)';

});

});