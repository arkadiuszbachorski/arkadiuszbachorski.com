import { HTMLProps } from "react";
import classNames from "classnames";
import Image from "next/image";
import arrowRightIcon from "icons/arrowRight.svg";

type ArrowButtonProps = Omit<HTMLProps<HTMLButtonElement>, "type"> & {
  "aria-label": string;
};

export const ArrowButton = ({ className, ...props }: ArrowButtonProps) => (
  <button
    type="button"
    className={classNames("p-2 transition hover:opacity-60", className)}
    {...props}
  >
    <Image src={arrowRightIcon} alt={props["aria-label"]} className="size-6" />
  </button>
);
