import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

export default authkitMiddleware({
    middlewareAuth: {
        enabled: true,
        // Allow logged out users to view these paths
        unauthenticatedPaths: [
            '/', 
            '/blogs/:path*', 
            '/contact', 
            '/contact/thank-you',
            '/support/privacy-policy',
            '/support/terms-conditions',
            '/support/cookies-policy',
            '/sitemap',
        ],
    },
});

export const config = { matcher: "/((?!api|static|.*\\..*|_next).*)" };
