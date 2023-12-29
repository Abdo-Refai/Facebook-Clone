import {
  faBars,
  faMagnifyingGlass,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./PeopleOnline.css";
import { useEffect, useState } from "react";
import "./Chat.css";

function PeopleOnline() {
  function clickChat() {
    document.querySelector(".chat-parent").classList.add("chat-clicked");
  }

  const [chats, setChats] = useState([]);
  useEffect(() => {
    fetch("http://localhost:9000/chats")
      .then((res) => res.json())
      .then((data) => setChats(data));
  }, []);
  return (
    <div className="online-parent">
      <h5 className="d-flex justify-content-between">
        Messages <FontAwesomeIcon icon={faPenToSquare} />
      </h5>
      <form className="form d-flex align-items-center mt-3 mb-3">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search" />
        <FontAwesomeIcon icon={faBars} />
      </form>

      {chats.map((chat) => {
        return (
          <div
            key={chat.id}
            className="d-flex online-box"
            onClick={() => {
              clickChat();
            }}
          >
            <img src={chat.image} alt="/" className="online-img" />
            <h5> {chat.name} </h5>
          </div>
        );
      })}
      <span>View all</span>
    </div>
  );
}

export default PeopleOnline;
