import { useState } from "react";
import { Menu, X } from "lucide-react";
import SimbianLogo from "./SimbianLogo";
import { motion, AnimatePresence } from "framer-motion";

interface HeaderProps {
  onToggleSection: () => void;
  isWithSimbian: boolean;
}

const Header = ({ onToggleSection, isWithSimbian }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 bg-[#0e1a39d0] backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.div
              className="flex-shrink-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center">
                <span className="ml-2 text-xl font-bold text-white">
                  Simbian
                </span>
              </div>
            </motion.div>

            <nav className="hidden md:ml-8 md:flex md:space-x-8">
              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <button className="text-gray-300 hover:text-white flex items-center gap-1">
                  Products
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <button className="text-gray-300 hover:text-white flex items-center gap-1">
                  Company
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </motion.div>

              <motion.div
                className="relative group"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <button className="text-gray-300 hover:text-white flex items-center gap-1">
                  Resources
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </motion.div>

              <motion.a
                href="#"
                className="text-gray-300 hover:text-white"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Blog
              </motion.a>
            </nav>
          </div>

          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <motion.button
              onClick={onToggleSection}
              className={`
                ${
                  isWithSimbian
                    ? "bg-green-500 text-white"
                    : "bg-blue-500 text-white"
                } 
                font-semibold py-2 px-4 rounded-full text-sm flex items-center transition-all duration-300
              `}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isWithSimbian ? "Without Simbian" : "With Simbian"}
            </motion.button>
          </motion.div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-simbian-darkBlue border-t border-blue-800/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-blue-800/30 rounded-md"
              >
                Products
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-blue-800/30 rounded-md"
              >
                Company
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-blue-800/30 rounded-md"
              >
                Resources
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-white hover:bg-blue-800/30 rounded-md"
              >
                Blog
              </a>
              <a
                href="#"
                className="block px-3 py-2 text-base font-medium text-blue-400 hover:bg-blue-800/30 rounded-md"
              >
                Book a Demo
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
