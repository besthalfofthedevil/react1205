import { useReducer } from "react";
import type { Review } from "../redux/entities/types";

const INITIAL_FORM_STATE: Review = {
  text: "",
  rating: 5,
};

export type FormState = typeof INITIAL_FORM_STATE;
type FormAction =
  | { type: "SET_REVIEW_ACTION"; payload: string }
  | { type: "SET_RATING_ACTION"; payload: number }
  | { type: "SET_FORM_ACTION"; payload: { text: string; rating: number } }
  | { type: "RESET_FORM_ACTION" };

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_REVIEW_ACTION":
      return { ...state, text: action.payload };
    case "SET_RATING_ACTION": {
      const newRating = action.payload;
      if (newRating < 0 || newRating > 5) {
        return state; // Ignore invalid ratings
      }

      return { ...state, rating: newRating };
    }
    case "RESET_FORM_ACTION":
      return INITIAL_FORM_STATE;
    case "SET_FORM_ACTION":
      return { ...action.payload };
    default:
      return state;
  }
};

export const useReviewForm = (review: Review | undefined) => {
  const [formState, dispatch] = useReducer(
    formReducer,
    review ?? INITIAL_FORM_STATE
  );
  const resetForm = () => {
    dispatch({ type: "RESET_FORM_ACTION" });
  };
  const setForm = (data: { text: string; rating: number }) => {
    dispatch({ type: "SET_FORM_ACTION", payload: data });
  };
  const onReviewChange = (review: string) => {
    dispatch({ type: "SET_REVIEW_ACTION", payload: review });
  };

  const incrementRating = () => {
    dispatch({ type: "SET_RATING_ACTION", payload: formState.rating + 1 });
  };
  const decrementRating = () => {
    dispatch({ type: "SET_RATING_ACTION", payload: formState.rating - 1 });
  };

  return [
    formState,
    resetForm,
    setForm,
    onReviewChange,
    incrementRating,
    decrementRating,
  ] as const;
};
