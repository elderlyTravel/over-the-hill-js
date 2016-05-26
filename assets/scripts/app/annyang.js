'use strict';

if (annyang) {

    // Set annyang in debug mode
    // annyang.debug();

      let local = function(tag) {
      $('header')
      .append('<p class="question">You want to go to <span>' + tag + '</span> is that right?</p><button id="location-yes" class="btn btn-primary btn-lg btn-ask">Yes</button><button id="location-cancel" class="btn btn-danger btn-lg btn-ask">No</button>');

      $('#location-cancel').on('click', function() {
        $('.btn-ask').fadeOut('slow');
        $('.question').text("I'm sorry about that. Please try again!");
        $('.question').delay(2000).fadeOut('slow');
      });

      $('#location-yes').on('click', function() {
        $('.btn-ask').fadeOut('slow');
        $('.question').fadeOut('slow');
        $('h1').text("Let's go to " + tag + '! When do you want to go?');
      });

    };

    // Let's define a command.
    var commands = {
        // annyang will capture anything after a splat (*) and pass it to the function.
        'show me flights to *tag': local,
        'I want to go to *tag': local,
        'flights to *tag': local,
        "I'm going on a trip to *tag": local
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
