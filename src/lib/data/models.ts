// Comprehensive mock data for all AI models
export interface AIModelData {
  id: string;
  slug: string;
  name: string;
  company: string;
  companySlug: string;
  shortDescription: string;
  fullDescription: string;
  logoUrl: string | null;
  websiteUrl: string;
  apiDocsUrl: string;
  pricingInput: number | null;
  pricingOutput: number | null;
  hasFreeTier: boolean;
  contextWindow: number;
  maxOutput: number;
  knowledgeCutoff: string;
  categories: string[];
  capabilities: Record<string, number>;
  pros: string[];
  cons: string[];
  status: 'published' | 'draft';
  featured: boolean;
  score: number;
  speed: string;
  multimodal: string;
  releaseDate: string;
}

export const companies = [
  { id: '1', name: 'OpenAI', slug: 'openai', logoUrl: null, website: 'https://openai.com', description: 'AI research company behind GPT and DALL-E' },
  { id: '2', name: 'Anthropic', slug: 'anthropic', logoUrl: null, website: 'https://anthropic.com', description: 'AI safety company building reliable AI systems' },
  { id: '3', name: 'Google', slug: 'google', logoUrl: null, website: 'https://deepmind.google', description: 'Google DeepMind and AI division' },
  { id: '4', name: 'Meta', slug: 'meta', logoUrl: null, website: 'https://ai.meta.com', description: 'Meta AI Research (FAIR)' },
  { id: '5', name: 'Mistral', slug: 'mistral', logoUrl: null, website: 'https://mistral.ai', description: 'European AI company building frontier models' },
  { id: '6', name: 'Cohere', slug: 'cohere', logoUrl: null, website: 'https://cohere.com', description: 'Enterprise NLP and search AI' },
  { id: '7', name: 'DeepSeek', slug: 'deepseek', logoUrl: null, website: 'https://deepseek.com', description: 'Chinese AI lab specializing in code and reasoning' },
  { id: '8', name: 'xAI', slug: 'xai', logoUrl: null, website: 'https://x.ai', description: 'Elon Musk AI venture building Grok' },
  { id: '9', name: 'Stability AI', slug: 'stability-ai', logoUrl: null, website: 'https://stability.ai', description: 'Open-source generative AI models' },
  { id: '10', name: 'Perplexity', slug: 'perplexity', logoUrl: null, website: 'https://perplexity.ai', description: 'AI-powered search and answer engine' },
];

