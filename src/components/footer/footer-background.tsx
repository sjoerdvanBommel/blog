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
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r={circleDiameter / 2} />
      );
    });

  return (
    // Pass all classes to svg instead of circles to reduce amount of produced HTML
    <svg
      className="
      w-full absolute top-0 h-full z-[1] fill-neutral-300 dark:fill-neutral-400/30 group hover:[&>circle]:fill-primary-500/80
      dark:hover:[&>circle]:fill-primary-500/40 hover:[&>circle]:transition-[fill] [&>circle]:hover:duration-1000 [&>circle]:hover:delay-200
      hover:[&>circle]:duration-0 hover:[&>circle]:delay-0 [&>circle]:ease-in-out"
    >
      {circles}
    </svg>
  );
}
