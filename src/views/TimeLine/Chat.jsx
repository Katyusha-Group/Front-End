import React from "react";
import Timeline from "./Timeline.jsx";
import AdminNavbar from "../../components/Navbars/AdminNavbar.jsx";
import styles from "../../assets/css/chat/Chat.module.css";
import Sidebar from "../Sidebar/Sidebar.jsx";
import Searchbar from "../Searchbar.jsx";
import { Card, Row } from "reactstrap";
import SendMessage from "../../components/Tweet/SendMessage.jsx";
const ChatPage = () => {
  const [chats, setChats] = React.useState([]);
  return (
    <Card className={styles.timeline}>
      <div className={styles.chat}>
        {chats.map((chat, index) => (
          <div  className={`${styles.chatBoxContainerRight}`} key={index}>
            <Card
              className={` ${styles.chatBox} ${styles.chatBoxRight}`}
            >
              {chat.text}
            </Card>
          </div>
        ))}
        <div className={`${styles.chatBoxContainerLeft}`}>
          <Card className={` ${styles.chatBox} ${styles.chatBoxLeft}`}>
            سلام
          </Card>
        </div>
      </div>
      <div className={styles.sendMessage}>
        <SendMessage
          setData={setChats}
          fetchData={(myInput, setValue) => {
            setValue((prev) => [{ text: myInput, id: Math.random() }, ...prev]);
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
