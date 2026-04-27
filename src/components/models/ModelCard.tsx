'use client';

import { motion } from 'framer-motion';
import { Star, BarChart3, Zap, BrainCircuit } from 'lucide-react';
import Link from 'next/link';

interface ModelCardProps {
  name: string;
  slug: string;
  company: string;
  description: string;
  score: number;
  tags: string[];
}

export function ModelCard({ name, slug, company, description, score, tags }: ModelCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="glass p-6 group hover:border-primary/50 transition-all flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-primary/30 transition-colors">
            <BrainCircuit className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h4 className="font-bold text-lg leading-tight group-hover:text-primary transition-colors">{name}</h4>
            <p className="text-xs text-gray-500 uppercase tracking-wider">{company}</p>
          </div>
        </div>
        <div className="flex items-center space-x-1 bg-yellow-500/10 px-2 py-1 rounded-lg border border-yellow-500/20">
          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
          <span className="text-xs font-bold text-yellow-500">{score}</span>
        </div>
      </div>

      <p className="text-sm text-gray-400 mb-6 line-clamp-3 leading-relaxed flex-1">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map(tag => (
          <span key={tag} className="text-[10px] px-2 py-1 bg-white/5 rounded-md border border-white/5 text-gray-400 group-hover:border-primary/10 transition-colors">
            {tag}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-white/5">
        <div className="flex items-center space-x-3">
          <Zap className="w-4 h-4 text-blue-400" title="Speed" />
          <BarChart3 className="w-4 h-4 text-green-400" title="Performance" />
        </div>
        <Link 
          href={`/models/${slug}`}
          className="text-xs font-bold text-white hover:text-primary transition-colors flex items-center space-x-1"
        >
          <span>View Details</span>
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </Link>
      </div>
    </motion.div>
  );
}
