import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

export type PostMetadata = {
  title: string;
  description: string;
  thumbnailLanguage?: string;
  thumbnailCode: string;
  publishedOn: Date;
  slug: string;
};

export type Post = {
  metadata: PostMetadata;
  content: string;
};

export async function getPosts() {
  const fileNames = await readDirectory("/posts");

  const postsMetadata: PostMetadata[] = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/posts/${fileName}`);

    const { data: metadata } = matter(rawContent);

    if (
      !metadata.title ||
      !metadata.description ||
      !metadata.thumbnailCode ||
      !metadata.publishedOn
    ) {
      throw new Error(`Invalid metadata in ${fileName}`);
    }

    postsMetadata.push({
      ...(metadata as PostMetadata),
      slug: fileName.replace(".mdx", ""),
    });
  }

  return postsMetadata.sort((p1, p2) =>
    p1.publishedOn < p2.publishedOn ? 1 : -1
  );
}

export async function getPost(slug: string) {
  const rawContent = await readFile(`/posts/${slug}.mdx`);

  const { data: metadata, content } = matter(rawContent);

  return { metadata, content } as Post;
}

function readFile(localPath: string) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath: string) {
  return fs.readdir(path.join(process.cwd(), localPath));
}
