import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <section className="relative px-6 lg:px-8">
        <div className="mx-auto max-w-5xl py-32 sm:py-32 lg:pt-36">
          <div className="flex flex-col gap-y-6 text-center">
            <h1 className="text-4xl font-black tracking-tight text-slate-900 sm:text-[5rem] dark:text-white">
              One
              <span className="text-green-400 sm:pl-5">Short Link</span>,
              <br />
              <span className="font-black italic sm:text-[5rem]">
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
                  className="font-silkscreen text-lg tracking-tight transition-all duration-200 ease-in-out active:scale-95"
                >
                  <span>Get Started</span>
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  variant="secondary"
                  size="lg"
                  className="font-silkscreen text-lg tracking-tight"
                >
                  <span>Learn More &rarr;</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="flex min-h-screen items-center justify-center">
        <div className="mx-auto max-w-5xl py-32 sm:py-32 lg:pt-36">
          <div className="flex flex-col gap-y-6 text-center">
            <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
              Proudly Open Source
            </h1>
            <p className="text-md mx-auto max-w-md text-slate-500 dark:text-slate-400">
              Our source code is available on GitHub - feel free to read,
              review, or contribute to it however you want!
            </p>
            <div className="flex items-center justify-center">
              <Link href="https://github.com/uiuxarghya/8bits">
                <Button
                  variant="default"
                  className="font-silkscreen flex items-center gap-x-3 px-6 text-lg tracking-tight transition-all duration-200 ease-in-out active:scale-95"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="size-5 text-slate-100"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                  <span>Star on Github</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
