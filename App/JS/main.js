const btnHamburger = document.querySelector('#btnHamburger');
const body = document.querySelector('body');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeElements = document.querySelectorAll('.has-fade');
const about = document.querySelector('#abt');
const experience = document.querySelector('#exp');
const skills = document.querySelector('#skl');
const portfolio = document.querySelector('#port');

btnHamburger.addEventListener('click', function(){
  console.log('click hamburger');

  if(header.classList.contains('open')){ // Close Hamburger Menu

    body.classList.remove('noScroll');
    header.classList.remove('open');    
    fadeElements.forEach(function(Element){
      Element.classList.remove('fade-in');
      Element.classList.add('fade-out');
    });

  } else { // Open Hamburger Menu
    body.classList.add('noScroll');
    header.classList.add('open');
    fadeElements.forEach(function(Element){
      Element.classList.remove('fade-out');
      Element.classList.add('fade-in');
    });
  }



}); 

about.addEventListener('click', function(){
  console.log('click link');
  if(header.classList.contains('open')){ // Close Hamburger Menu

    body.classList.remove('noScroll');
    header.classList.remove('open');    
    fadeElements.forEach(function(Element){
      Element.classList.remove('fade-in');
      Element.classList.add('fade-out');
    });
  } 
})
experience.addEventListener('click', function(){
  console.log('click link');
  if(header.classList.contains('open')){ // Close Hamburger Menu

    body.classList.remove('noScroll');
    header.classList.remove('open');    
    fadeElements.forEach(function(Element){
      Element.classList.remove('fade-in');
      Element.classList.add('fade-out');
    });
  } 
})
skills.addEventListener('click', function(){
  console.log('click link');
  if(header.classList.contains('open')){ // Close Hamburger Menu

    body.classList.remove('noScroll');
    header.classList.remove('open');    
    fadeElements.forEach(function(Element){
      Element.classList.remove('fade-in');
      Element.classList.add('fade-out');
    });
  } 
})
portfolio.addEventListener('click', function(){
  console.log('click link');
  if(header.classList.contains('open')){ // Close Hamburger Menu

    body.classList.remove('noScroll');
    header.classList.remove('open');    
    fadeElements.forEach(function(Element){
      Element.classList.remove('fade-in');
      Element.classList.add('fade-out');
    });
  } 
})
