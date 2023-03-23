import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import { db, storage } from "../firebase";
import { GiPhotoCamera } from "react-icons/gi";
import { addDoc, collection, serverTimestamp } from "@firebase/firestore";
import { useSession } from "next-auth/react";
import { ref } from "firebase/storage";
import { uploadString } from "firebase/storage";
import { doc, updateDoc } from "firebase/firestore";
import { getDownloadURL } from "firebase/storage";

const modal = () => {
  const {data} = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const filePickerRef = useRef(null);
  const captionRef = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, SetLoading] = useState(false);

    const uploadPost = async () => {

        if (loading) return;

        SetLoading(true);
        // create a post and add to fire store post collection
        // get the post id for the newly created post
        // upload the image to firebase storage with the post id
        // get a download url from firebase storage for the image and update the post with image

        const docRef = await addDoc(collection(db, "posts"), {
            username: data.user.username,
            caption: captionRef.current.value,
            profileImg: data.user.image,
            timestamp: serverTimestamp(),
        });

       

        const imageRef = ref(storage, `posts/${docRef.id}/image`);

        await uploadString(imageRef, selectedFile, "data_url").then(async(snapshot) => {
            const downloadUrl = await getDownloadURL(imageRef);
            await updateDoc(doc(db, "posts", docRef.id), {
                image: downloadUrl,
            });
        }); 
        setOpen(false);
        SetLoading(false);
        setSelectedFile(null);



    };





  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };

  };
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>
          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">


                {selectedFile ? (

                    <img className="w-1/2 mx-auto mb-4  cursor-pointer" src={selectedFile}/>

                ):(<GiPhotoCamera onClick={()=>filePickerRef.current.click()} className="mx-auto mb-5 p-3 h-16 w-16 cursor-pointer rounded-full bg-red-300 text-red-700 "/>)}


                
              <Dialog.Title
                as="h3"
                className="text-lg font-medium text-center leading-6 text-gray-900"
              >
                Importer une photo
                
              </Dialog.Title>
              <div className="mt-2 w-full px-9 text-center">
              <input type='file' hidden ref={filePickerRef} onChange={addImageToPost}/>


                <input type='text' ref={captionRef} placeholder="Entrez une description s'il vous plait..." className="text-sm text-gray-500 border-none focus:ring-transparent w-full text-center" />
                  
                
              </div>
              <div onClick={() => setOpen(false)} className="mt-4">
                <button 
                  type="button"
                  className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-red-700 border border-transparent rounded-md hover:bg-red-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
                   onClick={uploadPost}
                >
                {loading ? "Publication en cours.." : "Publier"}
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default modal;
