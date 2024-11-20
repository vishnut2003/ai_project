import { handleAuth } from '@workos-inc/authkit-nextjs';

// Redirect the user to `/` after successful sign in
// handleAuth({ returnPathname: '/ai' })
export const GET = handleAuth({returnPathname:'/'});
