/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Sparkles, ShieldAlert, Award, ArrowRight, Heart } from "lucide-react";

interface IntroScreenProps {
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({ onStart }) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-white border-4 border-sky-100 rounded-3xl p-6 md:p-10 shadow-lg relative overflow-hidden" id="intro-screen-container">
      {/* Decorative colored lights in the corners */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-sky-100/50 rounded-full blur-3xl -z-10" id="intro-light-1"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-orange-100/50 rounded-full blur-3xl -z-10" id="intro-light-2"></div>

      {/* Main Intro Badge */}
      <div className="flex justify-center mb-6" id="intro-badge-wrapper">
        <span className="inline-flex items-center gap-1.5 bg-sky-50 border border-sky-200 text-sky-800 text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full shadow-xs">
          <Heart className="w-3.5 h-3.5 text-orange-500 fill-orange-500 animate-pulse" />
          Aventure Citoyenne CM2
        </span>
      </div>

      {/* Intro Header */}
      <h2 className="font-display text-3xl md:text-4xl text-center text-sky-900 font-extrabold mb-4 leading-tight uppercase tracking-tight" id="intro-title">
        Deviens un témoin actif de la solidarité !
      </h2>
      
      <p className="text-sky-800 text-center leading-relaxed max-w-xl mx-auto mb-8 text-base md:text-lg font-medium" id="intro-subtitle">
        Tu vas incarner un élève de CM2 qui assiste directement aux événements de l'école. À travers tes choix, tu découvriras comment agir concrètement pour aider tes camarades et rendre ton école plus sereine.
      </p>

      {/* Educational Goal cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10" id="intro-learning-grid">
        <div className="bg-white border-2 border-sky-100 p-5 rounded-2xl flex flex-col items-center text-center transition hover:shadow-md" id="intro-card-1">
          <div className="bg-orange-100 text-orange-850 p-3 rounded-xl mb-3">
            <ShieldAlert className="w-6 h-6 text-orange-600" />
          </div>
          <h3 className="font-display font-bold text-sky-900 text-base mb-1">Alerter vs. Cafarder</h3>
          <p className="text-xs text-sky-700 leading-relaxed font-semibold">
            Comprendre qu'en parlant à un adulte pour sauver ou aider un camarade en souffrance, tu le protèges. Ce n'est jamais de la délation !
          </p>
        </div>

        <div className="bg-white border-2 border-emerald-100 p-5 rounded-2xl flex flex-col items-center text-center transition hover:shadow-md" id="intro-card-2">
          <div className="bg-emerald-100 text-emerald-800 p-3 rounded-xl mb-3">
            <Heart className="w-6 h-6 text-emerald-600" />
          </div>
          <h3 className="font-display font-bold text-sky-900 text-base mb-1">Développer l'empathie</h3>
          <p className="text-xs text-sky-700 leading-relaxed font-semibold">
            Te mettre dans la peau des autres, ressentir leurs difficultés et décider d'agir plutôt que de rester simple spectateur.
          </p>
        </div>

        <div className="bg-white border-2 border-sky-100 p-5 rounded-2xl flex flex-col items-center text-center transition hover:shadow-md" id="intro-card-3">
          <div className="bg-sky-100 text-sky-800 p-3 rounded-xl mb-3">
            <Award className="w-6 h-6 text-sky-600" />
          </div>
          <h3 className="font-display font-bold text-sky-900 text-base mb-1">Le rôle du collectif</h3>
          <p className="text-xs text-sky-700 leading-relaxed font-semibold">
            Prendre conscience que l'union fait la force ! C'est ensemble, avec les adultes et les copains, qu'on arrête le harcèlement.
          </p>
        </div>
      </div>

      {/* Narrative block */}
      <div className="bg-sky-50 border-2 border-sky-100/60 p-6 rounded-2xl mb-10" id="intro-prologue-block">
        <h4 className="font-display font-black text-sky-900 text-base mb-2 flex items-center gap-2">
          📖 Le début de l'histoire...
        </h4>
        <p className="text-sky-800 text-sm leading-relaxed font-semibold">
          C'est la rentrée scolaire de septembre en CM2. Un nouvel élève discret, <strong className="text-orange-600 font-extrabold">Lucas</strong>, timide et portant des lunettes, vient de rejoindre votre classe. Thomas, le garçon le plus grand de l'école, l'a immédiatement repéré et commence à s'en prendre à lui sous tes yeux...
        </p>
      </div>

      {/* Action Button */}
      <div className="flex flex-col items-center gap-3" id="intro-action-container">
        <button
          onClick={onStart}
          className="flex items-center gap-2.5 bg-orange-400 hover:bg-orange-500 text-white font-display font-black text-lg px-8 py-4 rounded-2xl shadow-lg transition hover:-translate-y-0.5 active:translate-y-0 cursor-pointer uppercase tracking-tight"
          id="intro-start-btn"
        >
          <span>Commencer l'histoire</span>
          <ArrowRight className="w-5 h-5" />
        </button>
        <span className="text-xs text-sky-500 font-bold uppercase tracking-wider">Aventure interactive d'environ 20 étapes</span>
      </div>
    </div>
  );
};
