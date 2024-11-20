import { withAuth } from "@workos-inc/authkit-nextjs";

export const loginCheck = async () => {
  const { user } = await withAuth({ ensureSignedIn: true });
  return user;
};