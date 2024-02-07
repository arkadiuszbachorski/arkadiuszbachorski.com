import { useState } from "react";

import { InitialState, not } from "utils/misc";

export const useOpenState = (initialValue: InitialState<boolean> = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const close = () => setIsOpen(false);

  const open = () => setIsOpen(true);

  const toggle = () => setIsOpen(not);

  return { isOpen, setIsOpen, close, open, toggle };
};
