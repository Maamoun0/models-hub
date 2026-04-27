'use client';

import { Check, X, Zap, BrainCircuit, DollarSign, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ComparisonField {
  label: string;
  key: string;
  icon: React.ReactNode;
}

const fields: ComparisonField[] = [
  { label: "Reasoning & Logic", key: "reasoning", icon: <BrainCircuit className="w-4 h-4 text-purple-400" /> },
  { label: "Coding Proficiency", key: "coding", icon: <Zap className="w-4 h-4 text-blue-400" /> },
  { label: "Speed (Tokens/sec)", key: "speed", icon: <Clock className="w-4 h-4 text-yellow-400" /> },
  { label: "Context Window", key: "context", icon: <ShieldCheck className="w-4 h-4 text-green-400" /> },
  { label: "Input Price ($/1M)", key: "price_in", icon: <DollarSign className="w-4 h-4 text-gray-400" /> },
  { label: "Output Price ($/1M)", key: "price_out", icon: <DollarSign className="w-4 h-4 text-gray-400" /> },
];

interface ModelData {
  name: string;
  company: string;
  reasoning: number;
  coding: number;
  speed: string;
  context: string;
  price_in: string;
  price_out: string;
  vision: boolean;
  multilingual: boolean;
}

const mockData: ModelData[] = [
  {
    name: "GPT-4o",
    company: "OpenAI",
    reasoning: 98,
    coding: 95,
    speed: "120 t/s",
    context: "128k",
    price_in: "$5.00",
    price_out: "$15.00",
    vision: true,
    multilingual: true,
  },
  {
    name: "Claude 3.5 Sonnet",
    company: "Anthropic",
    reasoning: 97,
    coding: 96,
    speed: "80 t/s",
    context: "200k",
    price_in: "$3.00",
    price_out: "$15.00",
    vision: true,
    multilingual: true,
  }
];

export function ComparisonTable() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-6 text-left min-w-[200px] border-b border-white/5">
              <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Comparison Criteria</span>
            </th>
            {mockData.map((model, idx) => (
              <th key={idx} className="p-6 text-center min-w-[250px] border-b border-white/5 bg-white/2">
                <div className="space-y-2">
                  <h4 className="text-xl font-bold">{model.name}</h4>
                  <p className="text-xs text-primary font-bold uppercase tracking-widest">{model.company}</p>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fields.map((field, idx) => (
            <tr key={idx} className="group hover:bg-white/2 transition-colors">
              <td className="p-6 border-b border-white/5">
                <div className="flex items-center space-x-3">
                  {field.icon}
                  <span className="text-sm font-medium text-gray-400 group-hover:text-white transition-colors">{field.label}</span>
                </div>
              </td>
              {mockData.map((model, mIdx) => (
                <td key={mIdx} className="p-6 text-center border-b border-white/5 border-l border-white/2">
                  {typeof (model as any)[field.key] === 'number' ? (
                    <div className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1">
                        <span>Score</span>
                        <span>{(model as any)[field.key]}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(model as any)[field.key]}%` }}
                          className="h-full bg-primary"
                        />
                      </div>
                    </div>
                  ) : (
                    <span className="text-sm font-bold text-white">{(model as any)[field.key]}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
          
          {/* Boolean fields */}
          <tr className="group hover:bg-white/2 transition-colors">
            <td className="p-6 border-b border-white/5 text-sm font-medium text-gray-400">Vision Capabilities</td>
            {mockData.map((model, idx) => (
              <td key={idx} className="p-6 text-center border-b border-white/5 border-l border-white/2">
                {model.vision ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
              </td>
            ))}
          </tr>
          <tr className="group hover:bg-white/2 transition-colors">
            <td className="p-6 border-b border-white/5 text-sm font-medium text-gray-400">Multilingual Support</td>
            {mockData.map((model, idx) => (
              <td key={idx} className="p-6 text-center border-b border-white/5 border-l border-white/2">
                {model.multilingual ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-500 mx-auto" />}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
