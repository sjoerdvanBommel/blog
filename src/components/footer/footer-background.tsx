import { Position } from "@/lib/hooks/use-mouse-position";
import { range } from "@/lib/utils/math";

const nRows = 10;
const circleGap = 8;
const circleDiameter = 40;

export default function FooterBackground() {
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

  const circles = positions
    .filter((x): x is Position => x !== null)
    .map(({ x: cx, y: cy }) => {
      return (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={circleDiameter / 2}
          className={
            // Several extra group-hover classes are added to prevent transition when switching between dark and light mode
            "group-hover:transition-[fill] group-hover:duration-1000 group-hover:hover:duration-0 group-hover:delay-200 group-hover:hover:delay-0 ease-in-out"
          }
        />
      );
    });

  return (
    <svg className="w-full absolute top-0 h-full z-[1] fill-neutral-300 dark:fill-neutral-400/30 group hover:[&>circle]:fill-primary-500/80 dark:hover:[&>circle]:fill-primary-500/40">
      {circles}
    </svg>
  );
}
