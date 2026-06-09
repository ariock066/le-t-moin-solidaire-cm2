/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { ArrowRight, Info, ShieldAlert, CheckCircle2, HeartHandshake } from "lucide-react";
import { Choice } from "../types";

interface FeedbackCardProps {
  selectedChoice: Choice;
  onNext: () => void;
  isLastStep: boolean;
}

export const FeedbackCard: React.FC<FeedbackCardProps> = ({
  selectedChoice,
  onNext,
  isLastStep,
}) => {
  const { score, feedback } = selectedChoice;

  // Let's style the feedback based on whether it is a Positive (+1), Passive (0) or Negative (-1) choice
  const getFeedbackStyles = () => {
    if (score === 1) {
      return {
        bgColor: "bg-emerald-50 border-emerald-300",
        badgeBg: "bg-emerald-100 text-emerald-800 border border-emerald-250",
        textColor: "text-emerald-900",
        label: "Choix Courageux & Citoyen ! 🌟",
        icon: <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />,
      };
    } else if (score === 0) {
      return {
        bgColor: "bg-orange-50/70 border-orange-300",
        badgeBg: "bg-orange-100 text-orange-800 border border-orange-250",
        textColor: "text-orange-950",
        label: "Choix Passif... 🌤️",
        icon: <Info className="w-5 h-5 text-orange-600 shrink-0" />,
      };
    } else {
      return {
        bgColor: "bg-rose-50 border-rose-300",
        badgeBg: "bg-rose-100 text-rose-800 border border-rose-250",
        textColor: "text-rose-900",
        label: "Comportement Négatif... ⚠️",
        icon: <ShieldAlert className="w-5 h-5 text-rose-600 shrink-0" />,
      };
    }
  };

  const styles = getFeedbackStyles();

  return (
    <div
      className={`w-full border-4 p-5 md:p-6 rounded-2xl transition-all duration-300 ${styles.bgColor} animate-in fade-in slide-in-from-top-4`}
      id="feedback-card-container"
    >
      <div className="flex flex-col md:flex-row gap-4 items-start" id="feedback-layout">
        {/* Visual Badge Icon */}
        <div className={`p-3 rounded-2xl flex items-center justify-center ${styles.badgeBg}`} id="feedback-badge-icon">
          {styles.icon}
        </div>

        {/* Message */}
        <div className="flex-1" id="feedback-message-block">
          <span className="text-xs font-display font-black tracking-wider uppercase block mb-1.5" id="feedback-label">
            {styles.label}
          </span>
          <p className={`text-sm md:text-base font-bold leading-relaxed ${styles.textColor}`} id="feedback-text">
            {feedback}
          </p>

          {/* Educational Callout box to reinforce pedagogical lessons */}
          <div className="mt-4 pt-3 border-t border-slate-300/30 flex items-center gap-2.5 text-sky-800 text-xs font-bold" id="feedback-lesson-callout">
            <HeartHandshake className="w-4 h-4 text-orange-450" />
            <span>Chaque action compte pour libérer la parole de Lucas et faire bouger le collectif.</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="w-full md:w-auto self-stretch md:self-center flex" id="feedback-btn-wrapper">
          <button
            onClick={onNext}
            className="w-full md:w-auto bg-orange-400 hover:bg-orange-500 text-white font-display font-black text-sm px-6 py-3.5 rounded-2xl transition hover:translate-x-0.5 flex items-center justify-center gap-2 cursor-pointer shadow-md border-2 border-orange-500 uppercase tracking-tight"
            id="feedback-next-button"
          >
            <span>{isLastStep ? "Voir ma Fin Unique" : "Situation Suivante"}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
