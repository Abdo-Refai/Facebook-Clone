import { faPhone, faVideo, faXmark } from "@fortawesome/free-solid-svg-icons";
import "./Chat.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useState } from "react";

function Chat() {
  const [title, setTitle] = useState("");
  const formSubmitted = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/chat", { title: title })
      .then((res) => setTitle(res));
  };
  function closeChat() {
    document.querySelector(".chat-clicked").classList.remove("chat-clicked");
  }

  return (
    <div>
      <form onSubmit={formSubmitted} className="chat-form">
        <div className="chat-parent">
          <div className="chat-heading">
            <FontAwesomeIcon
              icon={faXmark}
              className="chat-icon"
              onClick={() => closeChat()}
            />
            <FontAwesomeIcon icon={faVideo} className="chat-icon" />
            <FontAwesomeIcon icon={faPhone} className="chat-icon" />
          </div>
          <input
            type="text"
            className="chat-input"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default Chat;
