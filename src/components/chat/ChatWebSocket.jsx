// import { SOCKET_URL } from "./settings";
import { apis } from "../../assets/apis";

class WebSocketService {
  static instance = null;

  static getInstance() {
    if (!WebSocketService.instance) {
      WebSocketService.instance = new WebSocketService();
    }
    return WebSocketService.instance;
  }

  constructor() {
    this.socketRef = null;
  }

  connect(chatId, setChats) {
    console.log(
      "🚀 ~ file: chatWebSocket.jsx:20 ~ WebSocketService ~ connect ~ chatId:",
      chatId
    );
    // const path = `${apis["chat"]["chat"]}${chatUrl}/`;

    const path = `${apis["chat"]["chat"]}${chatId}/`;
    this.socketRef = new WebSocket(path, [], {
      withCredentials: true,
    });
    this.socketRef.onopen = () => {
      console.log("WebSocket open");
    };
    this.socketRef.onmessage = (e) => {
      this.socketNewMessage(e.data, setChats);
    };
    this.socketRef.onerror = (e) => {
      console.log("websocket error", e);
    };
    this.socketRef.onclose = () => {
      console.log("WebSocket closed let's reopen");
      this.connect(chatId, setChats);
    };
  }

  disconnect() {
    this.socketRef.close();
  }

  socketNewMessage(data, setChats) {
    const parsedData = JSON.parse(data);
    const command = parsedData.command;
    if (command === "messages") {
      console.log(
        "🚀 ~ file: chatWebSocket.jsx:47 ~ WebSocketService ~ socketNewMessage ~ data:",
        parsedData
      );

      setChats((prev) => {
        if (prev.find((chat) => chat.messageId === parsedData.message.id))
          return prev;
        return [
          {
            text: parsedData.message.content,
            id: parsedData.message.author,
            messageId: parsedData.message.id,
          },
          ...prev,
        ];
      });
    }
    if (command === "new_message") {
      console.log(
        "🚀 ~ file: chatWebSocket.jsx:47 ~ WebSocketService ~ socketNewMessage ~ data:",
        parsedData
      );
      setChats((prev) => {
        if (prev.find((chat) => chat.messageId === parsedData.message.id))
          return prev;
        return [
          {
            text: parsedData.message.content,
            id: parsedData.message.author,
            messageId: parsedData.message.id,
          },
          ...prev,
        ];
      });
    }
  }

  fetchMessages(username, chatId) {
    this.sendMessage({
      command: "fetch_messages",
      username: username,
      chatId: chatId,
    });
  }

  newChatMessage(message) {
    console.log(
      "🚀 ~ file: chatWebSocket.jsx:69 ~ WebSocketService ~ newChatMessage ~ message:",
      message
    );
    this.sendMessage({
      command: "new_message",
      from: message.from,
      message: message.content,
      chatId: message.chatId,
    });
  }

  sendMessage(data) {
    try {
      this.socketRef.send(JSON.stringify({ ...data }));
    } catch (err) {
      console.log(err.message);
    }
  }

  state() {
    return this.socketRef.readyState;
  }
}

const WebSocketInstance = WebSocketService.getInstance();

export default WebSocketInstance;
