"use client";

import useMousePosition, { Position } from "@/lib/hooks/use-mouse-position";
import { range } from "@/lib/utils/math";
import { useRef } from "react";

const nRows = 10;
const circleGap = 8;
const circleDiameter = 40;

const positions = range(nRows)
  .map((y) =>
    range(80).map((x) => {
      const showCircle = Math.random() > 1 - y / (nRows - 1);

      if (!showCircle) {
        return null;
      }

      return {
        x: circleDiameter / 2 + circleGap + x * (circleDiameter + circleGap),
        y: circleDiameter / 2 + circleGap + y * (circleDiameter + circleGap),
      };
    })
  )
  .flat();

function getDirection(from: Position, to: Position): Position {
  const directionX = to.x - from.x;
  const directionY = to.y - from.y;

  return { x: directionX, y: directionY };
}

export default function FooterBackground() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { x: mouseX, y: mouseY } = useMousePosition(svgRef);

  const circles = positions
    .filter((x): x is Position => x !== null)
    .map(({ x: cx, y: cy }) => {
      const direction = getDirection(
        { x: cx, y: cy },
        { x: mouseX, y: mouseY }
      );

      const maxDistance = 80;
      const movementDivider = 400;

      const force = Math.max(
        maxDistance - Math.hypot(direction.x, direction.y),
        0
      );
      const circleMovementX = (force * direction.x) / movementDivider;
      const circleMovementY = (force * direction.y) / movementDivider;

      return (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={circleDiameter / 2}
          className={
            // Several extra group-hover classes are added to prevent transition when switching between dark and light mode
            "hover:fill-primary-500/80 dark:hover:fill-primary-500/50 group-hover:transition-[fill] group-hover:duration-1000 group-hover:hover:duration-0 group-hover:delay-200 group-hover:hover:delay-0 ease-in-out"
          }
          transform={`translate(${circleMovementX} ${circleMovementY})`}
        />
      );
    });

  return (
    <svg
      ref={svgRef}
      className="w-full absolute top-0 h-full z-[1] fill-neutral-300 dark:fill-neutral-200/30 group"
    >
      {circles}
    </svg>
  );
}
