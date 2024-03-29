import HeadComponent from "@/components/Home/Head";
import Link from "next/link";
import React from "react";

const blogs = [
  { name: "Introduction to React Hooks", view: "245", slug: "react-hooks" },
  { name: "Getting Started with Node.js", view: "378", slug: "nodejs-start" },
  { name: "Exploring Next.js Features", view: "512", slug: "nextjs-features" },
  { name: "Deep Dive into CSS Grid Layout", view: "673", slug: "css-grid" },
  // Add more mock data here with technology-focused topics
];

function Page() {
  return (
    <div>
      <HeadComponent text="Read my blog" />
      {blogs.map((blog, index) => (
        <Link href={`/blog/${blog.slug}`} key={index}>
          <div className="mt-3">
            <h2>{blog.name}</h2>
            <h3 className="text-gray-300">{blog.view} views</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Page;
