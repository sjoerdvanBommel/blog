import { Code } from "bright";

export type CodeBlockProps = {
  code: string;
  language: string;
};

export function CodeBlock({ code, ...props }: any) {
  return (
    <div className="flex-1 [&_pre]:p-8 [&_pre]:rounded [&_pre]:shadow-xl-layered [&>div]:!overflow-visible">
      <Code {...props} />
    </div>
  );
}
