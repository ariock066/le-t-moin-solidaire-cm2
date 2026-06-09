/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Award, RotateCcw, AlertTriangle, ShieldCheck, Heart, Users, MessageSquare, Info } from "lucide-react";

interface EndingCardProps {
  score: number;
  history: { stepId: number; chosenId: number; scoreEarned: number }[];
  onReset: () => void;
}

export const EndingCard: React.FC<EndingCardProps> = ({ score, history, onReset }) => {
  // Calculate stats to display
  const totalSteps = history.length;
  const positiveActions = history.filter((h) => h.scoreEarned === 1).length;
  const passiveActions = history.filter((h) => h.scoreEarned === 0).length;
  const negativeActions = history.filter((h) => h.scoreEarned === -1).length;

  // Render content depending on score threshold
  const getEndingDetails = () => {
    if (score >= 11) {
      return {
        type: "positive",
        title: "LA BONNE FIN : Lucas sourit à nouveau ! 🌟",
        tagline: "Un formidable élan de courage et de solidarité collective !",
        bgColor: "bg-emerald-50 border-emerald-300 text-emerald-950",
        iconContainerBg: "bg-emerald-100 text-emerald-700 border border-emerald-200",
        message: "Grâce à ta vigilance permanente et à tes nombreuses initiatives courageuses, les adultes de l'école ont pu être prévenus et agir avec efficacité. Lucas s'est senti grandement épaulé par tes gestes et par le reste de la classe, qui l'a soutenu. Thomas a été reçu par la directrice avec ses parents, et ses comportements de bousculades et de chantage ont définitivement cessé dans l'école. Aujourd'hui, Lucas sourit, joue au ballon au milieu de la cour avec les autres et l'ambiance de la classe de CM2 est redevenue harmonieuse et sereine !",
        illustrations: <ShieldCheck className="w-16 h-16 text-emerald-600" />,
        moral: "Tu as compris une leçon cruciale : Alerter un adulte de confiance pour aider un ami menacé n'est pas cafarder, c'est le libérer. En refusant de rester silencieux, tu as créé un groupe solidaire !",
      };
    } else if (score >= 0) {
      return {
        type: "neutral",
        title: "LA FIN MOYENNE : Un départ regrettable... 🌤️",
        tagline: "Des réactions trop timides ou tardives pour stopper le harcèlement.",
        bgColor: "bg-orange-50 border-orange-300 text-orange-950",
        iconContainerBg: "bg-orange-100 text-orange-700 border border-orange-200",
        message: "Tu as parfois tenté d'aider Lucas, mais tu as trop souvent reculé devant la peur de faire des histoires ou d'être traité de 'rapporteur'. Par conséquent, Thomas a continué à imposer sa loi une partie importante de l'année. Pour Lucas, le fardeau quotidien est malheureusement devenu trop lourd à supporter. Ses parents ont fini par l'inscrire dans une autre école pour lui permettre de se reconstruire. Thomas a été puni par l'école, mais tout le reste du groupe garde le goût amer d'un gâchis qu'on aurait pu éviter tous ensemble.",
        illustrations: <Info className="w-16 h-16 text-orange-600" />,
        moral: "Parfois, vouloir éviter les ennuis nous pousse au silence. Mais face au harcèlement de longue durée, le silence n'est jamais neutre. Agir vite et ensemble est indispensable !",
      };
    } else {
      return {
        type: "negative",
        title: "LA MAUVAISE FIN : Le regret du silence... 🌧️",
        tagline: "Le silence a triomphé, laissant la porte ouverte au harcèlement continu.",
        bgColor: "bg-rose-50 border-rose-300 text-rose-950",
        iconContainerBg: "bg-rose-100 text-rose-700 border border-rose-200",
        message: "Le silence et la crainte de Thomas ont régné tout au long de cette année de CM2. Faute de témoignages fermes et de prise de parole solidaire des camarades, Thomas a pu amplifier ses violences physiques, d'abord en cachette, puis de manière permanente. Le CM2 se clôture dans une immense souffrance et un isolement total pour Lucas. Plus grave encore, l'histoire se prolonge au collège où, privé d'aide, Lucas subit de nouvelles agressions quotidiennes, tandis que ta propre conscience ressent de vifs regrets de ne pas s'être interposée.",
        illustrations: <AlertTriangle className="w-16 h-16 text-rose-600" />,
        moral: "Le silence est le meilleur allié du harceleur. Heureusement, ce n'est qu'un jeu ! Tu peux recommencer l'aventure et apprendre à changer les choses pour libérer la parole de Lucas.",
      };
    }
  };

  const currentEnding = getEndingDetails();

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-8 animate-in fade-in" id="ending-container">
      {/* Upper Book Closure Cover Style box */}
      <div className={`p-6 md:p-10 rounded-3xl border-4 shadow-xl ${currentEnding.bgColor} relative overflow-hidden`} id="ending-main-card">
        <div className="absolute top-0 right-0 w-48 h-48 bg-sky-100/40 rounded-full blur-3xl -z-10" id="ending-light"></div>
        
        <div className="flex flex-col items-center justify-center text-center gap-4 animate-in zoom-in-95 duration-300" id="ending-content-wrapper">
          <div className={`p-4 rounded-full ${currentEnding.iconContainerBg} mb-2 shadow-md`} id="ending-large-icon">
            {currentEnding.illustrations}
          </div>

          <h2 className="font-display text-2xl md:text-3xl font-black text-sky-900 leading-tight block uppercase tracking-tight" id="ending-title">
            {currentEnding.title}
          </h2>
          
          <p className="text-xs md:text-sm font-black tracking-wider uppercase text-sky-600 max-w-xl" id="ending-tagline">
            {currentEnding.tagline}
          </p>

          <hr className="w-24 border-sky-200 my-2" />

          <p className="text-sky-900 text-sm md:text-base leading-relaxed text-justify md:text-center mt-2 max-w-2xl font-bold" id="ending-message-body">
            {currentEnding.message}
          </p>
        </div>

        {/* Lesson box */}
        <div className="mt-8 bg-white border-2 border-sky-100 p-5 rounded-2xl flex gap-4 items-start shadow-xs" id="ending-lesson-box">
          <div className="bg-orange-100 text-orange-850 p-2 rounded-xl border border-orange-200" id="ending-lesson-badge">
            <Award className="w-5 h-5 text-orange-600" />
          </div>
          <div>
            <h4 className="font-display font-black text-sky-900 text-sm mb-1">
              Ce qu'il faut en retenir :
            </h4>
            <p className="text-sky-800 text-xs md:text-sm leading-relaxed font-bold">
              {currentEnding.moral}
            </p>
          </div>
        </div>
      </div>

      {/* Statistics dashboard */}
      <div className="bg-white border-4 border-white rounded-3xl p-6 md:p-8 shadow-xl" id="ending-stats-card">
        <h3 className="font-display text-lg md:text-xl font-black text-sky-950 mb-6 flex items-center gap-2" id="ending-stats-title">
          <Users className="w-5 h-5 text-orange-500" />
          Tableau d'analyse de tes choix :
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center" id="ending-stats-grid">
          {/* Box score 1 */}
          <div className="bg-emerald-50/50 border-2 border-emerald-100 p-4 rounded-2xl flex flex-col items-center justify-center shadow-xs" id="ended-stat-box-1">
            <span className="text-3xl font-black text-emerald-600" id="ended-stat-badge-1">{positiveActions}</span>
            <span className="text-xs text-sky-900 font-extrabold uppercase mt-1">Actions Courageuses</span>
            <p className="text-[10px] text-emerald-800 font-bold px-2 mt-1">
              (Alerter l'école, consoler Lucas, faire groupe)
            </p>
          </div>

          {/* Box score 2 */}
          <div className="bg-orange-50/50 border-2 border-orange-150 p-4 rounded-2xl flex flex-col items-center justify-center shadow-xs" id="ended-stat-box-2">
            <span className="text-3xl font-black text-orange-500" id="ended-stat-badge-2">{passiveActions}</span>
            <span className="text-xs text-sky-900 font-extrabold uppercase mt-1">Actions Passives</span>
            <p className="text-[10px] text-orange-800 font-bold px-2 mt-1">
              (Détourner le regard, laisser faire, fuir)
            </p>
          </div>

          {/* Box score 3 */}
          <div className="bg-rose-50/50 border-2 border-rose-100 p-4 rounded-2xl flex flex-col items-center justify-center shadow-xs" id="ended-stat-box-3">
            <span className="text-3xl font-black text-rose-600" id="ended-stat-badge-3">{negativeActions}</span>
            <span className="text-xs text-sky-900 font-extrabold uppercase mt-1">Actions Négatives</span>
            <p className="text-[10px] text-rose-800 font-bold px-2 mt-1">
              (Rire des blagues, encourager les menaces)
            </p>
          </div>
        </div>

        {/* Informative advice for real-life */}
        <div className="mt-6 pt-6 border-t border-sky-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-sky-50 p-5 rounded-2xl border-2 border-sky-100" id="ending-helpline-box">
          <div className="flex gap-3 items-start" id="ended-phone-text">
            <div className="bg-orange-100 text-orange-800 p-2.5 rounded-xl shrink-0 border border-orange-150">
              <MessageSquare className="w-5 h-5 text-orange-600" />
            </div>
            <div>
              <h4 className="font-display font-black text-sky-950 text-xs md:text-sm">
                Besoin d'aide ou envie d'en parler dans la vraie vie ?
              </h4>
              <p className="text-sky-800 text-xs leading-relaxed max-w-md mt-1 font-bold">
                Si tu es victime ou témoin de harcèlement à l'école, parles-en tout de suite à tes parents, tes enseignants, ou appelle gratuitement le numéro vert national :
              </p>
            </div>
          </div>
          <div className="bg-orange-400 hover:bg-orange-500 text-white rounded-2xl px-6 py-3.5 font-display font-black text-lg shadow-md whitespace-nowrap animate-bounce border-2 border-orange-500 cursor-default" id="ended-helpline-number">
            ☎️ Allo 3018
          </div>
        </div>
      </div>

      {/* Restart container */}
      <div className="flex flex-col items-center justify-center gap-3 mb-12 animate-pulse" id="ending-retry-container">
        <button
          onClick={onReset}
          className="flex items-center gap-2 bg-orange-400 hover:bg-orange-500 text-white font-display font-black text-base px-8 py-4 rounded-2xl shadow-lg transition hover:-translate-y-0.5 cursor-pointer uppercase tracking-tight border-2 border-orange-500"
          id="ending-replay-button"
        >
          <RotateCcw className="w-4 h-4" />
          <span>Recommencer l'aventure</span>
        </button>
        <span className="text-xs text-sky-500 font-extrabold uppercase tracking-wider text-center">
          Essaie d'obtenir la Bonne Fin en prenant les choix les plus courageux !
        </span>
      </div>
    </div>
  );
};
