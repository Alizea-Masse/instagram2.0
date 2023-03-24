import React, { useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import { BsArchive } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineSmile, AiFillHeart } from "react-icons/ai";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { FaRegCommentDots } from "react-icons/fa";
import {ImCross} from "react-icons/im";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  setDoc,
  serverTimestamp,
  orderBy,
  deleteDoc,
} from "@firebase/firestore";
import { doc } from "firebase/firestore";

import { useState } from "react";
import { onSnapshot } from "firebase/firestore";
import { query } from "firebase/firestore";
import Moment from "react-moment";
import "moment/locale/fr";
import { async } from "@firebase/util";

const Post = ({ id, key, username, userImg, img, description }) => {
  const { data } = useSession();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLikes, setHasLikes] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, "posts", id, "comments"),
          orderBy("timestamp", "asc")
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db,id]
  );

  useEffect(
    () =>
      onSnapshot(query(collection(db, "posts", id, "likes")), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  );

   useEffect(
      () => {
      setHasLikes(
         likes.findIndex((like) => like.id === data?.user?.uid) !== -1);
   }, [likes]);

  const likePost = async () => {
      if (hasLikes) {
         await deleteDoc(doc(db, "posts", id, "likes", data.user.uid))
      }else {

         await setDoc(doc(db, "posts", id, "likes", data.user.uid), {
            username: data.user.username,
            
         });
      }
  };


  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment("");

    await addDoc(collection(db, "posts", id, "comments"), {
      comment: commentToSend,
      username: data.user.username,
      userImg: data.user.image,
      timestamp: serverTimestamp(),
    });
  };

  return (
    <div className="bg-white border rounded-sm my-5 w-2/3 mx-auto ">
      {/* header */}
      <div className="flex items-center p-5">
        <Image
          width="110"
          height="100"
          src={userImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <BsThreeDots />
      </div>

      {/* img */}
      <Image
        width="400"
        height="400"
        src={img}
        alt=""
        className="object-cover w-full rounded-md "
      />
      {/* buttons */}
      {data && (
        <div className="flex justify-between align-middle px-4 ">
          <div className="flex space-x-4 justify-center pt-4">
            {hasLikes ? (<AiFillHeart onClick={likePost} className="navBtn text-red-700 " />) : (<AiOutlineHeart onClick={likePost} className="navBtn" />)}
            
            <FaRegCommentDots className="navBtn" />
            <IoPaperPlaneOutline className="navBtn" />
          </div>
          <BsArchive className="navBtn" />
        </div>
      )}
      {/* description */}
      <div className="">
         {likes.length > 0 && (  <p className="pt-5 pl-5  ">
          Aimé par <span className="font-bold">{likes.length} personne</span>{" "}
        </p>)}
      
        <p className=" flex pl-5 mt-5 truncate items-center ">
          <span className="font-bold mr-1">{username}</span>
          {description}
        </p>
      </div>
      {/* comments */}
      {data && comments.length > 0 && (
        <div className=" ">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex justify-between align-middle  ml-10 mt-5 mb-3"
            >
              <div className="flex justify-center items-center">
                <img
                  src={comment.data().userImg}
                  alt=""
                  className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
                />
                <span className="font-bold mr-1">
                  {comment.data().username}
                </span>
                <span>{comment.data().comment}</span>
              </div>

              <div className="text-gray-400 mr-4 self-center">
                <Moment fromNow locale="fr">
                  {
                    comment._document.data.value.mapValue.fields.timestamp
                      .timestampValue
                  }
                </Moment>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* input box */}
      {data && (
        <form className="flex items-center p-4">
          <AiOutlineSmile className="text-3xl mr-3 cursor-pointer" />
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Ajouter un commentaire..."
            className="border-none flex-1 focus:ring-0 outline-none"
          />
          <button
            type="submit"
            onClick={sendComment}
            className="font-semibold text-blue-400"
          >
            Publier
          </button>
        </form>
      )}
    </div>
  );
};

export default Post;
