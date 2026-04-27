'use client';

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { 
  Save, 
  ArrowLeft, 
  Plus, 
  Trash2, 
  BrainCircuit, 
  Zap, 
  DollarSign, 
  Settings, 
  BarChart3,
  Globe2
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function NewModelPage() {
  const [categories, setCategories] = useState<string[]>(['Coding', 'Reasoning']);
  const [pros, setPros] = useState<string[]>(['High performance']);
  const [cons, setCons] = useState<string[]>(['Expensive API']);

  return (
    <div className="flex min-h-screen bg-[#020617]">
      <AdminSidebar />
      
      <main className="flex-1 ml-64 p-10 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/admin/models" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-500 hover:text-white transition-all">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="space-y-1">
              <h1 className="text-3xl font-bold font-outfit">Add New AI Model</h1>
              <p className="text-sm text-gray-500">Create a comprehensive profile for a new intelligence model.</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <button className="bg-white/5 hover:bg-white/10 text-white px-6 py-3 rounded-xl font-bold transition-all border border-white/10">
              Save Draft
            </button>
            <button className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 flex items-center space-x-2">
              <Save className="w-4 h-4" />
              <span>Publish Model</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Main Form */}
          <div className="lg:col-span-2 space-y-8">
            {/* General Info */}
            <div className="glass p-8 space-y-6">
              <div className="flex items-center space-x-2 text-primary">
                <Settings className="w-5 h-5" />
                <h3 className="font-bold text-lg">General Information</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Model Name</label>
                  <input type="text" placeholder="e.g. GPT-4o" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Company</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-all appearance-none">
                    <option>OpenAI</option>
                    <option>Anthropic</option>
                    <option>Google</option>
                    <option>Meta</option>
                    <option>Mistral</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Short Description</label>
                <textarea rows={3} placeholder="A brief overview of the model's purpose..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-all"></textarea>
              </div>
            </div>

            {/* Pros & Cons */}
            <div className="grid md:grid-cols-2 gap-8">
               {/* Pros */}
               <div className="glass p-8 space-y-6">
                  <h3 className="font-bold text-green-500 flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Key Pros
                  </h3>
                  <div className="space-y-3">
                     {pros.map((pro, i) => (
                       <div key={i} className="flex items-center gap-2">
                         <input type="text" value={pro} className="flex-1 bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-sm text-gray-300" />
                         <button className="text-gray-600 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                       </div>
                     ))}
                     <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                       <Plus className="w-3 h-3" /> Add Pro
                     </button>
                  </div>
               </div>
               {/* Cons */}
               <div className="glass p-8 space-y-6">
                  <h3 className="font-bold text-red-400 flex items-center gap-2">
                    <Trash2 className="w-4 h-4" />
                    Key Cons
                  </h3>
                  <div className="space-y-3">
                     {cons.map((con, i) => (
                       <div key={i} className="flex items-center gap-2">
                         <input type="text" value={con} className="flex-1 bg-white/5 border border-white/5 rounded-lg px-3 py-2 text-sm text-gray-300" />
                         <button className="text-gray-600 hover:text-red-400"><Trash2 className="w-4 h-4" /></button>
                       </div>
                     ))}
                     <button className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">
                       <Plus className="w-3 h-3" /> Add Con
                     </button>
                  </div>
               </div>
            </div>

            {/* Pricing */}
            <div className="glass p-8 space-y-6">
              <div className="flex items-center space-x-2 text-primary">
                <DollarSign className="w-5 h-5" />
                <h3 className="font-bold text-lg">Pricing & Tokens</h3>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Input ($/1M)</label>
                  <input type="number" placeholder="5.00" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Output ($/1M)</label>
                  <input type="number" placeholder="15.00" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-500 uppercase tracking-widest">Context Window</label>
                  <input type="text" placeholder="128k" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary focus:outline-none transition-all" />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Sidebar Form */}
          <div className="space-y-8">
            {/* Capabilities */}
            <div className="glass p-8 space-y-8">
              <div className="flex items-center space-x-2 text-primary">
                <BarChart3 className="w-5 h-5" />
                <h3 className="font-bold text-lg">Capabilities (1-10)</h3>
              </div>
              <div className="space-y-6">
                {['Reasoning', 'Coding', 'Creativity', 'Speed', 'Vision'].map((cap) => (
                  <div key={cap} className="space-y-3">
                    <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                      <span className="text-gray-500">{cap}</span>
                      <span className="text-white">8/10</span>
                    </div>
                    <div className="h-1.5 w-full bg-white/5 rounded-full relative">
                      <div className="absolute left-0 top-0 h-full w-[80%] bg-primary rounded-full" />
                      <div className="absolute left-[80%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags & Categories */}
            <div className="glass p-8 space-y-6">
               <h3 className="font-bold text-lg">Categories</h3>
               <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <span key={cat} className="px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary flex items-center gap-2">
                      {cat}
                      <button className="hover:text-white"><Plus className="w-3 h-3 rotate-45" /></button>
                    </span>
                  ))}
                  <button className="px-3 py-1 border border-dashed border-white/10 rounded-full text-xs text-gray-500 hover:border-primary hover:text-primary transition-all">
                    + Add
                  </button>
               </div>
            </div>

            {/* Links */}
            <div className="glass p-8 space-y-6">
               <h3 className="font-bold text-lg flex items-center gap-2">
                 <Globe2 className="w-5 h-5 text-gray-500" />
                 Official Links
               </h3>
               <div className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Website URL</label>
                    <input type="text" placeholder="https://..." className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-primary focus:outline-none" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">API Documentation</label>
                    <input type="text" placeholder="https://docs..." className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-primary focus:outline-none" />
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
