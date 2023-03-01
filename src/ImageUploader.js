import React from "react";
import './App.css';

const ImageUploader = () => {
  const OnFileUploadToFirebase = () => {

  }
  return (
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
  );
};

export default ImageUploader;