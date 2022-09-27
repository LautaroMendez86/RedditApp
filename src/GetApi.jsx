import { useEffect } from "react";
import { Card } from "./ui/Card";

const GetApi  =({subreddit, post, setPost}) => {
  
  useEffect(() => {
    const getApi = async (url) => {
      let res = await fetch(url);
      let json = await res.json();
      
      
      
     

      json.data.children.forEach(async (el) => {
        let posteo = await {};

        posteo = await {
          title: el.data.title,
          author: el.data.author,
          url: el.data.url,
          score: el.data.score,
          selftext: el.data.selftext,
          subreddit: el.data.subreddit,
          media: "video",
          id: el.data.id
        };

        if (el.data.media === null) {
          posteo = await {
            ...posteo,
          };
        } else if (el.data.media.reddit_video === undefined) {
          posteo = await {
            ...posteo,
          };
        } else {
          posteo = await {
            ...posteo,
            media: el.data.media.reddit_video.fallback_url,
          };
        }

        setPost((posteos) => [...posteos, posteo]);

      });
    };
    

 
    getApi(`https://www.reddit.com/r/${subreddit}.json?limit=${100}`);

    

    return () => {
        setPost([])
    }

  }, [subreddit]);

  return (
    <>
      {post.map((el, i) => (
        <Card
          key={i}
          title={el.title}
          url={el.url}
          author={el.author}
          score={el.score}
          selftext={el.selftext}
          media={el.media}
          subreddit={el.subreddit}
          id={el.id}
        />
))}
    </>
  );
}

export default GetApi;
