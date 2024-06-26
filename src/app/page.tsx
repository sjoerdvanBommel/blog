import { Heading } from "@/components/heading";
import { PostSummary } from "@/components/post-summary";
import { getPosts } from "@/lib/utils/files";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <div className="grid md:grid-cols-3">
      <div className="md:col-span-2">
        <Heading level={2}>Latest posts</Heading>
        <div className="flex flex-col gap-8">
          {posts.map((post) => (
            <PostSummary key={post.title} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
}
