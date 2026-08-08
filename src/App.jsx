import React, { useState, useEffect } from 'react';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { AuthModal } from './components/auth/AuthModal';
import { ProtectedArea } from './components/auth/ProtectedArea';
import { ErrorBoundary } from './components/common/ErrorBoundary';
import { ToastContainer } from './components/ui/Toast';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useAuthStore } from './store/useAuthStore';
import { WifiOff } from 'lucide-react';

import { LandingPage } from './components/landing/LandingPage';
import { DashboardPage } from './components/dashboard/DashboardPage';
import { ResumeUploadScreen } from './components/resume/ResumeUploadScreen';
import { AIInterviewScreen } from './components/interview/AIInterviewScreen';
import { CodingInterviewScreen } from './components/interview/CodingInterviewScreen';
import { ReportsScreen } from './components/reports/ReportsScreen';
import { SettingsScreen } from './components/settings/SettingsScreen';

export default function App() {
  const [activeTab, setActiveTab] = useState('landing');
  const isOnline = useOnlineStatus();
  const { initAuth } = useAuthStore();

  useEffect(() => {
    initAuth();
  }, [initAuth]);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between selection:bg-cyan-500/30 selection:text-cyan-300">
        {/* Offline Connectivity Warning Banner */}
        {!isOnline && (
          <div className="bg-amber-500/10 border-b border-amber-500/30 px-4 py-2 text-center text-xs text-amber-400 font-semibold flex items-center justify-center gap-2">
            <WifiOff className="w-4 h-4 shrink-0" />
            <span>Network disconnected. Running in local offline mode.</span>
          </div>
        )}

        {/* Top Navigation Bar */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {activeTab === 'landing' && <LandingPage setActiveTab={setActiveTab} />}

          {activeTab === 'dashboard' && (
            <ProtectedArea>
              <DashboardPage setActiveTab={setActiveTab} />
            </ProtectedArea>
          )}

          {activeTab === 'resume' && (
            <ProtectedArea>
              <ResumeUploadScreen setActiveTab={setActiveTab} />
            </ProtectedArea>
          )}

          {activeTab === 'ai-interview' && (
            <ProtectedArea>
              <AIInterviewScreen setActiveTab={setActiveTab} />
            </ProtectedArea>
          )}

          {activeTab === 'coding-interview' && (
            <ProtectedArea>
              <CodingInterviewScreen setActiveTab={setActiveTab} />
            </ProtectedArea>
          )}

          {activeTab === 'reports' && (
            <ProtectedArea>
              <ReportsScreen setActiveTab={setActiveTab} />
            </ProtectedArea>
          )}

          {activeTab === 'settings' && (
            <ProtectedArea>
              <SettingsScreen />
            </ProtectedArea>
          )}
        </main>

        {/* Footer */}
        <Footer />

        {/* Auth Modal & Toast Container */}
        <AuthModal />
        <ToastContainer />
      </div>
    </ErrorBoundary>
  );
}
