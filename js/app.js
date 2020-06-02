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
const navBar = document.getElementById("navbar__list");
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

  fragment.appendChild(newElement);
}
navBar.appendChild(fragment);


// Add class 'active' to section when near top of viewport


// for (int i =0; i<=sections.length, i++){
//   observer.observe(sections[i]);
// }
function changeActive(entries){
  for(const entry of entries){
    if(entry.isIntersecting == true){
      entry.target.classList.add('your-active-class');
    } else {
      entry.target.classList.remove('your-active-class');
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

// Build menu

// Scroll to section on link click

// Set sections as active
