'use client';

import Navbar from "@/components/layout/Navbar";
import { ModelCard } from "@/components/models/ModelCard";
import { Search, SlidersHorizontal, Grid, List, ChevronDown, Filter, X } from "lucide-react";
import { useState, useMemo } from "react";
import { allModels, companies, categories as allCategories } from "@/lib/data/models";
import Link from "next/link";

const pricingOptions = ['Free', 'Paid', 'API Only', 'Open Source'];
const sortOptions = [
  { label: 'Top Rated', value: 'score' },
  { label: 'Newest', value: 'newest' },
  { label: 'Cheapest', value: 'cheapest' },
  { label: 'Name (A-Z)', value: 'name' },
];

export default function ModelsPage() {
  const [view, setView] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedCompanies, setSelectedCompanies] = useState<string[]>([]);
  const [selectedPricing, setSelectedPricing] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('score');

  const publishedModels = allModels.filter(m => m.status === 'published');

  const filteredModels = useMemo(() => {
    let result = [...publishedModels];

    // Search
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(m =>
        m.name.toLowerCase().includes(q) ||
        m.company.toLowerCase().includes(q) ||
        m.shortDescription.toLowerCase().includes(q) ||
        m.categories.some(c => c.toLowerCase().includes(q))
      );
    }

    // Category filter
    if (selectedCategories.length > 0) {
      result = result.filter(m =>
        selectedCategories.some(sc => m.categories.some(c => c.toLowerCase() === sc.toLowerCase()))
      );
    }

    // Company filter
    if (selectedCompanies.length > 0) {
      result = result.filter(m =>
        selectedCompanies.includes(m.company)
      );
    }

    // Pricing filter
    if (selectedPricing.length > 0) {
      result = result.filter(m => {
        if (selectedPricing.includes('Free') && m.hasFreeTier) return true;
        if (selectedPricing.includes('Paid') && !m.hasFreeTier) return true;
        if (selectedPricing.includes('Open Source') && m.categories.includes('Open Source')) return true;
        return false;
      });
    }

    // Sort
    switch (sortBy) {
      case 'score':
        result.sort((a, b) => b.score - a.score);
        break;
      case 'newest':
        result.sort((a, b) => parseInt(b.id) - parseInt(a.id));
        break;
      case 'cheapest':
        result.sort((a, b) => (a.pricingInput || 0) - (b.pricingInput || 0));
        break;
      case 'name':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
    }

    return result;
  }, [searchQuery, selectedCategories, selectedCompanies, selectedPricing, sortBy, publishedModels]);

  const toggleCategory = (cat: string) => {
    setSelectedCategories(prev =>
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const toggleCompany = (comp: string) => {
    setSelectedCompanies(prev =>
      prev.includes(comp) ? prev.filter(c => c !== comp) : [...prev, comp]
    );
  };

  const togglePricing = (p: string) => {
    setSelectedPricing(prev =>
      prev.includes(p) ? prev.filter(x => x !== p) : [...prev, p]
    );
  };

  const resetFilters = () => {
    setSelectedCategories([]);
    setSelectedCompanies([]);
    setSelectedPricing([]);
    setSearchQuery('');
    setSortBy('score');
  };

  const activeFilterCount = selectedCategories.length + selectedCompanies.length + selectedPricing.length;

  const displayCategories = ['Coding', 'Reasoning', 'Vision', 'Creative Writing', 'Marketing', 'Research', 'Audio', 'Video'];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="pt-32 pb-20 container-custom flex-1">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <aside className="w-full lg:w-72 space-y-8 h-fit lg:sticky lg:top-24">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg flex items-center gap-2">
                <Filter className="w-4 h-4 text-primary" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-primary text-white text-[10px] px-2 py-0.5 rounded-full font-bold">{activeFilterCount}</span>
                )}
              </h3>
              <button onClick={resetFilters} className="text-xs text-primary hover:underline">Reset All</button>
            </div>

            {/* Categories */}
            <div className="space-y-4">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Categories</h4>
              <div className="space-y-3">
                {displayCategories.map(cat => (
                  <div key={cat} className="flex items-center space-x-3 group cursor-pointer" onClick={() => toggleCategory(cat)}>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      selectedCategories.includes(cat) ? 'bg-primary border-primary' : 'border-white/10 group-hover:border-primary/50'
                    }`}>
                      {selectedCategories.includes(cat) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm transition-colors ${selectedCategories.includes(cat) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{cat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Companies */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Companies</h4>
              <div className="space-y-3">
                {companies.slice(0, 7).map(comp => (
                  <div key={comp.name} className="flex items-center space-x-3 group cursor-pointer" onClick={() => toggleCompany(comp.name)}>
                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                      selectedCompanies.includes(comp.name) ? 'bg-primary border-primary' : 'border-white/10 group-hover:border-primary/50'
                    }`}>
                      {selectedCompanies.includes(comp.name) && (
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-sm transition-colors ${selectedCompanies.includes(comp.name) ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>{comp.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="space-y-4 pt-6 border-t border-white/5">
              <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">Pricing</h4>
              <div className="flex flex-wrap gap-2">
                {pricingOptions.map(p => (
                  <button
                    key={p}
                    onClick={() => togglePricing(p)}
                    className={`px-3 py-1.5 rounded-lg border text-xs font-medium transition-all ${
                      selectedPricing.includes(p)
                        ? 'bg-primary/20 border-primary/40 text-primary'
                        : 'bg-white/5 border-white/5 text-gray-400 hover:border-primary/30 hover:text-white'
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Content */}
          <div className="flex-1 space-y-8">
            {/* Toolbar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input 
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder={`Search ${publishedModels.length}+ models...`}
                  className="w-full bg-white/5 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm focus:border-primary transition-all focus:outline-none"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white">
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center bg-white/5 border border-white/10 rounded-lg p-1">
                  <button 
                    onClick={() => setView('grid')}
                    className={`p-2 rounded-md transition-all ${view === 'grid' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setView('list')}
                    className={`p-2 rounded-md transition-all ${view === 'list' ? 'bg-primary text-white shadow-lg' : 'text-gray-500 hover:text-white'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl text-sm font-medium focus:outline-none appearance-none cursor-pointer"
                >
                  {sortOptions.map(opt => (
                    <option key={opt.value} value={opt.value} className="bg-gray-900">Sort: {opt.label}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Active Filters */}
            {activeFilterCount > 0 && (
              <div className="flex flex-wrap gap-2">
                {selectedCategories.map(cat => (
                  <span key={cat} className="flex items-center gap-1 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs font-bold text-primary">
                    {cat}
                    <button onClick={() => toggleCategory(cat)}><X className="w-3 h-3" /></button>
                  </span>
                ))}
                {selectedCompanies.map(comp => (
                  <span key={comp} className="flex items-center gap-1 px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs font-bold text-blue-400">
                    {comp}
                    <button onClick={() => toggleCompany(comp)}><X className="w-3 h-3" /></button>
                  </span>
                ))}
                {selectedPricing.map(p => (
                  <span key={p} className="flex items-center gap-1 px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs font-bold text-green-400">
                    {p}
                    <button onClick={() => togglePricing(p)}><X className="w-3 h-3" /></button>
                  </span>
                ))}
              </div>
            )}

            {/* Models Counter */}
            <div className="flex items-center space-x-2 text-sm">
              <span className="text-white font-bold">{filteredModels.length}</span>
              <span className="text-gray-500">models showing</span>
            </div>

            {/* Grid */}
            {filteredModels.length > 0 ? (
              <div className={`grid gap-6 ${view === 'grid' ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' : 'grid-cols-1'}`}>
                {filteredModels.map((model) => (
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
            ) : (
              <div className="glass p-16 text-center space-y-4">
                <Search className="w-12 h-12 text-gray-600 mx-auto" />
                <h3 className="text-xl font-bold">No models found</h3>
                <p className="text-gray-500 text-sm">Try adjusting your filters or search query.</p>
                <button onClick={resetFilters} className="text-primary font-bold text-sm hover:underline">
                  Clear all filters
                </button>
              </div>
            )}
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
