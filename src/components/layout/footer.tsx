"use client";

import Logo from "@/components/shared/logo";
import Link from "next/link";
import { Badge } from "../ui/badge";

export default function Footer() {
  return (
    <div className="relative z-10 mx-auto w-full max-w-screen-lg overflow-hidden border-0 border-slate-200 bg-transparent px-3 py-16 backdrop-blur-lg md:rounded-t-2xl lg:px-4 xl:px-0">
      <footer>
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="flex flex-col gap-6">
            <div className="grow">
              <Link className="block max-w-fit" href="/">
                <span className="sr-only">8bits Logo</span>
                <div className="max-w-fit">
                  <Logo className="h-8 w-auto text-slate-800 dark:text-white" />
                </div>
              </Link>
            </div>
            <div className="flex items-center gap-3">
              <Link
                href="https://twitter.com/uiuxarghya"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full p-1"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  width="300"
                  height="300"
                  viewBox="0 0 300 300"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-4 p-px text-slate-900 transition-colors duration-75 group-hover:text-slate-600"
                >
                  <path
                    stroke="currentColor"
                    d="M178.57 127.15 290.27 0h-26.46l-97.03 110.38L89.34 0H0l117.13 166.93L0 300.25h26.46l102.4-116.59 81.8 116.59h89.34M36.01 19.54H76.66l187.13 262.13h-40.66"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://www.linkedin.com/in/uiuxarghya/"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full p-1"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="size-4 text-slate-900 transition-colors duration-75 group-hover:text-slate-600"
                >
                  <path
                    fill="currentColor"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  ></path>
                </svg>
              </Link>
              <Link
                href="https://github.com/uiuxarghya/8bits"
                target="_blank"
                rel="noreferrer"
                className="group rounded-full p-1"
              >
                <span className="sr-only">GitHub</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="size-4 text-slate-900 transition-colors duration-75 group-hover:text-slate-600"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-4 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2">
              <div className="grid gap-8">
                <div>
                  <h3 className="text-sm font-medium text-slate-900">
                    Product
                  </h3>
                  <ul role="list" className="mt-2.5 flex flex-col gap-3.5">
                    <li>
                      <Link
                        className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                        href="/home"
                      >
                        8bits Links
                      </Link>
                    </li>

                    <li>
                      <Link
                        className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                        href="/docs/api-reference/introduction"
                      >
                        8bits API
                        <Badge variant="secondary">Soon!</Badge>
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                        href="/pricing"
                      >
                        Pricing
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-medium text-slate-900">
                  Resources
                </h3>
                <ul role="list" className="mt-2.5 flex flex-col gap-3.5">
                  <li>
                    <Link
                      className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                      href="/docs/introduction"
                    >
                      Docs <Badge variant="secondary">Soon!</Badge>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                      href="/changelog"
                    >
                      Changelog <Badge variant="secondary">Soon!</Badge>
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                      href="/about"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                      href="/contact"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2">
              <div className="grid gap-8">
                <div>
                  <h3 className="text-sm font-medium text-slate-900">Legal</h3>
                  <ul role="list" className="mt-2.5 flex flex-col gap-3.5">
                    <li>
                      <Link
                        className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                        href="/legal/privacy"
                      >
                        Privacy
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                        href="/legal/terms"
                      >
                        Terms
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="flex items-center gap-1 text-sm text-slate-500 transition-colors duration-75 hover:text-slate-700"
                        href="/legal/abuse"
                      >
                        Report Abuse
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-medium text-slate-900">Tools</h3>
                <Badge variant="secondary">Coming Soon!</Badge>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 items-center">
          <p className="text-center text-xs text-slate-500">
            &copy; 2021 - {new Date().getFullYear()} 8bits. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
