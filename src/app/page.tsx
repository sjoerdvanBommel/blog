import { Heading } from "@/components/heading";
import { Post } from "@/components/post/post";

const latestPosts = [
  {
    title: "Post 1",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, impedit! Ratione accusamus ab ullam vero, fuga sint iure praesentium aspernatur animi non, ducimus dolorem voluptatibus impedit unde, et eaque nisi.",
    url: "https://blog.logrocket.com/wp-content/uploads/2024/05/using-path-aliases-cleaner-react-typescript-imports.png",
    alt: "TypeScript logo, Blog thumbnail",
  },
  {
    title: "Post 2",
    content:
      "Lorem Ratione accusamus ab ullam vero, fuga sint iure praesentium aspernatur animi non, ducimus dolorem voluptatibus impedit unde, et eaque nisi. lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus, impedit!",
    url: "https://blog.logrocket.com/wp-content/uploads/2024/05/using-path-aliases-cleaner-react-typescript-imports.png",
    alt: "TypeScript logo, Blog thumbnail",
  },
];

export default function HomePage() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <Heading level={2}>Latest posts</Heading>
        {latestPosts.map((post) => (
          <Post key={post.title} post={post} />
        ))}
      </div>
    </div>
  );
}
