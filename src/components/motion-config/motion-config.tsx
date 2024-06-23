"use client";

import { MotionConfig as FramerMotionConfig } from "framer-motion";
import { PropsWithChildren } from "react";

export function MotionConfig({ children }: PropsWithChildren) {
  return (
    <FramerMotionConfig
      transition={{ ease: "easeInOut", duration: 1 }}
      reducedMotion="user"
    >
      {children}
    </FramerMotionConfig>
  );
}
