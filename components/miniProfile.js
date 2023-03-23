import React from 'react'
import { signOut, useSession } from "next-auth/react";
import Image from 'next/image';

const MiniProfile = () => {
  const {data} = useSession();
  
  return (
    <div>
        <div className="flex items-center justify-between mt-14 ml-10">
            <Image src={data?.user?.image} width="100" height="100" alt="photo de profil" className="w-16 h-16 rounded-full border p-[2px]"/>
            <div className="flex-1 mx-4">
                <h2 className="font-bold">{data?.user.username}</h2>
                <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
                </div>
                <button onClick={signOut} className="text-blue-400 text-sm font-semibold">Se déconnecter</button>   
                </div>
    </div>
  )
}

export default MiniProfile