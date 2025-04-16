import { useState, useEffect } from "react";
import { Bell, XCircle, AlertTriangle } from "lucide-react";
import { Alert, generateRandomAlert } from "@/utils/alertData";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

interface AlertCardProps {
  title: string;
  initialCount: number;
  type: "ignored" | "wronglyClosed" | "activeThreats";
  withSimbian?: boolean;
}

const AnimatedAlertCard = ({
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
  const getColors = () => {
    switch (type) {
      case "ignored":
        return "bg-white/10 border border-white/30";

      case "wronglyClosed":
        return "    bg-red-500/10 border border-red-600              ";
      case "activeThreats":
        return "  bg-yellow-600/30 border border-yellow-600           ";
      default:
        return "bg-gray-800/40 border border-gray-700/30";
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={
        withSimbian ? { y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.2)" } : {}
      }
      className={cn(
        "relative rounded-xl p-4 min-h-[200px]  bg-amber-50 alert-card",
        withSimbian
          ? "bg-blue-800/40 border border-blue-400/30"
          : "bg-gray-800/40 border border-gray-700/30"
      )}
    >
      <motion.div
        animate={isAnimating ? { x: [0, -5, 5, -5, 5, 0] } : {}}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-between"
      >
        <div className="flex items-center gap-2">
          {getIcon()}
          <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>
        <motion.div
          key={count}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={cn(
            "text-3xl font-bold",
            withSimbian ? "text-green-400" : "text-blue-400"
          )}
        >
          {count}
        </motion.div>
      </motion.div>

      <div className="mt-4 space-y-2 max-h-[120px] overflow-hidden">
        <AnimatePresence>
          {alerts.map((alert, index) => (
            <motion.div
              key={alert.id}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`p-2 rounded bg-gray-900/50 text-sm ${getColors()}`}
            >
              <div className="font-semibold text-white">{alert.type}</div>
              <div className="text-xs text-gray-300">{alert.description}</div>
            </motion.div>
          ))}
        </AnimatePresence>

        {withSimbian && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="p-2 rounded bg-green-900/40 border border-green-500/30 text-sm flex items-center gap-2"
          >
            <motion.svg
              className="h-4 w-4 text-green-400"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.path d="M20 6L9 17 4 12" />
            </motion.svg>
            <span className="text-green-300">All alerts handled</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default AnimatedAlertCard;
