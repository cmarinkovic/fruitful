import React, { useContext } from "react";

import { ModalsContext } from "../contexts/ModalsContext";
import { ButtonProps } from "./Button";

import Title from "./Title";

import CloseIcon from "../assets/close.svg";

interface AddModalProps {
  title: string;
  children: React.ReactNode;
}

export default function AddModal({ title, children }: AddModalProps) {
  const [modalsState, setModalsState] = useContext(ModalsContext);

  const closeModal = () => {
    setModalsState(() => ({ ...modalsState, isHarvestsOpen: false }));
  };

  /* --------------------------------- Buttons -------------------------------- */

  const CloseButton = ({ onClick }: ButtonProps) => {
    return (
      <button
        type="button"
        onClick={onClick}
        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
      >
        <CloseIcon className="w-5 h-5" />
        <span className="sr-only">Close</span>
      </button>
    );
  };
  /* -------------------------------------------------------------------------- */

  const backdropClasses = "bg-gray-900 bg-opacity-50  fixed inset-0 z-40";

  return (
    <div className={backdropClasses}>
      <div className="overflow-y-auto overflow-x-hidden z-50 w-full md:inset-0 h-modal md:h-full">
        <div className="relative mx-auto mt-8 p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow ">
            <div className="flex justify-between items-start p-4 rounded-t border-b ">
              <Title>{`Add ${title}`}</Title>
              <CloseButton onClick={closeModal} />
            </div>

            <div className="p-6 space-y-6">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
