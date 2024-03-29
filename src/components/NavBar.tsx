import Link from "next/link";
import React from "react";

function NavBar() {
  const menu = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/work" },
    { name: "Blog", link: "/blog" },
  ];
  return (
    <nav className="flex gap-x-4 pt-2 pb-10">
      {menu.map((item) => (
        <Link href={item.link}>{item.name}</Link>
      ))}
    </nav>
    // <nav className="top-0 sticky flex gap-x-4 bg-black mt-2 p-2 w-[100vw]">
    //   {menu.map((item) => (
    //       <Link href={item.link}>{item.name}</Link>

    //   ))}
    // </nav>
  );
}

export default NavBar;
