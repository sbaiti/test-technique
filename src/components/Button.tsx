import { FC, MouseEventHandler } from 'react';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLDivElement>
  label: string
}

const Button: FC<ButtonProps> = ({ onClick, label }) => {
  return (
    <div
      className="btn"
      onClick={onClick}>
      {label}
    </div>
  );
};

export default Button;