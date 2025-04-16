"use client";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import WithoutSimbianSection from "@/components/WithoutSimbianSection";
import WithSimbianSection from "@/components/WithSimbianSection";

export default function Home() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [isWithSimbian, setIsWithSimbian] = useState(false);

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSection = () => {
    setIsWithSimbian(!isWithSimbian);
  };
  return (
    <div className="flex flex-col min-h-screen bg-simbian-darkBlue">
      <Header onToggleSection={toggleSection} isWithSimbian={isWithSimbian} />

      <main className="flex-1 pt-16">
        <AnimatePresence mode="wait">
          {!isWithSimbian ? (
            <motion.div
              key="without-simbian"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WithoutSimbianSection />
            </motion.div>
          ) : (
            <motion.div
              key="with-simbian"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <WithSimbianSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
