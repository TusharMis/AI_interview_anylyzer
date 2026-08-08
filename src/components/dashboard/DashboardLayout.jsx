import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Rocket, LayoutDashboard, Sparkles, TrendingUp, ShieldAlert, 
  Users, CreditCard, Megaphone, Presentation, BarChart3, FileText, 
  History, Settings, LogOut, ChevronRight, Bell, Search, PlusCircle, CheckCircle2
} from 'lucide-react';

export default function DashboardLayout({ children }) {
  const { 
    currentView, 
    setCurrentView, 
    activeTab, 
    navigateToTab, 
    selectedStartup, 
    setSelectedStartup, 
    startupList,
    showToast
  } = useApp();

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const menuItems = [
    { id: 'overview', label: 'Dashboard Overview', icon: LayoutDashboard },
    { id: 'generator', label: 'Strategy Generator', icon: Sparkles, badge: 'AI Studio' },
    { id: 'market-research', label: 'Market Research', icon: TrendingUp },
    { id: 'competitor-intelligence', label: 'Competitor Intel', icon: ShieldAlert },
    { id: 'customer-personas', label: 'Customer Personas', icon: Users },
    { id: 'pricing-strategy', label: 'Pricing Strategy', icon: CreditCard },
    { id: 'marketing-strategy', label: 'Marketing Strategy', icon: Megaphone },
    { id: 'investor-pitch', label: 'Investor Pitch Deck', icon: Presentation },
    { id: 'analytics', label: 'Launch Analytics', icon: BarChart3 },
    { id: 'reports', label: 'Export Reports', icon: FileText },
    { id: 'history', label: 'Launch History', icon: History },
    { id: 'settings', label: 'Settings & API Keys', icon: Settings },
  ];

  return (
    <div className="min-h-screen bg-[#09090E] text-slate-100 flex flex-col md:flex-row overflow-x-hidden font-sans">
      
      {/* Sidebar */}
      <aside
        className={`w-full md:w-64 bg-[#0B0B14] border-r border-white/10 flex flex-col justify-between shrink-0 transition-all duration-300 ${
          sidebarOpen ? 'block' : 'hidden md:flex'
        }`}
      >
        <div className="p-4 space-y-6">
          
          {/* Header Brand */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div 
              onClick={() => setCurrentView('landing')}
              className="flex items-center space-x-2.5 cursor-pointer group"
            >
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-indigo-600 p-0.5 shadow-md shadow-purple-600/30">
                <div className="w-full h-full bg-[#0B0B14] rounded-[6px] flex items-center justify-center">
                  <Rocket className="w-4 h-4 text-purple-400 group-hover:rotate-12 transition-transform" />
                </div>
              </div>
              <span className="text-base font-extrabold tracking-tight text-white">
                LaunchPilot <span className="text-gradient">AI</span>
              </span>
            </div>

            <button
              onClick={() => setCurrentView('landing')}
              title="Return to Landing Page"
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>

          {/* Active Venture Dropdown Switcher */}
          <div className="relative">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 mb-1 font-semibold">
              ACTIVE VENTURE
            </div>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="w-full p-2.5 rounded-xl bg-white/[0.03] border border-purple-500/30 hover:border-purple-500/60 flex items-center justify-between transition-colors"
            >
              <div className="text-left truncate pr-2">
                <div className="text-xs font-bold text-white truncate">{selectedStartup?.name}</div>
                <div className="text-[10px] text-purple-400 font-mono truncate">{selectedStartup?.industry}</div>
              </div>
              <ChevronRight className={`w-4 h-4 text-slate-400 transform transition-transform ${dropdownOpen ? 'rotate-90' : ''}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 z-50 rounded-2xl glass-panel border-purple-500/40 p-2 space-y-1 shadow-2xl shadow-purple-950/70 animate-fade-in">
                {startupList.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      setSelectedStartup(item);
                      setDropdownOpen(false);
                      showToast(`Switched to ${item.name}`);
                    }}
                    className={`p-2 rounded-xl text-xs cursor-pointer flex items-center justify-between ${
                      selectedStartup?.id === item.id
                        ? 'bg-purple-600/30 text-white font-bold border border-purple-500/40'
                        : 'text-slate-300 hover:bg-white/5'
                    }`}
                  >
                    <span className="truncate">{item.name}</span>
                    {selectedStartup?.id === item.id && <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />}
                  </div>
                ))}

                <button
                  onClick={() => {
                    setDropdownOpen(false);
                    navigateToTab('generator');
                  }}
                  className="w-full mt-2 p-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
                >
                  <PlusCircle className="w-3.5 h-3.5" />
                  <span>New Startup Launch</span>
                </button>
              </div>
            )}
          </div>

          {/* Navigation Items List */}
          <nav className="space-y-1 pt-2">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500 px-3 mb-2 font-semibold">
              WORKSPACE MODULES
            </div>

            {menuItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;

              return (
                <button
                  key={item.id}
                  onClick={() => navigateToTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-purple-600/20 text-white border border-purple-500/40 shadow-lg shadow-purple-950/40 font-bold'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-white/[0.03]'
                  }`}
                >
                  <div className="flex items-center space-x-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>

                  {item.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 text-[9px] font-mono font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer User Card */}
        <div className="p-4 border-t border-white/10 bg-white/[0.01]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center font-bold text-white text-xs shadow-md">
              AV
            </div>
            <div className="flex-1 truncate">
              <div className="text-xs font-bold text-white truncate">Alex Vance</div>
              <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>Pro Founder Plan</span>
              </div>
            </div>
          </div>
        </div>

      </aside>

      {/* Main Workspace Body */}
      <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
        
        {/* Top App Bar */}
        <header className="h-16 border-b border-white/10 bg-[#0B0B14]/80 backdrop-blur-xl px-6 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center space-x-4">
            <h1 className="text-sm sm:text-base font-bold text-white capitalize flex items-center gap-2">
              <span className="text-purple-400">{selectedStartup?.name}</span>
              <span className="text-slate-500">/</span>
              <span className="text-slate-200">{activeTab.replace('-', ' ')}</span>
            </h1>
          </div>

          <div className="flex items-center space-x-3">
            {/* Quick Launch CTA */}
            <button
              onClick={() => navigateToTab('generator')}
              className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-600/30 border border-purple-500/40 text-purple-300 hover:text-white text-xs font-semibold transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-purple-400" />
              <span>Generate Strategy</span>
            </button>

            {/* Notifications */}
            <button 
              onClick={() => showToast("All 4 AI Co-Founder agents are active and synced.")}
              className="p-2 rounded-xl bg-white/[0.03] border border-white/10 text-slate-300 hover:text-white transition-colors relative"
            >
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-purple-500"></span>
            </button>

            {/* View Switcher Back to Landing */}
            <button
              onClick={() => setCurrentView('landing')}
              className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-slate-300 transition-colors"
            >
              Landing Page
            </button>
          </div>
        </header>

        {/* Content Body View Render */}
        <main className="p-4 sm:p-8 flex-1 max-w-7xl w-full mx-auto space-y-8">
          {children}
        </main>

      </div>

    </div>
  );
}
