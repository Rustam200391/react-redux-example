import React, { useState } from "react";
import "./style.css";

function Popup() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    console.log("close");
    setIsOpen(false);
  };
  const handleOpen = () => {
    console.log("open");
    setIsOpen(true);
  };

  return (
    <div>
      <button onClick={handleOpen}>Открыть модальное окно</button>
      {/* () => setIsOpen(true) */}
      {isOpen && (
        <div className="popup">
          <div className="popup__content">
            <span onClick={handleClose} className="close">
              &times;
            </span>
            <p>Текст сообщения в Pop-up</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Popup;
