"use client";

import { AnimatedDotMap } from "@/components/animated-dot-map";
import { cssVar } from "@/lib/constants/colors";
import { LayoutGroup, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AboutMePage() {
  const [delayOver, setDelayOver] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayOver(true);
    }, 4000);
  }, []);

  return (
    <>
      <div className="w-full h-dvh flex justify-center items-center ![grid-column:1/-1] -mt-24 overflow-visible">
        <LayoutGroup>
          {!delayOver && (
            <div>
              <motion.h2
                className="text-[8rem] relative font-extrabold text-nowrap"
                initial={{ top: 40, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <motion.span
                  animate={{
                    color: cssVar("neutral", 900, 0),
                    from: cssVar("neutral", 900),
                  }}
                  transition={{ delay: 3, duration: 1 }}
                  className="relative"
                >
                  Hey there!
                  <motion.div
                    className="absolute bottom-[2.65rem] right-[0.28rem] block w-6 h-6"
                    layoutId="home-dot"
                    exit={{ opacity: 1 }}
                  >
                    <svg width={24} height={24}>
                      <circle
                        r={12}
                        cx={12}
                        cy={12}
                        className="fill-primary-500"
                      />
                    </svg>
                  </motion.div>
                </motion.span>
              </motion.h2>
              <motion.h3
                initial={{ top: 40, opacity: 0 }}
                animate={{ top: 0, opacity: 1 }}
                transition={{ delay: 1.8, duration: 0.6, ease: "easeOut" }}
                layout
                className="text-[2rem] font-extrabold text-center"
              >
                <motion.span
                  animate={{
                    color: cssVar("neutral", 900, 0),
                    from: cssVar("neutral", 900),
                  }}
                  transition={{ delay: 3, duration: 1 }}
                >
                  I&apos;m Sjoerd, a Software Developer.
                </motion.span>
              </motion.h3>
            </div>
          )}
          {delayOver && (
            <>
              <motion.div transition={{ delay: 3 }} className="absolute">
                <AnimatedDotMap />
              </motion.div>
              <motion.h2
                className="text-[4rem] font-extrabold ml-96 pt-24 min-w-0"
                initial={{ top: 40, opacity: 0 }}
                animate={{ top: 0, opacity: 1, pointerEvents: "none" }}
                transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              >
                <motion.span
                  transition={{ delay: 3 }}
                  initial={{ opacity: 1, top: 0 }}
                  animate={{ opacity: 0, top: 40 }}
                >
                  This<span className="w-80 inline-block"></span>is where
                  I&apos;m from
                </motion.span>
              </motion.h2>
              <motion.div
                layoutId="home-dot"
                className={
                  "absolute inset-0 m-auto w-6 h-6 pointer-events-none"
                }
              >
                <svg width={24} height={24}>
                  <circle r={12} cx={12} cy={12} className="fill-primary-500" />
                </svg>
              </motion.div>
            </>
          )}
        </LayoutGroup>
      </div>
      <div className="h-screen"></div>
    </>
  );
}
