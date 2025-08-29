// app/components/Header.tsx

"use client";

import React, { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useAuth } from '../lib/auth-context';

export default function Header() {
  const { user } = useAuth(); // Use the useAuth hook to get user and signOut
  const [isOpen, setIsOpen] = useState(false);


  // Effect to add/remove a class to the body to prevent scrolling when the menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <header className="top-bar justify-between sticky top-0 z-40">
        <h1><Link href="/"><Image src="favicon.svg" width="50" height="20" alt="M" /></Link></h1>
        <div className="flex items-center space-x-4">
          {user ? (
            <>
              <span className="text-sm text-gray-400 hidden md:inline">
                {user.email}
              </span>
            </>
          ) : ""}
          <button
            className="hamburger-menu z-40"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>
      </header>
      <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
