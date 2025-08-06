import React, { useState } from "react";
import Header from "@/components/layout/Header";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type Post } from "@/interfaces/index";

const Home: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  const handleAddPost = (newPost: Post) => {
    setPosts((prev) => [...prev, newPost]);
  };

  return (
    <div>
      <Header />
      <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
        <h1>This is the Home Page</h1>

        <div>
          <Card
            title="Top Villa"
            content="Explore luxurious villas with great views."
          />
          <Card
            title="Self Check-in"
            content="Properties with flexible check-in options."
          />
          <Card title="Beachfront" content="Stay close to the ocean." />
        </div>

        <div className="p-6">
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-4 py-2 bg-green-600 text-white rounded mb-4"
          >
            Add New Post
          </button>

          <PostModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
            onSubmit={handleAddPost}
          />

          <div className="space-y-4">
            {posts.map((post, idx) => (
              <div key={idx} className="border p-4 rounded shadow">
                <h3 className="text-lg font-bold">{post.title}</h3>
                <p>{post.content}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
