import { useState } from "react";
import { v4 } from "uuid";
import Avatar from "../../assets/avatar.jpg";
import "./AddTweet.css";

export function AddTweet({ setTweets }) {
  const [tweetInput, setTweetInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTweets((previousTweets) => {
      return [
        ...previousTweets,
        {
          id: v4(),
          content: tweetInput,
        },
      ];
    });
  };
  return (
    <form onSubmit={handleSubmit} className="tweet">
      <img
        width={32}
        height={32}
        className="tweet__img"
        src={Avatar}
        alt="avatar_image"
      />
      <div className="tweet__input">
        <textarea
          value={tweetInput}
          onChange={(event) => setTweetInput(event.target.value)}
        />
        <button type="submit">Tweet</button>
      </div>
    </form>
  );
}
