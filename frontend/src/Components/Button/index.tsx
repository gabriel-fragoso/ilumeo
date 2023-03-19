import { MouseEventHandler } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  title?: string;
  type?: "button" | "submit" | "reset" | undefined;
  className?: string | undefined;
  disabled?: boolean | undefined;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Button({
  title,
  type,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled
      onClick={onClick}
      disabled={disabled}
      className={className}
      type={type}
    >
      {title}
    </ButtonStyled>
  );
}
