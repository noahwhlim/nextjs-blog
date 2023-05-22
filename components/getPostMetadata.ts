import fs from "fs";
import matter from "gray-matter";
import { PostMetadata } from "@/components/PostMetadata";


const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // gray-matter
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  const sorted = posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime(),
  )

  return sorted;
};

export default getPostMetadata;