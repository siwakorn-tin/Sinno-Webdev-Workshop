import Link from "next/link";
import React from "react";

function NavBar() {
  const menu = [
    { name: "Home", link: "/" },
    { name: "Work", link: "/work" },
    { name: "Blog", link: "/blog" },
  ];
  return (
    <nav className="flex pb-10">
      {menu.map((item) => (
        <div className="mr-4" key={item.name}>
          <Link href={item.link}>{item.name}</Link>
        </div>
      ))}
    </nav>
  );
}

export default NavBar;
