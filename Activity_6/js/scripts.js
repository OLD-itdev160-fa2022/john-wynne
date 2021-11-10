var messages = [];

var messageType = {
  out: "out-message",
  in: "in-message",
  unknown: "unknown-message",
};

function Message(type, user, message) {
  this.type = type;
  this.user = user;
  this.message = message;
}

function createMessageElement(message) {
  var nameEl = document.createElement("span");
  nameEl.className = "user-name";
  nameEl.textContent = message.user;

  var messageEl = document.createTextNode(": " + message.message);

  var messageContainerEl = document.createElement("div");

  messageContainerEl.appendChild(nameEl);
  messageContainerEl.appendChild(messageEl);

  messageContainerEl.className = message.type;

  return messageContainerEl;
}

function addMessageHandler(e) {
  var user, type;
  var messageInput = document.getElementById("message-input");
  var messageContainerEl = document.getElementById("message-container");

  switch (e.target.id) {
    case "send-button":
      user = "John";
      type = messageType.out;
      break;
    case "reply-button":
      user = "Horace Grant";
      type = messageType.in;
      break;
    default:
      user = "unknown";
      type = messageType.unknown;
      break;
  }

  if (messageInput.value !== "") {
    var message = new Message(type, user, messageInput.value);
    messages.push(message);

    var el = createMessageElement(message);

    messageContainerEl.appendChild(el);

    messageInput.value = "";
  }
}

var init = function () {
  document.getElementById("send-button").onclick = addMessageHandler;
  document.getElementById("reply-button").onclick = addMessageHandler;
};

init();
