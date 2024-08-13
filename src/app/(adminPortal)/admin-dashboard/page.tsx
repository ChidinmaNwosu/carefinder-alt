"use client";
import React, { useEffect, useState, useRef } from "react";
// import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";
import {db} from '@/app/firebase';
import {collection, addDoc} from "firebase/firestore";
import { FaCircleArrowLeft } from "react-icons/fa6";
import { useRouter } from "next/navigation";

function AdminDashboard(): React.JSX.Element {
    const editorRef = useRef<any | null>(null);
    const [isClient, setIsClient] = useState(false);
    const router = useRouter();

  //Initialize the Editor.js instance with the provided element ID
  useEffect(() => {
    setIsClient(true);

    if (typeof window !== "undefined" && isClient) {
    import("@toast-ui/editor").then(({ default: Editor }) => {
    const editor = new Editor({
      el: document.querySelector("#editor")!,
      height: "500px",
      width: "500px",
      initialEditType: "markdown",
      previewStyle: "vertical",
      initialValue: "content",
      placeholder: "Please Enter Text...",
    });
   editorRef.current = editor as any;
    console.log(editor.getMarkdown());
  });
  }
}, [isClient]);

const handleSave = async () => {
  if (editorRef.current){
    const editor = (editorRef.current as any).editorInstance;
    const content = editorRef?.current?.getMarkdown();
    try{
      await addDoc(collection(db, "documents"),{
        content,
        timestamp: new Date(),
      });
      alert ("content saved successfully!");
    } catch (error){
      console.error("Error saving content: ", error);
      alert ("Failed to save content: " + error);
    }
  }
}
  return (
    <div className="xl:min-h-screen xl:w-full xl:flex xl:flex-col mt-4 bg-manthis-green bg-opacity-30">
  <div className="flex flex-row gap-2 items-center py-6 px-6"  >
     <FaCircleArrowLeft className="text-[40px] text-manthis-green" onClick={() => router.push("/")}/>
     <p>Back to home</p>
   </div>
      <div className="caontainer mx-auto p-4 mt-10 ">
        <div className="p-8 bg-white shadow-md rounded-lg">
          <h2 className="font-bold text-4xl mb-4 text-center">Dashboard</h2>
          <p className="font-medium text-xl text-center">
            Welcome to the admin dashboard!
          </p>
        </div>

        {/* Add your admin dashboard components here */}
        <div
          className="w-full mt-8 p-4 bg-white shadow-2xl rounded-lg"
          id="editor"
        ></div>
        <button onClick={handleSave} className="mt-4 bg-bice-blue bg-opacity-50  hover:bg-manthis-green  text-white font-bold py-4 px-6 rounded-lg">
          Save 
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard; 












