"use client";

import { AnimatedDotMap } from "@/components/animated-dot-map";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div>
        <motion.h2
          className="text-[8rem] relative font-extrabold"
          initial={{ top: 40, opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
        >
          <span className="relative">
            Hey there!
            <svg
              className="absolute bottom-[2.65rem] right-[0.28rem]"
              width={24}
              height={24}
            >
              <circle r={12} className="fill-primary-500" cx={12} cy={12} />
            </svg>
          </span>
        </motion.h2>
        <motion.h3
          className="text-[2rem] relative font-extrabold"
          initial={{ top: 40, opacity: 0 }}
          animate={{ top: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8, ease: "easeOut" }}
        >
          I&apos;m Sjoerd, a frontend developer.
        </motion.h3>
      </div>

      <AnimatedDotMap />
    </div>
  );
}
