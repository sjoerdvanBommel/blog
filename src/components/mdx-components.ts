import dynamic from "next/dynamic";

export const MDX_COMPONENTS = {
  pre: dynamic(() =>
    import("@/components/code-block").then((mod) => mod.CodeBlock)
  ),
};
