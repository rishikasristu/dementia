import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Wifi, WifiOff, Globe, Sparkles, User, HeartHandshake } from 'lucide-react';

export const DemoBanner = () => {
  const { 
    userRole, 
    setUserRole, 
    currentView, 
    setCurrentView, 
    language, 
    setLanguage, 
    isOffline, 
    toggleOffline, 
    pendingSyncQueue, 
    aiState,
    t 
  } = useApp();

  return (
    <header className="bg-forest text-cream border-b-2 border-sage/30 px-4 py-2 text-sm shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand & SIH Prototype Tag */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-cream/10 px-3 py-1 rounded-full border border-cream/20 font-semibold tracking-wide text-xs">
            <span className="text-base">🌿</span>
            <span className="text-gold uppercase tracking-wider font-extrabold">Memory Garden</span>
            <span className="text-cream/60">|</span>
            <span className="text-cream/90">SIH 2026 Prototype</span>
          </div>

          {/* AI Personalization Indicator */}
          <div className="hidden md:flex items-center gap-1.5 bg-forest-dark px-3 py-1 rounded-full border border-sage/40 text-xs">
            <Sparkles className="w-3.5 h-3.5 text-gold animate-pulse" />
            <span className="text-sage font-medium">AI Guide:</span>
            <span className="text-cream font-bold">{aiState.difficulty} Mode</span>
            <span className="text-cream/50">({aiState.maxChoices} Choices)</span>
          </div>
        </div>

        {/* SIH Interactive Controls */}
        <div className="flex items-center flex-wrap gap-2">
          {/* Language Switcher */}
          <div className="flex items-center bg-cream/10 rounded-lg p-0.5 border border-cream/20">
            <Globe className="w-4 h-4 ml-2 text-sage" />
            <button
              onClick={() => setLanguage('en')}
              className={`px-2.5 py-1 text-xs rounded-md transition-all font-semibold ${
                language === 'en' ? 'bg-gold text-forest shadow-sm' : 'text-cream/80 hover:text-cream'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLanguage('te')}
              className={`px-2.5 py-1 text-xs rounded-md transition-all font-semibold ${
                language === 'te' ? 'bg-gold text-forest shadow-sm' : 'text-cream/80 hover:text-cream'
              }`}
            >
              తెలుగు
            </button>
            <button
              onClick={() => setLanguage('hi')}
              className={`px-2.5 py-1 text-xs rounded-md transition-all font-semibold ${
                language === 'hi' ? 'bg-gold text-forest shadow-sm' : 'text-cream/80 hover:text-cream'
              }`}
            >
              हिंदी
            </button>
          </div>

          {/* Offline/Online Simulator Button */}
          <button
            onClick={toggleOffline}
            className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all border ${
              isOffline
                ? 'bg-terracotta text-cream border-terracotta-dark shadow-sm'
                : 'bg-sage/20 text-sage border-sage/40 hover:bg-sage/30'
            }`}
            title="Click to simulate offline / online network toggle for demo"
          >
            {isOffline ? (
              <>
                <WifiOff className="w-3.5 h-3.5 animate-bounce" />
                <span>Offline Mode ({pendingSyncQueue.length} pending)</span>
              </>
            ) : (
              <>
                <Wifi className="w-3.5 h-3.5 text-emerald-400" />
                <span>Online & Synced</span>
              </>
            )}
          </button>

          {/* Role Toggle Button */}
          <button
            onClick={() => {
              if (userRole === 'elderly') {
                setUserRole('caregiver');
                setCurrentView('caregiver_dashboard');
              } else {
                setUserRole('elderly');
                setCurrentView('home');
              }
            }}
            className="flex items-center gap-2 bg-gold hover:bg-gold-light text-forest px-3.5 py-1 rounded-lg font-bold text-xs transition-all shadow-sm border border-gold-dark"
          >
            {userRole === 'elderly' ? (
              <>
                <HeartHandshake className="w-4 h-4 text-forest" />
                <span>Caregiver Dashboard</span>
              </>
            ) : (
              <>
                <User className="w-4 h-4 text-forest" />
                <span>Switch to Elderly View</span>
              </>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
