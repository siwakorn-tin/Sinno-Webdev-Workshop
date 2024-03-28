import HeadComponent from "@/components/Home/Head";
import ImageGallery from "@/components/Home/ImageGallery";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <HeadComponent text="Hi, My name is Tintin." />
      {/* <HeadComponent text="Hi, My name is Tintin."></HeadComponent> */}
      <p className="mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <ImageGallery />
      <p className="mt-10">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="grid grid-cols-4 items-center w-56 h-fit bg-gray-500 p-2 m-10 rounded-md">
        <Image
          width={100}
          height={100}
          alt="profile"
          src={
            "https://statusneo.com/wp-content/uploads/2023/02/MicrosoftTeams-image551ad57e01403f080a9df51975ac40b6efba82553c323a742b42b1c71c1e45f1.jpg"
          }
          className="rounded-full"
        />
        <div className="flex flex-col justify-start text-start col-span-2 px-2">
          <div>@Tintin</div>
          <div className="text-slate-200">123,456 subscribers</div>
        </div>
      </div>
      <p>
        On a mission to build products developers&apos;
        <Link href="/blog/developer-experience-examples">love</Link>, and along
        the way, teach the next generation of developers. Here&apos;s a summary
        of my work so far.
      </p>
      <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
      <h2 className="font-medium text-xl mb-1 tracking-tighter">Vercel</h2>
    </div>
  );
}
