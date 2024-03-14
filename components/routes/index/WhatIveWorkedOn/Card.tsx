import { ReactNode } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { CSSCustomProperty } from "utils/misc";

interface CardProps {
  children?: ReactNode;
  className?: string;
  href: string;
  onSetIsProjectHovered: (value: boolean) => void;
}

export const Card = ({
  children,
  className,
  href,
  onSetIsProjectHovered,
}: CardProps) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover="hover"
    onMouseEnter={() => onSetIsProjectHovered(true)}
    onMouseLeave={() => onSetIsProjectHovered(false)}
    className={classNames(
      "bg-dark1 cursor-none border-glow rounded-2xl [--radius:1rem] flex-center overflow-hidden focus-ring",
      className
    )}
    style={{
      background:
        "radial-gradient(ellipse at 50% 0%,rgba(45,242,255,0.1),transparent) #000914",
    }}
  >
    <motion.div
      className="absolute left-0 top-0 size-full"
      style={{
        background:
          "radial-gradient(ellipse at 50% 50%,rgba(68,83,214,var(--opacity, 0.1)),transparent)",
      }}
      variants={{
        hover: {
          ["--opacity" as CSSCustomProperty]: 0.2,
        },
      }}
    />
    {children}
  </motion.a>
);
