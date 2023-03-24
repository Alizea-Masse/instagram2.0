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




  return (
    <>
      <div>
        {posts.map((post) => (
          <Post
            key={post._key.path.segments[6]} 
            id={post._key.path.segments[6]}
            username={post.data().username}
            userImg={post.data().profileImg}
            img={post.data().image}
            description={post.data().caption}
          />
          ))}
      </div>
    </>
  );
};

export default Posts;
