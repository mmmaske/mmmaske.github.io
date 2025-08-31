// app/login/page.tsx

"use client";

import { useState, createContext, useContext } from 'react';
import { supabase } from '../supabase/client';
import { useRouter } from 'next/navigation';
import { User } from '@supabase/supabase-js';

// Create a context for the user and authentication state
const AuthContext = createContext<{ user: User | null; setUser: (user: User | null) => void } | undefined>(undefined);

// Define a provider component to wrap around your application
const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const value = { user, setUser };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook to use the auth context
const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

// The main login page component, which uses the context
function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');
  const { setUser } = useAuth(); // Use the setUser function from the context

  // Handles both sign-in and sign-up
  const handleAuth = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsLoading(true);
    setMessage('');

    const { data, error } = isSigningIn
      ? await supabase.auth.signInWithPassword({ email, password })
      : await supabase.auth.signUp({ email, password });

    if (error) {
      setMessage(error.message);
    } else if (data.user) {
      // Set the user in the global context
      setUser(data.user);
      setMessage('Success!');
      // Redirect to the posts page after successful authentication
      router.push('/posts');
    } else {
      setMessage('Check your email for a confirmation link!');
    }

    setIsLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950 p-4">
      <div className="w-full max-w-md bg-gray-900 rounded-xl shadow-2xl p-8 space-y-6 border border-gray-700">
        <h1 className="text-3xl font-bold text-center text-white">
          {isSigningIn ? 'Sign In' : 'Sign Up'}
        </h1>
        <form onSubmit={handleAuth} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-700 bg-gray-800 rounded-md shadow-sm p-2 text-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-400">Password</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-1 block w-full border border-gray-700 bg-gray-800 rounded-md shadow-sm p-2 text-gray-300 focus:outline-none focus:ring-sky-500 focus:border-sky-500"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 px-4 rounded-lg font-bold text-white transition-colors duration-200 shadow-md
                       bg-sky-600 hover:bg-sky-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Loading...' : (isSigningIn ? 'Sign In' : 'Sign Up')}
          </button>
        </form>
        {message && (
          <p className="mt-4 text-center text-sm font-medium text-red-400">
            {message}
          </p>
        )}
        <div className="text-center">
          <button
            onClick={() => setIsSigningIn(!isSigningIn)}
            className="text-sm text-sky-400 hover:underline"
          >
            {isSigningIn ? 'Need an account? Sign up' : 'Already have an account? Sign in'}
          </button>
        </div>
      </div>
    </div>
  );
}

// Export a wrapper component that provides the context to the LoginPage
export default function AuthWrapper() {
  return (
    <AuthProvider>
      <LoginPage />
    </AuthProvider>
  );
}
