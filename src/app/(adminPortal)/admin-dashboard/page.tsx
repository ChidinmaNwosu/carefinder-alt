'use client'
import React, {useEffect} from 'react'
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';


function AdminDashboard():React.JSX.Element {
  //Initialize the Editor.js instance with the provided element ID
  useEffect (()=>{
    
    const editor = new Editor({
      el: document.querySelector('#editor'),
      height: '500px',
      width: '500px',
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      initialValue: 'content',
      placeholder: 'Please Enter Text...'
    });

  
  
    console.log(editor.getMarkdown());
  },[]);
    


  return (
    <div className="h-screen w-screen">
        <div className="caontainer mx-auto">
            <div className="p-8">
                <h2 className="font-bold text-4xl">Dashboard</h2>
                <p className="font-medium text-xl">Welcome to the admin dashboard!</p>
            </div>
            {/* Add your admin dashboard components here */}
           
              <div className="className" id="editor"></div>
        </div>
    </div>
  )
}


export default AdminDashboard;