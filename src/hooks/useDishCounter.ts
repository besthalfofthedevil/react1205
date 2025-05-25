import { useState } from "react";

const MAX_DISH_COUNT = 5;
const MIN_DISH_COUNT = 0;

export const useDishCounter = (
  initialCount: number
): [count: number, () => void, () => void] => {
  const [count, setCount] = useState(initialCount);

  const onIncrement = () => {
    setCount((prevCount) =>
      prevCount < MAX_DISH_COUNT ? prevCount + 1 : prevCount
    );
  };

  const onDecrement = () => {
    setCount((prevCount) =>
      prevCount > MIN_DISH_COUNT ? prevCount - 1 : prevCount
    );
  };

  return [count, onIncrement, onDecrement];
};
