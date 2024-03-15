import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import "./style.css";

export const PopUp = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [wasOpened, setWasOpened] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setWasOpened(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    if (wasOpened) {
      console.log("Modal is open");
    }
  }, [wasOpened]);

  useEffect(() => {
    if (!isOpen && wasOpened) {
      console.log("Modal is closed");
      setWasOpened(false); //   false после закрытия модального окна
    }
  }, [isOpen, wasOpened]);

  return (
    <div>
      <button onClick={openModal} className="modal-open">
        Открыть модальное окно?
      </button>
      {isOpen &&
        createPortal(
          <div className="modal-overlay">
            <div className="modal">
              <button className="modal-close-btn" onClick={closeModal}>
                &times;
              </button>
              <div className="modal-content">
                <h2>Modal window</h2>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ipsam eligendi natus corporis expedita voluptate, sapiente
                  fugit quasi quaerat nisi modi labore amet sit perspiciatis
                  beatae, cum pariatur perferendis suscipit eum.
                </p>
              </div>
            </div>
          </div>,
          document.getElementById("modals")
        )}
    </div>
  );
};

// https://react.dev/reference/react-dom/createPortal#usage
