import List from "../list/list";
import axios from "axios";
import { useEffect, useState } from "react";
import { PostsContext } from "../context/postsContext";

const Posts = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <section>
      <h2 className=" text-5xl text-primairy my-8  font-semibold text-center">
        posts
      </h2>
      <PostsContext.Provider value={{ posts }}>
        {posts && <List></List>}
      </PostsContext.Provider>
    </section>
  );
};

export default Posts;
