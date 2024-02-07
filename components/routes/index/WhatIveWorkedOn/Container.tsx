import { ReactNode } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";
import { animations } from "utils/animations";

interface ContainerProps {
  children: ReactNode;
  className: string;
  index: number;
}

export const Container = ({ children, className, index }: ContainerProps) => (
  <motion.article
    className={classNames("xl:row-span-5", className)}
    {...animations.fadeIn({ index })}
  >
    {children}
  </motion.article>
);
