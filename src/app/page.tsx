import Navbar from "@/components/layout/Navbar";
import Link from "next/link";
import { ModelCard } from "@/components/models/ModelCard";
import { Search, Sparkles, BarChart, Zap, Shield, Search as SearchIcon, ArrowLeftRight, TrendingUp, Users, Star, Code, Image, MessageSquare, Mic, Video, FileText } from 'lucide-react';
import { allModels } from "@/lib/data/models";

const featuredModels = allModels.filter(m => m.featured).slice(0, 4);
const latestModels = [...allModels].reverse().slice(0, 4);

const categoryIcons: Record<string, React.ReactNode> = {
  'Coding': <Code className="w-5 h-5" />,
  'Vision': <Image className="w-5 h-5" />,
  'Chat': <MessageSquare className="w-5 h-5" />,
  'Audio': <Mic className="w-5 h-5" />,
  'Video': <Video className="w-5 h-5" />,
  'Writing': <FileText className="w-5 h-5" />,
};

const quickCategories = ['Coding', 'Vision', 'Reasoning', 'Open Source', 'Chat', 'Multilingual'];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="container-custom relative z-10 text-center space-y-12">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full text-primary text-sm font-bold animate-pulse">
              <Sparkles className="w-4 h-4" />
              <span>v2.0 is now live — New Comparison Engine</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold font-outfit tracking-tight text-gradient">
              The Intelligence <br /> <span className="text-white">Comparison Engine</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Discover, compare, and choose the perfect AI model for your project. 
              Comprehensive data on GPT, Claude, Gemini, Mistral, and many more.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-xl transition-all group-hover:bg-primary/30" />
            <div className="relative flex items-center bg-background/50 backdrop-blur-2xl border border-white/10 rounded-2xl p-2">
              <SearchIcon className="ml-4 text-gray-500 w-6 h-6" />
              <input 
                type="text" 
                placeholder="Search models (e.g., GPT-4, Llama 3)..." 
                className="w-full bg-transparent border-none text-white placeholder-gray-500 focus:outline-none p-4 text-lg"
              />
              <Link href="/models" className="bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-xl font-bold transition-all">
                Search
              </Link>
            </div>
          </div>

          {/* Quick Categories */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {quickCategories.map((cat) => (
              <Link key={cat} href={`/models?category=${cat.toLowerCase()}`} className="glass px-4 py-2 text-xs font-medium text-gray-400 hover:text-white hover:border-primary/50 transition-all">
                {cat}
              </Link>
            ))}
          </div>
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      {/* Stats Bar */}
      <section className="py-8 border-y border-white/5 bg-white/[0.02]">
        <div className="container-custom flex flex-wrap justify-center gap-12 md:gap-24">
          {[
            { label: 'AI Models', value: `${allModels.filter(m => m.status === 'published').length}+`, icon: <BarChart className="w-5 h-5 text-primary" /> },
            { label: 'Companies', value: '10+', icon: <Users className="w-5 h-5 text-blue-400" /> },
            { label: 'Comparisons', value: '5.4K', icon: <ArrowLeftRight className="w-5 h-5 text-green-400" /> },
            { label: 'Active Users', value: '1.2K', icon: <TrendingUp className="w-5 h-5 text-purple-400" /> },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center space-x-3">
              {stat.icon}
              <div>
                <p className="text-xl font-bold">{stat.value}</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-24 container-custom">
        <div className="flex items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Featured Models</h2>
            <h3 className="text-4xl font-bold font-outfit">Top Rated This Week</h3>
          </div>
          <Link href="/models" className="text-sm font-bold text-gray-400 hover:text-white transition-colors">
            View All Models →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredModels.map((model) => (
            <ModelCard 
              key={model.slug} 
              name={model.name}
              slug={model.slug}
              company={model.company}
              description={model.shortDescription}
              score={model.score / 10}
              tags={model.categories.slice(0, 3)}
            />
          ))}
        </div>
      </section>

      {/* Categories Strip */}
      <section className="py-16 bg-secondary/20 border-y border-white/5">
        <div className="container-custom">
          <h3 className="text-sm font-bold text-primary uppercase tracking-[0.3em] text-center mb-12">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {Object.entries(categoryIcons).map(([name, icon]) => (
              <Link 
                key={name}
                href={`/models?category=${name.toLowerCase()}`}
                className="glass p-6 text-center space-y-3 hover:border-primary/30 hover:bg-primary/5 transition-all group"
              >
                <div className="w-12 h-12 mx-auto bg-white/5 rounded-xl flex items-center justify-center text-gray-400 group-hover:text-primary transition-colors border border-white/10 group-hover:border-primary/30">
                  {icon}
                </div>
                <p className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">{name}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features / Why Hub? */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Why AI Models Hub?</h2>
            <h3 className="text-4xl font-bold font-outfit">Everything you need to decide</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400 border border-blue-500/20">
                <BarChart className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold">Deep Comparisons</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Compare models across 50+ metrics including reasoning, speed, context window, and API costs.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400 border border-purple-500/20">
                <Zap className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold">Real-time Performance</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Live benchmarks for token latency and output speed across different regions and providers.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-green-500/10 rounded-xl flex items-center justify-center text-green-400 border border-green-500/20">
                <Shield className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold">Safe Selection</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Detailed privacy policies and security documentation to ensure your data stays compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Additions */}
      <section className="py-24 bg-secondary/20 border-y border-white/5">
        <div className="container-custom">
          <div className="flex items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Latest Additions</h2>
              <h3 className="text-4xl font-bold font-outfit">Newly Added Models</h3>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestModels.map((model) => (
              <ModelCard 
                key={model.slug} 
                name={model.name}
                slug={model.slug}
                company={model.company}
                description={model.shortDescription}
                score={model.score / 10}
                tags={model.categories.slice(0, 3)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-24 container-custom">
        <div className="glass p-12 overflow-hidden relative">
          <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold font-outfit leading-tight">
                Can't decide? <br /> <span className="text-primary">Compare them now.</span>
              </h3>
              <p className="text-gray-400 text-lg">
                Pick up to 4 models and see how they stack up in logic, creativity, and pricing.
              </p>
              <Link href="/compare" className="inline-block bg-white text-black hover:bg-gray-200 px-10 py-4 rounded-xl font-bold text-lg transition-all shadow-xl shadow-white/10">
                Open Comparison Tool
              </Link>
            </div>
            <div className="flex justify-center">
              {/* Visual representation of comparison */}
              <div className="relative w-64 h-64 bg-primary/20 rounded-full flex items-center justify-center animate-spin-slow">
                 <div className="absolute top-0 w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-xl text-sm font-bold">GPT</div>
                 <div className="absolute right-0 w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-xl text-sm font-bold">CLD</div>
                 <div className="absolute bottom-0 w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-xl text-sm font-bold">GEM</div>
                 <div className="absolute left-0 w-16 h-16 bg-white/10 rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-xl text-sm font-bold">LLM</div>
                 <ArrowLeftRight className="w-12 h-12 text-primary" />
              </div>
            </div>
          </div>
          {/* Bg glow */}
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10" />
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 container-custom">
        <div className="glass p-12 text-center space-y-8 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/10 rounded-full blur-[100px] -z-10" />
          <h3 className="text-3xl font-bold font-outfit">Stay Updated</h3>
          <p className="text-gray-400 max-w-md mx-auto">Get notified when new models are added or when benchmark results change.</p>
          <div className="flex max-w-md mx-auto gap-3">
            <input 
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-primary transition-all focus:outline-none"
            />
            <button className="bg-primary hover:bg-primary/80 text-white px-6 py-3 rounded-xl font-bold transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <footer className="mt-auto py-12 border-t border-white/5 bg-background">
        <div className="container-custom">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white text-[10px] font-bold">AMH</div>
                <span className="font-bold text-lg text-white">AI Models Hub</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">The comprehensive platform to explore, compare, and understand AI models.</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Platform</h4>
              <div className="space-y-2">
                <Link href="/models" className="block text-sm text-gray-400 hover:text-white transition-colors">All Models</Link>
                <Link href="/compare" className="block text-sm text-gray-400 hover:text-white transition-colors">Compare</Link>
                <Link href="/pricing" className="block text-sm text-gray-400 hover:text-white transition-colors">Pricing</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Company</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-sm text-gray-400 hover:text-white transition-colors">About</Link>
                <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Blog</Link>
                <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Legal</h4>
              <div className="space-y-2">
                <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
                <Link href="#" className="block text-sm text-gray-400 hover:text-white transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm pt-8 border-t border-white/5">
            <p>© 2024 AI Models Hub. All rights reserved.</p>
            <div className="flex items-center space-x-8">
              <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
              <Link href="#" className="hover:text-white transition-colors">GitHub</Link>
              <Link href="#" className="hover:text-white transition-colors">Discord</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
