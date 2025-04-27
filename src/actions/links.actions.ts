"use server";

import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";

export async function createLink(data: {
  longLink: string;
  shortLink: string;
  userId: string;
  organizationId: string;
}) {
  const link = await prisma.link.create({
    data: {
      url: data.longLink,
      shortLink: data.shortLink,
      userId: data.userId,
      organizationId: data.organizationId,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });
  revalidatePath("/dashboard");
  return link;
}

export async function getLinksByUserId(id: string) {
  const links = await prisma.link.findMany({
    where: {
      userId: id,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return links;
}
