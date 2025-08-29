import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { supabase } from '../../../supabase/client';
import Link from 'next/link';

export default function EditPost() {
  const router = useRouter();
  const { id } = router.query;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      setLoading(true);
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .eq('id', id)
        .single();

      if (error) {
        setError('Post not found.');
        console.error('Error fetching post:', error.message);
      } else {
        setTitle(data.title);
        setContent(data.content);
      }
      setLoading(false);
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const { error } = await supabase
      .from('posts')
      .update({ title, content })
      .eq('id', id);

    if (error) {
      setError('Error updating post. Please try again.');
      console.error('Error updating post:', error.message);
    } else {
      router.push(`/posts/${id}`);
    }
    setSubmitting(false);
  };

  if (loading) return <p className="text-center mt-8">Loading post...</p>;
  if (error) return <p className="text-center text-red-500 mt-8">{error}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Edit Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
          />
        </div>
        <div>
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            rows={10}
          />
        </div>
        <div className="flex space-x-4">
          <button
            type="submit"
            disabled={submitting}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors disabled:opacity-50"
          >
            {submitting ? 'Updating...' : 'Update Post'}
          </button>
          <Link href={`/posts/${id}`} className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors">
            Cancel
          </Link>
        </div>
      </form>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}
