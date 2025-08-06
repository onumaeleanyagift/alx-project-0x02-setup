import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import { getStaticProps } from "next/dist/build/templates/pages";

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  getStaticProps(() => {
    const fetchPosts = async () => {
      const res = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      const data = await res.json();

      const mappedPosts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));

      setPosts(mappedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold">Latest Posts</h1>

        {posts.length === 0 ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        )}
      </div>
    </>
  );
};

export default PostsPage;
