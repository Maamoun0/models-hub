'use client';

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { 
  Search, 
  Plus, 
  MoreHorizontal, 
  Edit, 
  Trash2, 
  Eye, 
  Star,
  ChevronDown,
  ArrowUpDown
} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const models = [
  { id: 1, name: 'GPT-4o', company: 'OpenAI', status: 'Published', featured: true, score: 98, views: '12.4k', category: 'Multimodal', updated: '2 days ago' },
  { id: 2, name: 'Claude 3.5 Sonnet', company: 'Anthropic', status: 'Published', featured: true, score: 97, views: '8.1k', category: 'Reasoning', updated: '1 day ago' },
  { id: 3, name: 'Gemini 1.5 Pro', company: 'Google', status: 'Published', featured: true, score: 96, views: '6.5k', category: 'Long Context', updated: '3 days ago' },
  { id: 4, name: 'Llama 3.1 405B', company: 'Meta', status: 'Published', featured: false, score: 95, views: '4.2k', category: 'Open Source', updated: '1 week ago' },
  { id: 5, name: 'Mistral Large 2', company: 'Mistral', status: 'Published', featured: false, score: 94, views: '3.1k', category: 'Multilingual', updated: '5 days ago' },
  { id: 6, name: 'DeepSeek Coder V2', company: 'DeepSeek', status: 'Draft', featured: false, score: 91, views: '1.2k', category: 'Coding', updated: '1 hour ago' },
  { id: 7, name: 'Command R+', company: 'Cohere', status: 'Published', featured: false, score: 89, views: '2.3k', category: 'Enterprise', updated: '4 days ago' },
  { id: 8, name: 'Grok-2', company: 'xAI', status: 'Draft', featured: false, score: 88, views: '980', category: 'Chat', updated: '12 hours ago' },
];

export default function AdminModelsPage() {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      <AdminSidebar />
      
      <main className="flex-1 ml-64 p-10 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold font-outfit">Models Management</h1>
            <p className="text-sm text-gray-500">Add, edit, and manage AI models on the platform.</p>
          </div>
          <Link
            href="/admin/models/new"
            className="bg-primary hover:bg-primary/80 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 flex items-center space-x-2 text-sm"
          >
            <Plus className="w-4 h-4" />
            <span>Add New Model</span>
          </Link>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { label: 'Total Models', value: '58', color: 'text-blue-400' },
            { label: 'Published', value: '52', color: 'text-green-400' },
            { label: 'Drafts', value: '6', color: 'text-yellow-400' },
            { label: 'Featured', value: '8', color: 'text-purple-400' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-5 text-center space-y-1"
            >
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search models..."
              className="w-full bg-white/5 border border-white/10 rounded-xl pl-11 pr-4 py-2.5 text-sm focus:border-primary transition-all focus:outline-none"
            />
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-primary/50 transition-all">
              <span>Status: All</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
            <button className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-medium hover:border-primary/50 transition-all">
              <span>Company: All</span>
              <ChevronDown className="w-4 h-4 text-gray-500" />
            </button>
          </div>
        </div>

        {/* Models Table */}
        <div className="glass overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border-b border-white/5">
                <th className="p-5">
                  <div className="flex items-center space-x-1 cursor-pointer hover:text-white transition-colors">
                    <span>Model</span>
                    <ArrowUpDown className="w-3 h-3" />
                  </div>
                </th>
                <th className="p-5">Company</th>
                <th className="p-5">Category</th>
                <th className="p-5">Score</th>
                <th className="p-5">Views</th>
                <th className="p-5">Status</th>
                <th className="p-5">Featured</th>
                <th className="p-5">Updated</th>
                <th className="p-5">Actions</th>
              </tr>
            </thead>
            <tbody>
              {models.map((model, i) => (
                <motion.tr
                  key={model.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  className="border-b border-white/2 hover:bg-white/2 transition-colors"
                >
                  <td className="p-5">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-[10px] font-bold text-primary">
                        {model.name.charAt(0)}
                      </div>
                      <span className="font-bold text-sm">{model.name}</span>
                    </div>
                  </td>
                  <td className="p-5 text-sm text-gray-400">{model.company}</td>
                  <td className="p-5">
                    <span className="px-2.5 py-1 bg-white/5 rounded-md text-[10px] font-bold text-gray-400 border border-white/5">
                      {model.category}
                    </span>
                  </td>
                  <td className="p-5">
                    <span className="text-sm font-bold text-white">{model.score}</span>
                    <span className="text-xs text-gray-600">/100</span>
                  </td>
                  <td className="p-5 text-sm text-gray-400 font-mono">{model.views}</td>
                  <td className="p-5">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${
                      model.status === 'Published'
                        ? 'bg-green-500/10 text-green-500 border-green-500/20'
                        : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                    }`}>
                      {model.status}
                    </span>
                  </td>
                  <td className="p-5">
                    {model.featured ? (
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    ) : (
                      <Star className="w-4 h-4 text-gray-700" />
                    )}
                  </td>
                  <td className="p-5 text-xs text-gray-500">{model.updated}</td>
                  <td className="p-5">
                    <div className="flex items-center space-x-1">
                      <button className="p-1.5 rounded-lg hover:bg-white/5 text-gray-500 hover:text-white transition-all" title="View">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/5 text-gray-500 hover:text-primary transition-all" title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button className="p-1.5 rounded-lg hover:bg-white/5 text-gray-500 hover:text-red-400 transition-all" title="Delete">
                        <Trash2 className="w-4 h-4" />
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
          <p className="text-sm text-gray-500">Showing 1–8 of 58 models</p>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, '...', 8].map((page, i) => (
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
