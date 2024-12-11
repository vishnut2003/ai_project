import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

export default authkitMiddleware({
    middlewareAuth: {
        enabled: true,
        // Allow logged out users to view these paths
        unauthenticatedPaths: [
            '/', 
            '/blogs/:path*', 
            '/contact', 
            '/support/privacy-policy',
            '/support/terms-conditions',
            '/support/cookies-policy'
        ],
    },
});

export const config = { matcher: "/((?!api|static|.*\\..*|_next).*)" };
