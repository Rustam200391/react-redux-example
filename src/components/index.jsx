import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom"; // Импорт функции createPortal из react-dom
import "./style.css"; // Импорт стилей

// Функциональный компонент PopUp
export const PopUp = () => {
  // Состояние для отслеживания открытия и закрытия модального окна
  const [isOpen, setIsOpen] = useState(false);
  // Состояние для отслеживания факта открытия модального окна
  const [wasOpened, setWasOpened] = useState(false);

  // Функция для открытия модального окна
  const openModal = () => {
    setIsOpen(true); // Устанавливаем isOpen в true при открытии модального окна
    setWasOpened(true); // Устанавливаем wasOpened в true при открытии модального окна
  };

  // Функция для закрытия модального окна
  const closeModal = () => {
    setIsOpen(false); // Устанавливаем isOpen в false при закрытии модального окна
  };

  // useEffect для отслеживания открытия модального окна
  useEffect(() => {
    // Проверяем, было ли модальное окно открыто
    if (wasOpened) {
      console.log("Modal is open"); // Выводим сообщение в консоль при открытии модального окна
    }
  }, [wasOpened]); // Зависимость: wasOpened

  // useEffect для отслеживания закрытия модального окна
  useEffect(() => {
    // Проверяем, закрыто ли модальное окно и было ли оно открыто ранее
    if (!isOpen && wasOpened) {
      console.log("Modal is closed"); // Выводим сообщение в консоль при закрытии модального окна
      setWasOpened(false); // Устанавливаем wasOpened в false после закрытия модального окна
    }
  }, [isOpen, wasOpened]); // Зависимости: isOpen, wasOpened

  // Возвращаем JSX элементы, которые будут отображены в браузере
  return (
    <div>
      {/* Кнопка для открытия модального окна */}
      <button onClick={openModal} className="modal-open">
        Открыть модальное окно?
      </button>
      {/* Рендеринг модального окна, если isOpen равно true */}
      {isOpen &&
        createPortal(
          <div className="modal-overlay">
            <div className="modal">
              {/* Кнопка для закрытия модального окна */}
              <button className="modal-close-btn" onClick={closeModal}>
                &times;
              </button>
              {/* Содержимое модального окна */}
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
          document.getElementById("modals") // Рендерим в элемент с id="modals"
        )}
    </div>
  );
};
