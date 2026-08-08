export const INITIAL_FEATURE_CARDS = [
  {
    id: "market-research",
    title: "Market Research",
    tagline: "Autonomous TAM/SAM/SOM & CAGR Modeling",
    description: "Deep quantitative market sizing, growth drivers, regulatory barriers, and total addressable opportunity metrics.",
    iconName: "TrendingUp",
    gradient: "from-purple-500/20 to-indigo-500/10",
    borderColor: "border-purple-500/30",
    metrics: "TAM: $42.8B | 28.4% CAGR",
    details: {
      tam: "$42.8 Billion",
      sam: "$11.4 Billion",
      som: "$1.8 Billion",
      growthRate: "28.4% YoY",
      keyDrivers: [
        "Rapid enterprise adoption of autonomous agent workflows",
        "Legacy software replacement cycles accelerating in 2026",
        "Demand for instant compliance and zero-trust execution"
      ],
      marketRisks: [
        "Hyperscale tech giants introducing native competing features",
        "Evolving AI regulatory frameworks across EU and APAC regions"
      ]
    }
  },
  {
    id: "competitor-intelligence",
    title: "Competitor Intelligence",
    tagline: "Real-Time Competitor Teardowns & Matrix",
    description: "Scrape competitor pricing, feature gaps, customer complaints, and strategic vulnerabilities to claim market dominance.",
    iconName: "ShieldAlert",
    gradient: "from-violet-500/20 to-fuchsia-500/10",
    borderColor: "border-violet-500/30",
    metrics: "4 Incumbents Analyzed | 3 Core Gaps Identified",
    details: {
      competitors: [
        { name: "Legacy SaaS Alpha", marketShare: "38%", weakness: "High price, zero real-time agent automation", pricing: "$2,400/mo" },
        { name: "CloudBot Inc", marketShare: "22%", weakness: "Complex enterprise setup, poor mobile UX", pricing: "$990/mo" },
        { name: "Agentify Pro", marketShare: "14%", weakness: "No investor-grade reporting or TAM models", pricing: "$499/mo" }
      ],
      differentiators: [
        "10x Faster Strategy Generation (under 45 seconds)",
        "End-to-End Investor Pitch Deck generation with live metrics",
        "Autonomous multi-agent verification pipeline"
      ]
    }
  },
  {
    id: "customer-personas",
    title: "Customer Personas",
    tagline: "Granular ICP & Willingness-To-Pay",
    description: "Detailed buyer profiles, primary pain points, decision-maker triggers, and precise acquisition messaging channels.",
    iconName: "Users",
    gradient: "from-indigo-500/20 to-cyan-500/10",
    borderColor: "border-indigo-500/30",
    metrics: "3 ICP Profiles | $4,500 Avg ACV Target",
    details: {
      personas: [
        {
          name: "Venture-Backed Founder Alex",
          role: "CEO & Co-Founder (Series A Tech)",
          companySize: "10-50 Employees",
          painPoint: "Struggling to articulate clear GTM strategy to tier-1 investors",
          willingnessToPay: "$250 - $1,000 / mo"
        },
        {
          name: "Enterprise Product Lead Sarah",
          role: "VP of Product Strategy",
          companySize: "250-1,000 Employees",
          painPoint: "Slow market validation cycles costing months of engineering budget",
          willingnessToPay: "$1,500 - $5,000 / mo"
        }
      ]
    }
  },
  {
    id: "pricing-strategy",
    title: "Pricing Strategy",
    tagline: "Unit Economics & Value Metric Optimization",
    description: "Architect monetization models, tier thresholds, value metrics, and long-term LTV/CAC projections.",
    iconName: "CreditCard",
    gradient: "from-cyan-500/20 to-purple-500/10",
    borderColor: "border-cyan-500/30",
    metrics: "84% Gross Margin Target | 4.8x LTV/CAC",
    details: {
      modelType: "Tiered Usage + Value Metric SaaS",
      tiers: [
        { name: "Starter Pilot", price: "$49/mo", usage: "3 Startup Runs / Month", features: ["Basic Market TAM", "1 Pitch Deck Export"] },
        { name: "Founder Pro", price: "$199/mo", usage: "Unlimited Runs & Multi-Agent", features: ["Full Competitor Matrix", "Live Persona Generator", "Pitch Deck Builder"] },
        { name: "Enterprise Custom", price: "$999/mo", usage: "Dedicated Agent Clusters", features: ["Custom API Integration", "White-label Pitch Decks", "1-on-1 Strategy Reviews"] }
      ]
    }
  },
  {
    id: "marketing-strategy",
    title: "Marketing Strategy",
    tagline: "Go-to-Market Playbook & Acquisition Engine",
    description: "Channel breakdown, viral referral loops, outbound sequence templates, and content strategy for 10x launch velocity.",
    iconName: "Megaphone",
    gradient: "from-fuchsia-500/20 to-pink-500/10",
    borderColor: "border-fuchsia-500/30",
    metrics: "6 Launch Channels | $42 Target CAC",
    details: {
      channels: [
        { channel: "Product Hunt & Hacker News", impact: "High", timeline: "Week 1", objective: "3,000 Signups & Viral Buzz" },
        { channel: "LinkedIn Founder Thought Leadership", impact: "High", timeline: "Ongoing", objective: "B2B Founder Inbound Lead Gen" },
        { channel: "SEO & Interactive Calculator Micro-Sites", impact: "Medium", timeline: "Month 2+", objective: "Organic Inbound Traffic Stream" }
      ]
    }
  },
  {
    id: "investor-pitch",
    title: "Investor Pitch",
    tagline: "10-Slide Deck & YC-Style Elevator Pitch",
    description: "Generate investor-ready slide decks, narrative arcs, valuation defense notes, and objection-handling scripts.",
    iconName: "Presentation",
    gradient: "from-purple-500/20 to-emerald-500/10",
    borderColor: "border-purple-500/30",
    metrics: "10 Ready-to-Present Slides | 90s Pitch",
    details: {
      slides: [
        "1. Title & One-Line Hook",
        "2. The Massive Market Pain",
        "3. LaunchPilot AI Autonomous Solution",
        "4. Total Addressable Market Sizing ($42.8B)",
        "5. Proprietary Technology & Multi-Agent Architecture",
        "6. Competitor Moat & Defensibility",
        "7. Business Model & Unit Economics",
        "8. Go-To-Market & Traction Velocity",
        "9. Team & Unfair Advantages",
        "10. Fundraising Ask & Use of Capital ($2.5M)"
      ]
    }
  }
];

