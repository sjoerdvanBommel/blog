import { Heading } from "@/components/heading";
import type { Post } from "@/lib/types";

export type PostProps = {
  post: Post;
};

export function Post({ post }: PostProps) {
  return (
    <div key={post.title}>
      <Heading level={3}>{post.title}</Heading>
      <p>{post.content}</p>
      <button>Read more</button>
    </div>
  );
}
