interface AlertProps {
  alertType: string;
  message: string;
}

export default function Alert({ alertType, message }: AlertProps) {
  const infoClasses = "p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg";

  const errorClasses = "p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg";

  const getAlertClasses = () => {
    if ("info" === alertType) return infoClasses;
    if ("error" === alertType) return errorClasses;
    return "hidden";
  };

  return (
    <div className={getAlertClasses()} role="alert">
      <span className="font-medium">{message}</span>
    </div>
  );
}
