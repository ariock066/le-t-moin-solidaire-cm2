import React from "react";
import { ShieldAlert, Heart, Info, ArrowLeftRight } from "lucide-react";

interface SolidarityGaugeProps {
  history: Array<{ stepId: number; chosenId: number; scoreEarned: number }>;
  currentChoiceScore: number | null; // score of the currently selected option if in feedback mode
  isFeedbackMode: boolean;
}

export const SolidarityGauge: React.FC<SolidarityGaugeProps> = ({
  history,
  currentChoiceScore,
  isFeedbackMode,
}) => {
  // Helper to map response score to the new subtle scale: bonne (+1), neutre (-0.5), mauvaise (-1)
  const getMappedScore = (score: number) => {
    if (score === 1) return 1;
    if (score === 0) return -0.5;
    return -1;
  };

  // Calculate total answered choices including the current preview if in feedback mode
  const totalAnswers = history.length + (isFeedbackMode && currentChoiceScore !== null ? 1 : 0);
  
  // Calculate total points with the custom rules
  const totalPoints = history.reduce((sum, item) => sum + getMappedScore(item.scoreEarned), 0) + 
    (isFeedbackMode && currentChoiceScore !== null ? getMappedScore(currentChoiceScore) : 0);

  // Position on a scale from -20 to +20, clamped
  const clampedPoints = Math.max(-20, Math.min(20, totalPoints));
  const percentage = Math.min(100, Math.max(0, Math.round(((clampedPoints + 20) / 40) * 100)));

  // Determine label and color style based on cumulative total points
  const getStanceDetails = () => {
    if (totalAnswers === 0) {
      return {
        label: "Équilibre Initial",
        description: "Chaque choix influence la balance : Active (+1 pt), Passive (-0,5 pt) ou Complice (-1 pt) !",
        color: "text-sky-600 bg-sky-50 border-sky-200",
        cursorColor: "bg-sky-500",
        emoji: "⚖️",
        accentText: "Neutre",
      };
    }
    if (totalPoints > 3) {
      return {
        label: "Témoin Actif & Solidaire",
        description: "Tu es un ange gardien pour Lucas ! Tes actions positives font pencher la balance vers le bien.",
        color: "text-emerald-800 bg-emerald-50 border-emerald-200",
        cursorColor: "bg-emerald-500",
        emoji: "🦸",
        accentText: "Solidaire !",
      };
    } else if (totalPoints < -3) {
      return {
        label: "Complice ou Silencieux",
        description: "Attention, l'indifférence ou la complicité créent un climat d'insécurité pour Lucas.",
        color: "text-rose-800 bg-rose-50 border-rose-200",
        cursorColor: "bg-rose-500",
        emoji: "🤫",
        accentText: "Attention !",
      };
    } else {
      return {
        label: "Spectateur Passif",
        description: "Tu n'embêtes pas Lucas, mais ton inaction ne suffit pas à faire reculer le harcèlement.",
        color: "text-orange-800 bg-orange-50 border-orange-200",
        cursorColor: "bg-orange-500",
        emoji: "🚶",
        accentText: "Hésitant",
      };
    }
  };

  const getChoicePointsText = () => {
    if (currentChoiceScore === 1) return "+1 point";
    if (currentChoiceScore === 0) return "-0,5 point";
    if (currentChoiceScore === -1) return "-1 point";
    return "";
  };

  const stance = getStanceDetails();

  return (
    <div 
      className="w-full bg-white border-4 border-white shadow-xl rounded-3xl p-5 md:p-6 relative overflow-hidden transition-all duration-300"
      id="solidarity-gauge-card"
    >
      {/* Small Header */}
      <div className="flex items-center justify-between mb-4" id="gauge-heading-row">
        <div id="gauge-title-group" className="flex items-center gap-2">
          <ArrowLeftRight className="w-5 h-5 text-sky-600 animate-pulse" />
          <h3 className="font-display font-black text-sky-950 text-sm md:text-base uppercase tracking-tight">
            La Balance du Climat Scolaire
          </h3>
        </div>
        <div className="flex gap-1.5 items-center" id="gauge-stance-badge-group">
          <span className={`text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border bg-slate-100 border-slate-200 text-slate-700`} id="gauge-points-badge">
            {totalPoints > 0 ? `+${totalPoints}` : totalPoints} pts
          </span>
          <span className={`text-[11px] font-black uppercase tracking-wider px-2 py-0.5 rounded-md border ${stance.color}`} id="gauge-stance-badge">
            {stance.emoji} {stance.label}
          </span>
        </div>
      </div>

      <p className="text-sky-850/80 text-xs font-semibold mb-5 leading-snug" id="gauge-dynamic-description">
        {stance.description} {isFeedbackMode && currentChoiceScore !== null && (
          <span className="text-orange-600 animate-pulse font-extrabold ml-1">
            (Choix : {getChoicePointsText()})
          </span>
        )}
      </p>

      {/* The Visual Balance Bar */}
      <div className="relative pt-6 pb-2" id="gauge-bar-stage">
        {/* Extreme indicators */}
        <div className="absolute top-0 left-0 flex items-center gap-1 text-[10px] text-rose-600 font-extrabold uppercase tracking-wider" id="gauge-indicator-left">
          <ShieldAlert className="w-3.5 h-3.5" />
          <span>Silence / Complice (-20)</span>
        </div>
        
        <div className="absolute top-0 right-0 flex items-center gap-1 text-[10px] text-emerald-600 font-extrabold uppercase tracking-wider" id="gauge-indicator-right">
          <Heart className="w-3.5 h-3.5 fill-emerald-100" />
          <span>Solidarité active (+20)</span>
        </div>

        {/* Multi-Colored Track bar */}
        <div 
          className="w-full h-4.5 rounded-full bg-gradient-to-r from-rose-400 via-orange-300 via-yellow-200 via-sky-300 to-emerald-400 p-[2px] shadow-inner relative" 
          id="gauge-track-outer"
        >
          {/* Central Anchor / Balance point marker */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-white/70 shadow-xs z-10" title="Neutre" id="gauge-central-anchor"></div>

          {/* Sliding Needle / Balance cursor */}
          <div 
            className="absolute top-1/2 -translate-y-1/2 -ml-3.5 flex flex-col items-center z-20 transition-all duration-700 ease-out"
            style={{ left: `${percentage}%` }}
            id="gauge-needle-bubble"
          >
            {/* The circular floating button cursor */}
            <div className="w-7 h-7 bg-white rounded-full border-3 border-sky-950 shadow-md flex items-center justify-center font-bold text-xs hover:scale-115 transition cursor-default">
              {stance.emoji}
            </div>
            
            {/* Triangular pointer */}
            <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-b-[6px] border-b-sky-950 mt-[-1px]"></div>
          </div>
        </div>

        {/* Labels below the track with numeric ticks */}
        <div className="flex justify-between items-center text-[10px] font-extrabold mt-2.5 px-1 font-mono text-sky-700" id="gauge-track-labels">
          <span className="text-rose-600 font-bold">-20 pts</span>
          <span className="text-rose-400/80 font-bold">-10 pts</span>
          <span className="text-sky-500 font-bold">0 pt (Neutre)</span>
          <span className="text-emerald-400/80 font-bold">+10 pts</span>
          <span className="text-emerald-600 font-bold">+20 pts</span>
        </div>
      </div>
    </div>
  );
};
