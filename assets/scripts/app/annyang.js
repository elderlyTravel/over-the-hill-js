  if (annyang) {

      // Set annyang in debug mode
      annyang.debug();

      // Let's define a command.
      var commands = {
          'hello': function() { console.log('Hello world!'); }
      };

      // Add our commands to annyang
      annyang.addCommands(commands);

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
