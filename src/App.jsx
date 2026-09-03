import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { DemoBanner } from './components/common/DemoBanner';
import { StatusIndicator } from './components/common/StatusIndicator';
import { ElderlyHome } from './components/elderly/ElderlyHome';
import { MemoryAlbum } from './components/elderly/MemoryAlbum';
import { TodayReminders } from './components/elderly/TodayReminders';
import { CognitiveHub } from './components/games/CognitiveHub';
import { CaregiverDashboard } from './components/caregiver/CaregiverDashboard';
import { HealthcareDashboard } from './components/healthcare/HealthcareDashboard';

const MainAppContent = () => {
  const { userRole, currentView } = useApp();

  return (
    <div className="min-h-screen bg-cream text-ink flex flex-col selection:bg-sage selection:text-forest">
      {/* SIH Presentation Control Banner */}
      <DemoBanner />

      {/* Connection & Offline Status Notice */}
      <StatusIndicator />

      {/* Main View Router */}
      <main className="flex-1 pb-16">

        {userRole === 'caregiver' ||
        currentView === 'caregiver_dashboard' ? (

          <CaregiverDashboard />

        ) : userRole === 'healthcare_worker' ||
          currentView === 'healthcare_dashboard' ? (

          <HealthcareDashboard />

        ) : (

          <>
            {currentView === 'home' && <ElderlyHome />}

            {currentView === 'album' && <MemoryAlbum />}

            {currentView === 'reminders' && <TodayReminders />}

            {currentView === 'games' && <CognitiveHub />}
          </>

        )}

      </main>

      {/* Footer Branding */}
      <footer className="border-t border-sage/30 bg-cream-dark/50 py-4 px-4 text-center text-xs text-forest/70 font-semibold">

        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">

          <span>
            🌿 Memory Garden — Human-Centered Cognitive Companion
          </span>

          <span>
            Designed with Deep Forest, Warm Cream & Sage Aesthetics
          </span>

        </div>

      </footer>

    </div>
  );
};

export default function App() {
  return (
    <AppProvider>
      <MainAppContent />
    </AppProvider>
  );
}
