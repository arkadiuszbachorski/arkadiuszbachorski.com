import Link from "next/link";
import classNames from "classnames";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => (
  <Link
    href="/"
    className={classNames("text-4xl transition hover:opacity-60", className)}
  >
    AB_
  </Link>
);
