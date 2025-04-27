import { getLinksByUserId } from "@/actions/links.actions";
import ShortenLink from "@/components/links/create-link";
import { getSession } from "@/lib/session";
import { User } from "@prisma/client";
import { CornerDownRightIcon } from "lucide-react";

export default async function DashboardPage() {
  const sessionData = await getSession();
  const user = sessionData?.user as User | null;
  const allLinks = await getLinksByUserId(user?.id || "");
  return (
    <div className="flex flex-1 flex-col p-4">
      <div className="flex items-center justify-end">
        {user && <ShortenLink userDetails={user} />}
      </div>
      {allLinks.length === 0 ? (
        <p className="text-center text-slate-500 dark:text-slate-400">
          No links found.
        </p>
      ) : (
        <ul className="flex flex-col gap-3 pt-4">
          {allLinks.map((link) => (
            <li
              key={link.id}
              className="bg-primary-foreground flex cursor-pointer items-center gap-x-3 rounded-lg border p-3 transition-all duration-200 ease-in-out hover:shadow-lg"
            >
              <img
                src={`https://icon.horse/icon/${link.url.replace(/https?:\/\//, "").replace(/\/.*$/, "")}`}
                alt="Link Icon"
                className="h-8 w-8 rounded-full border p-1.5"
              />
              <div className="flex flex-1 flex-col justify-between">
                <span className="text-primary text-sm font-semibold">
                  {"8bs.vercel.app/" + link.shortLink}
                </span>
                <div className="flex items-center gap-1">
                  <CornerDownRightIcon className="h-3 w-3 text-gray-500" />
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:underline"
                  >
                    {link.url}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