export const PRESET_STARTUPS = [
  {
    id: "devflow",
    name: "DevFlow AI",
    tagline: "Autonomous AI Code Reviewer & Security Gatekeeper for GitHub",
    industry: "Developer Tools & Cyber Security",
    targetAudience: "Engineering Managers & CTOs at Scaleups (50-500 devs)",
    problem: "Engineering teams lose 35% of sprint velocity waiting on manual code reviews and fixing security vulnerabilities late in production.",
    businessModel: "Seat-based SaaS + Per-Repository Tier ($29/dev/mo)",
    status: "Validated",
    readinessScore: 94,
    tam: "$18.4B",
    sam: "$4.2B",
    growth: "+32.1% YoY"
  },
  {
    id: "pulsemetrics",
    name: "PulseMetrics",
    tagline: "Real-Time AI Product Analytics & Predictive Churn Prevention",
    industry: "B2B SaaS Analytics",
    targetAudience: "Product Managers & Customer Success Leaders",
    problem: "Product teams struggle to diagnose feature friction before users churn, relying on static delayed dashboards.",
    businessModel: "Monthly Tracked Users (MTU) Tiered Subscription",
    status: "In Progress",
    readinessScore: 88,
    tam: "$26.2B",
    sam: "$7.1B",
    growth: "+24.8% YoY"
  },
  {
    id: "healthnode",
    name: "HealthNode AI",
    tagline: "HIPAA-Compliant AI Medical Charting & Diagnostic Intake Assistant",
    industry: "Healthcare Tech & Digital Health",
    targetAudience: "Outpatient Clinics & Specialty Healthcare Providers",
    problem: "Physicians spend 3 hours daily typing patient notes instead of delivering clinical care.",
    businessModel: "Per-Physician Subscription ($399/doctor/mo)",
    status: "Draft Strategy",
    readinessScore: 82,
    tam: "$54.0B",
    sam: "$14.8B",
    growth: "+36.5% YoY"
  }
];

export const SAMPLE_REPORTS = [
  {
    id: "rep-001",
    title: "DevFlow AI — Complete Investor Dossier & GTM Blueprint",
    date: "Aug 06, 2026",
    startupName: "DevFlow AI",
    readinessScore: 94,
    type: "Full Strategy Deck",
    size: "4.2 MB",
    pages: 18,
    status: "Ready for Pitching"
  },
  {
    id: "rep-002",
    title: "PulseMetrics — Market Research & Competitor Analysis",
    date: "Aug 04, 2026",
    startupName: "PulseMetrics",
    readinessScore: 88,
    type: "Market Intelligence",
    size: "2.8 MB",
    pages: 12,
    status: "Verified"
  },
  {
    id: "rep-003",
    title: "HealthNode AI — TAM Sizing & Regulatory Risk Assessment",
    date: "Jul 28, 2026",
    startupName: "HealthNode AI",
    readinessScore: 82,
    type: "Regulatory & Financial",
    size: "3.5 MB",
    pages: 14,
    status: "Draft Review"
  }
];
