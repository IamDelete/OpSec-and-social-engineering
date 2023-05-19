const input = document.querySelector('.terminalInput');
const button = document.getElementById('testButton');

button.addEventListener('click', (event) => {

  if (input.value === "") {
    console.log('works');
  }
  else {
    console.log('oops');
  }
});

