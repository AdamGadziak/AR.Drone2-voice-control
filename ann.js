if (annyang) {
  var commands = {
    'start': function start()
  {
        $.post('/start');
        console.log('start');
  },
    'stop': function start()
  {
        $.post('/stop');
        console.log('stop');
  },
    'flip left': function start()
  {
        $.post('/flipl');
        console.log('flip');
  },
    'flip right': function start()
  {
        $.post('/flipr');
        console.log('flip');
  },
    'land': function start()
  {
        $.post('/land');
        console.log('land');
  },

  };

  // Add our commands to annyang
  annyang.addCommands(commands);
  // Turn on debugging for the console
  annyang.debug();
  // Start listening.
  annyang.start();
};


  
  
