$(document).ready(() => {
  console.log('JQ up and ready!');
  let g = G$('John', 'Doe');
  g.greet().greet(true);
  g.greet().setLang('es').greet(true);

  console.log({g});
});