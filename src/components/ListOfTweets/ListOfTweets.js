import { Tweet } from "../Tweet/Tweet";
import { useState } from "react";

export function ListOfTweets({ tweets, setTweets }) {
  return (
    <div>
      {tweets.map((tweet) => {
        // we pass the id, the content and the setTweets function
        return <Tweet key={tweet.id} id={tweet.id} content={tweet.content} setTweets={setTweets} />;
      })}
    </div>
  );
}