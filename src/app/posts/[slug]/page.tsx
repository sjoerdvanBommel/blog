import { CodeBlock } from "@/components/code-block";
import { Heading } from "@/components/heading";
import { getPost } from "@/lib/utils/files";
import { MDXRemote } from "next-mdx-remote/rsc";

type PostPageProps = {
  params: { slug: string };
};

export default async function PostPage({ params: { slug } }: PostPageProps) {
  const post = await getPost(slug);

  return (
    <>
      <div className="pt-16 pb-24 grid place-content-center">
        <Heading level={1}>{post.metadata.title}</Heading>
      </div>
      <div className="w-full">
        <MDXRemote
          source={post.content}
          components={{
            pre: CodeBlock,
          }}
        />
      </div>
    </>
  );
}
