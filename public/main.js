const socket = io();

const usernameInput = document.getElementById('username-input');
const loginButton = document.getElementById('login-button');
const main = document.getElementById('main');
const usernameDisplay = document.getElementById('username-display');
const messageContainer = document.getElementById('message-container');
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const clientsTotal = document.getElementById('client-total');

loginButton.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username !== '') {
    socket.emit('login', username);
    document.querySelector('.login-container').style.display = 'none'; // Hide login container after successful login
    main.style.display = 'block'; // Show main chat interface
    usernameDisplay.textContent = username; // Display username in UI
  }
});

messageForm.addEventListener('submit', (e) => {
  e.preventDefault();
  sendMessage();
});

socket.on('clients-total', (data) => {
  clientsTotal.innerText = `Total Clients: ${data}`;
});

socket.on('chat-message', (data) => {
  addMessageToUI(false, data);
});

function sendMessage() {
  if (messageInput.value.trim() === '') return;
  
  const data = {
    name: usernameDisplay.textContent,
    message: messageInput.value.trim(),
    dateTime: new Date()
  };
  
  socket.emit('message', data);
  addMessageToUI(true, data);
  messageInput.value = '';
}

function addMessageToUI(isOwnMessage, data) {
  const li = document.createElement('li');
  li.classList.add(isOwnMessage ? 'message-right' : 'message-left');
  const span = document.createElement('span');
  span.textContent = `${data.name} ● ${moment(data.dateTime).fromNow()}`;
  const p = document.createElement('p');
  p.classList.add('message');
  p.textContent = data.message;
  p.appendChild(span);
  li.appendChild(p);
  messageContainer.appendChild(li);
  scrollToBottom();
}

function scrollToBottom() {
  messageContainer.scrollTo(0, messageContainer.scrollHeight);
}
