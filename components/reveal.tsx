import { type ReactNode } from "react";

type RevealProps = {
  as?: "div" | "section" | "article";
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
};

export function Reveal({ as: Component = "div", children, className = "", delay = 0, id }: RevealProps) {
  void delay;

  return (
    <Component id={id} className={className}>
      {children}
    </Component>
  );
}
