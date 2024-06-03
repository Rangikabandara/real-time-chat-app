# Chat app 💬 using websockets (Nodejs, Express & Socket.io)

Client Side:

index.html: Structure of the chat app UI.
style.css: Stylesheet for UI elements.
main.js: Handles client-side logic, communicates with the server using Socket.IO, sends and displays messages, and updates UI.

Server Side:

app.js: Creates an Express server, establishes WebSocket connection with Socket.IO, handles client connections, tracks clients, and broadcasts messages to all clients.

Communication Protocol:

WebSocket (via Socket.IO) enables real-time bidirectional communication between clients and server.

User Interaction:

Users enter a username, send messages, and receive messages from others. The UI updates dynamically to display messages and connected user count.

The frontend-ui is based on Flexbox, no external UI libraries are used

## To start setting up the project

Step 1: Clone the repo

```bash
git clone 
```

Step 2: cd into the cloned repo and run:

```bash
npm install
```

Step 3: Start the chat app (development mode)

```bash
npm run dev
```

Step 4: Start the chat app

```bash
npm start
```

## how to run the application locally

Step 1: cd real-time-chat-app

Step 2: npm start

Step 3:npm run dev

Step 4: Open browser and navigate to http://localhost:4000 to see real-time chat application in action
