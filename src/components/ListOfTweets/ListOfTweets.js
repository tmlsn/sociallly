import { Tweet } from "../Tweet/Tweet";
import { useState } from "react";

export function ListOfTweets({ tweets, setTweets }) {
  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} content={tweet.content} setTweets={setTweets} id={tweet.id}/>;
      })}
    </div>
  );
}