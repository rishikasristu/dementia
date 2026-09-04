import React from 'react';
import {
  Bell,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Trash2
} from 'lucide-react';

export const ReminderManager = ({ reminders = [], onDelete }) => {

  const demoReminders = [
    {
      id: 1,
      title: 'Morning Medicine',
      time: '08:00 AM',
      icon: '💊',
      completed: false
    },
    {
      id: 2,
      title: 'Memory Game',
      time: '10:00 AM',
      icon: '🧠',
      completed: true
    },
    {
      id: 3,
      title: 'Afternoon Walk',
      time: '05:00 PM',
      icon: '🚶',
      completed: false
    }
  ];

  const displayReminders =
    reminders.length > 0 ? reminders : demoReminders;

  const completedReminders = displayReminders.filter(
    (reminder) => reminder.completed
  ).length;

  const missedReminders = displayReminders.filter(
    (reminder) => !reminder.completed
  ).length;

  return (
    <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-gold/25 text-forest flex items-center justify-center">
            <Bell className="w-6 h-6" />
          </div>

          <div>
            <h2 className="text-xl font-extrabold text-forest">
              Reminder Manager
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Monitor important daily reminders
            </p>
          </div>
        </div>

        <span className="bg-sage/20 text-forest text-xs font-extrabold px-3 py-1 rounded-full border border-sage/30">
          {displayReminders.length} Reminders
        </span>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 gap-3">

        <div className="bg-cream p-4 rounded-2xl border border-sage/30">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-forest" />

            <span className="text-xs font-bold text-ink/70">
              Completed
            </span>
          </div>

          <p className="text-2xl font-extrabold text-forest mt-2">
            {completedReminders}
          </p>
        </div>

        <div className="bg-cream p-4 rounded-2xl border border-sage/30">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-terracotta" />

            <span className="text-xs font-bold text-ink/70">
              Needs Attention
            </span>
             <button
    onClick={() => {
      if (window.confirm(`Delete "${reminder.title}"?`)) {
        onDelete?.(reminder.id);
      }
    }}
    className="p-2 rounded-xl text-terracotta hover:bg-terracotta/10 transition-all"
    title="Delete reminder"
  >
    <Trash2 className="w-4 h-4" />
  </button>

          </div>

          <p className="text-2xl font-extrabold text-terracotta mt-2">
            {missedReminders}
          </p>
        </div>

      </div>

      {/* Reminder List */}
      <div className="space-y-3">

        {displayReminders.map((reminder) => (

          <div
            key={reminder.id}
            className="flex items-center gap-4 p-4 bg-cream rounded-2xl border border-sage/30"
          >

            {/* Icon */}
            <div className="w-11 h-11 rounded-xl bg-sage/15 flex items-center justify-center text-xl shrink-0">
              {reminder.icon || '🔔'}
            </div>

            {/* Details */}
            <div className="flex-1">

              <h3 className="text-sm font-extrabold text-forest">
                {reminder.title}
              </h3>

              <div className="flex items-center gap-2 mt-1">
                <Clock className="w-3.5 h-3.5 text-ink/60" />

                <span className="text-xs text-ink/70">
                  {reminder.time}
                </span>
              </div>

            </div>

            {/* Status */}
            {reminder.completed ? (

              <span className="flex items-center gap-1 text-[10px] font-extrabold text-forest bg-sage/20 px-2.5 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Completed
              </span>

            ) : (

              <span className="flex items-center gap-1 text-[10px] font-extrabold text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-full">
                <AlertTriangle className="w-3.5 h-3.5" />
                Attention
              </span>

            )}

          </div>

        ))}

      </div>

      {/* Information Notice */}
      <div className="flex items-start gap-3 p-3 bg-sage/10 border border-sage/30 rounded-2xl">

        <Bell className="w-5 h-5 text-forest shrink-0 mt-0.5" />

        <p className="text-xs text-ink/70 leading-relaxed">
          Reminders help caregivers keep track of daily routines,
          activities, and scheduled tasks. A reminder marked as
          incomplete may require caregiver attention.
        </p>

      </div>

    </div>
  );
};