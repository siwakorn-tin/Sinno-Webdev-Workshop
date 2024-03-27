import Image from "next/image";

export default function Home() {
  return (
    // Learning the flex and property here.
    // https://tailwindcss.com/
    <main className="flex min-h-screen flex-col items-center justify-between p-24 m-2 bg-gradient-to-b from-slate-300 to-slate-950">
      <text className=" w-20 h-20 bg-red-500">1</text>
      <text className=" w-20 h-20 bg-green-500 text-center">2</text>
      <text className=" w-20 h-20 bg-blue-500 text-end">3</text>
      <h1></h1>
    </main>
  );
}
