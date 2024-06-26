import { CodeBlock } from "@/components/code-block";
import { Heading } from "@/components/heading";
import { PostMetadata } from "@/lib/utils/files";
import Link from "next/link";

export type PostProps = {
  post: PostMetadata;
};

export function PostSummary({ post }: PostProps) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      key={post.title}
      className="shadow-xl p-8 pt-4 dark:bg-neutral-100 bg-neutral-50 hover:dark:bg-neutral-200 transition-colors rounded-xl border-neutral-300 dark:border-neutral-400 border duration-200"
    >
      <Heading level={2}>{post.title}</Heading>
      <div className="bg-gradient-to-br dark:from-neutral-900 from-neutral-100 to-primary-500 dark:to-primary-500 flex justify-center items-center rounded-xl my-6 p-12">
        <CodeBlock
          code={post.thumbnailCode}
          language={post.thumbnailLanguage ?? "tsx"}
        />
      </div>
      <p className="text-neutral-700">{post.description}</p>
    </Link>
  );
}
