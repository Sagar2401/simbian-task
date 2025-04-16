import { useState, useEffect } from "react";
import AlertCard from "./AnimatedAlertCard";
import { withoutSimbianContent } from "@/utils/alertData";
import { motion, AnimatePresence } from "framer-motion";

const WithoutSimbianSection = () => {
  const [visibleContentIndex, setVisibleContentIndex] = useState(0);

  // Cycle through the content items
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleContentIndex(
        (prev) => (prev + 1) % withoutSimbianContent.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen without-simbian-bg px-4 py-16 lg:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-400 mb-4">
            Without Simbian
          </h2>
          <p className="text-xl text-blue-200">
            If this sounds all too familiar, you might want to...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="order-2 lg:order-1">
            <div className="h-full flex flex-col justify-center space-y-8">
              <AnimatePresence mode="wait">
                {withoutSimbianContent.map(
                  (content, index) =>
                    index === visibleContentIndex && (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.5 }}
                        className="p-4 rounded-lg bg-gray-800/30 border border-gray-700/40"
                      >
                        <p className="text-white text-lg">{content}</p>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="grid grid-cols-1 gap-6">
              <AlertCard
                title="Ignored Alerts"
                initialCount={200}
                type="ignored"
              />
              <AlertCard
                title="Wrongly Closed"
                initialCount={35}
                type="wronglyClosed"
              />
              <AlertCard
                title="Active Threats"
                initialCount={5}
                type="activeThreats"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithoutSimbianSection;
