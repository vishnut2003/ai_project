import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

export default authkitMiddleware({
    middlewareAuth: {
        enabled: true,
        // Allow logged out users to view these paths
        unauthenticatedPaths: [
            // Pages
            '/', 
            '/ai',
            // '/blogs/:path*', 
            // '/contact', 
            // '/contact/thank-you',
            // '/support/privacy-policy',
            // '/support/terms-conditions',
            // '/support/cookies-policy',
            // '/support/refund-policy',
            // '/sitemap',
            
            // SEO Inner Pages
            // '/ai-prompts-for-legal-research',
            // '/legal-prompts-for-consumers',
            // '/legal-document-drafting-prompts',
            // '/family-law-prompts',
            // '/personal-injury-prompts',
            // '/employment-law-prompts',
            // '/immigration-law-prompts',
            // '/business-law-prompts',
            // '/tax-law-prompts',
            // '/real-estate-law-prompts',
            // '/intellectual-property-law-prompts',
            // '/criminal-defense-law-prompts',
        ],
    },
});

export const config = { matcher: "/((?!api|static|.*\\..*|_next).*)" };
