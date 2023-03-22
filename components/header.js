import React from "react";
import Image from "next/image";

import {BsFillHouseFill, BsPlusSquare} from "react-icons/bs";
import {AiOutlineMenu,AiOutlineHeart} from "react-icons/ai";
import {HiOutlinePaperAirplane} from "react-icons/hi";

function Header() {
  return (
    <div className="shadow-sm border-b sticky top-0 z-50 pb-1 ">
      <div className="flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto">
        {/* gauche */}
        <div className="relative hidden lg:inline-grid w-24 h-24 cursor-pointer ">
          <Image 
            src="https://www.meilleure-innovation.com/wp-content/uploads/2022/04/logo-instagram-788x444.png"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-14 h-10 lg:hidden flex-shrink-0 cursor-pointer pt-4">
          <Image className="mt-6 "
            src="https://webdrop.fr/wp-content/uploads/2019/04/klan-loup-instagram.png"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* milieu-recherche imput */}
        <div className="max-w-xs">
          <form>
           
            <div className="relative pt-4">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pt-4 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5  mt-3 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 mt-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  focus:ring-black focus:border-black"
                placeholder="Rechercher"
                required
              />
            </div>
          </form>
        </div>

        {/* droite */}
        <div className="flex items-center justify-end  space-x-4">

       <AiOutlineMenu className="cursor-pointer h-10 w-10 mt-7 md:hidden"/>
       <BsFillHouseFill className="navBtn"/>
       <div className="relative">
       <HiOutlinePaperAirplane className="navBtn rotate-45"/>
       <div className=" hidden md:absolute md:top-6 md:-right-1 md:text-xs md:w-5 md:h-5 md:bg-red-500 md:rounded-full md:flex md:items-center md:justify-center md:animate-pulse md:text-white lg:-top-1 ">3</div>
       </div>
       <BsPlusSquare className="navBtn"/>
       <AiOutlineHeart className="navBtn"/>
       <Image src="/soleil.png" width='500' height='500' className=" w-10 h-10 rounded-full  navBtn"  alt='photo de profil' />
        </div>
      </div>
    </div>
  );
}

export default Header;
