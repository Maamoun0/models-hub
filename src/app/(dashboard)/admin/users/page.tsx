'use client';

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { 
  Users as UsersIcon, 
  Search, 
  MoreHorizontal, 
  Shield, 
  Star, 
  Crown,
  Mail,
  Ban,
  ChevronDown
} from "lucide-react";
import { motion } from "framer-motion";

const users = [
  { id: 1, name: 'Ahmed Hassan', email: 'ahmed@example.com', role: 'Pro', plan: 'Pro', status: 'Active', comparisons: 42, joined: 'Jan 15, 2026', avatar: 'AH' },
  { id: 2, name: 'Sarah Miller', email: 'sarah@company.io', role: 'Free', plan: 'Free', status: 'Active', comparisons: 12, joined: 'Feb 22, 2026', avatar: 'SM' },
  { id: 3, name: 'Khaled Noor', email: 'khaled@univ.edu', role: 'Pro', plan: 'Pro', status: 'Active', comparisons: 67, joined: 'Mar 8, 2026', avatar: 'KN' },
  { id: 4, name: 'Emma Watson', email: 'emma@dev.co', role: 'Editor', plan: 'Team', status: 'Active', comparisons: 25, joined: 'Mar 15, 2026', avatar: 'EW' },
  { id: 5, name: 'John Doe', email: 'john@example.com', role: 'Free', plan: 'Free', status: 'Inactive', comparisons: 3, joined: 'Apr 2, 2026', avatar: 'JD' },
  { id: 6, name: 'Fatima Ali', email: 'fatima@startup.io', role: 'Pro', plan: 'Pro', status: 'Active', comparisons: 89, joined: 'Apr 10, 2026', avatar: 'FA' },
];

const roleColors: Record<string, string> = {
  Free: 'bg-gray-500/10 text-gray-400 border-gray-500/20',
  Pro: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Editor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Admin: 'bg-red-500/10 text-red-400 border-red-500/20',
  Team: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
};

export default function AdminUsersPage() {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      <AdminSidebar />
      
      <main className="flex-1 ml-64 p-10 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold font-outfit">User Management</h1>
            <p className="text-sm text-gray-500">Manage user accounts, roles, and subscriptions.</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl font-bold transition-all border border-white/10 text-sm flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Send Broadcast</span>
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Users', value: '1,284', icon: <UsersIcon className="w-5 h-5 text-blue-400" /> },
            { label: 'Pro Users', value: '342', icon: <Crown className="w-5 h-5 text-purple-400" /> },
            { label: 'Active Today', value: '89', icon: <Star className="w-5 h-5 text-yellow-400" /> },
            { label: 'New This Week', value: '24', icon: <Shield className="w-5 h-5 text-green-400" /> },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-5 flex items-center space-x-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                {stat.icon}
              </div>
              <div>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:border-primary transition-all focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-primary/50 transition-all">
              <span>Role: All</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <button className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-primary/50 transition-all">
              <span>Plan: All</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Users Table */}
        <div className="glass overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border-b border-white/5">
                <th className="p-5">User</th>
                <th className="p-5">Role</th>
                <th className="p-5">Plan</th>
                <th className="p-5">Comparisons</th>
                <th className="p-5">Status</th>
                <th className="p-5">Joined</th>
                <th className="p-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <motion.tr
                  key={user.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-white/2 hover:bg-white/2 transition-colors"
                >
                  <td className="p-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-9 h-9 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-xs font-bold text-primary">
                        {user.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-sm">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${roleColors[user.role]}`}>
                      {user.role}
                    </span>
                  </td>
                  <td className="p-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${roleColors[user.plan]}`}>
                      {user.plan}
                    </span>
                  </td>
                  <td className="p-5 font-mono text-sm">{user.comparisons}</td>
                  <td className="p-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                      user.status === 'Active'
                        ? 'bg-green-500/10 text-green-500 border-green-500/20'
                        : 'bg-red-500/10 text-red-400 border-red-500/20'
                    }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="p-5 text-sm text-gray-400">{user.joined}</td>
                  <td className="p-5">
                    <div className="flex items-center space-x-2">
                      <button className="p-1.5 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all">
                        <Mail className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/5 text-gray-500 hover:text-red-400 transition-all">
                        <Ban className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all">
                        <MoreHorizontal className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-500">Showing 1–6 of 1,284 users</p>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, '...', 214].map((page, i) => (
              <button
                key={i}
                className={`w-9 h-9 rounded-lg border flex items-center justify-center text-xs font-bold transition-all ${
                  page === 1 ? 'bg-primary border-primary text-white' : 'border-white/10 hover:border-primary/30 text-gray-500'
                }`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
