import React from 'react';
import { useApp } from '../../context/AppContext';
import { WifiOff, CheckCircle2 } from 'lucide-react';

export const StatusIndicator = () => {
  const { isOffline, syncToast, t } = useApp();

  if (!isOffline && !syncToast) return null;

  return (
    <div className="w-full max-w-4xl mx-auto px-4 mt-3">
      {isOffline && (
        <div className="flex items-center justify-center gap-2 bg-terracotta/15 border-2 border-terracotta/40 text-terracotta-dark px-4 py-2.5 rounded-2xl text-sm font-bold shadow-sm animate-pulse">
          <WifiOff className="w-5 h-5 flex-shrink-0" />
          <span>{t.offlineNotice}</span>
        </div>
      )}

      {syncToast && (
        <div className="flex items-center justify-center gap-2 bg-sage-light border-2 border-sage text-forest px-4 py-2.5 rounded-2xl text-sm font-extrabold shadow-md animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-forest flex-shrink-0" />
          <span>{syncToast}</span>
        </div>
      )}
    </div>
  );
};
