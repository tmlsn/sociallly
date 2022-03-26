import { useState } from "react";
import { v4 } from "uuid";
import axios from "axios";
import Avatar from "../../assets/avatar.jpg";
import "./AddTweet.css";

export function AddTweet({ setTweets }) {
  const [tweetInput, setTweetInput] = useState("");

  const handleSubmit = async (event) => {
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
    // data to send in the request body
    const data = {
      content: tweetInput,
    };
    // url of the endpoint for tweets
    const url = `${process.env.REACT_APP_BACKEND_URL}/tweets`;
    // reqest configuration for adding a header with authorization
    const config = {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWF0IjoxNjQ4MjkxOTI5LCJleHAiOjE2NDgzMTM1Mjl9.uB_JNFBzxcFY-iOlH5iIGoacaSQZCHIqXQJXjjCdILk",
      },
    };
    // make a request with axios
    const tweet = await axios.post(url, data, config);
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
