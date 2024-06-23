import { Variants, motion } from "framer-motion";
import { NLClipPath } from "./nl-clip-path";
import { nlDots } from "./nl-dots";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.005,
      delayChildren: 0.5,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0 },
  show: { opacity: 1, scale: 1 },
};

export function AnimatedDotMap() {
  const home = nlDots.dots.filter((dot) => dot.home)[0];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1, ease: "easeInOut" }}
      className="relative w-[1000px] aspect-[5/6] right-[152px] top-[21px] -rotate-12"
    >
      <NLClipPath />
      <motion.svg
        variants={container}
        initial="hidden"
        animate="show"
        viewBox={nlDots.viewBox}
        className="h-full [&>circle]:![transform-box:fill-box]
            group [&>circle]:transition-[scale] transition-[clip-path] [&>circle]:duration-1000
            [&>circle]:ease-in-out [&>circle]:[r:8] fill-neutral-900 absolute [clip-path:url(#nl-outline)]"
      >
        {/* <circle className="![r:1000]" cx={0} cy={0} /> */}
        {nlDots.dots
          .toSorted(
            (dot1, dot2) =>
              Math.hypot(home.cx - dot1.cx, home.cy - dot1.cy) -
              Math.hypot(home.cx - dot2.cx, home.cy - dot2.cy)
          )
          .map((dot, i) => (
            <motion.circle
              variants={item}
              key={i}
              cx={dot.cx}
              cy={dot.cy}
              className="group-hover:[scale:5.4] !origin-center"
              layout="position"
              // @ts-ignore -- This is a valid SVG attribute
              transformOrigin="center"
            />
          ))}
        <g>
          <circle
            cx={home.cx}
            cy={home.cy}
            r={8}
            className="fill-primary-500 hover:!scale-[2] cursor-pointer duration-500 ease-in-out transition-[fill,transform] [transform-box:fill-box] hover:animate-none animate-ping"
            // @ts-ignore -- This is a valid SVG attribute
            transformOrigin="center"
          />
        </g>
      </motion.svg>
    </motion.div>
  );
}
