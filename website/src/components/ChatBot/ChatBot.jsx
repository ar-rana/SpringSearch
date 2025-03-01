import React, { useEffect, useRef, useState } from "react";
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

  const chatRef = useRef(null);

  const toggleChatBox = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    chatRef.current.scrollIntoView();
  }, [chats])

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

      const reader = res.body.getReader();
      const decoder = new TextDecoder();

      let resp = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
  
        resp += decoder.decode(value, { stream: true });
  
        setChat((prevChat) => {
          const lastMessage = prevChat[prevChat.length - 1];
          if (lastMessage && lastMessage.isReply) {
            return [...prevChat.slice(0, -1), { text: resp, isReply: true }];
          } else {
            return [...prevChat, { text: resp, isReply: true }];
          }
        });
      }
    } catch (e) {
      window.location.href =
        "http://localhost:8000/oauth2/authorization/google";
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
            <span ref={chatRef}/>
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
