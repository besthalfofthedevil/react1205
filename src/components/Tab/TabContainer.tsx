import { useSelector } from "react-redux";
import { Tab } from "./Tab";
import { selectRestaurantById } from "../../slices/restaurantsSlice";
import type { RootState } from "../../store";


export const TabContainer = ({
  id,
  isActive,
  setActive = () => {},
}: {
  id: string;
  isActive: boolean;
  setActive?: (id: string) => void;
}) => {
  const restaurant = useSelector((state: RootState) => selectRestaurantById(state, id));
  if (!restaurant) {
    return null; // Skip rendering if name is not provided
  }

  return (
    <Tab
      key={id}
      label={restaurant.name}
      isActive={isActive}
      setActive={() => !isActive && setActive(id)}
    />
  );
};
