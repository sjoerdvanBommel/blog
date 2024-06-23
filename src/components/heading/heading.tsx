import { PropsWithChildren } from "react";
import { VariantProps, tv } from "tailwind-variants";

const heading = tv({
  variants: {
    level: {
      1: "text-3xl my-4",
      2: "text-2xl my-3",
      3: "text-xl my-2",
      4: "text-lg my-2",
    },
  },
  defaultVariants: {
    level: 2,
  },
});

type HeadingVariants = PropsWithChildren<VariantProps<typeof heading>>;

export function Heading(props: HeadingVariants) {
  const Tag = `h${props.level}` as keyof JSX.IntrinsicElements;

  return <Tag className={heading(props)}>{props.children}</Tag>;
}
