import React, { useState } from "react";
import './App.css';
import { storage } from "./firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
//import { uploadBytes } from "firebase/storage";

const ImageUploader = () => {
  const [loading, setLoading] = useState(false);
  const [isUploated, setIsUploated] = useState(false);
  const OnFileUploadToFirebase = (e) => {
    //console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const storageRef = ref(storage, "image/" + file.name);
    // uploadBytes(storageRef, file).then((snapshot) => {
    //   console.log('Uploaded a blob or file!');
    // });
    const uploadImage = uploadBytesResumable(storageRef, file);
    uploadImage.on(
      "state_changed",
      (snapshot) => {
        setLoading(true);
      },
      (err) => {
        console.log(err);
      },
      () => {
        setLoading(false);
        setIsUploated(true);
      }
    )
  }
  return (
    <>
      {loading ? (
        <h2 className="flex flex-col items-center justify-center h-screen">アップロード中です・・・</h2>
      ) : (
        <>
          {isUploated ? (
            <h2 className="flex flex-col items-center justify-center h-screen">アップロードが完了しました！</h2>
          ) : (
            <div className="flex flex-col items-center justify-center h-screen">
            <form className="flex flex-col items-center space-y-4">
              <label htmlFor="fileInput" className="w-full max-w-md p-4 text-gray-800 bg-white border rounded-lg shadow-md cursor-pointer">
                <span className="block mb-2 text-2xl font-bold">ファイルを選択</span>
                <input id="fileInput" type='file' className="hidden" onChange={OnFileUploadToFirebase} accept=".png, jpeg, jpg"/>
                <span className="text-gray-600">ここにドラッグアンドドロップすることも出来ます</span>
              </label>
              <button type='submit' className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                アップロード!
              </button>
            </form>
            </div>
          )};
        </>
      )};
    </>
  );
};

export default ImageUploader;