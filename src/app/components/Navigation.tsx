// app/components/Navigation.tsx

"use client";

import React from 'react';
import Link from 'next/link';
import { useAuth } from '../lib/auth-context';

// Define the types for the props
interface NavigationProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Navigation({ isOpen, setIsOpen }: NavigationProps) {
  const { user, signOut } = useAuth(); // Use the useAuth hook to get user and signOut

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`fixed right-0 top-0 h-full w-64 bg-gray-950 z-50 transform transition-transform duration-300 ease-in-out flex flex-col p-8 items-start ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="w-full flex justify-end mb-8">
        <button onClick={handleClose}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <Link href="/" onClick={handleClose}>Home</Link>
      <Link href="/about" onClick={handleClose}>About</Link>
      <Link href="/projects" onClick={handleClose}>Projects</Link>
      {user ? (
            <>
              <Link
                href="#"
                onClick={signOut}
              >
                Log Out
              </Link>
            </>
          ) : (
            <Link href="/login">
              Sign In
            </Link>
          )}
      {/* <Link href="/contact" onClick={handleClose}>Contact</Link> */}
    </nav>
  );
}
