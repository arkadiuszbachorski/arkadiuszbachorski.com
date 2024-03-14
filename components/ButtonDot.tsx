import { HTMLProps, useEffect, useRef } from "react";
import classNames from "classnames";
import { clamp } from "lodash";

interface ButtonDotProps
  extends Pick<
    HTMLProps<HTMLButtonElement>,
    "type" | "className" | "children" | "onClick"
  > {
  size?: "medium" | "large";
  align?: "left" | "right";
  href?: string;
}

const classes = {
  dot: "absolute size-full block",
  transform: "transition-transform duration-200 ease-out",
};

const threshold = 500;
const max = 8;

export const ButtonDot = ({
  type = "button",
  children,
  size,
  align,
  href,
  className,
  ...props
}: ButtonDotProps) => {
  const dotRef = useRef<HTMLSpanElement>(null);

  const isLarge = size === "large";
  const isRight = align === "right";

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (!dotRef.current) return;
      const dot = dotRef.current.getBoundingClientRect();
      const xCenter = dot.x + 0.5 * dot.width;
      const yCenter = dot.y + 0.5 * dot.height;
      const xDiff = event.clientX - xCenter;
      const yDiff = event.clientY - yCenter;

      const getValue = (value: number) =>
        clamp(Math.floor(value * 0.02), -1 * max, max) + "px";

      const values =
        Math.abs(xDiff) <= threshold && Math.abs(yDiff) <= threshold ?
          { x: getValue(xDiff), y: getValue(yDiff) }
        : { x: "0", y: "0" };

      dotRef.current.style.setProperty("--x", values.x);
      dotRef.current.style.setProperty("--y", values.y);
    };

    window.addEventListener("mousemove", handler);

    return () => window.removeEventListener("mousemove", handler);
  }, []);

  const Component: any = href ? "a" : "button";

  return (
    <Component
      type={href ? undefined : type}
      href={href}
      className={classNames(
        "group flex font-medium items-center relative focus-ring rounded",
        isLarge ? "h-[90px] text-2xl" : "h-[60px]",
        className
      )}
      {...props}
    >
      <span
        ref={dotRef}
        className={classNames(
          "h-full rounded-full absolute overflow-hidden group-hover:!translate-x-0 group-hover:!translate-y-0",
          classes.transform,
          isLarge ? "w-[90px]" : "w-[60px]",
          isRight ? "right-0" : "left-0"
        )}
        style={{
          transform: "translate(var(--x), var(--y))",
        }}
      >
        <span
          className={classNames(
            "z-[2] bg-blue-dark scale-x-0 group-hover:scale-x-100 opacity-50",
            isRight ? "origin-right" : "origin-left",
            classes.transform,
            classes.dot
          )}
          style={{
            clipPath:
              isRight ?
                "polygon(60% 0%, 100% 0%, 100% 100%, 60% 100%, 30% 50%)"
              : "polygon(0% 0%, 40% 0, 70% 50%, 40% 100%, 0% 100%)",
          }}
        />
        <span className={classNames("z-[1] bg-blue", classes.dot)} />
      </span>

      <span
        className={classNames(
          "z-10",
          classes.transform,
          isRight ?
            isLarge ? "group-hover:translate-x-5"
            : "group-hover:translate-x-3"
          : isLarge ? "group-hover:-translate-x-5"
          : "group-hover:-translate-x-3",
          isLarge ?
            isRight ? "pr-[60px]"
            : "pl-[60px]"
          : isRight ? "pr-[40px]"
          : "pl-[40px]"
        )}
      >
        {children}
      </span>
    </Component>
  );
};
