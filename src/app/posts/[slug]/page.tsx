// app/posts/[slug]/page.tsx

import { supabase } from '../../supabase/client';
import { notFound } from 'next/navigation';
import PostContent from './PostContent'; // Import the new client component

// Define the shape of the post data
interface Post {
  id: number;
  created_at: string;
  title: string;
  content: string;
  slug: string;
}

// Define the correct type for the page props based on Next.js's structure
interface PageProps {
  params: {
    slug: string;
  };
}

// REQUIRED for static export. This function fetches all slugs at build time.
export async function generateStaticParams() {
  const { data: posts } = await supabase.from('posts').select('slug');
  return posts || [];
}

// This is a dynamic server-side component. It fetches data based on the slug.
// No 'use client' is needed as this component runs on the server.
export default async function PostPage({ params }: PageProps) {
  const { slug } = await params;

  const { data: posts, error } = await supabase
    .from('posts')
    .select('*')
    .eq('slug', slug)
    .single<Post>();

  if (error || !posts) {
    notFound();
  }

  // Pass the fetched post data to the client component
  return <PostContent initialPost={posts} />;
}
