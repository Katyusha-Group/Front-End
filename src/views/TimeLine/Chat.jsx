import React, { useEffect } from "react";
import Timeline from "./Timeline.jsx";
import AdminNavbar from "../../components/Navbars/AdminNavbar.jsx";
import styles from "../../assets/css/chat/Chat.module.css";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Searchbar from "../Searchbar.jsx";
import { Card, Row } from "reactstrap";
import SendMessage from "../../components/Tweet/SendMessage.jsx";
import WebSocketInstance from "../../components/chat/ChatWebSocket.jsx";
import { useParams } from "react-router-dom";
import { useInfo } from "../../contexts/InfoContext.jsx";
import { getChat } from "../../Functions/Chat/getChat.jsx";
const ChatPage = (props) => {
  const { id } = useParams();
  const { info, changeInfo } = useInfo();
  const [chats, setChats] = React.useState([]);
  const [message, setMessage] = React.useState("");
  const [loading, setLoading] = React.useState(true);
  function waitForSocketConnection(callback) {
    const component = this;
    setTimeout(function () {
      if (WebSocketInstance.state() === 1) {
        console.log("Connection is made");
        return;
      } else {
        console.log("wait for connection...");
        waitForSocketConnection(callback);
      }
    }, 100);
  }

  useEffect(() => {
    getChat( setChats,id,setLoading)
    waitForSocketConnection(() => {
      WebSocketInstance.fetchMessages(
        // props.username,
        // props.match.params.chatID
        id,
        4
      );
    });
    WebSocketInstance.connect(4,setChats);
    // WebSocketInstance.connect(props.match.params.chatID);
  }, []);

  const sendMessageHandler = (e) => {
    e.preventDefault();
    const messageObject = {
      from: info.userName,
      content: message,
      chatId: props.match.params.chatID,
    };
    WebSocketInstance.newChatMessage(messageObject);
    setState({ message: "" });
  };


  return (
    <Card className={styles.timeline}>
      <div className={styles.chat}>
        {chats.map((chat, index) => (
          <div className={` ${chat.id === info.userName? styles.chatBoxContainerRight:styles.chatBoxContainerLeft}`} key={index}>
            <Card className={` ${styles.chatBox} ${chat.id === info.userName? styles.chatBoxRight:styles.chatBoxLeft}`}>
              {chat.text}
            </Card>
          </div>
        ))}
        {/* <div className={`${styles.chatBoxContainerLeft}`}>
          <Card className={` ${styles.chatBox} ${styles.chatBoxLeft}`}>
            سلام
          </Card>
        </div> */}
      </div>
      <div className={styles.sendMessage}>
        <SendMessage
          setData={{setValue:setChats, WebSocketInstance: WebSocketInstance}}
          fetchData={(myInput, setValue) => {
            console.log("myInput", myInput)
            const messageObject = {
              from: info.userName,
              content: myInput,
              chatId: 4,
            };
            console.log("🚀 ~ file: Chat.jsx:80 ~ ChatPage ~ messageObject:", messageObject)
            setValue.WebSocketInstance.newChatMessage(messageObject);
            // setValue.setValue((prev) => [{ text: myInput, id: Math.random() }, ...prev]);
            // setValue.setValue((prev) => [
            //   { text: myInput, id: parsedData.message.author, messageId: parsedData.message.id },
            //   ...prev,
            // ]);
          }}
        />
      </div>
    </Card>
  );
};

const Chat = () => {
  return (
    <div className={styles.bg}>
      <Sidebar />
      <div className={styles.items}>
        <ChatPage />
      </div>
      <Searchbar />
    </div>
  );
};

export default Chat;
