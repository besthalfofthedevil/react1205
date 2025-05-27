export const Tab = ({
  label,
  isActive,
  setActive = () => {},
}: {
  label: string;
  isActive: boolean;
  setActive?: () => void;
}) => (
  <button
    className={`tab ${isActive ? "active" : ""}`}
    onClick={setActive}
  >
    {label}
  </button>
);
