"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://dummyjson.com/posts");
        const data = await response.json();
        setBlogs(data.posts);
        console.log("Data fetched.");
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1>Blog</h1>
      <button onClick={() => router.push("/")}>Home Page</button>
      {blogs.map((blog) => (
        <div key={blog.id} className="mt-4 mb-4">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
        </div>
      ))}
    </>
  );
};

export default Blog;
