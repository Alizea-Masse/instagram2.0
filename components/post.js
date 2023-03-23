import React from 'react'
import {BsThreeDots} from 'react-icons/bs'
import {BsArchive} from "react-icons/bs";
import {AiOutlineHeart,AiOutlineSmile} from "react-icons/ai";
import {IoPaperPlaneOutline} from "react-icons/io5";
import {FaRegCommentDots} from 'react-icons/fa'
import Image from 'next/image';


const Post = ({id, username, userImg, img, description}) => {
  return (
    

<div className='bg-white border rounded-sm my-5'>
     {/* header */}
        <div className="flex items-center p-5">
            <Image width="110" height="100" src={userImg} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
            <p className="flex-1 font-bold">{username}</p>
            <BsThreeDots/>
        </div>

     {/* img */}
        <Image width='400' height='400' src={img} alt="" className="object-cover w-full rounded-md"/>
     {/* buttons */}
     <div className="flex justify-between align-middle px-4 pt-4">
        <div className="flex space-x-4 justify-center">
          <AiOutlineHeart className="text-2xl"/>
          <FaRegCommentDots className="text-2xl"/>
          <IoPaperPlaneOutline className="text-2xl"/>
        </div>
          <BsArchive className="text-2xl" />
        </div>
     {/* description */}
        <div className=''>
        <p className='pt-5 pl-5 pb-5'>Aimé par <span className='font-bold'>3 personnes</span> </p>
        <p className=" flex pl-5 truncate items-center ">
            <span className="font-bold mr-1">{username}</span>
            {description}
        </p>
        </div>
     {/* comments */}
     
     <div className=" ">
     <div className="flex justify-between align-middle  ml-10 mt-5 mb-3">
        <div className="flex justify-center items-center">
        <img src={userImg} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
        <span className="font-bold mr-1">username</span>
        <span>comment</span>
        </div>
        <div className="text-gray-400 mr-4 self-center">il y a 1 jour</div>
        </div>
    </div>


    <div className=" ">
     <div className="flex justify-between align-middle  ml-10 mt-5 mb-3">
        <div className="flex justify-center items-center">
        <img src={userImg} alt="" className="rounded-full h-12 w-12 object-contain border p-1 mr-3"/>
        <span className="font-bold mr-1">username</span>
        <span>comment</span>
        </div>
        <div className="text-gray-400 mr-4 self-center">il y a 1 jour</div>
        </div>
    </div>

     {/* input box */}

        <form className="flex items-center p-4">
            <AiOutlineSmile className="text-3xl mr-3 cursor-pointer"/>
            <input type="text" placeholder="Ajouter un commentaire..." className="border-none flex-1 focus:ring-0 outline-none"/>
            <button className="font-semibold text-blue-400">Publier</button>
        </form>
     </div>
  )
}

export default Post