import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-js-black text-js-platinum py-6 text-center">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p className="text-sm">
          © 2025 Jure Sanguinis | All Rights Reserved
        </p>
        <div className="flex gap-4 mt-3 md:mt-0">
          <Link
            href="https://www.reddit.com/r/juresanguinis/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-js-green hover:underline"
          >
            Visit our Subreddit
          </Link>
          <Link
            href="https://www.reddit.com/r/juresanguinis/wiki/index/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-js-red hover:underline"
          >
            Read the Wiki
          </Link>
        </div>
      </div>
    </footer>
  );
}
