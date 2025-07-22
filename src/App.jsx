import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import "tailwindcss/tailwind.css";

const posts = [
  { id: 1, title: "第一篇文章", summary: "這是第一篇文章的摘要..." },
  { id: 2, title: "第二篇文章", summary: "這是第二篇文章的摘要..." },
];

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-6">我的柔和圓角部落格</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {posts.map(post => (
          <Card key={post.id} className="rounded-2xl shadow-md p-4 bg-pink-50">
            <CardContent>
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p>{post.summary}</p>
              <Link to={`/post/${post.id}`} className="text-blue-500 underline mt-2 inline-block">閱讀更多</Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

function PostPage({ id }) {
  const post = posts.find(p => p.id === parseInt(id));
  if (!post) return <p>找不到文章</p>;
  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 leading-relaxed">這是 {post.title} 的完整內容...</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:id" element={<PostRouteWrapper />} />
      </Routes>
    </Router>
  );
}

function PostRouteWrapper() {
  const { id } = useParams();
  return <PostPage id={id} />;
}

export default App;
