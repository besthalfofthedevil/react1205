"use client";

import { RestaurantPage } from "../../../pages/RestaurantPage/RestaurantPage";

const RestrauntsLayout = ({ children }: { children: React.ReactNode }) => (
  <RestaurantPage>{children}</RestaurantPage>
);

export default RestrauntsLayout;
