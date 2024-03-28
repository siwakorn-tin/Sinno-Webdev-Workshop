import NavBar from "@/components/NavBar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-xl font-bold mt-2">hey, I'm leerob 👋</h1>
      <div className="grid grid-cols-3 grid-rows-3 bg-gray-100 w-[50vw] h-[50vw] gap-x-5 gap-y-8">
        <div className="row-span-1 bg-black">1</div>
        <div className="row-span-2 bg-black">2</div>
        <div className="row-span-1 bg-black">3</div>
        <div className="row-span-2 bg-black">1</div>
        <div className="row-span-2 bg-black">2</div>
        <div className="row-span-1 bg-black">3</div>
      </div>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum."
      <button className="rounded-md bg-gray-500 p-10 flex">
        <div className="px-2">1</div>
        <div className="flex flex-col items-center">
          <div>123</div>
          <div>456</div>
        </div>
      </button>

      <p>
          On a mission to build products developers{' '}
          <Link href="/blog/developer-experience-examples">love</Link>, and
          along the way, teach the next generation of developers. Here's a
          summary of my work so far.
        </p>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <h2 className="font-medium text-xl mb-1 tracking-tighter">Vercel</h2>
    </div>
  );
}
