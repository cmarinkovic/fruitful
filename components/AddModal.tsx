import React, { useContext } from "react";

import { ModalsContext } from "../contexts/ModalsContext";
import { ButtonProps } from "./Button";

import Title from "./Title";

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
        <svg
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
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
