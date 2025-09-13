import { Link } from "@inertiajs/react";


export default function About() {
  return (
    <div>
      <h2>About Page</h2>
      <a href="/">Go back</a>
      <Link prefetch href="/">Go Home</Link>
      {/* <Link prefetch href={route('home')}>Go Home</Link> */}
    </div>
  );
}
