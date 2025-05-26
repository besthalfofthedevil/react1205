import type { JSX } from "react";

export const Counter = ({
  count,
  add,
  substract,
}: {
  count: number;
  add: () => void;
  substract: () => void;
}): JSX.Element => {
  return (
    <span>
      <button
        onClick={(e) => {
          e.preventDefault();
          substract();
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={(e) => {
          e.preventDefault();
          add();
        }}
      >
        +
      </button>
    </span>
  );
};
