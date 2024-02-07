import { HTMLProps } from "react";
import classNames from "classnames";

interface TagProps extends HTMLProps<HTMLSpanElement> {}

export const Tag = ({ className, ...props }: TagProps) => (
  <span
    className={classNames(
      "text-label1 leading-4 font-medium tracking-widest inline-flex uppercase font-mono py-1 pl-2 bg-white/10 rounded-md border border-white/5",
      className
    )}
    {...props}
  />
);
