console.error('yo');

const messageArea = document.getElementById('messageArea');
const textbox = document.getElementById('textbox');
const sendbutton = document.getElementById('send-button');

button.addEventListener('click', () => {
  const newMessage = document.createElement('li');
  newMessage.innerHTML = textbox.nodeValue;
  messages.appendChild(newMessage);
  textbox.value = '';
});

export default { messageArea };
