'use client';

import Navbar from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { Plus, Share2, Download, Search, X, Check, ChevronDown, Zap as ZapIcon, BrainCircuit, DollarSign, Clock, ShieldCheck, Eye, Sparkles, ArrowLeftRight } from "lucide-react";
import { useState, useMemo } from "react";
import { allModels, type AIModelData } from "@/lib/data/models";
import Link from "next/link";

const comparisonFields = [
  { label: "Reasoning & Logic", key: "reasoning", icon: <BrainCircuit className="w-4 h-4 text-purple-400" /> },
  { label: "Coding Proficiency", key: "coding", icon: <ZapIcon className="w-4 h-4 text-blue-400" /> },
  { label: "Creativity", key: "creativity", icon: <Sparkles className="w-4 h-4 text-pink-400" /> },
  { label: "Speed Score", key: "speed_score", icon: <Clock className="w-4 h-4 text-yellow-400" /> },
  { label: "Vision/Multimodal", key: "vision", icon: <Eye className="w-4 h-4 text-green-400" /> },
];

const publishedModels = allModels.filter(m => m.status === 'published');

export default function ComparePage() {
  const [selectedModels, setSelectedModels] = useState<AIModelData[]>([
    publishedModels[0],
    publishedModels[1]
  ]);
  const [showSelector, setShowSelector] = useState<number | null>(null);
  const [selectorSearch, setSelectorSearch] = useState('');

  const filteredSelectorModels = useMemo(() => {
    if (!selectorSearch) return publishedModels;
    const q = selectorSearch.toLowerCase();
    return publishedModels.filter(m =>
      m.name.toLowerCase().includes(q) || m.company.toLowerCase().includes(q)
    );
  }, [selectorSearch]);

  const addModel = () => {
    if (selectedModels.length >= 4) return;
    const available = publishedModels.find(m => !selectedModels.some(s => s.slug === m.slug));
    if (available) {
      setSelectedModels([...selectedModels, available]);
    }
  };

  const removeModel = (index: number) => {
    if (selectedModels.length <= 2) return;
    setSelectedModels(selectedModels.filter((_, i) => i !== index));
  };

  const selectModel = (model: AIModelData, slotIndex: number) => {
    const updated = [...selectedModels];
    updated[slotIndex] = model;
    setSelectedModels(updated);
    setShowSelector(null);
    setSelectorSearch('');
  };

  const getBestValue = (key: string, models: AIModelData[]) => {
    if (key === 'pricingInput' || key === 'pricingOutput') {
      const vals = models.map(m => (m as any)[key] ?? Infinity);
      const min = Math.min(...vals);
      return models.map(m => ((m as any)[key] ?? Infinity) === min);
    }
    const vals = models.map(m => {
      if (key === 'speed_score') return m.capabilities.speed || 0;
      return m.capabilities[key] || 0;
    });
    const max = Math.max(...vals);
    return models.map(m => {
      const v = key === 'speed_score' ? (m.capabilities.speed || 0) : (m.capabilities[key] || 0);
      return v === max;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-32 pb-20 container-custom flex-1 space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.3em]">Comparison Engine</h2>
            <h1 className="text-4xl md:text-5xl font-bold font-outfit tracking-tight">
              Compare <span className="text-white">AI Models</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-white/10 transition-all">
              <Share2 className="w-4 h-4" />
              <span>Share</span>
            </button>
            <button className="flex items-center space-x-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:bg-primary/80 transition-all shadow-lg shadow-primary/20">
              <Download className="w-4 h-4" />
              <span>Export PDF</span>
            </button>
          </div>
        </div>

        {/* Model Selection Slots */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {selectedModels.map((model, index) => (
            <div key={`${model.slug}-${index}`} className="glass p-5 border-primary/30 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold text-primary uppercase tracking-widest">Model {index + 1}</span>
                <div className="flex items-center space-x-2">
                  <button onClick={() => setShowSelector(index)} className="text-gray-500 hover:text-white text-xs">Change</button>
                  {selectedModels.length > 2 && (
                    <button onClick={() => removeModel(index)} className="text-gray-500 hover:text-red-400 text-xs">
                      <X className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold">{model.name}</h3>
              <p className="text-sm text-gray-500">{model.company} • {model.categories[0]}</p>
              <div className="absolute top-0 right-0 p-2 opacity-20 group-hover:opacity-40 transition-opacity">
                <div className="w-16 h-16 bg-primary rounded-full blur-2xl" />
              </div>

              {/* Selector Dropdown */}
              {showSelector === index && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute inset-x-0 top-full z-50 mt-2 mx-2 bg-gray-900 border border-white/10 rounded-xl shadow-2xl max-h-64 overflow-hidden"
                >
                  <div className="p-3 border-b border-white/5">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                      <input
                        type="text"
                        value={selectorSearch}
                        onChange={e => setSelectorSearch(e.target.value)}
                        placeholder="Search models..."
                        className="w-full bg-white/5 border border-white/10 rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:border-primary"
                        autoFocus
                      />
                    </div>
                  </div>
                  <div className="overflow-y-auto max-h-48">
                    {filteredSelectorModels.map(m => (
                      <button
                        key={m.slug}
                        onClick={() => selectModel(m, index)}
                        className={`w-full text-left px-4 py-2.5 text-sm hover:bg-white/5 transition-colors flex items-center justify-between ${
                          selectedModels.some(s => s.slug === m.slug) ? 'text-primary' : 'text-gray-300'
                        }`}
                      >
                        <div>
                          <span className="font-bold">{m.name}</span>
                          <span className="text-xs text-gray-500 ml-2">{m.company}</span>
                        </div>
                        {selectedModels.some(s => s.slug === m.slug) && <Check className="w-4 h-4" />}
                      </button>
                    ))}
                  </div>
                  <div className="p-2 border-t border-white/5">
                    <button onClick={() => { setShowSelector(null); setSelectorSearch(''); }} className="w-full text-center text-xs text-gray-500 hover:text-white py-1">
                      Close
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          ))}

          {/* Add Model Slot */}
          {selectedModels.length < 4 && (
            <button
              onClick={addModel}
              className="glass p-5 border-dashed border-white/10 hover:border-primary/50 transition-all flex flex-col items-center justify-center space-y-3 group bg-white/[0.02]"
            >
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-primary/10 group-hover:border-primary transition-all">
                <Plus className="w-5 h-5 text-gray-500 group-hover:text-primary transition-all" />
              </div>
              <span className="text-xs font-bold text-gray-500 group-hover:text-white transition-all">Add Model</span>
            </button>
          )}
        </div>

        {/* Main Comparison Table */}
        <div className="glass overflow-hidden">
          <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
            <div className="flex items-center space-x-4">
               <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary">
                 <ArrowLeftRight className="w-5 h-5" />
               </div>
               <div>
                 <h3 className="font-bold">Feature Matrix</h3>
                 <p className="text-xs text-gray-500">Detailed side-by-side technical breakdown</p>
               </div>
            </div>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-6 text-left min-w-[200px] border-b border-white/5">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Criteria</span>
                  </th>
                  {selectedModels.map((model, idx) => (
                    <th key={idx} className="p-6 text-center min-w-[220px] border-b border-white/5 bg-white/[0.02]">
                      <div className="space-y-2">
                        <h4 className="text-lg font-bold">{model.name}</h4>
                        <p className="text-xs text-primary font-bold uppercase tracking-widest">{model.company}</p>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Capability scores */}
                {comparisonFields.map((field, idx) => {
                  const best = getBestValue(field.key === 'speed_score' ? 'speed_score' : field.key, selectedModels);
                  return (
                    <tr key={idx} className="group hover:bg-white/[0.02] transition-colors">
                      <td className="p-6 border-b border-white/5">
                        <div className="flex items-center space-x-3">
                          {field.icon}
                          <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{field.label}</span>
                        </div>
                      </td>
                      {selectedModels.map((model, mIdx) => {
                        const value = field.key === 'speed_score' 
                          ? (model.capabilities.speed || 0) 
                          : (model.capabilities[field.key] || 0);
                        return (
                          <td key={mIdx} className={`p-6 text-center border-b border-white/5 border-l border-white/[0.02] ${best[mIdx] ? 'bg-primary/5' : ''}`}>
                            <div className="space-y-2">
                              <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1">
                                <span>Score</span>
                                <span className={best[mIdx] ? 'text-primary' : ''}>{value}%</span>
                              </div>
                              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <motion.div 
                                  initial={{ width: 0 }}
                                  whileInView={{ width: `${value}%` }}
                                  className={`h-full ${best[mIdx] ? 'bg-primary' : 'bg-gray-600'}`}
                                />
                              </div>
                            </div>
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}
                
                {/* Pricing rows */}
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 border-b border-white/5">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-400">Input Price ($/1M)</span>
                    </div>
                  </td>
                  {selectedModels.map((model, idx) => {
                    const best = getBestValue('pricingInput', selectedModels);
                    return (
                      <td key={idx} className={`p-6 text-center border-b border-white/5 border-l border-white/[0.02] ${best[idx] ? 'bg-green-500/5' : ''}`}>
                        <span className={`text-sm font-bold ${best[idx] ? 'text-green-400' : 'text-white'}`}>
                          {model.pricingInput !== null ? `$${model.pricingInput.toFixed(2)}` : 'Free'}
                        </span>
                      </td>
                    );
                  })}
                </tr>
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 border-b border-white/5">
                    <div className="flex items-center space-x-3">
                      <DollarSign className="w-4 h-4 text-gray-400" />
                      <span className="text-sm font-medium text-gray-400">Output Price ($/1M)</span>
                    </div>
                  </td>
                  {selectedModels.map((model, idx) => {
                    const best = getBestValue('pricingOutput', selectedModels);
                    return (
                      <td key={idx} className={`p-6 text-center border-b border-white/5 border-l border-white/[0.02] ${best[idx] ? 'bg-green-500/5' : ''}`}>
                        <span className={`text-sm font-bold ${best[idx] ? 'text-green-400' : 'text-white'}`}>
                          {model.pricingOutput !== null ? `$${model.pricingOutput.toFixed(2)}` : 'Free'}
                        </span>
                      </td>
                    );
                  })}
                </tr>

                {/* Specs rows */}
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 border-b border-white/5 text-sm font-medium text-gray-400">Context Window</td>
                  {selectedModels.map((model, idx) => (
                    <td key={idx} className="p-6 text-center border-b border-white/5 border-l border-white/[0.02]">
                      <span className="text-sm font-bold text-white">
                        {model.contextWindow >= 1000000 ? `${(model.contextWindow/1000000).toFixed(0)}M` : `${(model.contextWindow/1000).toFixed(0)}K`}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 border-b border-white/5 text-sm font-medium text-gray-400">Speed</td>
                  {selectedModels.map((model, idx) => (
                    <td key={idx} className="p-6 text-center border-b border-white/5 border-l border-white/[0.02]">
                      <span className="text-sm font-bold text-white">{model.speed}</span>
                    </td>
                  ))}
                </tr>
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 border-b border-white/5 text-sm font-medium text-gray-400">Free Tier</td>
                  {selectedModels.map((model, idx) => (
                    <td key={idx} className="p-6 text-center border-b border-white/5 border-l border-white/[0.02]">
                      {model.hasFreeTier ? (
                        <Check className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-red-500 mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="group hover:bg-white/[0.02] transition-colors">
                  <td className="p-6 border-b border-white/5 text-sm font-medium text-gray-400">Multimodal</td>
                  {selectedModels.map((model, idx) => (
                    <td key={idx} className="p-6 text-center border-b border-white/5 border-l border-white/[0.02]">
                      <span className="text-sm font-bold text-white">{model.multimodal}</span>
                    </td>
                  ))}
                </tr>

                {/* Overall score */}
                <tr className="bg-white/[0.02]">
                  <td className="p-6 text-sm font-bold text-white">Overall Score</td>
                  {selectedModels.map((model, idx) => (
                    <td key={idx} className="p-6 text-center border-l border-white/[0.02]">
                      <span className="text-2xl font-bold text-primary">{model.score}</span>
                      <span className="text-sm text-gray-500">/100</span>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Comparison Insight Section */}
        <div className="grid md:grid-cols-2 gap-8 pt-4">
           <div className="glass p-8 space-y-6">
             <h4 className="text-xl font-bold flex items-center gap-2">
               <ZapIcon className="w-5 h-5 text-yellow-500" />
               Quick Verdict
             </h4>
             <p className="text-gray-400 leading-relaxed italic">
               {selectedModels.length >= 2 && (() => {
                 const byScore = [...selectedModels].sort((a, b) => b.score - a.score);
                 const byCost = [...selectedModels].sort((a, b) => (a.pricingInput || 0) - (b.pricingInput || 0));
                 return (
                   <>
                     &ldquo;For overall performance, <strong className="text-white">{byScore[0].name}</strong> leads with a score of {byScore[0].score}/100. 
                     For the best value, consider <strong className="text-white">{byCost[0].name}</strong> with the lowest input pricing.&rdquo;
                   </>
                 );
               })()}
             </p>
           </div>
           
           <div className="glass p-8 flex items-center justify-between">
             <div className="space-y-2">
               <h4 className="text-xl font-bold">Need a Custom Report?</h4>
               <p className="text-sm text-gray-500 max-w-xs">Get a detailed PDF analysis including custom benchmarks for your team.</p>
             </div>
             <button className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-xl font-bold transition-all border border-white/10">
               Generate Pro Report
             </button>
           </div>
        </div>
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
