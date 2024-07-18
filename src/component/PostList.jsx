import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from "./Welcome";
import { useEffect } from "react";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, addInitialPost } = useContext(PostListData);
  const [fetching, setFetching] = useState(false);
  const controller = new AbortController();
  const signal = controller.signal;
  useEffect(() => {
    setFetching(true);
    fetch("//dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        addInitialPost(data.posts);
        setFetching(false);
      });

    return () => {
      controller.abort();
    };
  }, []);
  return (
    <>
      {fetching && <LoadingSpinner></LoadingSpinner>}
      {!fetching && postList.length === 0 && <Welcome></Welcome>}
      {!fetching &&
        postList.map((post) => {
          return <Post key={post.id} post={post}></Post>;
        })}
    </>
  );
};

export default PostList;
