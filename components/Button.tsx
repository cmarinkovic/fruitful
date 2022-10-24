export interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export default function Button({
  onClick,
  type = "button",
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="text-white bg-gradient-to-r from-lime-400 via-lime-600 to-lime-700 animated-bg hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-400 shadow-md shadow-lime-600/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      {children}
    </button>
  );
}
