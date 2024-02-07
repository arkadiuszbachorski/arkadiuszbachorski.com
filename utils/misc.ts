export const not = <T>(value: T) => !value;

export type InitialState<T> = T | (() => T);

// Cast is required to silent error, as types do not allow custom properties
export type CSSCustomProperty = any;
