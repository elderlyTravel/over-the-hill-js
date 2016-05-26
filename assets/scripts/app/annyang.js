'use strict';

if (annyang) {

    const info = {};

    // Set annyang in debug mode
    // annyang.debug();

      let local_dest = function(tag) {
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
        info.flyingTo = tag;
        $('#flightDestination').val(tag);
        $('h1').text("Let's go to " + info.flyingTo + '! Where are you flying from?');
        $('.question').fadeIn('slow').text("Say: 'I'm leaving from...'");
      });

    };

    let local_start = function(tag) {
      $('.question').fadeIn('slow').text("You're leaving from " + tag + ", right?");
      $('.btn-ask').fadeIn('slow');

      $('#location-cancel').on('click', function() {
        $('.btn-ask').fadeOut('slow');
        $('.question').text("I'm sorry about that. Please try again!");
        $('.question').delay(2000).fadeOut('slow');
        $('.question').fadeIn('slow').text("Say: 'I'm leaving from...'");
      });

      $('#location-yes').on('click', function() {
        $('.btn-ask').fadeOut('slow');
        $('.question').fadeOut('slow');
        info.flyingFrom = tag;
        $('#flightOrigin').val(tag);
        $('h1').text('Great! When do you want to leave?');
        $('.question').fadeIn('slow').text("Say: 'I'm leaving on...'");
      });
    };

    let date_leave = function(tag) {
      $('.question').fadeIn('slow').text("You're leaving on " + tag + ", correctomundo?");
      $('.btn-ask').fadeIn('slow');

      $('#location-cancel').on('click', function() {
        $('.btn-ask').fadeOut('slow');
        $('.question').text("I'm sorry about that. Please try again!");
        $('.question').delay(2000).fadeOut('slow');
        $('.question').fadeIn('slow').text("Say: 'I'm leaving on...'");
      });

      $('#location-yes').on('click', function() {
        $('.btn-ask').fadeOut('slow');
        $('.question').fadeOut('slow');
        info.dateLeave = tag;
        $('h1').text('Great! Is this a roundtrip flight?');
        $('.btn-ask').fadeIn('slow');

        $(this).on('click', function() {
          $('.btn-ask').fadeOut('slow');
          $('.question').fadeOut('slow');
          $('h1').text('Super! When do you want to come back?');
          $('.question').fadeIn('slow').text("Say: 'I'm coming back on...'");
        });
      });
    };

    let date_return = function(tag) {

      $('.question').fadeIn('slow').text("You're coming back on " + tag + ", ja?");
      $('.btn-ask').fadeIn('slow');

      $('#location-cancel').on('click', function() {
        $('.btn-ask').fadeOut('slow');
        $('.question').text("I'm sorry about that. Please try again!");
        $('.question').delay(2000).fadeOut('slow');
        $('.question').fadeIn('slow').text("Say: 'I'm coming back on...'");
      });

      $('#location-yes').on('click', function() {
        $('.btn-ask').fadeOut('slow');
        $('.question').fadeOut('slow');
        info.dateReturn = tag;
        $('h1').text("We're almost done!");
        $('.question').text("You're going to " + info.flyingTo + " from " + info.flyingFrom + " between " +
          info.dateLeave + " and " + info.dateReturn + ".");
        });
    };

    // Let's define a command.
    var commands = {
        // annyang will capture anything after a splat (*) and pass it to the function.
        'show me flights to *tag': local_dest,
        'I want to go to *tag': local_dest,
        'flights to *tag': local_dest,
        "I'm going on a trip to *tag": local_dest,
        "I'm leaving from *tag": local_start,
        "I'm leaving on *tag": date_leave,
        "I'm coming back on *tag": date_return
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
