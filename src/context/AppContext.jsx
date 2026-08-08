import React, { createContext, useContext, useState } from 'react';
import { PRESET_STARTUPS } from '../mockData/startupData';

const AppContext = createContext();

export function AppProvider({ children }) {
  // Navigation State
  const [currentView, setCurrentView] = useState('landing'); // 'landing' | 'dashboard'
  const [activeTab, setActiveTab] = useState('overview'); // dashboard tab name
  
  // Active Startup Strategy Data
  const [selectedStartup, setSelectedStartup] = useState(PRESET_STARTUPS[0]);
  const [startupList, setStartupList] = useState(PRESET_STARTUPS);
  
  // UI Modals & Overlays
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeFeatureModal, setActiveFeatureModal] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  // Helper to trigger Toast Notifications
  const showToast = (message, type = 'success') => {
    setToastMessage({ message, type, id: Date.now() });
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  // Launch My Startup Action
  const launchMyStartup = (initialIdea = null) => {
    setCurrentView('dashboard');
    setActiveTab('generator');
    if (initialIdea) {
      // Create new draft startup from user hero input
      const newStartup = {
        id: `custom-${Date.now()}`,
        name: initialIdea.name || "My Stealth Startup",
        tagline: initialIdea.tagline || "Next-gen AI platform",
        industry: initialIdea.industry || "Artificial Intelligence & SaaS",
        targetAudience: initialIdea.targetAudience || "B2B Enterprises & Founders",
        problem: initialIdea.problem || "Solving manual strategy workflows with autonomous agent technology.",
        businessModel: "Subscription SaaS & Pay-per-agent execution",
        status: "Strategy Generation In Progress",
        readinessScore: 89,
        tam: "$32.5B",
        sam: "$8.7B",
        growth: "+29.4% YoY"
      };
      setSelectedStartup(newStartup);
      setStartupList(prev => [newStartup, ...prev]);
    }
    showToast("Welcome to LaunchPilot AI Co-Founder Studio 🚀");
  };

  const navigateToTab = (tabName) => {
    if (currentView !== 'dashboard') {
      setCurrentView('dashboard');
    }
    setActiveTab(tabName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        activeTab,
        setActiveTab,
        navigateToTab,
        selectedStartup,
        setSelectedStartup,
        startupList,
        setStartupList,
        launchMyStartup,
        isDemoModalOpen,
        setIsDemoModalOpen,
        activeFeatureModal,
        setActiveFeatureModal,
        toastMessage,
        showToast
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
