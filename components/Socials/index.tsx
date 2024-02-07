import Image from "next/image";
import igImg from "./instagram.svg";
import inImg from "./linkedin.svg";
import ghImg from "./github.svg";
import classNames from "classnames";

const classes = {
  icon: "transition-opacity opacity-50 hover:opacity-100",
};

interface SocialsProps {
  className?: string;
}

export const Socials = ({ className }: SocialsProps) => (
  <div className={classNames("flex gap-6 items-center", className)}>
    <a
      href="https://www.github.com/arkadiuszbachorski"
      className={classes.icon}
    >
      <Image src={ghImg} alt="GitHub" />
    </a>
    <a
      href="https://www.linkedin.com/in/arkadiusz-bachorski/"
      className={classes.icon}
    >
      <Image src={inImg} alt="LinkedIn" />
    </a>
    <a
      href="https://www.instagram.com/arkadiusz_bachorski"
      className={classes.icon}
    >
      <Image src={igImg} alt="Instagram" />
    </a>
  </div>
);
