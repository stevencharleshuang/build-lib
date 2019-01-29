let g = G$('John', 'Doe');
g.greet().greet(true);
g.greet().setLang('es').greet(true);

console.log({g});