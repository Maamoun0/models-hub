'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search, BrainCircuit, Menu, X } from 'lucide-react';
import { useState } from 'react';

const navLinks = [
  { name: 'Models', href: '/models' },
  { name: 'Compare', href: '/compare' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'About', href: '/about' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/50 backdrop-blur-xl border-b border-white/5 py-4">
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center shadow-lg shadow-primary/20 transition-transform group-hover:rotate-6">
            <BrainCircuit className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-outfit tracking-tight">AI Models <span className="text-primary">Hub</span></span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex items-center space-x-4 pl-6 border-l border-white/10">
            <Link href="/login" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Login
            </Link>
            <Link 
              href="/register"
              className="bg-primary hover:bg-primary/80 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-full left-0 w-full bg-background border-t border-white/5 p-6 flex flex-col space-y-6 shadow-2xl"
        >
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-300"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex flex-col space-y-4 pt-4 border-t border-white/5">
            <Link href="/login" className="text-center font-bold">Login</Link>
            <Link href="/register" className="bg-primary text-white text-center py-4 rounded-xl font-bold">
              Sign Up
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
