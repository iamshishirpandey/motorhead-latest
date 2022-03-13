import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

interface multiProps {
  onClick?: () => void;
}

export const CustomRightArrow: React.FC<multiProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute bg-white rounded-full shadow p-2 right-0 focus:outline-none"
  >
    <ChevronRightIcon className="h-6 w-6" />
  </button>
);

export const CustomLeftArrow: React.FC<multiProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute bg-white rounded-full p-2 shadow left-0 focus:outline-none"
  >
    <ChevronLeftIcon className="h-6 w-6" />
  </button>
);
