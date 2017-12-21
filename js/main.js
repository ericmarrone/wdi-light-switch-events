document.addEventListener('DOMContentLoaded', function() {
  var body = document.body
  var statusHeader = document.querySelector('.status');
  var lightSwitch = document.querySelector('.switch');

  // statusHeader.innerText = "Ready";

  lightSwitch.addEventListener('click', function(e) {
    if (e.target.classList.contains('on')) {
      e.target.classList.remove('on');
      e.target.classList.add('off');
      body.classList.remove('light');
      body.classList.add('dark');
      statusHeader.innerText = "Hey, who turned off the lights?";
    }else if (e.target.classList.contains('off')) {
      e.target.classList.remove('off');
      e.target.classList.add('on');
      body.classList.remove('dark');
      body.classList.add('light');
      statusHeader.innerText = "It's so bright in here!";
    }
  })
});
