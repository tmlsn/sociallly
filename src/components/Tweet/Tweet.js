import { useState } from "react";
import Avatar from "../../assets/avatar.jpg";
import "./Tweet.css";

// I receuve the id, the content and the setTweets function
export function Tweet({ id, content, setTweets }) {
  const [showAll, setShowAll] = useState(false);

  // handle tweet deletion
  const handleDelete = () => {
    setTweets((previousTweets) => {
      // return the new array or filtered tweets
      return previousTweets.filter((tweet) => {
        // a tweet is gonna stay in the array if its id is different from the the id of the curretn tweet
        return tweet.id !== id;
      });
    });
  };

  // handle the change of variable showAll
  const handleShowAll = () => {
    setShowAll((previousValue) => {
      return !previousValue;
    });
  };
  return (
    <div className="tweet">
      <img
        width={32}
        height={32}
        className="tweet__img"
        src={Avatar}
        alt="avatar_image"
      />
      <div className="tweet__input">
        {showAll ? (
          <p>{content}</p>
        ) : (
          <p>
            {content.length > 100 ? `${content.substring(0, 100)}...` : content}
          </p>
        )}

        <div className="tweet__actions">
          <button>Edit</button>
          <button onClick={handleDelete}>Delete</button>
          {content.length > 100 && (
            <button onClick={handleShowAll}>
              {showAll ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
