import React from 'react';
import {
  AlertTriangle,
  Bell,
  Activity,
  TrendingDown,
  ShieldCheck
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const AlertPanel = () => {

  const {
    reminders = [],
    history = []
  } = useApp();

  const alerts = [];

  // 1. Reminder alert
  const missedReminders = reminders.filter(
    (reminder) => !reminder.completed
  );

  if (missedReminders.length > 0) {
    alerts.push({
      id: 'reminder',
      type: 'Reminder',
      title: 'Pending reminder requires attention',
      description: `${missedReminders.length} scheduled reminder${
        missedReminders.length > 1 ? 's' : ''
      } has not been marked as completed.`,
      icon: Bell,
      level: 'attention'
    });
  }

  // 2. Activity alert
  if (history.length === 0) {
    alerts.push({
      id: 'activity',
      type: 'Activity',
      title: 'No cognitive activity recorded',
      description:
        'No cognitive game activity has been recorded yet.',
      icon: Activity,
      level: 'attention'
    });
  }

  // 3. Performance alert
  const recentSessions = history.slice(-5);

  if (
    recentSessions.length >= 3 &&
    recentSessions.filter((item) => item.isCorrect).length <
      recentSessions.length / 2
  ) {
    alerts.push({
      id: 'performance',
      type: 'Performance',
      title: 'Recent memory performance needs attention',
      description:
        'Recent game sessions contain more incorrect than correct attempts.',
      icon: TrendingDown,
      level: 'monitor'
    });
  }

  return (
    <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-terracotta/15 text-terracotta flex items-center justify-center">

            <AlertTriangle className="w-6 h-6" />

          </div>

          <div>

            <h2 className="text-xl font-extrabold text-forest">
              Alerts & Notifications
            </h2>

            <p className="text-xs text-ink/70 mt-1">
              Important activity and reminder updates
            </p>

          </div>

        </div>

        <span className="bg-terracotta/15 text-terracotta text-xs font-extrabold px-3 py-1 rounded-full border border-terracotta/30">
          {alerts.length} Alerts
        </span>

      </div>

      {/* Alerts */}
      <div className="space-y-3">

        {alerts.length > 0 ? (

          alerts.map((alert) => {

            const Icon = alert.icon;

            return (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-4 bg-cream rounded-2xl border border-sage/30"
              >

                {/* Icon */}
                <div className="w-10 h-10 rounded-xl bg-terracotta/15 text-terracotta flex items-center justify-center shrink-0">

                  <Icon className="w-5 h-5" />

                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="flex flex-wrap items-center gap-2">

                    <h3 className="text-sm font-extrabold text-forest">
                      {alert.title}
                    </h3>

                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold/30 text-forest">
                      {alert.type}
                    </span>

                  </div>

                  <p className="text-xs text-ink/70 mt-1 leading-relaxed">
                    {alert.description}
                  </p>

                  <p className="text-[10px] text-terracotta-dark font-bold mt-2">
                    ⚠️ Needs caregiver attention
                  </p>

                </div>

              </div>
            );

          })

        ) : (

          <div className="p-5 bg-sage/10 border border-sage/30 rounded-2xl text-center">

            <p className="text-sm font-extrabold text-forest">
              ✓ No active alerts
            </p>

            <p className="text-xs text-ink/60 mt-1">
              Everything looks up to date based on the available activity data.
            </p>

          </div>

        )}

      </div>

      {/* Privacy / Medical Disclaimer */}
      <div className="flex items-start gap-3 p-3 bg-sage/10 border border-sage/30 rounded-2xl">

        <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />

        <p className="text-xs text-ink/70 leading-relaxed">
          Alerts are intended to support caregiver monitoring and
          awareness. They do not provide a medical diagnosis or
          determine a health condition.
        </p>

      </div>

    </div>
  );
};