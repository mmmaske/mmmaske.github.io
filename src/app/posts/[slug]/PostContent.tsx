// app/posts/[slug]/PostContent.tsx

"use client";

import { useState } from 'react';
import { supabase } from '../../../supabase/client';
import { useRouter } from 'next/navigation';

// Define the shape of the post data
interface Post {
  id: number;
  created_at: string;
  title: string;
  content: string;
  slug: string;
}

interface PostContentProps {
  initialPost: Post;
}

export default function PostContent({ initialPost }: PostContentProps) {
  const router = useRouter();

  // Use the post data passed from the server component
  const [post, setPost] = useState<Post | null>(initialPost);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(initialPost.title);
  const [newContent, setNewContent] = useState(initialPost.content);
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  // Handle the initial click on the delete button to show the confirmation dialog
  const handleDelete = () => {
    setShowConfirmDialog(true);
  };

  // Handle the click on the edit button
  const handleEdit = () => {
    setIsEditing(true);
  };

  // Function to save the edited post
  const handleUpdate = async () => {
    if (!post) return;
    setIsUpdating(true);

    const { error } = await supabase
      .from('posts')
      .update({ title: newTitle, content: newContent })
      .eq('id', post.id);

    if (error) {
      console.error('Error updating post:', error.message);
      setIsUpdating(false);
    } else {
      setPost(prevPost => prevPost ? { ...prevPost, title: newTitle, content: newContent } : null);
      setIsEditing(false);
      setIsUpdating(false);
    }
  };

  // Function to confirm and perform the deletion
  const confirmDelete = async () => {
    if (!post) return;
    setIsDeleting(true);
    setShowConfirmDialog(false);

    const { error } = await supabase
      .from('posts')
      .delete()
      .eq('slug', post.slug);

    if (error) {
      console.error('Error deleting post:', error.message);
      setIsDeleting(false);
    } else {
      router.push('/posts');
    }
  };

  // Function to cancel the deletion and hide the dialog
  const cancelDelete = () => {
    setShowConfirmDialog(false);
  };

  // Function to cancel editing
  const cancelEdit = () => {
    setNewTitle(post?.title || '');
    setNewContent(post?.content || '');
    setIsEditing(false);
  };

  // Function to navigate back to the previous page (in this case, the posts list)
  const handleBack = () => {
    router.push('/posts');
  };

  if (!post) {
    return (
      <div className="container mx-auto p-4 max-w-4xl text-center text-gray-400">
        <p>Post not found.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      {isEditing ? (
        // Render the edit form
        <>
          <h1 className="text-4xl font-bold mb-4 text-white">Edit Post</h1>
          <div className="flex flex-col space-y-4">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="mt-1 block w-full border border-gray-700 bg-gray-900 rounded-md shadow-sm p-2 text-gray-300"
            />
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="mt-1 block w-full border border-gray-700 bg-gray-900 rounded-md shadow-sm p-2 text-gray-300"
              rows={10}
            />
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleUpdate}
                disabled={isUpdating}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isUpdating ? 'Saving...' : 'Save'}
              </button>
              <button
                onClick={cancelEdit}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-gray-700 transition-colors duration-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      ) : (
        // Render the view mode
        <>
          <h1 className="text-4xl font-bold mb-4 text-white">{post.title}</h1>
          <p className="text-sm text-gray-500 mb-8">
            Published on: {new Date(post.created_at).toLocaleDateString()}
          </p>
          <div className="prose prose-invert max-w-none text-gray-300">
            <p>{post.content}</p>
          </div>

          <div className="flex justify-end mt-8 space-x-4">
            <button
              onClick={handleBack}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-gray-700 transition-colors duration-200"
            >
              Back
            </button>
            <button
              onClick={handleEdit}
              className="bg-gray-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-gray-700 transition-colors duration-200"
            >
              Edit Post
            </button>
            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-6 py-3 rounded-lg font-bold shadow-md hover:bg-red-700 transition-colors duration-200"
            >
              Delete Post
            </button>
          </div>
        </>
      )}

      {showConfirmDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl">
            <p className="text-white text-lg mb-4">Are you sure you want to delete this post?</p>
            <div className="flex justify-center space-x-4">
              <button
                onClick={confirmDelete}
                disabled={isDeleting}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isDeleting ? 'Deleting...' : 'Yes, Delete'}
              </button>
              <button
                onClick={cancelDelete}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
