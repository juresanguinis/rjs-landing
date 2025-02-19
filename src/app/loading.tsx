import Loader from "@/components/loader";

export default function Loading() {
  return (
    <section className="flex flex-row justify-center align-middle items-center h-screen w-screen">
      <Loader />
    </section>
  );
};