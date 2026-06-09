/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, Calendar, MapPin } from "lucide-react";

interface HeaderProps {
  currentStepIndex: number;
  totalSteps: number;
  currentDay: string;
  currentLocation: string;
  isIntro: boolean;
  isEnding: boolean;
  onReset: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentStepIndex,
  totalSteps,
  currentDay,
  currentLocation,
  isIntro,
  isEnding,
  onReset,
}) => {
  return (
    <header className="w-full bg-white border-b-4 border-sky-100 shadow-sm py-4 px-6 md:px-12 sticky top-0 z-50 transition-all">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        {/* Title */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={onReset} id="header-logo-container">
          <div className="bg-orange-400 text-white w-12 h-12 rounded-full shadow-md flex items-center justify-center transition hover:scale-105 font-bold text-2xl" id="header-logo-badge">
            ❓
          </div>
          <div>
            <h1 className="font-display text-xl md:text-2xl font-black text-sky-900 leading-tight uppercase tracking-tight" id="header-app-title">
              Le Témoin Solidaire
            </h1>
            <p className="text-xs text-sky-600 font-bold tracking-wider" id="header-app-subtitle">
              S'ENTRAIDER FACE AU HARCÈLEMENT • CM2
            </p>
          </div>
        </div>

        {/* Dynamic Context Block */}
        {!isIntro && !isEnding && (
          <div className="flex flex-wrap items-center gap-2 md:gap-3" id="header-meta-info">
            {/* Day Badge */}
            <div className="flex items-center gap-1.5 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-xs" id="header-day-badge">
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              <span>{currentDay}</span>
            </div>

            {/* Location Badge */}
            <div className="flex items-center gap-1.5 bg-orange-50 border border-orange-200 text-orange-800 text-xs font-bold px-3 py-1.5 rounded-full shadow-xs" id="header-location-badge">
              <MapPin className="w-3.5 h-3.5 text-orange-600" />
              <span>{currentLocation}</span>
            </div>

            {/* Steps Tracker */}
            <div className="bg-sky-100 border border-sky-200 text-sky-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-xs" id="header-steps-tracker">
              Situation {currentStepIndex + 1} / {totalSteps}
            </div>
          </div>
        )}

        {isEnding && (
          <div className="flex items-center" id="header-ending-actions">
            <button
              onClick={onReset}
              className="text-xs bg-orange-100 hover:bg-orange-200 text-orange-800 font-black px-4 py-2 rounded-xl transition cursor-pointer border border-orange-200"
              id="header-restart-btn"
            >
              Recommencer
            </button>
          </div>
        )}
      </div>

      {/* Progress Bar (Interactive top indicator) */}
      {!isIntro && !isEnding && (
        <div className="max-w-5xl mx-auto w-full bg-sky-50 h-3 mt-4 rounded-full overflow-hidden relative border border-sky-100" id="header-progress-container">
          <div
            className="bg-orange-400 h-full rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((currentStepIndex + 1) / totalSteps) * 100}%` }}
            id="header-progress-inner-bar"
          ></div>
        </div>
      )}
    </header>
  );
};
