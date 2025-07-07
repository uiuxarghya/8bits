import { getLinksByUserId } from "@/actions/links.actions";
import ShortenLink from "@/components/links/create-link";
import LinkCard from "@/components/links/link-card";
import { getSession } from "@/lib/session";
import { User } from "@prisma/client";

export default async function LinksPage() {
  const sessionData = await getSession();
  const user = sessionData?.user as User | null;
  const allLinks = await getLinksByUserId(user?.id || "");
  return (
    <div className="flex flex-1 flex-col p-2">
      <div className="flex items-center justify-end">
        {user && <ShortenLink userDetails={user} />}
      </div>
      {allLinks.length === 0 ? (
        <div>
          <h2 className="text-primary font-semibold">No links found</h2>
          <p className="text-muted-foreground text-sm">
            It seems like you haven&apos;t added any links yet. Start by adding
            your first link!
          </p>
        </div>
      ) : (
        <div className="@container/main flex flex-1 flex-col gap-4">
          <ul className="flex flex-col gap-2 py-4">
            {allLinks.map((link) => (
              <LinkCard key={link.id} link={link} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
