"use client";
import { useRouter } from "next/navigation";

const Blog = () => {
  const router = useRouter();

  return (
    <>
      <h1>Blog</h1>
      <button onClick={() => router.push("/")}>Home Page</button>
    </>
  );
};

export default Blog;
