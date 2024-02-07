import { HTMLProps } from "react";
import classNames from "classnames";
import { motion } from "framer-motion";
import { animations } from "utils/animations";

interface SectionTitleProps extends HTMLProps<HTMLHeadingElement> {
  top: string;
  bottom: string;
}

export const SectionTitle = ({
  top,
  bottom,
  className,
  ...props
}: SectionTitleProps) => (
  <h2
    className={classNames(
      "flex flex-wrap text-[9vw] sm:text-[60px] md:text-[65px] lg:text-[90px] xl:text-[120px] 2xl:text-[140px] leading-[1.1] uppercase font-bold mb-14 lg:mb-28",
      className
    )}
    {...props}
  >
    <motion.span
      {...animations.slideFadeFrom({ x: -100 })}
      className="text-left w-full"
    >
      {top}
    </motion.span>
    <motion.span
      {...animations.slideFadeFrom({ x: 100 })}
      className="text-right w-full"
    >
      {bottom}
    </motion.span>
  </h2>
);
