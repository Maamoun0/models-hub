'use client';

import { Search, ChevronDown, Filter } from "lucide-react";
import { useState } from "react";

const categories = [
  "Coding", "Reasoning", "Vision", "Creative Writing", "Marketing", "Research", "Audio", "Video"
];

const companies = [
  "OpenAI", "Anthropic", "Google", "Meta", "Mistral", "Cohere", "Stability AI"
];

const pricing = [
  "Free", "Paid", "API Only", "Open Source"
];

export function FilterSidebar() {
  return (
    <aside className="w-full lg:w-72 space-y-8 h-fit lg:sticky lg:top-24">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <Filter className="w-4 h-4 text-primary" />
          Filters
        </h3>
        <button className="text-xs text-primary hover:underline">Reset All</button>
      </div>

      {/* Categories */}
      <div className="space-y-4">
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Categories</h4>
        <div className="space-y-3">
          {categories.map(cat => (
            <div key={cat} className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-4 h-4 rounded border border-white/10 group-hover:border-primary/50 flex items-center justify-center transition-colors">
                {/* Custom Checkbox placeholder */}
              </div>
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{cat}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Companies */}
      <div className="space-y-4 pt-6 border-t border-white/5">
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Companies</h4>
        <div className="space-y-3">
          {companies.map(comp => (
            <div key={comp} className="flex items-center space-x-3 group cursor-pointer">
              <div className="w-4 h-4 rounded border border-white/10 group-hover:border-primary/50 flex items-center justify-center transition-colors" />
              <span className="text-sm text-gray-400 group-hover:text-white transition-colors">{comp}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Speed Slider */}
      <div className="space-y-6 pt-6 border-t border-white/5">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Min. Speed</h4>
          <span className="text-xs text-primary font-bold">Fast</span>
        </div>
        <div className="px-2">
           <div className="h-1 w-full bg-white/5 rounded-full relative">
              <div className="absolute left-0 top-0 h-full w-2/3 bg-primary rounded-full" />
              <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-primary rounded-full shadow-lg" />
           </div>
        </div>
        <div className="flex justify-between text-[10px] text-gray-600 font-bold uppercase">
          <span>Slow</span>
          <span>Fast</span>
          <span>Ultra</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="space-y-4 pt-6 border-t border-white/5">
        <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Pricing</h4>
        <div className="flex flex-wrap gap-2">
          {pricing.map(p => (
            <button key={p} className="px-3 py-1.5 rounded-lg border border-white/5 bg-white/5 text-xs text-gray-400 hover:border-primary/30 hover:text-white transition-all">
              {p}
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}
