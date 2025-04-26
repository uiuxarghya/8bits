import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <div className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-32 lg:pt-36">
          <div className="flex flex-col gap-y-6 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-[5rem] dark:text-white">
              One
              <span className="text-green-400 sm:pl-5">Short Link</span>,
              <br />
              <span className="font-serif italic sm:text-[5rem]">
                Infinite Possiblities.
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-slate-500 dark:text-slate-400">
              A short link is a powerful marketing tool when you use it
              carefully. It is not just a link but a medium between your
              customer and their destination.
            </p>
            <div className="flex items-center justify-center gap-x-6">
              <Link href="/login">
                <Button
                  variant="default"
                  size="lg"
                  className="text-lg transition-all duration-200 ease-in-out active:scale-95 font-silkscreen tracking-tight"
                >
                  <span>Get Started</span>
                </Button>
              </Link>
              <Link href="/about">
                <Button variant="secondary" size="lg" className="text-lg font-silkscreen tracking-tight">
                  <span>Learn More &rarr;</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
