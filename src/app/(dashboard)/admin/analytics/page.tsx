'use client';

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { 
  BarChart3, 
  TrendingUp, 
  Eye, 
  Users, 
  Globe2, 
  Clock,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import { motion } from "framer-motion";

const topModels = [
  { name: 'GPT-4o', views: 12400, comparisons: 3200, ctr: 4.2 },
  { name: 'Claude 3.5 Sonnet', views: 8100, comparisons: 2100, ctr: 3.8 },
  { name: 'Gemini 1.5 Pro', views: 6500, comparisons: 1800, ctr: 2.9 },
  { name: 'Llama 3.1 405B', views: 4200, comparisons: 1100, ctr: 2.4 },
  { name: 'Mistral Large 2', views: 3100, comparisons: 800, ctr: 1.9 },
];

const topPages = [
  { page: '/models/gpt-4o', views: 12400, bounce: '28%', duration: '4:32' },
  { page: '/compare', views: 8900, bounce: '15%', duration: '6:45' },
  { page: '/', views: 7200, bounce: '42%', duration: '2:10' },
  { page: '/models/claude-3-5-sonnet', views: 6800, bounce: '31%', duration: '3:55' },
  { page: '/models', views: 5500, bounce: '35%', duration: '3:20' },
];

const trafficSources = [
  { source: 'Organic Search', percentage: 45, color: 'bg-green-500' },
  { source: 'Direct', percentage: 25, color: 'bg-blue-500' },
  { source: 'Social Media', percentage: 18, color: 'bg-purple-500' },
  { source: 'Referral', percentage: 8, color: 'bg-yellow-500' },
  { source: 'Email', percentage: 4, color: 'bg-red-500' },
];

export default function AdminAnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-[#020617]">
      <AdminSidebar />
      
      <main className="flex-1 ml-64 p-10 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold font-outfit">Analytics</h1>
            <p className="text-sm text-gray-500">Track performance, user engagement, and growth metrics.</p>
          </div>
          <div className="flex items-center space-x-3">
            <select className="bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-gray-400 focus:outline-none">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
              <option>This Year</option>
            </select>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Page Views', value: '45.2K', change: '+18%', up: true, icon: <Eye className="w-5 h-5 text-blue-400" /> },
            { label: 'Unique Visitors', value: '12.8K', change: '+25%', up: true, icon: <Users className="w-5 h-5 text-green-400" /> },
            { label: 'Avg. Session', value: '3:42', change: '+8%', up: true, icon: <Clock className="w-5 h-5 text-purple-400" /> },
            { label: 'Bounce Rate', value: '34%', change: '-5%', up: false, icon: <TrendingUp className="w-5 h-5 text-yellow-400" /> },
          ].map((stat, i) => (
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
                <span className={`text-xs font-bold px-2 py-1 rounded-md flex items-center space-x-1 ${
                  stat.up ? 'text-green-500 bg-green-500/10' : 'text-green-500 bg-green-500/10'
                }`}>
                  {stat.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                  <span>{stat.change}</span>
                </span>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest pt-1">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Charts Row */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Traffic Chart */}
          <div className="lg:col-span-2 glass p-8 space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">Visitor Trends</h3>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Views</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Users</span>
                </div>
              </div>
            </div>
            <div className="h-[280px] w-full flex items-end justify-between gap-2 px-2 pb-4">
              {[
                { v: 35, u: 20 }, { v: 45, u: 28 }, { v: 55, u: 35 }, { v: 40, u: 25 },
                { v: 65, u: 42 }, { v: 75, u: 50 }, { v: 60, u: 38 }, { v: 80, u: 55 },
                { v: 70, u: 45 }, { v: 90, u: 60 }, { v: 85, u: 58 }, { v: 95, u: 65 },
              ].map((d, i) => (
                <div key={i} className="flex-1 flex items-end gap-1">
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${d.v}%` }}
                    transition={{ delay: i * 0.05, duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-primary/20 to-primary rounded-t-md relative group"
                  >
                    <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-white text-black px-1.5 py-0.5 rounded text-[9px] font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {d.v * 100}
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: `${d.u}%` }}
                    transition={{ delay: i * 0.05 + 0.1, duration: 0.5 }}
                    className="flex-1 bg-gradient-to-t from-green-500/20 to-green-500 rounded-t-md"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between text-[9px] text-gray-600 font-bold uppercase px-2">
              {['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'].map(m => (
                <span key={m}>{m}</span>
              ))}
            </div>
          </div>

          {/* Traffic Sources */}
          <div className="glass p-8 space-y-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Globe2 className="w-5 h-5 text-gray-500" />
              Traffic Sources
            </h3>
            <div className="space-y-5">
              {trafficSources.map((source, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">{source.source}</span>
                    <span className="font-bold">{source.percentage}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${source.percentage}%` }}
                      transition={{ delay: i * 0.1, duration: 0.8 }}
                      className={`h-full ${source.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Tables */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Top Models */}
          <div className="glass p-8 space-y-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-primary" />
              Top Models by Views
            </h3>
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border-b border-white/5">
                  <th className="pb-4">Model</th>
                  <th className="pb-4">Views</th>
                  <th className="pb-4">Comparisons</th>
                  <th className="pb-4">CTR</th>
                </tr>
              </thead>
              <tbody>
                {topModels.map((model, i) => (
                  <tr key={i} className="border-b border-white/2 hover:bg-white/2 transition-colors">
                    <td className="py-3 font-bold text-sm">{model.name}</td>
                    <td className="py-3 text-sm text-gray-400 font-mono">{model.views.toLocaleString()}</td>
                    <td className="py-3 text-sm text-gray-400 font-mono">{model.comparisons.toLocaleString()}</td>
                    <td className="py-3 text-sm font-bold text-green-500">{model.ctr}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Top Pages */}
          <div className="glass p-8 space-y-6">
            <h3 className="font-bold text-lg flex items-center gap-2">
              <Eye className="w-5 h-5 text-blue-400" />
              Top Pages
            </h3>
            <table className="w-full text-left">
              <thead>
                <tr className="text-[10px] font-bold uppercase tracking-widest text-gray-500 border-b border-white/5">
                  <th className="pb-4">Page</th>
                  <th className="pb-4">Views</th>
                  <th className="pb-4">Bounce</th>
                  <th className="pb-4">Avg. Time</th>
                </tr>
              </thead>
              <tbody>
                {topPages.map((page, i) => (
                  <tr key={i} className="border-b border-white/2 hover:bg-white/2 transition-colors">
                    <td className="py-3 text-sm text-primary font-mono">{page.page}</td>
                    <td className="py-3 text-sm text-gray-400 font-mono">{page.views.toLocaleString()}</td>
                    <td className="py-3 text-sm text-gray-400">{page.bounce}</td>
                    <td className="py-3 text-sm text-gray-400">{page.duration}</td>
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
