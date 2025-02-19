import NotFoundSection from "@/pages-sections/not-found/NotFound";

export const metadata = {
  title: "404 - Page Not found",
  description: "Seems like you are looking for a page that doesn't exist or was moved."
};

export default function NotFound() {
  return <NotFoundSection />;
};