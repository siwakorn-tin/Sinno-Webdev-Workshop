import React from "react";

function ImageGallery() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-3 grid-rows-3  w-[50vw] h-[50vw] gap-x-5 gap-y-8">
        <div className="row-span-1 rounded-lg bg-gray-900">1</div>
        <div className="row-span-2 rounded-lg bg-gray-900">2</div>
        <div className="row-span-1 rounded-lg bg-gray-900">3</div>
        <div className="row-span-2 rounded-lg bg-gray-900">1</div>
        <div className="row-span-2 rounded-lg bg-gray-900">2</div>
        <div className="row-span-1 rounded-lg bg-gray-900">3</div>
      </div>
    </div>
  );
}

export default ImageGallery;
