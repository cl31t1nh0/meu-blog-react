import { useEffect, useState } from 'react';
import { fetchPosts } from '../services/postsService';
import { Link } from 'react-router-dom';

type Post = {
  id: string;
  title: string;
  content: string;
  created_at: string;
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await fetchPosts();
        setPosts(data);
      } catch (error) {
        console.error('Erro ao buscar posts:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="container">
      <h1>📝 Posts Recentes</h1>
      {loading && <p>Carregando...</p>}
      {!loading && posts.length === 0 && <p>Nenhum post ainda. 😢</p>}
      <div className="post-list">
        {posts.map((post) => (
          <Link key={post.id} to={`/post/${post.id}`} className="post-card">
            <h2>{post.title}</h2>
            <p>{post.content.slice(0, 100)}...</p>
            <small>{new Date(post.created_at).toLocaleString()}</small>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;