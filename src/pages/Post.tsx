import { useParams } from "react-router-dom";
import { Post as PostType } from "../data/posts";

interface PostProps {
  posts: PostType[];
}

const Post = ({ posts }: PostProps) => {
  const { id } = useParams<{ id: string }>();
  const post = posts.find((p) => p.id === id);
  if (!id) return <h2>Post ID not provided</h2>;
  if (!post) return <h2>Post not found</h2>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;