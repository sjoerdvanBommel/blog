import { Heading } from "@/components/heading";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-3xl grid place-content-center mb-40 text-center">
      <Heading level={1}>404</Heading>
      <span>
        Whoops... Not much to see here. Let&apos;s go back to the{" "}
        <Link className="underline" href="/">
          home page!
        </Link>
      </span>
    </div>
  );
}
