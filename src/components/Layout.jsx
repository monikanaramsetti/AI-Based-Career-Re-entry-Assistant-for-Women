import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import ChatMentor from './ChatMentor';

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <header className="bg-white shadow-sm border-b border-purple-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-brand-purple to-brand-pink flex items-center justify-center text-white font-bold text-2xl shadow-lg shadow-purple-500/20 group-hover:scale-105 transition-transform">H</div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-purple to-brand-pink">
              HerNova
            </span>
          </Link>
          <nav className="flex gap-6">
            <Link to="/" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Home</Link>
            <Link to="/jobs" className="text-gray-600 hover:text-purple-600 font-medium transition-colors">Opportunities</Link>
          </nav>
        </div>
      </header>
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>

      {/* Persistent Chat Widget */}
      <ChatMentor />
    </div>
  );
};

export default Layout;
