import React from 'react';
import './style.css'; // Подключаем файл со стилями

const TextButton = ({ onClick, children, ...restProps }) => {
  return (
    <button className="text-button" onClick={onClick} {...restProps}>
      {children}
    </button>
  );
};

export default TextButton;