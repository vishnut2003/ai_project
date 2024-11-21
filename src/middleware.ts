import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

export default authkitMiddleware({
    middlewareAuth: {
        enabled: true,
        // Allow logged out users to view these paths
        unauthenticatedPaths: ['/'],
    },
});

export const config = { matcher: "/((?!api|static|.*\\..*|_next).*)" };
