"use client";
import React, { useEffect } from "react";
import Editor from "@toast-ui/editor";
import "@toast-ui/editor/dist/toastui-editor.css";

function AdminDashboard(): React.JSX.Element {
  //Initialize the Editor.js instance with the provided element ID
  useEffect(() => {
    const editor = new Editor({
      el: document.querySelector("#editor")!,
      height: "500px",
      width: "500px",
      initialEditType: "markdown",
      previewStyle: "vertical",
      initialValue: "content",
      placeholder: "Please Enter Text...",
    });

    console.log(editor.getMarkdown());
  }, []);

  return (
    <div className="lg:min-h-screen lg:w-full lg:flex lg:flex-col lg:items-center mt-4 bg-manthis-green bg-opacity-30">
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
      </div>
    </div>
  );
}

export default AdminDashboard;
