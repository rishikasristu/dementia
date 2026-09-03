import React from 'react';
import {
  ShieldCheck,
  Lock,
  UserCheck,
  Eye,
  HeartHandshake
} from 'lucide-react';

export const PrivacyNotice = () => {
  return (
    <div className="bg-cream-light p-6 rounded-3xl border-2 border-sage/40 shadow-photo space-y-5">

      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="w-11 h-11 rounded-xl bg-sage/20 text-forest flex items-center justify-center">
          <ShieldCheck className="w-6 h-6" />
        </div>

        <div>
          <h2 className="text-xl font-extrabold text-forest">
            Privacy & Data Controls
          </h2>

          <p className="text-xs text-ink/70 mt-1">
            Patient information is protected through role-based access.
          </p>
        </div>
      </div>

      {/* Access Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Caregiver */}
        <div className="p-4 bg-cream rounded-2xl border border-sage/30">
          <div className="flex items-center gap-3 mb-2">
            <HeartHandshake className="w-5 h-5 text-forest" />

            <h3 className="text-sm font-extrabold text-forest">
              Caregiver Access
            </h3>
          </div>

          <p className="text-xs text-ink/70 leading-relaxed">
            Caregivers can monitor activities, manage reminders,
            personalize memories, and manage patient-related information.
          </p>
        </div>

        {/* Healthcare Worker */}
        <div className="p-4 bg-cream rounded-2xl border border-sage/30">
          <div className="flex items-center gap-3 mb-2">
            <Eye className="w-5 h-5 text-forest" />

            <h3 className="text-sm font-extrabold text-forest">
              Healthcare Worker Access
            </h3>
          </div>

          <p className="text-xs text-ink/70 leading-relaxed">
            Healthcare workers have read-only access to cognitive and
            activity trends. They cannot modify personal memories or
            caregiver-managed information.
          </p>
        </div>

      </div>

      {/* Data Protection */}
      <div className="p-4 bg-sage/10 border border-sage/30 rounded-2xl">

        <div className="flex items-center gap-3 mb-2">
          <Lock className="w-5 h-5 text-forest" />

          <h3 className="text-sm font-extrabold text-forest">
            Patient Data Protection
          </h3>
        </div>

        <ul className="space-y-2 text-xs text-ink/70">

          <li className="flex items-start gap-2">
            <UserCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <span>
              Access is controlled according to the user's role.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <UserCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <span>
              Healthcare worker views are designed for monitoring only.
            </span>
          </li>

          <li className="flex items-start gap-2">
            <UserCheck className="w-4 h-4 text-forest shrink-0 mt-0.5" />
            <span>
              Personal memories and caregiver-managed information remain
              under caregiver control.
            </span>
          </li>

        </ul>

      </div>

      {/* Non-Diagnostic Notice */}
      <div className="flex items-start gap-3 p-3 bg-gold/15 border border-gold/30 rounded-2xl">

        <ShieldCheck className="w-5 h-5 text-forest shrink-0 mt-0.5" />

        <p className="text-xs text-ink/70 leading-relaxed">
          Memory Garden provides activity and cognitive trend information
          to support awareness. It does not provide a medical diagnosis,
          determine a health condition, or replace professional medical
          advice.
        </p>

      </div>

    </div>
  );
};