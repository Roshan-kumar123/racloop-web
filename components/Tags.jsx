import Link from "next/link";

export default function Tags() {
  return (
    <div className="nav tag-cloud">
      <Link href="/blog-post-2">Design</Link>
      <Link href="/blog-post-1">Development</Link>
      <Link href="/blog-post-3">Travel</Link>
    </div>
  );
}
