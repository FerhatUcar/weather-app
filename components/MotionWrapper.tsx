"use client";

import { AnimatePresence, motion } from "framer-motion";

type WrapperProps = {
  children: React.ReactNode;
};

export function MotionWrapper({ children }: WrapperProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
