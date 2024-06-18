import { RefObject, useEffect, useState } from "react";

export type Position = {
  x: number;
  y: number;
};

const useMousePosition = (ref: RefObject<Element>) => {
  const [mousePosition, setMousePosition] = useState<Position>({ x: 0, y: 0 });

  useEffect(() => {
    const { x: containerX, y: containerY } =
      ref.current!.getBoundingClientRect();

    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({
        x: ev.clientX - containerX,
        y: ev.clientY - containerY,
      });
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [ref]);

  return mousePosition;
};

export default useMousePosition;
