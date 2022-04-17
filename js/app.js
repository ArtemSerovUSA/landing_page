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
*/

/*global document */
/*esling no-undef: "error"*/

// Creating list of sections
const sections = document.getElementsByTagName("section");
const mySections = [];
for (let section of sections) {
  mySections.push(section.getAttribute('data-nav'));
}

// Creating list of anchors based on the list of sections
const myAnchors = [];
for (let section of sections) {
  myAnchors.push(section.id);
}

// Building the nav
const ul = document.getElementById('navbar__list');
// Iterating over list of sections
for (let i = 0; i < mySections.length; i++) {
  // Creating li elements
  const li = document.createElement('li');
  li.classList.add(myAnchors[i]);
  li.innerHTML = `<a href ="#${myAnchors[i]}">${mySections[i]}</a>`;
  ul.appendChild(li);
}

/**
 * Description: makeActive() adds 'your-active-class' class for the section and li element inside nav bar based on view port position
*/
function makeActive() {
  for (const section of sections) {
    // Calling getBoundingClientRect() on section to get it's position relative to the viewport
    const box = section.getBoundingClientRect();
    // Establishing the rule for "active" section
    if (box.top <= 150 && box.bottom >= 150) {
      // Adding active class to current section and the corresponding Nav link.
      section.classList.add('your-active-class');
      const li = document.getElementsByClassName(section.id);
      li[0].classList.add('your-active-class');
    } else {
      // Removing active class to current section and the corresponding Nav link.
      section.classList.remove('your-active-class');
      const li = document.getElementsByClassName(section.id);
      li[0].classList.remove('your-active-class');
    }
  }
}

// Evaluating section position with each scroll
document.addEventListener("scroll", function() {
  makeActive();
});
