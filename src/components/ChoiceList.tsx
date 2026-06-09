/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Choice } from "../types";
import { HandHelping, EyeOff, Smile } from "lucide-react";

interface ChoiceListProps {
  choices: Choice[];
  selectedChoiceId: number | null;
  onSelectChoice: (choiceId: number) => void;
  disabled: boolean;
}

export const ChoiceList: React.FC<ChoiceListProps> = ({
  choices,
  selectedChoiceId,
  onSelectChoice,
  disabled,
}) => {
  // Let's attach lovely illustrative indicators for each of the 3 choices
  // Since we display three choices, we want to give them distinct visually warm identifiers
  const getPrefix = (index: number) => {
    switch (index) {
      case 0:
        return {
          label: "1",
          bgColor: "bg-sky-50 border-sky-200 text-sky-800",
          icon: <HandHelping className="w-4 h-4 text-sky-600" />,
        };
      case 1:
        return {
          label: "2",
          bgColor: "bg-orange-50 border-orange-200 text-orange-800",
          icon: <EyeOff className="w-4 h-4 text-orange-600" />,
        };
      case 2:
      default:
        return {
          label: "3",
          bgColor: "bg-emerald-50 border-emerald-200 text-emerald-800",
          icon: <Smile className="w-4 h-4 text-emerald-600" />,
        };
    }
  };

  return (
    <div className="w-full flex flex-col gap-4" id="choices-list-container">
      <h4 className="text-sky-900 text-xs font-black uppercase tracking-wider mb-1" id="choices-title">
        Que décides-tu de faire ? Choisis ton action :
      </h4>
      <div className="flex flex-col gap-3" id="choices-grid">
        {choices.map((choice, index) => {
          const prefix = getPrefix(index);
          const isSelected = selectedChoiceId === choice.id;
          
          return (
            <button
              key={choice.id}
              disabled={disabled}
              onClick={() => onSelectChoice(choice.id)}
              className={`w-full text-left p-4.5 rounded-2xl border-2 transition-all duration-200 flex items-start gap-4 cursor-pointer relative group ${
                isSelected
                  ? "bg-sky-900 border-sky-950 text-white shadow-lg scale-[1.01]"
                  : disabled
                  ? "bg-sky-50/50 border-sky-100 text-sky-400 opacity-60"
                  : "bg-white border-sky-100 hover:border-orange-300 hover:bg-sky-50/20 text-sky-900 hover:shadow-md hover:-translate-y-[1px]"
              }`}
              id={`choice-button-${choice.id}`}
            >
              {/* Option Numbering badge */}
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center font-display font-black text-sm border shrink-0 transition-colors ${
                  isSelected
                    ? "bg-orange-400 border-orange-500 text-white"
                    : prefix.bgColor
                }`}
                id={`choice-badge-${choice.id}`}
              >
                {prefix.label}
              </div>

              {/* Choice Content */}
              <div className="flex-1 font-sans text-sm md:text-base font-bold leading-relaxed pr-3" id={`choice-text-container-${choice.id}`}>
                {choice.text}
              </div>

              {/* Decorative Arrow indicator */}
              {!disabled && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" id={`choice-arrow-${choice.id}`}>
                  <span className="text-orange-400 font-extrabold text-lg">→</span>
                </div>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};
