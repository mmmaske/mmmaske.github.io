// app/pages/posts/new/page.tsx
"use client";
import { useState } from 'react';
// The correct useRouter for the app router is from 'next/navigation'
import { useRouter } from 'next/navigation';
import { supabase } from '../../../supabase/client';
import Link from 'next/link';

export default function NewPost() {
  // Use useRouter from 'next/navigation' for client-side navigation
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // The 'slug' is not being created here. It needs to be generated before inserting.
    // A simple slug can be created from the title, but a more robust method is recommended.
    const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

    const { error } = await supabase
      .from('posts')
      .insert({ title, content, slug }); // Add the slug to the insert data

    if (error) {
      setError('Error creating post. Please try again.');
      console.error('Error creating post:', error.message);
    } else {
      // Navigate to the correct route with the new slug
      router.push(`/posts/${slug}`);
    }
    setSubmitting(false);
  };

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <h1 className="text-2xl font-bold mb-4">Create New Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-400">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-700 bg-gray-900 rounded-md shadow-sm p-2 text-gray-300"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-400">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-700 bg-gray-900 rounded-md shadow-sm p-2 text-gray-300"
            rows={10}
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
          >
            {submitting ? 'Creating...' : 'Create Post'}
          </button>
          <Link href="/posts" className="bg-gray-600 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors">
            Cancel
          </Link>
        </div>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
