import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Post from "./pages/Post";
import CreatePost from "./pages/CreatePost";
import { useEffect, useState } from "react";
import { posts as initialPosts, Post as PostType } from "./data/posts";

const LOCAL_STORAGE_KEY = "meu-blog-posts";

const App = () => {
  const [posts, setPosts] = useState<PostType[]>(() => {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY);
    return saved ? JSON.parse(saved) : initialPosts;
  });

  // Atualiza localStorage sempre que posts mudam
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(posts));
  }, [posts]);

  const handleAddPost = (post: PostType) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<Post posts={posts} />} />
          <Route path="/new" element={<CreatePost onAddPost={handleAddPost} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;