import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
}

const ButtonExample: React.FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick} data-testid="custom-button">
    {label}
  </button>
);

export default ButtonExample;
