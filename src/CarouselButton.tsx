import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

interface multiProps {
  onClick?: () => void;
}

export const CustomRightArrow: React.FC<multiProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute bg-white shadow p-2 border border-gray-50 right-0 focus:outline-none"
  >
    <ChevronRightIcon className="h-6 w-6" />
  </button>
);

export const CustomLeftArrow: React.FC<multiProps> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute bg-white p-2 shadow border border-gray-50 left-0 focus:outline-none"
  >
    <ChevronLeftIcon className="h-6 w-6" />
  </button>
);
