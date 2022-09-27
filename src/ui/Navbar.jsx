import React, { useState } from "react";
import GetApi from "../GetApi";
import "./navbar.css";

export const Navbar = () => {
  const [subreddit, setSubreddit] = useState("popular");

  const [post, setPost] = useState([]);

  const subredditType = (e) => {
    setSubreddit(e.target.value);
  };

  return (
    <>
      <header>
        <nav>
          <a href="#">
            <h1>Reddit</h1>
          </a>
          <select name="select" id="select" onChange={subredditType}>
            <option value="popular">Popular</option>
            <option value="battlestations">Battlestations</option>
            <option value="memes">Memes</option>
            <option value="books">Books</option>
            <option value="askscience">AskScience</option>
            <option value="dankgentina">Dankgentina</option>
          </select>
        </nav>
      </header>
      <GetApi subreddit={subreddit} post={post} setPost={setPost} />
    </>
  );
};
