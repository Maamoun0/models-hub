'use client';

import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { 
  Settings, 
  Globe2, 
  Shield, 
  Bell, 
  Palette, 
  Database,
  Key,
  Save,
  RefreshCw,
  ToggleLeft,
  ToggleRight,
  ExternalLink
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

function Toggle({ enabled, onToggle }: { enabled: boolean; onToggle: () => void }) {
  return (
    <button onClick={onToggle} className="relative">
      {enabled ? (
        <ToggleRight className="w-10 h-6 text-primary" />
      ) : (
        <ToggleLeft className="w-10 h-6 text-gray-600" />
      )}
    </button>
  );
}

export default function AdminSettingsPage() {
  const [darkMode, setDarkMode] = useState(true);
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [autoCache, setAutoCache] = useState(true);
  const [rtl, setRtl] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#020617]">
      <AdminSidebar />
      
      <main className="flex-1 ml-64 p-10 space-y-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold font-outfit">Settings</h1>
            <p className="text-sm text-gray-500">Configure platform settings, SEO, integrations, and more.</p>
          </div>
          <button className="bg-primary hover:bg-primary/80 text-white px-6 py-2.5 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 flex items-center space-x-2 text-sm">
            <Save className="w-4 h-4" />
            <span>Save Changes</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Main Settings */}
          <div className="lg:col-span-2 space-y-8">
            {/* General */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass p-8 space-y-6"
            >
              <div className="flex items-center space-x-3 text-primary">
                <Settings className="w-5 h-5" />
                <h3 className="font-bold text-lg">General Settings</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Site Title</label>
                  <input type="text" defaultValue="AI Models Hub" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary transition-all focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Site URL</label>
                  <input type="text" defaultValue="https://aimodelshub.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary transition-all focus:outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Meta Description</label>
                <textarea rows={3} defaultValue="The comprehensive platform to explore, compare, and understand AI models." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary transition-all focus:outline-none" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Default Language</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-gray-400 focus:outline-none appearance-none">
                  <option>English</option>
                  <option>العربية (Arabic)</option>
                </select>
              </div>
            </motion.div>

            {/* SEO Settings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass p-8 space-y-6"
            >
              <div className="flex items-center space-x-3 text-blue-400">
                <Globe2 className="w-5 h-5" />
                <h3 className="font-bold text-lg">SEO & Indexing</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Google Search Console</label>
                  <input type="text" placeholder="Verification code" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary transition-all focus:outline-none" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Canonical URL</label>
                  <input type="text" defaultValue="https://aimodelshub.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary transition-all focus:outline-none" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">robots.txt</label>
                <textarea rows={4} defaultValue="User-agent: *\nAllow: /\nSitemap: https://aimodelshub.com/sitemap.xml" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm font-mono focus:border-primary transition-all focus:outline-none" />
              </div>
            </motion.div>

            {/* API & Integrations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass p-8 space-y-6"
            >
              <div className="flex items-center space-x-3 text-purple-400">
                <Key className="w-5 h-5" />
                <h3 className="font-bold text-lg">API & Integrations</h3>
              </div>
              <div className="space-y-4">
                {[
                  { name: 'Stripe', status: 'Connected', key: 'sk_live_...Bx4F' },
                  { name: 'Resend (Email)', status: 'Connected', key: 're_...8kJm' },
                  { name: 'Algolia (Search)', status: 'Not Connected', key: '' },
                  { name: 'Sentry (Monitoring)', status: 'Connected', key: 'dsn_...5Tx' },
                ].map((integration, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-white/2 rounded-xl border border-white/5">
                    <div className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full ${integration.status === 'Connected' ? 'bg-green-500' : 'bg-gray-600'}`} />
                      <span className="text-sm font-bold">{integration.name}</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      {integration.key && (
                        <span className="text-xs font-mono text-gray-500">{integration.key}</span>
                      )}
                      <button className="text-xs text-primary hover:underline font-bold">
                        {integration.status === 'Connected' ? 'Configure' : 'Connect'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Feature Flags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass p-8 space-y-6"
            >
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-400" />
                Feature Flags
              </h3>
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Dark Mode Only</span>
                  <Toggle enabled={darkMode} onToggle={() => setDarkMode(!darkMode)} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Maintenance Mode</span>
                  <Toggle enabled={maintenanceMode} onToggle={() => setMaintenanceMode(!maintenanceMode)} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Email Notifications</span>
                  <Toggle enabled={emailNotifs} onToggle={() => setEmailNotifs(!emailNotifs)} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Auto Cache Clear</span>
                  <Toggle enabled={autoCache} onToggle={() => setAutoCache(!autoCache)} />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">RTL Support</span>
                  <Toggle enabled={rtl} onToggle={() => setRtl(!rtl)} />
                </div>
              </div>
            </motion.div>

            {/* Cache & Performance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass p-8 space-y-6"
            >
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Database className="w-5 h-5 text-yellow-400" />
                Cache & Performance
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-white/2 rounded-xl border border-white/5 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Cache Size</span>
                    <span className="font-bold">248 MB</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full w-[60%] bg-yellow-500 rounded-full" />
                  </div>
                </div>
                <button className="w-full flex items-center justify-center space-x-2 bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 py-3 rounded-xl font-bold transition-all text-sm">
                  <RefreshCw className="w-4 h-4" />
                  <span>Clear All Cache</span>
                </button>
                <button className="w-full flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 rounded-xl font-bold transition-all text-sm">
                  <Database className="w-4 h-4" />
                  <span>Revalidate ISR Pages</span>
                </button>
              </div>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="glass p-8 space-y-6"
            >
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Bell className="w-5 h-5 text-purple-400" />
                Alert Channels
              </h3>
              <div className="space-y-3">
                {['Error alerts (Sentry)', 'New subscription', 'New user signup', 'API rate limit hit'].map((alert, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-white/2 rounded-lg border border-white/5">
                    <span className="text-xs text-gray-400">{alert}</span>
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
