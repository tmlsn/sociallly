import { useState } from "react";
import { v4 } from "uuid";
import Avatar from "../../assets/avatar.jpg";

export function EditTweet(content, setTweets, id) {
    const [tweetInput, setTweetInput] = useState("");

    const handleSubmit = (event) => {
      event.preventDefault();
      setTweets((previousTweets) => {
        return [
          ...previousTweets.filter((tweet) => {
            return tweet.id !== id;
          }),
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
        value={content}
        onChange={(event) => setTweetInput(event.target.value)}
      />
      <button type="submit">Tweet</button>
    </div>
  </form>
  )
}