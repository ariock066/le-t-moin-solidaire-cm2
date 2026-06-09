/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Choice {
  id: number;
  text: string;
  score: number; // +1, 0, -1
  feedback: string; // Explication pédagogique immédiate du choix
}

export interface Step {
  id: number;
  title: string;
  situation: string;
  choices: Choice[];
  day: string; // ex: "Lundi - Matin"
  location: string; // ex: "Cour de récréation"
}

export interface GameState {
  currentStepIndex: number; // 0 à 19 pour les étapes, -1 pour l'intro, 20 pour la fin
  score: number;
  selectedChoiceId: number | null; // Choix sélectionné à l'étape en cours
  history: { stepId: number; chosenId: number; scoreEarned: number }[];
  isFeedbackMode: boolean; // Si on affiche le retour pédagogique du choix
}
