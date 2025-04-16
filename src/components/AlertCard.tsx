import { useState, useEffect } from "react";
import { Bell, XCircle, AlertTriangle } from "lucide-react";
import { Alert, generateRandomAlert } from "@/utils/alertData";
import { cn } from "@/lib/utils";

interface AlertCardProps {
  title: string;
  initialCount: number;
  type: "ignored" | "wronglyClosed" | "activeThreats";
  withSimbian?: boolean;
}

const AlertCard = ({
  title,
  initialCount,
  type,
  withSimbian = false,
}: AlertCardProps) => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [count, setCount] = useState(initialCount);
  const [isAnimating, setIsAnimating] = useState(false);

  // Determine which icon to use
  const getIcon = () => {
    switch (type) {
      case "ignored":
        return <Bell className="h-6 w-6 text-gray-300" />;
      case "wronglyClosed":
        return <XCircle className="h-6 w-6 text-red-400" />;
      case "activeThreats":
        return <AlertTriangle className="h-6 w-6 text-yellow-400" />;
      default:
        return <Bell className="h-6 w-6" />;
    }
  };

  useEffect(() => {
    // Don't increase alerts for "with Simbian" section
    if (withSimbian) return;

    // Add new alerts at random intervals
    const timer = setInterval(() => {
      const newAlert = generateRandomAlert();
      setAlerts((prevAlerts) => [newAlert, ...prevAlerts].slice(0, 5));
      setCount((prevCount) => prevCount + 1);
      setIsAnimating(true);
      setTimeout(() => setIsAnimating(false), 500);
    }, Math.random() * 5000 + 3000); // Between 3-8 seconds

    return () => clearInterval(timer);
  }, [withSimbian]);

  return (
    <div
      className={cn(
        "relative rounded-xl p-4 min-h-[200px] alert-card transition-all",
        isAnimating ? "animate-shake" : "",
        withSimbian
          ? "bg-blue-800/40 border border-blue-400/30"
          : "bg-gray-800/40 border border-gray-700/30",
        withSimbian &&
          "hover:border-blue-400/60 transform hover:-translate-y-1 hover:shadow-lg transition-all"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getIcon()}
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <div
          className={cn(
            "text-3xl font-bold",
            withSimbian ? "text-green-400" : "text-blue-400"
          )}
        >
          {count}
        </div>
      </div>

      <div className="mt-4 space-y-2 max-h-[120px] overflow-hidden">
        {alerts.map((alert, index) => (
          <div
            key={alert.id}
            className={cn(
              "p-2 rounded bg-gray-900/50 text-sm alert-item",
              index === 0 && !withSimbian ? "animate-bounce-in" : ""
            )}
          >
            <div className="font-semibold text-white">{alert.type}</div>
            <div className="text-xs text-gray-300">{alert.description}</div>
          </div>
        ))}

        {withSimbian && (
          <div className="p-2 rounded bg-green-900/40 border border-green-500/30 text-sm flex items-center gap-2">
            <svg
              className="h-4 w-4 text-green-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                className="animate-checkmark"
                d="M20 6L9 17 4 12"
                strokeDasharray="100"
                strokeDashoffset="100"
              />
            </svg>
            <span className="text-green-300">All alerts handled</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default AlertCard;
