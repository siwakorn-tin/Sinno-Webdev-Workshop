import Link from "next/link"; 
import React from "react";

function NavBar() {
  const menu = [
    { name: "Home", link: "/home" },
    { name: "Experience", link: "/experience" },
    { name: "Blog", link: "/blog" },
  ];
  return (
    <nav>
      <div className="flex justify-start pt-28">
        <div className="flex">
          {menu.map(item => (
            <div className="px-2" key={item.name}>
              <Link href={item.link}>
             {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
  </nav>
  );
}

export default NavBar;
