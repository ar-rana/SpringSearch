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
  const [chats, setChat] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const toggleChatBox = () => {
    setIsActive(!isActive);
  };

  const askQuestion = async (e) => {
    e.preventDefault();
    if (question === "") return;
    const body = {
      text: question,
      isReply: false,
    };

    setLoading(true);
    setChat((prevChats) => [...prevChats, body]);

    try {
      const res = await fetch("http://localhost:8000/answerJava", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(question),
      });
      console.log("res: ", res);
      const data = await res.text();
      console.log("data: ", data);
      const answer = {
        text: data,
        isReply: true,
      };

      console.log(answer);

      setChat((prevChat) => [...prevChat, answer]);
    } catch (e) {
      try {
        window.location.href =
          "http://localhost:8000/oauth2/authorization/google";
      } catch (e) {
        const answer = {
          text: "Sorry for the inconvinience, the Server is Offline!!",
          isReply: true,
        };
        setChat((prevChat) => [...prevChat, answer]);
      }
      console.log(e);
    } finally {
      setLoading(false);
      setQuestion("");
    }
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
            {chats.map((chat, i) => (
              <ChatBubble key={i} text={chat.text} isReply={chat.isReply} />
            ))}
            {/* <div>
              <ChatBubble
                text={
                  "Tell me more about Java and more and more and more and more....more and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and morev Third last and more and more Second last more and more and more last last and more and more"
                }
                isReply={false}
              />
              <ChatBubble
                text={
                  "What is Spring Boot? Why are you asking me? more and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and moremore and more and more and more Third last and more and more Second last more and more and more last last and more and more"
                }
                isReply={true}
              />
            </div> */}
          </div>
          <div className={styles.text}>
            <form onSubmit={(e) => askQuestion(e)}>
              <input
                className={styles.inptext}
                type="text"
                placeholder="ask java"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              <button
                className={styles.inpbtn}
                type="submit"
                disabled={loading}
              >
                {loading ? "Thinking..." : "Ask!!"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
