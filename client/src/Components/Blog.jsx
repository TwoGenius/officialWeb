import React from "react";
import Blog1 from "../assets/blog.svg";
const Blog = () => {
  return (
    <div className="Blog">
      <h2>Explore and Learn</h2>
      <h2>with ourBlogs</h2>
      <div className="blog">
        <div className="left-part">
          <img src={Blog1} alt="" />
        </div>
        <div className="right-div">
          <h4>Hacking Humans is easier than Hacking Computers</h4>
          <small>
            Cyber Security &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Machine Learning
          </small>
          <p>
            Being a hacker isn't as easy as it may sound. And you should beware
            of snake oil salesmen who guarantee you to make the next 'Kevin
            Mitnick' for a few bucks. Raiding area 51 would be a better plan,
            just in case. After jeopardizing NASA and the US Military, he was
            sentenced to prison for 70...
          </p>
          <div className="date-author">
            <p>SEP 06, 2022</p>
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
