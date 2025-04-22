import { Link } from "react-router-dom";
import { Post } from "../data/posts";

interface PostCardProps {
  post: Post;
}

const PostCard = ({ post }: PostCardProps) => {
  return (
    <div className="post-card">
  <h2>{post.title}</h2>
  <Link to={`/post/${post.id}`}>Read more</Link>
</div>
  );
};

export default PostCard;