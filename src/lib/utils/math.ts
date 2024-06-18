export function range(start: number, end?: number, step = 1) {
  let output = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    output.push(i);
  }

  return output;
}

export function lerp(
  value: number,
  from: [min: number, max: number],
  to: [min: number, max: number]
): number {
  const [fromMin, fromMax] = from;
  const [toMin, toMax] = to;

  const normalizedValue = (value - fromMin) / (fromMax - fromMin);

  return toMin + normalizedValue * (toMax - toMin);
}
