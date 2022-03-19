import { Tweet } from "../Tweet/Tweet";

export function ListOfTweets({ tweets }) {
  return (
    <div>
      {tweets.map((tweet) => {
        return <Tweet key={tweet.id} content={tweet.content} />;
      })}
    </div>
  );
}
