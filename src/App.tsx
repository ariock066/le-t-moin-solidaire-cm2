/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { Header } from "./components/Header";
import { IntroScreen } from "./components/IntroScreen";
import { ChoiceList } from "./components/ChoiceList";
import { FeedbackCard } from "./components/FeedbackCard";
import { EndingCard } from "./components/EndingCard";
import { SolidarityGauge } from "./components/SolidarityGauge";
import { stepsData } from "./data";
import { GameState } from "./types";
import { 
  Heart, 
  HelpCircle, 
  BadgeAlert, 
  Sparkles, 
  BookOpen, 
  Volume2, 
  VolumeX, 
  MessageSquare,
  ShieldAlert,
  Compass
} from "lucide-react";

export default function App() {
  // Initialize game state
  const [state, setState] = useState<GameState>({
    currentStepIndex: -1, // -1 means intro screen
    score: 0,
    selectedChoiceId: null,
    history: [],
    isFeedbackMode: false,
  });

  // State for simple synthesized text-to-speech option (lovely feature for 9-11 yo readers)
  const [speechEnabled, setSpeechEnabled] = useState(false);
  const [speaking, setSpeaking] = useState(false);

// Keep track of the shuffled choices for the current step to persist order across render ticks
  const [shuffledChoices, setShuffledChoices] = useState<typeof stepsData[0]["choices"]>([]);

  // Simple Fisher-Yates array shuffling algorithm
  const shuffleArray = <T,>(array: T[]): T[] => {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  };

  // Restart/reset game
  const handleReset = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);
    setShuffledChoices([]);
    setState({
      currentStepIndex: -1,
      score: 0,
      selectedChoiceId: null,
      history: [],
      isFeedbackMode: false,
    });
  };

  // Start the adventure
  const handleStartAdventure = () => {
    const firstStep = stepsData[0];
    if (firstStep) {
      setShuffledChoices(shuffleArray(firstStep.choices));
    }
    setState((prev) => ({
      ...prev,
      currentStepIndex: 0,
    }));
  };

  // Handle choice selection (recording the selection and showing feedback)
  const handleSelectChoice = (choiceId: number) => {
    setState((prev) => ({
      ...prev,
      selectedChoiceId: choiceId,
      isFeedbackMode: true,
    }));
  };

  // Move from current step to next step
  const handleNextStep = () => {
    // 1. Cancel speech read out if active
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setSpeaking(false);

    const activeStep = stepsData[state.currentStepIndex];
    const chosenColor = activeStep.choices.find((c) => c.id === state.selectedChoiceId);
    
    if (!chosenColor) return;

    // 2. Accumulate current choice in history array and update score
    const newHistory = [
      ...state.history,
      {
        stepId: activeStep.id,
        chosenId: chosenColor.id,
        scoreEarned: chosenColor.score,
      },
    ];

    const nextIndex = state.currentStepIndex + 1;

    // Shuffle next step's choices or clear them if ending
    if (nextIndex < stepsData.length) {
      const nextStep = stepsData[nextIndex];
      setShuffledChoices(shuffleArray(nextStep.choices));
    } else {
      setShuffledChoices([]);
    }

    setState((prev) => ({
      ...prev,
      score: prev.score + chosenColor.score,
      history: newHistory,
      currentStepIndex: nextIndex, // If nextIndex === 20, it reaches the ending card
      selectedChoiceId: null,
      isFeedbackMode: false,
    }));
  };

  // Text-To-Speech reader feature for kids
  const readAloud = (textToRead: string) => {
    if (!window.speechSynthesis) return;

    if (speaking) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(textToRead);
    utterance.lang = "fr-FR";
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const isIntro = state.currentStepIndex === -1;
  const isEnding = state.currentStepIndex >= stepsData.length;
  
  const currentStep = !isIntro && !isEnding ? stepsData[state.currentStepIndex] : null;
  const selectedChoice = currentStep && state.selectedChoiceId !== null
    ? currentStep.choices.find((c) => c.id === state.selectedChoiceId)
    : null;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50" id="app-root-layout">
      {/* Top Banner / Navigation */}
      <Header
        currentStepIndex={state.currentStepIndex}
        totalSteps={stepsData.length}
        currentDay={currentStep ? currentStep.day : ""}
        currentLocation={currentStep ? currentStep.location : ""}
        isIntro={isIntro}
        isEnding={isEnding}
        onReset={handleReset}
      />

      {/* Main Container */}
      <main className="flex-1 py-8 px-4 md:px-8 max-w-5xl mx-auto w-full flex flex-col justify-center" id="app-main-content">
        {/* Scenario Intro screen */}
        {isIntro && (
          <IntroScreen onStart={handleStartAdventure} />
        )}

        {/* Narrative choices screens */}
        {currentStep && (
          <div className="w-full flex flex-col gap-6" id="game-active-flow">
            {/* Story Card Panel */}
            <div className="bg-white border-4 border-white rounded-3xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row gap-6 items-stretch relative overflow-hidden" id="scenario-card-panel">
              {/* Decorative Background Element */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-sky-50 rounded-full opacity-60 -z-10" id="decorative-bg-bubble"></div>

              {/* Left sidebar card decoration (shows avatar) */}
              <div className="w-full md:w-48 bg-sky-900 border-2 border-sky-950 rounded-2xl p-4 flex flex-col items-center justify-center text-center shrink-0 shadow-lg" id="scenario-left-visual">
                <div className="bg-white text-sky-900 w-16 h-16 rounded-2xl flex items-center justify-center font-display font-extrabold text-3xl mb-3 shadow-md animate-bounce" id="avatar-circle">
                  🎒
                </div>
                <h4 className="font-display font-black text-white text-base leading-none" id="avatar-name">
                  Lucas
                </h4>
                <p className="text-[10px] text-sky-300 mt-1.5 font-bold uppercase tracking-widest" id="avatar-sub">
                  Nouvel Élève CM2
                </p>

                {/* Text to Speech button for accessible accessibility reading */}
                {"speechSynthesis" in window && (
                  <button
                    onClick={() => {
                      if (currentStep) {
                        const fullText = `${currentStep.title}. ${currentStep.situation}`;
                        readAloud(fullText);
                      }
                    }}
                    className={`mt-4 flex items-center gap-1.5 text-xs py-2 px-3 rounded-xl font-bold transition duration-200 cursor-pointer shadow-xs ${
                      speaking 
                        ? "bg-rose-100 text-rose-800 border-2 border-rose-200"
                        : "bg-sky-800 text-sky-100 hover:bg-sky-700 border border-sky-700"
                    }`}
                    id="audio-read-btn"
                    title="Lire la situation à haute voix"
                  >
                    {speaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                    <span>{speaking ? "Arrêter la voix" : "Écouter l'histoire"}</span>
                  </button>
                )}
              </div>

              {/* Story Description Core Block */}
              <div className="flex-1 flex flex-col justify-between gap-4 relative z-10" id="scenario-description-block">
                <div>
                  <div className="flex justify-between items-center gap-3 mb-3" id="scenario-card-tags">
                    <span className="text-sky-700 bg-sky-100 border border-sky-250/60 text-xs font-extrabold uppercase tracking-widest flex items-center gap-1.5 px-3 py-1 rounded-full">
                      <BookOpen className="w-3.5 h-3.5" />
                      Scene {currentStep.id} - {currentStep.title}
                    </span>
                    <span className="text-sky-500 text-xs font-black font-mono tracking-wider">
                      ★ CM2
                    </span>
                  </div>

                  <h3 className="font-display text-2xl md:text-3xl font-black text-sky-900 leading-tight mb-4" id="scenario-body-title">
                    {currentStep.situation.split(".")[0]}.
                  </h3>

                  <div className="text-sky-850 text-sm md:text-base leading-relaxed text-justify mb-4 font-semibold space-y-2" id="scenario-body-situation">
                    <p>
                      {currentStep.situation.substring(currentStep.situation.indexOf(".") + 1).trim()}
                    </p>
                  </div>
                </div>

                {/* Small reminder card footer */}
                <div className="bg-orange-50 border border-orange-100 p-3.5 rounded-2xl flex items-center gap-2.5 text-orange-850 text-xs font-bold" id="scenario-footer-hint">
                  <Compass className="w-4 h-4 text-orange-600 animate-spin-slow" />
                  <span>Agir en tant que témoin, ce n'est pas être une "balance", c'est protéger celui qui ne peut se défendre.</span>
                </div>
              </div>
            </div>

            {/* Solidarity Balance Gauge */}
            <SolidarityGauge
              history={state.history}
              currentChoiceScore={selectedChoice ? selectedChoice.score : null}
              isFeedbackMode={state.isFeedbackMode}
            />

            {/* List of 3 Choices */}
            <ChoiceList
              choices={shuffledChoices.length > 0 ? shuffledChoices : currentStep.choices}
              selectedChoiceId={state.selectedChoiceId}
              onSelectChoice={handleSelectChoice}
              disabled={state.isFeedbackMode}
            />

            {/* Selected Pedagogical Feedback Card */}
            {state.isFeedbackMode && selectedChoice && (
              <FeedbackCard
                selectedChoice={selectedChoice}
                onNext={handleNextStep}
                isLastStep={state.currentStepIndex === stepsData.length - 1}
              />
            )}
          </div>
        )}

        {/* Game End screen */}
        {isEnding && (
          <EndingCard
            score={state.score}
            history={state.history}
            onReset={handleReset}
          />
        )}
      </main>

      {/* Simple accessible Footer */}
      <footer className="py-6 border-t border-slate-200 mt-12 bg-white text-center text-xs text-slate-400 font-medium" id="app-footer">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-6">
          <p>© 2026 - Le Témoin Solidaire • Mission de sensibilisation contre le harcèlement scolaire physique</p>
          <div className="flex gap-4" id="footer-links">
            <span className="hover:text-slate-600">Pour les élèves de CM2</span>
            <span>•</span>
            <span className="hover:text-slate-600">Éducation civique</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

