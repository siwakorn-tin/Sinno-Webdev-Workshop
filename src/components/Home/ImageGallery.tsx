import React from "react";
import Image from "next/image";

function ImageGallery() {
  return (
    <div className="mt-10">
      <div className="gap-x-5 gap-y-8 grid grid-cols-3 grid-rows-3 w-[50vw] h-[50vw]">
        <div className="row-span-1 bg-gray-900 rounded-lg overflow-hidden">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={"/bg1.jpg"}
            width={300}
            height={300}
            priority
            className="h-full"
          />
        </div>
        <div className="row-span-2 bg-gray-900 rounded-lg overflow-hidden">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={"/bg2.jpg"}
            width={300}
            height={300}
            priority
            className="h-full"
          />
        </div>
        <div className="row-span-1 bg-gray-900 rounded-lg overflow-hidden">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={"/bg3.jpg"}
            width={300}
            height={300}
            priority
            className="h-full"
          />
        </div>
        <div className="row-span-2 bg-gray-900 rounded-lg overflow-hidden">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={"/bg4.jpg"}
            width={300}
            height={300}
            priority
            className="h-full"
          />
        </div>
        <div className="row-span-2 bg-gray-900 rounded-lg overflow-hidden">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={"/bg5.jpg"}
            width={300}
            height={300}
            priority
            className="h-full"
          />
        </div>
        <div className="row-span-1 bg-gray-900 rounded-lg overflow-hidden">
          <Image
            alt="Me speaking on stage at React Summit about the future of Next.js"
            src={"/bg6.jpg"}
            width={300}
            height={300}
            priority
            className="h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default ImageGallery;
