import React, { useState, useRef, useEffect } from "react";

export const Dialog = ({ isOpen, onClose, children }: any) => {
  const dialogRef = useRef<any>(null);

  useEffect(() => {
    // Function to handle clicks outside the dialog
    const handleClickOutside = (event: any) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target)) {
        onClose(); // Close the dialog
      }
    };

    // Add event listener for clicks outside the dialog
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Remove event listener when the dialog is closed
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black bg-opacity-50"></div>

      {/* Dialog Box */}

      <div
        ref={dialogRef}
        className="z-50 mx-auto w-[386px] rounded-lg bg-white p-6 shadow-lg"
      >
        {/* Close button */}
        <button
          className="absolute right-2 top-2 text-gray-500 hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};
