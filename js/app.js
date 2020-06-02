/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');
const main = document.querySelector('main');
const navBar = document.getElementById("navbar__list");
const header = document.querySelector(".page__header");
const scrollTop = document.querySelector(".scroll-top");
const fragment = document.createDocumentFragment();


/**
 * End Global Variables
 * Start Helper Functions
 *
*/
// function changeActive(){
//   let actEl = document.querySelector(".your-active-class");
//   let position = actEl.getBoundingClientRect();
//   console.log("top" +position.top);
//   console.log("bottom"+position.bottom);
//   if(position.top>=window.innerHeight || position.bottom<=0){
//     actEl.classList.remove("your-active-class");
//     console.log("vaya");
//     for (let i=0; i<sections.length; i++){
//       let el = sections[i];
//       let pos = el.getBoundingClientRect();
//       if(pos.top>=0 && position.bottom<=window.innerHeight){
//         el.classList.add("your-active-class");
//       }
//     console.log("New Active: "+ el.dataset.nav);
//     }
//   }
// }

// function changeActive(){
//   let actEl = document.querySelector(".your-active-class");
//   let position = actEl.getBoundingClientRect();
//
//   if(position.top>=0 && position.bottom<=window.innerHeight){
//     console.log("still in");
//   } else {
//     actEl.classList.remove("your-active-class");
//     console.log("not in");
//     for (let i=0; i<sections.length; i++){
//       let el = sections[i];
//       let pos = el.getBoundingClientRect();
//       if(pos.top>=0 && pos.bottom<=window.innerHeight){
//         el.classList.add("your-active-class");
//         console.log("New Active: "+ el.dataset.nav);
//       }
//     }
//   }
// }


/**
 * End Helper Functions
 * Begin Main Functions
 *
*/

// build the nav
for(let i=0; i<sections.length; i++){
  const newElement = document.createElement('li');

  newElement.innerText = sections[i].dataset.nav;
  newElement.href= sections[i].id;
  newElement.dataset.id = sections[i].id;

  fragment.appendChild(newElement);
}
navBar.appendChild(fragment);


// Add class 'active' to section when near top of viewport
function changeActive(entries){
  for(const entry of entries){
    let navEl = document.querySelector('[data-id="'+ entry.target.id+'"]');

    if(entry.isIntersecting == true){
      entry.target.classList.add('your-active-class');
      navEl.classList.add('your-active-class');
    } else {
      entry.target.classList.remove('your-active-class');
      navEl.classList.remove('your-active-class');
    }
  }
}

const observer = new IntersectionObserver(changeActive,{threshold:0.5});

for(const section of sections){
  observer.observe(section);
}


// Scroll to anchor ID using scrollTO event
navBar.addEventListener('click',function(evt){

  evt.preventDefault();
  console.log(evt.target.href);
  let selected = document.getElementById(evt.target.href);
  selected.scrollIntoView({behavior:"smooth"});
  // });
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Hide navBar if scroll is stopped
let scrolling;

window.addEventListener('scroll',function(event){ /*listen for scroll events*/

  // hide navBar if scrolling is stopped
  window.clearTimeout(scrolling); /*clear timeout during scroll*/

  header.classList.remove('hidden'); /*remove hidden class*/

  scrolling = setTimeout(function(){
    header.classList.add('hidden');
  }, 1000);

  // show scroll-to-top arrow when scroll is past vh
  if (window.scrollY > window.innerHeight){
    scrollTop.classList.remove('hidden');
  } else{
    scrollTop.classList.add('hidden');
  }

}, false) /*listen in capture state, not in bubbling*/

// scroll to top when button is clicked
scrollTop.addEventListener('click', function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:'smooth'
  });
});

// make sections collapsible
main.addEventListener('click',function(event){
  let clicked = event.target.closest('section');
  console.log(clicked);
  let contents = clicked.getElementsByTagName('p');
  for (content of contents){
    content.classList.toggle('hidden');
  }
  clicked.classList.toggle('collapsed');
}, false);
