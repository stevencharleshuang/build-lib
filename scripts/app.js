$(document).ready(() => {
  // Testing the Library
  // console.log('JQ up and ready!');
  // let g = G$('John', 'Doe');
  // g.greet().greet(true);
  // g.greet().setLang('es').greet(true);

  // console.log({g});

  // Using the Library
  $('#login').on('click', () => {
    let loginGrtr = G$('John', 'Doe');
    $('#logindiv').hide();
    loginGrtr
      .setLang($('#lang').val())
      .HTMLGreeting('#greeting', true)
      .log();
  });
});