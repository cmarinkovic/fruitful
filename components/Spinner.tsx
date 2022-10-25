import SpinnerIcon from "../assets/spinner.svg";

export default function Spinner() {
  return (
    <div className="text-center">
      <div role="status">
        <SpinnerIcon className="inline mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-lime-600" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
