import React from 'react'
import Stories from './stories'
import Posts from './posts'
import MiniProfile from './miniProfile'
import Suggestions from './suggestions'
import { useSession } from "next-auth/react";
const Feed = () => {
  const {data} = useSession();
  return (
    <main className={`grid grid-cols-1 md:grid-cols-2 md:max-w-3xl xl:grid-cols-3 xl:max-w-6xl mx-auto ${!data && "!grid-cols-1 !max-w-3xl" }`}>
        <section className='col-span-2'>
            {/* stories */}
            <Stories/>
            {/* posts */}
            <Posts/>
        </section>
        {data &&(

        <section className='hidden xl:inline-grid md:col-span-1'>
            <div className='fixed '>
            {/* mini profil */}
            <MiniProfile/>
            {/* suggestions */}
            <Suggestions/>
            </div>
        </section>
        )}

    </main>
  )
}

export default Feed