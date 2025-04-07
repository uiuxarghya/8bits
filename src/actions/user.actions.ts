"use server";

import prisma from "@/lib/db";

export async function updateUserDefaultOrganization(
  userId: string,
  orgId: string,
) {
  await prisma.user.update({
    where: { id: userId },
    data: {
      defaultOrganizationId: orgId,
    },
  });
  await prisma.organization.update({
    where: { id: orgId },
    data: {
      type: "personal",
    },
  });
}

//get user defualt organization
export async function getUserDefaultOrganization(userId: string) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      defaultOrganizationId: true,
    },
  });
  return user;
}
