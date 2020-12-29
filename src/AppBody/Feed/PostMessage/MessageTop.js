import React, { useState } from "react";
import "./PostMessage.css";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../../../StateProvider";
import db from "../../../Firebase";
import firebase from "firebase";

const MessageTop = () => {
  const [{ user }, dispatch] = useStateValue();

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      text: text,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profileImg: user.photoURL,
      name: user.displayName,
      img: imageURL,
    });
    setText("");
    setImageURL("");
  };
  const [imageURL, setImageURL] = useState("");
  const [text, setText] = useState("");

  return (
    <div className="message-top">
      <Avatar src={user.photoURL} />
      <form className="message-form">
        <div className="message-top-input">
          <input
            placeholder={`What's on your mind, ${user.displayName}`}
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="message-top-input">
          <input
            placeholder={`Add an image URL (Optional)`}
            value={imageURL}
            onChange={(e) => setImageURL(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit} type="submit" />
      </form>
    </div>
  );
};

export default MessageTop;
