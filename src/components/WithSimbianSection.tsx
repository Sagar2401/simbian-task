import { useState, useEffect } from "react";
import { withSimbianSteps, withSimbianContent } from "@/utils/alertData";
import AlertCard from "./AnimatedAlertCard";
import { Check, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const WithSimbianSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleContentIndex, setVisibleContentIndex] = useState(0);

  // Cycle through steps
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % withSimbianSteps.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  // Cycle through content
  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleContentIndex((prev) => (prev + 1) % withSimbianContent.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen with-simbian-bg px-4 py-16 lg:py-24">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            With Simbian
          </h2>
          <p className="text-xl text-blue-100">
            Relax. Our AI Agents will take it from here.
          </p>
        </motion.div>

        {/* Flow steps */}
        <div className="mb-16">
          <div className="hidden md:flex justify-center items-center mb-12 relative">
            {withSimbianSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <motion.div
                  className={`flex flex-col items-center transition-opacity duration-300`}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: index === activeStep ? 1 : 0.5 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-full flex items-center justify-center mb-2`}
                    animate={{
                      backgroundColor:
                        index === activeStep ? "#10B981" : "#1D4ED8",
                      scale: index === activeStep ? [1, 1.1, 1] : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Check className="text-white" />
                  </motion.div>
                  <div className="text-center w-40">
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="text-xs text-blue-200">{step.description}</p>
                  </div>
                </motion.div>
                {index < withSimbianSteps.length - 1 && (
                  <motion.div
                    initial={{ opacity: 0.3 }}
                    animate={{
                      opacity:
                        index === activeStep || index + 1 === activeStep
                          ? 1
                          : 0.3,
                      x: index === activeStep ? [0, 5, 0] : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="mx-4 text-blue-300" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile flow */}
          <div className="md:hidden">
            {withSimbianSteps.map((step, index) => (
              <motion.div
                key={index}
                className={`mb-4 p-4 rounded-lg`}
                animate={{
                  backgroundColor:
                    index === activeStep
                      ? "rgba(29, 78, 216, 0.5)"
                      : "rgba(30, 64, 175, 0.3)",
                  borderColor:
                    index === activeStep
                      ? "rgba(96, 165, 250, 0.5)"
                      : "transparent",
                }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                style={{ border: index === activeStep ? "1px solid" : "none" }}
              >
                <div className="flex items-center">
                  <motion.div
                    className={`w-10 h-10 rounded-full flex items-center justify-center mr-4`}
                    animate={{
                      backgroundColor:
                        index === activeStep ? "#10B981" : "#1D4ED8",
                    }}
                  >
                    <Check className="text-white h-5 w-5" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-white">{step.title}</h4>
                    <p className="text-xs text-blue-200">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="grid grid-cols-1 gap-6">
            <AlertCard
              title="Ignored Alerts"
              initialCount={0}
              type="ignored"
              withSimbian={true}
            />
            <AlertCard
              title="Wrongly Closed"
              initialCount={0}
              type="wronglyClosed"
              withSimbian={true}
            />
            <AlertCard
              title="Active Threats"
              initialCount={0}
              type="activeThreats"
              withSimbian={true}
            />
          </div>

          <div className="h-full flex flex-col justify-center space-y-8">
            <AnimatePresence mode="wait">
              {withSimbianContent.map(
                (content, index) =>
                  index === visibleContentIndex && (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                      className="p-4 rounded-lg bg-blue-700/30 border border-blue-400/40"
                    >
                      <p className="text-white text-lg">{content}</p>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WithSimbianSection;
