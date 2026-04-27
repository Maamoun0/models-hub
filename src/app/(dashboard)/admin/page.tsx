'use client';

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { 
  Users, 
  BarChart, 
  Eye, 
  ArrowUpRight, 
  TrendingUp, 
  Activity,
  History
} from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  { label: 'Total Users', value: '1,284', change: '+12%', icon: <Users className="w-5 h-5 text-blue-400" /> },
  { label: 'Model Comparisons', value: '5,492', change: '+25%', icon: <TrendingUp className="w-5 h-5 text-green-400" /> },
  { label: 'Active Sessions', value: '342', change: '+5%', icon: <Activity className="w-5 h-5 text-purple-400" /> },
  { label: 'Total Views', value: '45.2K', change: '+18%', icon: <Eye className="w-5 h-5 text-yellow-400" /> },
];

export default function AdminOverview() {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      <AdminSidebar />
      
      <main className="flex-1 ml-64 p-10 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold font-outfit">Dashboard Overview</h1>
            <p className="text-sm text-gray-500">Welcome back, Admin. Here's what's happening today.</p>
          </div>
          <div className="text-right">
             <p className="text-sm font-bold text-white">April 25, 2026</p>
             <p className="text-xs text-gray-500">Last updated: 5 mins ago</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="glass p-6 space-y-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                  {stat.icon}
                </div>
                <span className="text-xs font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded-md">
                  {stat.change}
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-widest pt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts & Activity */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Chart Placeholder */}
          <div className="lg:col-span-2 glass p-8 space-y-6">
            <div className="flex items-center justify-between">
               <h3 className="font-bold text-lg">Traffic & Engagement</h3>
               <select className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-xs text-gray-400 focus:outline-none">
                 <option>Last 7 Days</option>
                 <option>Last 30 Days</option>
               </select>
            </div>
            <div className="h-[300px] w-full flex items-end justify-between px-4 pb-4">
              {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                <motion.div 
                  key={i}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="w-12 bg-gradient-to-t from-primary/20 to-primary rounded-t-lg relative group"
                >
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black px-2 py-1 rounded text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {h}k
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-gray-600 font-bold uppercase px-4">
              <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass p-8 space-y-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <History className="w-5 h-5 text-gray-500" />
              Recent Actions
            </h3>
            <div className="space-y-6">
              {[
                { user: 'Admin', action: 'Added model', target: 'GPT-4o', time: '12 min ago' },
                { user: 'System', action: 'New subscription', target: 'Pro Plan', time: '45 min ago' },
                { user: 'Editor', action: 'Updated pricing', target: 'Claude 3', time: '2 hours ago' },
                { user: 'Admin', action: 'Featured model', target: 'Llama 3', time: '5 hours ago' },
              ].map((item, i) => (
                <div key={i} className="flex items-start space-x-4 border-l-2 border-primary/20 pl-4 py-1">
                  <div className="space-y-1">
                    <p className="text-sm font-medium">
                      <span className="text-white">{item.user}</span> 
                      <span className="text-gray-500"> {item.action} </span> 
                      <span className="text-primary">{item.target}</span>
                    </p>
                    <p className="text-[10px] text-gray-600 font-bold uppercase">{item.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full text-center text-xs font-bold text-primary hover:underline pt-4">
              View Audit Logs
            </button>
          </div>
        </div>

        {/* Popular Models List */}
        <div className="glass p-8 space-y-6">
           <h3 className="font-bold text-lg">Trending Models</h3>
           <div className="overflow-x-auto">
             <table className="w-full text-left">
               <thead>
                 <tr className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border-b border-white/5">
                   <th className="pb-4 px-4">Model Name</th>
                   <th className="pb-4 px-4">Company</th>
                   <th className="pb-4 px-4">Views</th>
                   <th className="pb-4 px-4">Conversions</th>
                   <th className="pb-4 px-4">Status</th>
                 </tr>
               </thead>
               <tbody>
                 {[
                   { name: 'GPT-4o', company: 'OpenAI', views: '12.4k', conv: '4.2%', status: 'Published' },
                   { name: 'Claude 3.5 Sonnet', company: 'Anthropic', views: '8.1k', conv: '3.8%', status: 'Published' },
                   { name: 'Gemini 1.5 Pro', company: 'Google', views: '6.5k', conv: '2.9%', status: 'Published' },
                 ].map((row, i) => (
                   <tr key={i} className="border-b border-white/2 hover:bg-white/2 transition-colors">
                     <td className="py-4 px-4 font-bold">{row.name}</td>
                     <td className="py-4 px-4 text-gray-400 text-sm">{row.company}</td>
                     <td className="py-4 px-4 font-mono text-sm">{row.views}</td>
                     <td className="py-4 px-4 text-green-500 text-sm font-bold">{row.conv}</td>
                     <td className="py-4 px-4">
                       <span className="px-2 py-1 bg-green-500/10 text-green-500 text-[10px] font-bold rounded-full border border-green-500/20 uppercase tracking-widest">
                         {row.status}
                       </span>
                     </td>
                   </tr>
                 ))}
               </tbody>
             </table>
           </div>
        </div>
      </main>
    </div>
  );
}

