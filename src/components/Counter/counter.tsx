import type { JSX } from "react";

export const Counter = ({
  count,
  add,
  substract,
}: {
  count: number;
  add: (e: any) => void;
  substract: (e: any) => void;
}): JSX.Element => {
  return (
    <div>
      <button onClick={substract}>-</button>
      <span>{count}</span>
      <button onClick={add}>+</button>
    </div>
  );
};
