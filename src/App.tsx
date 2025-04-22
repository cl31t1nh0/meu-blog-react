import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
// (opcional) import PostDetail from './pages/PostDetail';

const App = () => {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<CreatePost />} />
          {/* <Route path="/post/:id" element={<PostDetail />} /> */}
        </Routes>
      </main>
    </Router>
  );
};

export default App;