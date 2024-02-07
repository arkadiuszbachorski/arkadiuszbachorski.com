import { Logo } from "components/Logo";
import { useOpenState } from "utils/useOpenState";
import { HamburgerMenuIcon } from "components/Layout/Header/HamburgerMenuIcon";
import { Socials } from "components/Socials";
import Link from "next/link";
import { ButtonDot } from "components/ButtonDot";
import { motion } from "framer-motion";
import { animations } from "utils/animations";
import { MobileMenu } from "components/Layout/Header/MobileMenu";
import { onMailClick } from "utils/useMail";

export const Header = () => {
  const menu = useOpenState();

  const resume = (
    <Link
      href="/arkadiusz-bachorski-resume.pdf"
      target="__blank"
      className="transition hover:opacity-60"
    >
      My resume
    </Link>
  );

  const contactMe = (
    <ButtonDot align="right" onClick={onMailClick}>
      Contact me
    </ButtonDot>
  );

  return (
    <motion.header
      {...animations.landingSecondLayer}
      className="flex items-center justify-between container py-5"
    >
      <Logo />
      <Socials className="hidden lg:!flex ml-[177px]" />
      <nav className="hidden lg:flex items-center gap-10">
        {resume}
        {contactMe}
      </nav>
      <MobileMenu menu={menu}>
        <motion.button
          onClick={menu.close}
          aria-label="Close menu"
          className="flex-center ml-auto size-[44px] rounded-full"
          whileHover={{ backgroundColor: "rgba(255,255,255,0.1)" }}
          exit={{ opacity: 0 }}
          {...animations.fadeIn({ delay: 0.9 })}
        >
          <HamburgerMenuIcon isOpen={menu.isOpen} />
        </motion.button>
        <motion.nav
          className="flex items-center flex-col gap-6"
          exit={{ opacity: 0 }}
          {...animations.slideFadeFrom({ y: -16, delay: 0.5 })}
        >
          {resume}
          {contactMe}
        </motion.nav>
        <motion.div
          exit={{ opacity: 0 }}
          {...animations.slideFadeFrom({ y: 16, delay: 0.9 })}
        >
          <Socials />
        </motion.div>
      </MobileMenu>
      <button
        type="button"
        className="relative flex-center rounded-full size-[44px] transition border border-white/25 hover:bg-white/10 lg:hidden"
        aria-label="Open menu"
        onClick={menu.open}
      >
        <HamburgerMenuIcon isOpen={menu.isOpen} />
      </button>
    </motion.header>
  );
};
