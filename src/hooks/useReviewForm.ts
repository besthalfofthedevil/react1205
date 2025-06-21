import { useReducer } from "react";

const INITIAL_FORM_STATE = {
  userName: "",
  text: "",
  rating: 0,
};

export type FormState = typeof INITIAL_FORM_STATE & {id?: string};
type FormAction =
  | { type: "SET_USER_NAME_ACTION"; payload: string }
  | { type: "SET_REVIEW_ACTION"; payload: string }
  | { type: "SET_RATING_ACTION"; payload: number }
  | { type: "RESET_FORM_ACTION" };

const formReducer = (state: FormState, action: FormAction):FormState  => {
  switch (action.type) {
    case "SET_USER_NAME_ACTION":
      return { ...state, userName: action.payload };
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
    default:
      return state;
  }
};

export const useReviewForm = (review = INITIAL_FORM_STATE) => {
  const [formState, dispatch] = useReducer(formReducer, review);

  const resetForm = () => {
    dispatch({ type: "RESET_FORM_ACTION" });
  };
  const onUserNameChange = (userName: string) => {
    dispatch({ type: "SET_USER_NAME_ACTION", payload: userName });
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
    onUserNameChange,
    onReviewChange,
    incrementRating,
    decrementRating,
  ] as const;
};
