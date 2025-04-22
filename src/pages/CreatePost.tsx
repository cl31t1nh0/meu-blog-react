import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Post } from "../data/posts";

interface CreatePostProps {
  onAddPost: (post: Post) => void;
}

const CreatePost = ({ onAddPost }: CreatePostProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newPost: Post = {
      id: String(Date.now()),
      title,
      content,
    };

    onAddPost(newPost);
    navigate("/");
  };

  return (
    <div>
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ width: "100%", padding: "0.5rem" }}
          />
        </div>
        <div style={{ marginTop: "1rem" }}>
          <label>Content:</label><br />
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            style={{ width: "100%", height: "150px", padding: "0.5rem" }}
          />
        </div>
        <button type="submit" style={{ marginTop: "1rem" }}>
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;