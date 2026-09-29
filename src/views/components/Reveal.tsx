import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp } from '@/config/animations';

interface RevealProps {
  children: ReactNode;
  width?: "fit-content" | "100%";
  delay?: number;
}

export function Reveal({ children, width = "100%", delay = 0 }: RevealProps) {
  return (
    <div style={{ position: 'relative', width, overflow: 'hidden' }}>
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
}
