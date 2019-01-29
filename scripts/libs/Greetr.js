(function (global, $) {

  // 'new' an object
  let Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  // Hidden within the scope of the IIFE and never directly accessible
  let supportedLangs = ['en', 'es'];

  // Informal Greeting
  let greetings = {
    en: 'Hello',
    es: 'Hola'
  };

  // Formal Greeting
  let formalGreetings = {
    en: 'Greetings', 
    es: 'Saludos'
  };

  // Log Messages
  let logMessages = {
    en: 'Logged in',
    es: 'Inicio session'
  };

  // Greetr Prototype
  Greetr.prototype = {
    // Returns the combined first and last names
    fullName: function() {
      return `${this.firstName} ${this.lastName}`;
    },

    // Checks if argument language is supported
    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },

    // Returns an informal greeting selected language
    greeting: function() {
      return `${greetings[this.language]} ${this.firstName}!`;
    },

    // Returns a formal greeting with selected language
    formalGreeting: function() {
      return `${formalGreetings[this.language]}, ${this.fullName()}.`;
    },

    // Returns a greeting with arguable formality and language
    greet: function(formal) {
      let msg;

      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      return this;
    },

    // Returns a log to the console if console is available
    log: function() {
      if (console) {
        console.log(`${logMessages[this.language]}: ${this.fullName()}`);
      }

      return this;
    },

    // Sets the language and checks if it's supported
    setLang: function(lang) {
      this.language = lang;
      this.validate();

      return this;
    },

    // Returns a greeting that can be attached to a selected DOM Element
    HTMLGreeting: function(selector, formal) {
      if (!$) {
        throw 'jQuery not loaded';
      }

      if (selector) {
        throw 'Missing jQuery selector';
      }

      let msg;
      
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);

      return this;
    }
  };

  // Creates the actual object, allows creation of new objects without use of 'new' keyword
  Greetr.init = function(firstName, lastName, language) {
    let self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';

    self.validate();
  };

  Greetr.init.prototype = Greetr.prototype;

  // Attaches Greetr to global object and provides an alias 'G$'
  global.Greetr = global.G$ = Greetr;

}(window, jQuery));

