import React from 'react';
import { useApp } from '../../context/AppContext';
import { SpeechButton } from '../common/SpeechButton';
import { ArrowLeft, CheckCircle2, Clock, Volume2 } from 'lucide-react';
import { speakWithAzure } from '../../utils/speech';

export const TodayReminders = () => {
  const { reminders, toggleReminder, setCurrentView, language, t } = useApp();

  const handleReadReminder = (reminder) => {
  const translatedAudio =
    t[reminder.audioTextKey] || reminder.audioText;

  speakWithAzure(
    translatedAudio || `${reminder.time}: ${reminder.title}`,
    language
  );
};

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 space-y-6">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setCurrentView('home')}
          className="flex items-center gap-2 bg-cream-light hover:bg-cream-dark text-forest px-4 py-2 rounded-2xl border border-sage/40 font-bold shadow-sm transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>{t.backToGarden}</span>
        </button>

        <div className="flex items-center gap-2 bg-sage/20 text-forest px-4 py-1.5 rounded-full font-bold text-sm">
          <span>🔔 {t.todaysTimeline}</span>
        </div>
      </div>

      {/* Title & Introduction */}
      <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo">
        <h1 className="text-3xl md:text-4xl font-extrabold text-forest">
          {t.today}
        </h1>
        <p className="text-base font-medium text-ink/80 mt-1">
  {t.todayRemindersDescription}
</p>
      </div>

      {/* Timeline Items List */}
      <div className="space-y-4 relative before:absolute before:inset-0 before:left-8 md:before:left-12 before:w-1 before:bg-sage/40 before:rounded-full">
        {reminders.map((item) => (
          <div
            key={item.id}
            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between p-6 rounded-3xl border-3 transition-all shadow-sm gap-4 ${
              item.completed
                ? 'bg-sage-light/60 border-sage text-forest'
                : 'bg-cream border-forest/20 text-ink shadow-md'
            }`}
          >
            {/* Time badge & Icon */}
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold shadow-sm ${
                item.completed ? 'bg-sage text-forest' : 'bg-forest text-cream'
              }`}>
                {item.icon}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-2xl text-forest">{item.time}</span>
                  {item.completed ? (
                    <span className="bg-sage text-forest text-xs font-extrabold px-2.5 py-0.5 rounded-full">
                      ✓ {t.completed}
                    </span>
                  ) : (
                    <span className="bg-gold/40 text-forest text-xs font-bold px-2.5 py-0.5 rounded-full">
                      {t.upcoming}
                    </span>
                  )}
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-ink mt-0.5">
                   {t[item.titleKey] || item.title}
                </h3>
              </div>
            </div>

            {/* Actions: Listen & Toggle Completion */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-end">
              <button
                onClick={() => handleReadReminder(item)}
                className="flex items-center gap-1.5 px-4 py-3 bg-cream-dark hover:bg-sage/30 text-forest rounded-2xl font-bold text-sm border border-sage/40 shadow-sm transition-all"
                title={t.listenReminder}
              >
                <Volume2 className="w-5 h-5 text-terracotta" />
                <span>{t.listen}</span>
              </button>

              <button
                onClick={() => toggleReminder(item.id)}
                className={`flex items-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-lg transition-all shadow-md ${
                  item.completed
                    ? 'bg-sage text-forest hover:bg-sage-dark'
                    : 'bg-terracotta text-cream hover:bg-terracotta-dark btn-tactile-terracotta'
                }`}
              >
                <CheckCircle2 className="w-6 h-6" />
                <span>{item.completed ? t.done : t.markDone}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
