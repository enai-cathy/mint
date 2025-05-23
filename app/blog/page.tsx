import { getAllPosts } from "@/app/lib/mdx";
import BlogList from "./BlogList";
import Footer from "../components/Footer";

export default async function BlogPage() {
  const posts = await getAllPosts();

  return ( 
    <>
  <BlogList posts={posts} />
  <Footer/>
  </>
)}

