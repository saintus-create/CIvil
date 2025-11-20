"use client";

import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";
import clsx from "clsx";

type ButtonSize = "small" | "medium" | "large";
type ButtonType = "primary" | "secondary" | "ghost";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  onClick?: () => void;
  buttonSize?: ButtonSize;
  buttonType?: ButtonType;
  isFullWidth?: boolean;
};

export const Button = ({
  children,
  onClick,
  buttonSize = "medium",
  buttonType = "primary",
  isFullWidth = false,
  className,
  ...props
}: ButtonProps) => {
  const sizeClasses: Record<ButtonSize, string> = {
    small: "px-2.5 py-1.5 text-sm",
    medium: "px-3.5 py-2 text-base",
    large: "px-5 py-3 text-lg",
  };

  const typeClasses: Record<ButtonType, string> = {
    primary: "bg-white text-neutral-900 hover:bg-neutral-100",
    secondary: "border border-neutral-750 text-neutral-250 hover:bg-neutral-850",
    ghost: "text-neutral-250 hover:bg-neutral-900",
  };

  return (
    <button
      onClick={onClick}
      className={clsx(
        "flex items-center gap-2 rounded-lg transition-colors duration-200",
        sizeClasses[buttonSize],
        typeClasses[buttonType],
        isFullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
