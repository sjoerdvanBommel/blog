import { NLClipPath } from "./nl-clip-path";
import { nlDots } from "./nl-dots";

export function AnimatedDotMap() {
  const homeDot = nlDots.dots.filter((dot) => dot.home)[0];

  return (
    <div className="relative w-full h-full">
      <NLClipPath />
      <svg
        viewBox={nlDots.viewBox}
        className="h-full [&>circle]:[transform-box:fill-box]
            group [&>circle]:transition-[scale] transition-[clip-path] [&>circle]:duration-1000
            [&>circle]:ease-in-out [&>circle]:[r:8] fill-primary-500 absolute [clip-path:url(#nl-outline)]"
      >
        {nlDots.dots.map((dot, i) => (
          <circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            className="group-hover:[scale:5.2]"
            // @ts-ignore -- This is a valid SVG attribute
            transformOrigin="center"
          />
        ))}
        <g>
          <circle
            cx={homeDot.cx}
            cy={homeDot.cy}
            r={8}
            className="fill-primary-500 group-hover:fill-neutral-1000 group-hover:scale-[2] hover:!scale-[4] cursor-pointer duration-500 ease-in-out transition-[fill,transform] [transform-box:fill-box]"
            // @ts-ignore -- This is a valid SVG attribute
            transformOrigin="center"
          />
        </g>
      </svg>
    </div>
  );
}
