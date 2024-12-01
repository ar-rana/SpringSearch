import React, { useState } from "react";
import styles from "./chatbot.module.css";
import chatbot from "../../assets/chatbot.png";

const ChatBubble = (props) => {
  return (
    <div
      className={`${styles.bubble} ${
        props.isReply ? styles.reply : styles.question
      }`}
    >
      <span>{props.text}</span>
    </div>
  );
};

const ChatBot = () => {
  const [isActive, setIsActive] = useState(false);
  const [chat, setChat] = useState([]);

  const toggleChatBox = () => {
    setIsActive(!isActive);
  };

  const askQuestion = (e) => {
    e.preventDefault();
    return "this is reply";
  };

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ""}`}>
      <div className={styles.buttonContainer}>
        <img onClick={toggleChatBox} src={chatbot} />
      </div>
      <div className={`${styles.chatbox} ${isActive ? styles.active : ""}`}>
        <div className={styles.chatArea}>
          <div className={styles.heading}>
            <h3>Ask me JAVA!!</h3>
          </div>
          <div className={styles.messageList}>
            <div>
              <ChatBubble
                text={
                  "Tell me more about Java and more and more and more and more...."
                }
                isReply={false}
              />
              <ChatBubble
                text={"What is Spring Boot? Why are you asking me? "}
                isReply={true}
              />
            </div>
          </div>
        </div>
        <div className={styles.text}>
          <form onSubmit={(e) => askQuestion(e)}>
            <input
              className={styles.inptext}
              type="text"
              placeholder="ask java"
            />
            <button className={styles.inpbtn} type="submit">
              Ask!!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
