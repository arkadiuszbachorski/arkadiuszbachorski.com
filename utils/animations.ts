const viewport = { once: true, amount: 0.2 };

type DelayProperties = {
  base: number;
  perIndex?: number;
  index?: number;
};

export const getDelay = ({ base, perIndex, index }: DelayProperties) =>
  base +
  (typeof index === "number" && typeof perIndex === "number" ?
    index * perIndex
  : 0);

export type Transition = {
  delay?: number;
  index?: number;
  baseDelay?: number;
};

const longSpring = ({ delay, index, baseDelay }: Transition = {}) => ({
  type: "spring",
  delay:
    delay !== undefined ? delay
    : index !== undefined ? (baseDelay ?? 0) + 0.3 * (index + 0.2)
    : undefined,
  duration: index !== undefined ? 0.8 * (index + 1.5) : 0.8,
  bounce: 0.3,
});

const entrance = (transition?: Transition) => ({
  ease: [0.4, 0, 0.2, 1],
  delay: getDelay({
    base: transition?.baseDelay ?? 0.5,
    perIndex: 0.1,
    index: transition?.index,
  }),
  duration: 0.8,
  ...transition,
});

const fadeIn = (transition?: Transition) => ({
  whileInView: {
    opacity: 1,
    transition: animations.transitions.longSpring(transition),
  },
  viewport: animations.viewport,
  initial: {
    opacity: 0,
  },
});

const slideFrom = ({
  x,
  y,
  ...transition
}: Transition &
  ({ x: number; y?: undefined } | { x?: undefined; y: number })) => ({
  whileInView: {
    x: 0,
    y: 0,
    transition: animations.transitions.longSpring(transition),
  },
  viewport: animations.viewport,
  initial: {
    x,
    y,
  },
});

const slideFadeFrom = ({
  x,
  y,
  ...transition
}: Transition &
  ({ x: number; y?: undefined } | { x?: undefined; y: number })) => ({
  whileInView: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: animations.transitions.longSpring(transition),
  },
  viewport: animations.viewport,
  initial: {
    opacity: 0,
    x,
    y,
  },
});

const landingSecondLayer = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  transition: { delay: 0.8 },
  viewport,
};

export const animations = {
  viewport,
  transitions: {
    longSpring,
    entrance,
  },
  fadeIn,
  slideFrom,
  slideFadeFrom,
  landingSecondLayer,
};
