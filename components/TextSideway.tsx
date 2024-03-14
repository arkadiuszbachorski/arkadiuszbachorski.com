import { HTMLProps } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { animations } from "utils/animations";

interface TextSidewayProps
  extends Omit<HTMLProps<HTMLSpanElement>, "children"> {
  textClassName?: string;
  lightBackground?: boolean;
  showOnMobile?: boolean;
  children: string;
}

export const TextSideway = ({
  children,
  textClassName,
  className,
  lightBackground,
  showOnMobile,
  ...props
}: TextSidewayProps) => (
  <span
    className={classNames(
      "text-sideways absolute font-mono text-white/50 tracking-widest pointer-events-none",
      showOnMobile ?
        "flex text-[10px] lg:text-label1"
      : "hidden lg:flex text-label1",
      className
    )}
    aria-hidden
    {...props}
  >
    <motion.span
      className="absolute top-0 left-1.5 w-px"
      viewport={animations.viewport}
      initial={{ height: 0, backgroundColor: "#2DF2FF" }}
      whileInView={{
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.15)",
        transition: {
          duration: 1,
          delay: 0.3,
        },
      }}
    />
    <motion.span
      className="absolute top-0 left-0 w-1 blur-xl"
      viewport={animations.viewport}
      initial={{ height: 0, backgroundColor: "#2DF2FF" }}
      whileInView={{
        height: "100%",
        backgroundColor: "rgba(255,255,255,0.15)",
        opacity: 0,
        transition: {
          duration: 1,
          delay: 0.3,
        },
      }}
    />
    <span
      className={classNames(
        "rotate-180 inline-block z-10 py-4",
        lightBackground ? "bg-dark2" : "bg-dark1",
        textClassName
      )}
    >
      {children}
    </span>
  </span>
);
