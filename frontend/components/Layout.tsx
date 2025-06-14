import React, { ReactNode } from 'react';
import Link from 'next/link';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-blue-800 text-white p-4">
        <div className="container mx-auto flex justify-between">
          <Link href="/">
            <a className="text-xl font-bold">Medicost.ai</a>
          </Link>
          <nav>
            <Link href="/dashboard">
              <a className="mr-4">Dashboard</a>
            </Link>
            <Link href="/login">
              <a>Login</a>
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">{children}</main>
      <footer className="bg-gray-200 text-center p-4">© 2025 Medicost.ai</footer>
    </div>
  );
}