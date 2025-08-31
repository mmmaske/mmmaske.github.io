"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { supabase } from '../supabase/client';

type Post = {
  id: string;
  created_at: string;
  title: string;
  slug: string;
};

export default function Posts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('id, title, created_at, slug')
        .order('created_at', { ascending: false });

      if (error) {
        setError('Error fetching posts. Please try again.');
        console.error('Error fetching posts:', error.message);
      } else {
        setPosts(data || []);
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (loading) return <p className="text-center mt-8">Loading posts...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">All Posts</h1>
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-xl font-semibold text-blue-600 hover:underline">{post.title}</h2>
              <p className="text-sm text-gray-500">
                Created: {new Date(post.created_at).toLocaleDateString()}
              </p>
            </Link>
          </li>
        ))}
      </ul>
      <Link href="/posts/new" className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors">
        Create New Post
      </Link>
    </div>
  );
}
