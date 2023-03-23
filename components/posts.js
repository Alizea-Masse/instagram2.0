import { onSnapshot, orderBy } from "firebase/firestore";
import { collection, query } from "firebase/firestore";
import { db } from "../firebase";
import { useEffect, useState } from "react";
import Post from "./post";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(
    () => 
    onSnapshot(
      query(collection(db, "posts"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setPosts(snapshot.docs);
      }
    ),

    [db]
    );

console.log(posts);

  return (
    <>
      <div>
        {posts.map((post) => (
          <Post
            key={post.data().id}
            id={post.data().id}
            username={post.data().username}
            userImg={post.data().profilImg}
            img={post.data().image}
            description={post.data().caption}
          />
        ))}
      </div>
    </>
  );
};

export default Posts;
