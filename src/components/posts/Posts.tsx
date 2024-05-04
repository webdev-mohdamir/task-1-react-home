import { Post } from "@/types/post.type";
import PostCard from "./PostCard";

const Posts = ({ posts, className }: { posts: Post[]; className: string }) => {
  if (posts.length == 0) {
    return <h1 className="text-center">No Data Found</h1>;
  }

  return (
    <div
      className={`post_container mt-3 d-flex flex-column gap-3 ${className}`}
    >
      {posts.map((post) => (
        <PostCard key={post.post_id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
