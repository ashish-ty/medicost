import React, { ReactNode } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Home, BarChart3, Database, LogOut, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isLoggedIn = router.pathname.startsWith('/dashboard');

  const handleLogout = () => {
    // Dummy logout - just redirect to home
    router.push('/');
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-background">
        <header className="bg-white shadow-sm border-b border-primary/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                    <BarChart3 className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-primary">Medicost.ai</span>
                </div>
              </Link>
              <nav className="hidden md:flex space-x-6">
                <Link href="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/login" className="btn-primary">
                  Login
                </Link>
              </nav>
              <button 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
            {mobileMenuOpen && (
              <div className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
                <div className="flex flex-col space-y-2">
                  <Link href="/" className="text-gray-600 hover:text-primary transition-colors py-2">
                    Home
                  </Link>
                  <Link href="/login" className="btn-primary text-center">
                    Login
                  </Link>
                </div>
              </div>
            )}
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-white border-t border-primary/10 mt-16">
          <div className="container mx-auto px-4 py-8 text-center text-gray-600">
            <p>© 2025 Medicost.ai - Revolutionizing Hospital Financial Analytics</p>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg border-r border-primary/10">
        <div className="p-6">
          <Link href="/dashboard">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-primary">Medicost.ai</span>
            </div>
          </Link>
        </div>
        <nav className="px-4 pb-4">
          <div className="space-y-2">
            <Link href="/dashboard">
              <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                router.pathname === '/dashboard' 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
              }`}>
                <Home className="w-5 h-5" />
                <span>Dashboard</span>
              </div>
            </Link>
            <Link href="/dashboard/hospital-data">
              <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                router.pathname.startsWith('/dashboard/hospital-data') 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
              }`}>
                <Database className="w-5 h-5" />
                <span>Hospital Data</span>
              </div>
            </Link>
            <Link href="/dashboard/tools">
              <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                router.pathname.startsWith('/dashboard/tools') 
                  ? 'bg-primary text-white' 
                  : 'text-gray-600 hover:bg-primary/5 hover:text-primary'
              }`}>
                <BarChart3 className="w-5 h-5" />
                <span>Analytics Tools</span>
              </div>
            </Link>
          </div>
          <div className="mt-8 pt-4 border-t border-gray-200">
            <button 
              onClick={handleLogout}
              className="flex items-center space-x-3 px-4 py-3 rounded-lg text-gray-600 hover:bg-red-50 hover:text-red-600 transition-colors w-full"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}