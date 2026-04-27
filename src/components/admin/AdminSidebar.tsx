'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Box, 
  Users, 
  BarChart3, 
  Settings, 
  LogOut, 
  BrainCircuit,
  MessageSquare,
  PlusCircle
} from 'lucide-react';

const menuItems = [
  { name: 'Overview', href: '/admin', icon: <LayoutDashboard className="w-5 h-5" /> },
  { name: 'Models', href: '/admin/models', icon: <Box className="w-5 h-5" /> },
  { name: 'Users', href: '/admin/users', icon: <Users className="w-5 h-5" /> },
  { name: 'Reviews', href: '/admin/reviews', icon: <MessageSquare className="w-5 h-5" /> },
  { name: 'Analytics', href: '/admin/analytics', icon: <BarChart3 className="w-5 h-5" /> },
  { name: 'Settings', href: '/admin/settings', icon: <Settings className="w-5 h-5" /> },
];

export function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-secondary/50 border-r border-white/5 flex flex-col p-6 space-y-8">
      {/* Brand */}
      <Link href="/" className="flex items-center space-x-3 px-2">
        <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
          <BrainCircuit className="text-white w-5 h-5" />
        </div>
        <span className="font-bold text-lg font-outfit">Admin Hub</span>
      </Link>

      {/* Primary Action */}
      <Link 
        href="/admin/models/new"
        className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/80 text-white py-3 rounded-xl font-bold transition-all shadow-lg shadow-primary/20"
      >
        <PlusCircle className="w-4 h-4" />
        <span>Add Model</span>
      </Link>

      {/* Nav Links */}
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                isActive 
                ? 'bg-white/10 text-white font-bold border border-white/10' 
                : 'text-gray-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.icon}
              <span className="text-sm">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Bottom */}
      <div className="pt-6 border-t border-white/5">
        <button className="flex items-center space-x-3 px-4 py-3 w-full text-gray-500 hover:text-red-400 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Log Out</span>
        </button>
      </div>
    </aside>
  );
}
