import { motion } from "framer-motion";

const Card = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <motion.div
    whileHover={{ y: -4, scale: 1.01 }}
    transition={{ type: "spring", stiffness: 120, damping: 14 }}
    className={`rounded-2xl p-6 shadow-lg ring-1 ring-black/5 dark:ring-white/10 bg-white/70 dark:bg-zinc-900/60 backdrop-blur ${className}`}
  >
    {children}
  </motion.div>
);

export default Card;
