"use client";

import { ComponentProps, PropsWithChildren, useEffect, useState } from "react";

export type VisuallyHiddenProps = PropsWithChildren<ComponentProps<"span">>;

export const VisuallyHidden = ({
  children,
  ...delegated
}: VisuallyHiddenProps) => {
  const [forceShow, setForceShow] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      const handleKeyDown = (ev: KeyboardEvent) => {
        if (ev.key === "Shift") {
          setForceShow(true);
        }
      };

      const handleKeyUp = (ev: KeyboardEvent) => {
        if (ev.key === "Shift") {
          setForceShow(false);
        }
      };

      window.addEventListener("keydown", handleKeyDown);
      window.addEventListener("keyup", handleKeyUp);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
        window.removeEventListener("keyup", handleKeyUp);
      };
    }
  }, []);

  if (forceShow) {
    return children;
  }

  return (
    <span
      {...delegated}
      className="inline-block absolute overflow-hidden h-px w-px -m-px p-0 border-0"
      style={{ clip: "rect(0 0 0 0)" }}
    >
      {children}
    </span>
  );
};