export const allModels: AIModelData[] = [
  {
    id: '1',
    slug: 'gpt-4o',
    name: 'GPT-4o',
    company: 'OpenAI',
    companySlug: 'openai',
    shortDescription: "OpenAI's most advanced multimodal model that's faster and better at reasoning than previous versions.",
    fullDescription: "GPT-4o ('o' for 'omni') is a step towards much more natural human-computer interaction—it accepts as input any combination of text, audio, and image and generates any combination of text, audio, and image outputs. It can respond to audio inputs in as little as 232 milliseconds, with an average of 320 milliseconds, which is similar to human response time.",
    logoUrl: null,
    websiteUrl: 'https://openai.com/gpt-4o',
    apiDocsUrl: 'https://platform.openai.com/docs',
    pricingInput: 5.00,
    pricingOutput: 15.00,
    hasFreeTier: true,
    contextWindow: 128000,
    maxOutput: 4096,
    knowledgeCutoff: 'Oct 2023',
    categories: ['Multimodal', 'Vision', 'Reasoning', 'Coding', 'Chat'],
    capabilities: { reasoning: 98, coding: 95, creativity: 92, speed: 90, vision: 99 },
    pros: [
      'Omni model capable of real-time audio, vision, and text.',
      'Significantly faster response times than GPT-4 Turbo.',
      'Higher quality in non-English languages.',
      'Improved reasoning capabilities across benchmarks.'
    ],
    cons: [
      'High usage costs for large-scale enterprise deployments.',
      'Still prone to occasional hallucinations in complex logic.',
      'Knowledge cutoff is still slightly behind real-time events.'
    ],
    status: 'published',
    featured: true,
    score: 98,
    speed: '120 t/s',
    multimodal: 'Text + Image + Audio',
    releaseDate: 'May 2024'
  },
  {
    id: '2',
    slug: 'claude-3-5-sonnet',
    name: 'Claude 3.5 Sonnet',
    company: 'Anthropic',
    companySlug: 'anthropic',
    shortDescription: 'Sets new industry benchmarks for graduate-level reasoning, undergraduate-level knowledge, and coding proficiency.',
    fullDescription: "Claude 3.5 Sonnet raises the bar for intelligence, offering significantly improved performance over previous models at a competitive price point. It excels at complex tasks like code generation, multi-step workflows, and nuanced content creation.",
    logoUrl: null,
    websiteUrl: 'https://anthropic.com/claude',
    apiDocsUrl: 'https://docs.anthropic.com',
    pricingInput: 3.00,
    pricingOutput: 15.00,
    hasFreeTier: true,
    contextWindow: 200000,
    maxOutput: 8192,
    knowledgeCutoff: 'Apr 2024',
    categories: ['Coding', 'Reasoning', 'Safety', 'Writing'],
    capabilities: { reasoning: 97, coding: 96, creativity: 94, speed: 85, vision: 90 },
    pros: [
      'Best-in-class coding and code review capabilities.',
      'Exceptional nuance and safety alignment.',
      'Massive 200K context window for long documents.',
      'Strong performance on graduate-level reasoning.'
    ],
    cons: [
      'Slightly slower than GPT-4o in latency.',
      'Fewer multimodal capabilities (no audio).',
      'Conservative safety filters may block legitimate queries.'
    ],
    status: 'published',
    featured: true,
    score: 97,
    speed: '80 t/s',
    multimodal: 'Text + Image',
    releaseDate: 'Jun 2024'
  },
  {
    id: '3',
    slug: 'gemini-1-5-pro',
    name: 'Gemini 1.5 Pro',
    company: 'Google',
    companySlug: 'google',
    shortDescription: 'Built for massive contexts, with a 1M token window, allowing for complex multi-modal analysis.',
    fullDescription: "Gemini 1.5 Pro delivers dramatically enhanced performance with a breakthrough 1 million token context window. This enables processing of vast amounts of information including long documents, extensive codebases, and hours of video or audio.",
    logoUrl: null,
    websiteUrl: 'https://deepmind.google/gemini',
    apiDocsUrl: 'https://ai.google.dev/docs',
    pricingInput: 3.50,
    pricingOutput: 10.50,
    hasFreeTier: true,
    contextWindow: 1000000,
    maxOutput: 8192,
    knowledgeCutoff: 'Nov 2023',
    categories: ['Long Context', 'Video', 'Research', 'Multimodal'],
    capabilities: { reasoning: 94, coding: 90, creativity: 88, speed: 88, vision: 95 },
    pros: [
      'Industry-leading 1M token context window.',
      'Excellent video and audio understanding.',
      'Strong integration with Google ecosystem.',
      'Competitive pricing for the capability level.'
    ],
    cons: [
      'Slightly behind GPT-4o and Claude in pure reasoning.',
      'Google Cloud dependency for enterprise use.',
      'Variable quality in creative writing tasks.'
    ],
    status: 'published',
    featured: true,
    score: 96,
    speed: '100 t/s',
    multimodal: 'Text + Image + Video + Audio',
    releaseDate: 'Feb 2024'
  },
  {
    id: '4',
    slug: 'llama-3-1-405b',
    name: 'Llama 3.1 405B',
    company: 'Meta',
    companySlug: 'meta',
    shortDescription: "The world's largest and most capable openly available foundation model.",
    fullDescription: "Llama 3.1 405B is Meta's flagship open-weight model that rivals the best proprietary models. It supports 8 languages, offers a 128K context window, and is fully customizable for enterprise deployments with fine-tuning capabilities.",
    logoUrl: null,
    websiteUrl: 'https://ai.meta.com/llama/',
    apiDocsUrl: 'https://llama.meta.com/docs/',
    pricingInput: 0,
    pricingOutput: 0,
    hasFreeTier: true,
    contextWindow: 128000,
    maxOutput: 4096,
    knowledgeCutoff: 'Dec 2023',
    categories: ['Open Source', 'General Purpose', 'Research', 'Coding'],
    capabilities: { reasoning: 92, coding: 88, creativity: 85, speed: 70, vision: 0 },
    pros: [
      'Completely free and open-weight model.',
      'Can be self-hosted for full data privacy.',
      'Highly customizable with fine-tuning.',
      'Competitive with top proprietary models.'
    ],
    cons: [
      'Requires significant GPU resources to run locally.',
      'No native multimodal capabilities.',
      'Slower inference without optimized hardware.'
    ],
    status: 'published',
    featured: true,
    score: 95,
    speed: '45 t/s',
    multimodal: 'Text Only',
    releaseDate: 'Jul 2024'
  },
  {
    id: '5',
    slug: 'mistral-large-2',
    name: 'Mistral Large 2',
    company: 'Mistral',
    companySlug: 'mistral',
    shortDescription: 'Flagship model with top-tier reasoning capabilities for multi-lingual tasks and coding.',
    fullDescription: "Mistral Large 2 is a 123B parameter model designed for complex reasoning, multi-lingual support in dozens of languages, and advanced coding tasks. It offers native function calling and JSON output formatting.",
    logoUrl: null,
    websiteUrl: 'https://mistral.ai',
    apiDocsUrl: 'https://docs.mistral.ai',
    pricingInput: 2.00,
    pricingOutput: 6.00,
    hasFreeTier: false,
    contextWindow: 128000,
    maxOutput: 4096,
    knowledgeCutoff: 'Jan 2024',
    categories: ['Multilingual', 'Coding', 'Reasoning', 'Efficiency'],
    capabilities: { reasoning: 90, coding: 91, creativity: 82, speed: 92, vision: 0 },
    pros: [
      'Excellent cost-to-performance ratio.',
      'Superior multilingual capabilities.',
      'Native function calling support.',
      'European data privacy compliance (GDPR).'
    ],
    cons: [
      'Smaller community than OpenAI or Anthropic.',
      'No multimodal capabilities.',
      'Less extensive documentation and examples.'
    ],
    status: 'published',
    featured: false,
    score: 94,
    speed: '110 t/s',
    multimodal: 'Text Only',
    releaseDate: 'Jul 2024'
  },
  {
    id: '6',
    slug: 'deepseek-coder-v2',
    name: 'DeepSeek Coder V2',
    company: 'DeepSeek',
    companySlug: 'deepseek',
    shortDescription: 'Specialized model for coding tasks, consistently ranking at the top of code-generation benchmarks.',
    fullDescription: "DeepSeek Coder V2 is a 236B parameter Mixture-of-Experts model that achieves state-of-the-art performance on coding and math benchmarks, rivaling GPT-4 Turbo while being more cost-effective.",
    logoUrl: null,
    websiteUrl: 'https://deepseek.com',
    apiDocsUrl: 'https://platform.deepseek.com/docs',
    pricingInput: 0.14,
    pricingOutput: 0.28,
    hasFreeTier: true,
    contextWindow: 128000,
    maxOutput: 4096,
    knowledgeCutoff: 'Dec 2023',
    categories: ['Coding', 'Math', 'Efficiency', 'Open Source'],
    capabilities: { reasoning: 88, coding: 97, creativity: 70, speed: 95, vision: 0 },
    pros: [
      'Best-in-class code generation capabilities.',
      'Extremely cost-effective pricing.',
      'Open-source with MoE architecture.',
      'Excellent at mathematical reasoning.'
    ],
    cons: [
      'Weaker at creative writing tasks.',
      'No multimodal support.',
      'Limited to coding-focused tasks.'
    ],
    status: 'published',
    featured: false,
    score: 91,
    speed: '140 t/s',
    multimodal: 'Text Only',
    releaseDate: 'Jun 2024'
  },
  {
    id: '7',
    slug: 'command-r-plus',
    name: 'Command R+',
    company: 'Cohere',
    companySlug: 'cohere',
    shortDescription: 'Enterprise-grade model optimized for RAG, tool use, and multi-step agentic workflows.',
    fullDescription: "Command R+ is designed for the enterprise with excellent retrieval-augmented generation, citation-backed answers, and advanced tool use capabilities. It excels at business-critical workflows.",
    logoUrl: null,
    websiteUrl: 'https://cohere.com/command',
    apiDocsUrl: 'https://docs.cohere.com',
    pricingInput: 3.00,
    pricingOutput: 15.00,
    hasFreeTier: false,
    contextWindow: 128000,
    maxOutput: 4096,
    knowledgeCutoff: 'Mar 2024',
    categories: ['Enterprise', 'RAG', 'Search', 'Writing'],
    capabilities: { reasoning: 85, coding: 78, creativity: 80, speed: 88, vision: 0 },
    pros: [
      'Best-in-class retrieval-augmented generation.',
      'Automatic citation and source attribution.',
      'Strong multilingual support (10+ languages).',
      'Enterprise security and compliance.'
    ],
    cons: [
      'Weaker at pure code generation.',
      'Smaller model ecosystem than OpenAI.',
      'Higher pricing for comparable performance.'
    ],
    status: 'published',
    featured: false,
    score: 89,
    speed: '95 t/s',
    multimodal: 'Text Only',
    releaseDate: 'Apr 2024'
  },
  {
    id: '8',
    slug: 'grok-2',
    name: 'Grok-2',
    company: 'xAI',
    companySlug: 'xai',
    shortDescription: "xAI's frontier model with real-time knowledge and conversational depth.",
    fullDescription: "Grok-2 is xAI's most powerful model, featuring real-time access to information via the X platform and competitive performance on reasoning and coding benchmarks.",
    logoUrl: null,
    websiteUrl: 'https://x.ai/grok',
    apiDocsUrl: 'https://docs.x.ai',
    pricingInput: 5.00,
    pricingOutput: 10.00,
    hasFreeTier: false,
    contextWindow: 128000,
    maxOutput: 4096,
    knowledgeCutoff: 'Real-time',
    categories: ['Chat', 'Real-time', 'Reasoning'],
    capabilities: { reasoning: 88, coding: 82, creativity: 90, speed: 85, vision: 75 },
    pros: [
      'Real-time access to current information.',
      'Witty and engaging conversational style.',
      'Strong reasoning capabilities.',
      'Integrated with X platform ecosystem.'
    ],
    cons: [
      'Limited API availability.',
      'Tied to X Premium subscription.',
      'Less enterprise focus.'
    ],
    status: 'published',
    featured: false,
    score: 88,
    speed: '90 t/s',
    multimodal: 'Text + Image',
    releaseDate: 'Aug 2024'
  },
];

export const categories = [
  'Coding', 'Reasoning', 'Vision', 'Creative Writing', 'Marketing', 
  'Research', 'Audio', 'Video', 'Chat', 'Multimodal', 'Open Source',
  'Long Context', 'Enterprise', 'RAG', 'Math', 'Efficiency',
  'Multilingual', 'Safety', 'Real-time', 'Search', 'Writing'
];
