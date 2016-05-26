  'use strict';

  if (annyang) {

      // Set annyang in debug mode
      annyang.debug();

      let print = function(tag) {
        console.log('You want to go to ' + tag + '?');
        $('header')
        .append('<p class="question">You want to go to <span>' + tag + '</span> is that right?</p><button id="location" class="btn btn-primary btn-lg">Yes</button><button id="cancel" class="btn btn-danger btn-lg">No</button>');
      };

      // Let's define a command.
      var commands = {
          'hello': function() { console.log('Hello world!'); },

          // annyang will capture anything after a splat (*) and pass it to the function.
          'show me flights to *tag': print
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

      // annyang.addCallback('resultMatch', function(userSaid, commandText, phrases) {
      //   console.log(userSaid); // sample output: 'hello'
      //   console.log(commandText); // sample output: 'hello (there)'
      //   console.log(phrases); // sample output: ['hello', 'halo', 'yellow', 'polo', 'hello kitty']
      // });

      // Tell KITT to communicate with annyang
      SpeechKITT.annyang();

      // Define KITT's style
      SpeechKITT.setStylesheet('assets/dist/themes/flat-amethyst.css');

      // Add instructional texts
      SpeechKITT.setInstructionsText('Try…');
      SpeechKITT.setSampleCommands(['Show me flights to Miami', 'I want to go to New York City']);

      // If user clicks start button, remember his choice for 1 minute
      SpeechKITT.rememberStatus(1);

      // Render KITT's interface
      SpeechKITT.vroom();
  }
