import { PostMetadata } from "./PostMetadata";
import Link from "next/link";

const PostPreview = (props: PostMetadata) => {
    return (
      <div className="p-4 rounded-md shadow-md bg-white hover:shadow-2xl hover:p-6 ease-in-out duration-300">
        <Link href={`/posts/${props.slug}`}>
          <p className="text-sm text-slate-400">{props.date}</p>
          <h2 className="font-semibold mb-4">{props.title}</h2>
          <p className="text-slate-700">{props.subtitle}</p>
        </Link>
      </div>
    );
}

export default PostPreview;