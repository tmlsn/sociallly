import { AddTweet } from "../components";

export function Home() {
  return (
    <div className="container">
      <AddTweet setTweets={() => {}} />
    </div>
  );
}
