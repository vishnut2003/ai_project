import { handleAuth } from '@workos-inc/authkit-nextjs';

// Redirect the user to `/` after successful sign in
// The redirect can be customized: `handleAuth({ returnPathname: '/foo' })`

export const GET = handleAuth({returnPathname: '/ai', baseURL: process.env.NEXT_PUBLIC_WEBSITE_BASE_URL});