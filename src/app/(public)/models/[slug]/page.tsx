'use client';

import Navbar from "@/components/layout/Navbar";
import { ModelCard } from "@/components/models/ModelCard";
import { motion } from "framer-motion";
import { 
  CheckCircle2, 
  XCircle, 
  ExternalLink, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  Cpu, 
  Globe2, 
  DollarSign,
  ArrowLeft,
  Star,
  ArrowLeftRight,
  FileText,
  BookOpen
} from "lucide-react";
import Link from "next/link";
import { use } from "react";
import { allModels } from "@/lib/data/models";

const capColors: Record<string, string> = {
  reasoning: 'bg-purple-500',
  coding: 'bg-blue-500',
  creativity: 'bg-pink-500',
  speed: 'bg-yellow-500',
  vision: 'bg-green-500',
};

export default function ModelDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const model = allModels.find(m => m.slug === slug);

  if (!model) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="pt-32 pb-20 container-custom flex-1 flex items-center justify-center">
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-red-500/10 rounded-2xl flex items-center justify-center mx-auto border border-red-500/20">
              <XCircle className="w-10 h-10 text-red-400" />
            </div>
            <h1 className="text-3xl font-bold font-outfit">Model Not Found</h1>
            <p className="text-gray-500">The model you're looking for doesn't exist or has been removed.</p>
            <Link href="/models" className="inline-block bg-primary hover:bg-primary/80 text-white px-8 py-3 rounded-xl font-bold transition-all">
              Browse All Models
            </Link>
          </div>
        </main>
      </div>
    );
  }

  const similarModels = allModels
    .filter(m => m.slug !== slug && m.status === 'published')
    .filter(m => m.categories.some(c => model.categories.includes(c)))
    .slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-32 pb-20 container-custom flex-1 space-y-12">
        {/* Back Link */}
        <Link href="/models" className="inline-flex items-center space-x-2 text-sm text-gray-500 hover:text-white transition-colors group">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Models</span>
        </Link>

        {/* Header Section */}
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center space-x-6"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center border border-primary/20 text-2xl font-bold text-primary">
                {model.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <h1 className="text-4xl font-bold font-outfit">{model.name}</h1>
                  <span className="px-3 py-1 bg-green-500/10 text-green-500 border border-green-500/20 rounded-full text-xs font-bold uppercase tracking-widest">
                    Live
                  </span>
                  {model.featured && (
                    <span className="px-3 py-1 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-500" /> Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-400 font-medium">{model.company} • {model.releaseDate}</p>
              </div>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-300 leading-relaxed max-w-3xl"
            >
              {model.fullDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {model.categories.map(cat => (
                <span key={cat} className="px-3 py-1.5 bg-white/5 rounded-lg border border-white/10 text-xs font-medium text-gray-400">
                  {cat}
                </span>
              ))}
            </motion.div>

            <div className="flex flex-wrap gap-4">
              <a href={model.websiteUrl} target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-primary/80 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/20 flex items-center space-x-2">
                <span>Visit Website</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a href={model.apiDocsUrl} target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all flex items-center space-x-2">
                <BookOpen className="w-4 h-4" />
                <span>API Docs</span>
              </a>
              <Link href={`/compare?models=${model.slug}`} className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-xl font-bold transition-all flex items-center space-x-2">
                <ArrowLeftRight className="w-4 h-4" />
                <span>Compare</span>
              </Link>
            </div>
          </div>

          {/* Quick Stats Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-8 space-y-8 h-fit"
          >
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="text-gray-500 text-sm font-medium">Platform Score</span>
              <span className="text-2xl font-bold text-primary">{model.score}/100</span>
            </div>
            
            <div className="space-y-6">
              {Object.entries(model.capabilities).map(([key, value]) => (
                <div key={key} className="space-y-2">
                  <div className="flex justify-between text-xs font-bold uppercase tracking-widest">
                    <span className="text-gray-500 capitalize">{key}</span>
                    <span>{value}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${value}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className={`h-full ${capColors[key] || 'bg-primary'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pros & Cons Section */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass p-8 space-y-6 bg-green-500/[0.02]"
          >
             <h3 className="text-xl font-bold flex items-center space-x-2 text-green-500">
               <CheckCircle2 className="w-6 h-6" />
               <span>Key Advantages</span>
             </h3>
             <ul className="space-y-4">
               {model.pros.map((pro, i) => (
                 <li key={i} className="flex items-start space-x-3 text-gray-400">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                    <span>{pro}</span>
                 </li>
               ))}
             </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="glass p-8 space-y-6 bg-red-500/[0.02]"
          >
             <h3 className="text-xl font-bold flex items-center space-x-2 text-red-400">
               <XCircle className="w-6 h-6" />
               <span>Limitations</span>
             </h3>
             <ul className="space-y-4">
               {model.cons.map((con, i) => (
                 <li key={i} className="flex items-start space-x-3 text-gray-400">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0" />
                    <span>{con}</span>
                 </li>
               ))}
             </ul>
          </motion.div>
        </div>

        {/* Technical Specs Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass overflow-hidden"
        >
           <div className="p-8 border-b border-white/5 flex items-center space-x-4">
              <BarChart3 className="text-primary w-6 h-6" />
              <h3 className="text-xl font-bold">Technical Specifications</h3>
           </div>
           <div className="grid md:grid-cols-2 lg:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-white/5">
              <div className="p-8 space-y-2">
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Context Window</p>
                 <p className="text-lg font-bold">{model.contextWindow >= 1000000 ? `${(model.contextWindow / 1000000).toFixed(0)}M` : `${(model.contextWindow / 1000).toFixed(0)}K`} tokens</p>
              </div>
              <div className="p-8 space-y-2">
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Max Output</p>
                 <p className="text-lg font-bold">{model.maxOutput.toLocaleString()} tokens</p>
              </div>
              <div className="p-8 space-y-2">
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Knowledge Cutoff</p>
                 <p className="text-lg font-bold">{model.knowledgeCutoff}</p>
              </div>
              <div className="p-8 space-y-2">
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Speed</p>
                 <p className="text-lg font-bold">{model.speed}</p>
              </div>
              <div className="p-8 space-y-2">
                 <p className="text-xs text-gray-500 font-bold uppercase tracking-widest">Modality</p>
                 <p className="text-lg font-bold">{model.multimodal}</p>
              </div>
           </div>
        </motion.div>

        {/* Pricing Section */}
        <div className="grid md:grid-cols-3 gap-8">
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.45 }}
             className="glass p-8 space-y-4 text-center"
           >
              <DollarSign className="w-8 h-8 text-blue-400 mx-auto" />
              <h4 className="font-bold text-gray-500 text-xs uppercase tracking-widest">Input Pricing</h4>
              <p className="text-2xl font-bold">{model.pricingInput !== null ? `$${model.pricingInput.toFixed(2)} / 1M` : 'Free'}</p>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.5 }}
             className="glass p-8 space-y-4 text-center"
           >
              <DollarSign className="w-8 h-8 text-purple-400 mx-auto" />
              <h4 className="font-bold text-gray-500 text-xs uppercase tracking-widest">Output Pricing</h4>
              <p className="text-2xl font-bold">{model.pricingOutput !== null ? `$${model.pricingOutput.toFixed(2)} / 1M` : 'Free'}</p>
           </motion.div>
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.55 }}
             className="glass p-8 space-y-4 text-center border-primary/20"
           >
              <Globe2 className="w-8 h-8 text-green-400 mx-auto" />
              <h4 className="font-bold text-gray-500 text-xs uppercase tracking-widest">Free Tier</h4>
              <p className="text-2xl font-bold">{model.hasFreeTier ? 'Available' : 'Not Available'}</p>
           </motion.div>
        </div>

        {/* Similar Models */}
        {similarModels.length > 0 && (
          <div className="space-y-8">
            <div className="flex items-end justify-between">
              <div className="space-y-2">
                <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Similar Models</h2>
                <h3 className="text-2xl font-bold font-outfit">You might also like</h3>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {similarModels.map(m => (
                <ModelCard
                  key={m.slug}
                  name={m.name}
                  slug={m.slug}
                  company={m.company}
                  description={m.shortDescription}
                  score={m.score / 10}
                  tags={m.categories.slice(0, 3)}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="py-12 border-t border-white/5 bg-background">
        <div className="container-custom flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
             <div className="w-6 h-6 bg-primary rounded-md flex items-center justify-center text-white text-[10px] font-bold">AMH</div>
             <span className="font-bold text-white">AI Models Hub</span>
          </div>
          <p>© 2024 AI Models Hub. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
