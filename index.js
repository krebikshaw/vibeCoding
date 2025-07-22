import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useParams } from "react-router-dom";

const posts = [
  { id: "1", title: "探索柔和設計風格", content: "這是一篇關於柔和色系和圓角設計的介紹文章。" },
  { id: "2", title: "打造療癒系部落格網站", content: "我們將一步步建立一個溫柔、簡約風格的網站。" },
];

const App = () => (
  <Router>
    <div style={{ minHeight: "100vh", backgroundColor: "#fff1f2", color: "#374151", fontFamily: "sans-serif" }}>
      <nav style={{ padding: "1rem", backgroundColor: "#ffe4e6", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", borderBottomLeftRadius: "1rem", borderBottomRightRadius: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Link to="/" style={{ fontSize: "1.5rem", fontWeight: "600", color: "#be123c", textDecoration: "none" }}>MySoftBlog</Link>
        <button style={{ borderRadius: "9999px", border: "1px solid #fca5a5", padding: "0.5rem 1rem", background: "none" }}>聯絡我們</button>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  </Router>
);

const HomePage = () => (
  <div style={{ maxWidth: "768px", margin: "0 auto", padding: "2.5rem 1rem" }}>
    <h1 style={{ fontSize: "1.875rem", fontWeight: "700", marginBottom: "1.5rem", color: "#f43f5e" }}>最新文章</h1>
    <div style={{ display: "grid", gap: "1.5rem" }}>
      {posts.map(post => (
        <div key={post.id} style={{ borderRadius: "1rem", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", transition: "0.2s", backgroundColor: "#ffffff", padding: "1.5rem" }}>
          <Link to={`/post/${post.id}`} style={{ fontSize: "1.25rem", color: "#be123c", fontWeight: "500", textDecoration: "none" }}>{post.title}</Link>
          <p style={{ marginTop: "0.5rem", fontSize: "0.875rem", color: "#6b7280" }}>{post.content.slice(0, 40)}...</p>
        </div>
      ))}
    </div>
  </div>
);

const AboutPage = () => (
  <div style={{ maxWidth: "640px", margin: "0 auto", padding: "2.5rem 1rem", textAlign: "center" }}>
    <h2 style={{ fontSize: "1.5rem", fontWeight: "600", marginBottom: "1rem", color: "#f43f5e" }}>關於我們</h2>
    <p style={{ color: "#6b7280" }}>我們是一群熱愛設計與分享的創作者，希望透過這個部落格，帶來溫柔而有力量的內容。</p>
  </div>
);

const PostPage = () => {
  const { id } = useParams();
  const post = posts.find(p => p.id === id);
  if (!post) return <div style={{ padding: "2.5rem", textAlign: "center", color: "#6b7280" }}>找不到文章</div>;
  return (
    <div style={{ maxWidth: "640px", margin: "0 auto", padding: "2.5rem 1rem" }}>
      <h1 style={{ fontSize: "1.875rem", fontWeight: "700", color: "#be123c", marginBottom: "1rem" }}>{post.title}</h1>
      <p style={{ color: "#374151", lineHeight: "1.75" }}>{post.content}</p>
    </div>
  );
};

export default App;
