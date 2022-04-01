function init(){
  // Variables
  const masajes = document.querySelector('section#masajes');
  const trayectoria = document.querySelector('section#trayectoria');
  const turnos = document.querySelector('section#turnos');
  const navLinks = document.querySelectorAll('.main-nav a');

  trayectoria.classList.add('hidden');
  turnos.classList.add('hidden');

  // Clear links after click
  function clearLinks(){
    navLinks.forEach(function(element){
      element.classList.remove('active');
    })
  }
  
  // Hide Sections
  function hideSections(target){
    masajes.classList.add('hidden');
    trayectoria.classList.add('hidden');
    turnos.classList.add('hidden');
    const show = target.classList.value;
    if (show == 'masajes') {
      trayectoria.classList.add('hidden');
      turnos.classList.add('hidden');
      masajes.classList.remove('hidden');
    } else if (show == 'trayectoria') {
      turnos.classList.add('hidden');
      masajes.classList.add('hidden');
      trayectoria.classList.remove('hidden');
    } else {
      trayectoria.classList.add('hidden');
      masajes.classList.add('hidden');
      turnos.classList.remove('hidden');
    }
  }
  
  // Add listeners to the buttons and change the class
  function startListeners(){
    navLinks.forEach(function(element){
      element.addEventListener('click', function(target){
        clearLinks();
        hideSections(target.target);
        target.target.classList.add('active');
      })
    })
  }
  
  startListeners();
  //showHideSections();  
}


// Start Listeners
// function showHideSections(){
//   document.querySelector('.main-nav a.masajes').addEventListener('click', function(target){
//     const navLinks = document.querySelectorAll('.main-nav a');
//     console.log(typeof navLinks);
//     navLinks.forEach(function(element){
//       console.log(element);
//       element.classList.remove('active');
//     })
//     console.log(target);
//     // document.querySelector(this).classList.add('active');
//   })
// }

document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
    init();
  }
}