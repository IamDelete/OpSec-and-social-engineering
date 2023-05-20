const inputs = Array.from(document.querySelectorAll('.terminalInput'));
const button = document.getElementById('testButton');

button.addEventListener('click', (event) => {

  if (inputs[0].value === 'ngrok service start') {
    inputs[0].classList.add('corect');
  } else {
    inputs[0].classList.add('gresit');
  }
  if (inputs[1].value === 'target:@i_am.delete -followers') {
    inputs[1].classList.add('corect');
  } else {
    inputs[1].classList.add('gresit');
  }
  if (inputs[2].value === 'target:@i_am.delete -fwingsemail') {
    inputs[2].classList.add('corect');
  } else {
    inputs[2].classList.add('gresit');
  }
  if (inputs[3].value === 'target:@i_am,delete -info') {
    inputs[3].classList.add('corect');
  } else {
    inputs[3].classList.add('gresit');
  }
});

