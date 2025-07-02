import { Zap, GitMerge, Users, ShieldCheck, Database, BellRing, Image as ImageIcon, Rocket, Server } from 'lucide-react';

export type Product = {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    hint: string;
    tags: string[];
    price: string;
    features: { 
        title: string; 
        description: string; 
        icon: React.ComponentType<{ className?: string }>;
    }[];
};

export const products: Product[] = [
    {
        slug: "swiftform-api",
        title: "SwiftForm API",
        description: "A backend script for processing form submissions with validation and email notifications.",
        longDescription: "Stop building form backends from scratch. SwiftForm API is a robust, secure, and easy-to-deploy Node.js script that handles form submissions, provides server-side validation, and sends email notifications, so you can focus on your frontend.",
        image: "https://loremflickr.com/600/400/api,form,code?lock=1",
        hint: "code api",
        tags: ["Node.js", "API", "Forms"],
        price: "$49",
        features: [
            { title: "Easy Setup", description: "Deploy in minutes with minimal configuration on any Node.js environment.", icon: Rocket },
            { title: "Server-side Validation", description: "Secure your forms with powerful, customizable validation rules.", icon: ShieldCheck },
            { title: "Email Notifications", description: "Automatically send formatted email notifications upon successful submission.", icon: BellRing },
        ],
    },
    {
        slug: "codegova-cms",
        title: "CodeGova CMS",
        description: "A flexible, Git-based headless CMS for developers who love Markdown.",
        longDescription: "Manage your content the developer way. CodeGova CMS is a Git-based headless CMS that lets you use Markdown for your content, giving you version control, and a powerful API to deliver it to any frontend. It's content management, simplified.",
        image: "https://loremflickr.com/600/400/cms,content,dashboard?lock=2",
        hint: "content management",
        tags: ["CMS", "Headless", "React"],
        price: "$199",
        features: [
            { title: "Git-Based Workflow", description: "Leverage the power of Git for version control, branching, and collaboration on your content.", icon: GitMerge },
            { title: "Markdown-First", description: "Write content in simple, clean Markdown. No complex dashboards needed.", icon: Zap },
            { title: "Framework Agnostic", description: "Use the generated API with any frontend framework, from Next.js to Astro.", icon: Rocket },
        ],
    },
    {
        slug: "authkit",
        title: "AuthKit",
        description: "A complete user authentication solution with social logins and passwordless options.",
        longDescription: "Integrate a complete, secure authentication system into your app in hours, not weeks. AuthKit provides everything you need: user registration, login, social providers (Google, GitHub), and secure session management.",
        image: "https://loremflickr.com/600/400/authentication,security,lock?lock=3",
        hint: "security shield",
        tags: ["Auth", "Security", "SaaS"],
        price: "$99",
        features: [
            { title: "Social & Passwordless Login", description: "Offer multiple ways for users to sign in, including Google, GitHub, and email links.", icon: Users },
            { title: "Secure by Default", description: "Built with best practices for password hashing, session management, and data protection.", icon: ShieldCheck },
            { title: "Easy to Customize", description: "Clean, well-documented code that's easy to theme and adapt to your brand.", icon: Zap },
        ],
    },
    {
        slug: "mediapress",
        title: "MediaPress",
        description: "An image and video processing script for optimizing and transforming media on the fly.",
        longDescription: "Serve perfectly optimized images and videos every time. MediaPress is a self-hostable script that transforms your media on-demand, from resizing and cropping to applying filters and optimizing for web performance.",
        image: "https://loremflickr.com/600/400/image,gallery,video?lock=4",
        hint: "image gallery",
        tags: ["Media", "Optimization", "Images"],
        price: "$79",
        features: [
            { title: "On-the-fly Transformations", description: "Resize, crop, and apply effects to media via simple URL parameters.", icon: ImageIcon },
            { title: "Automatic Optimization", description: "Automatically compress and convert images to next-gen formats like WebP and AVIF.", icon: Zap },
            { title: "Self-Hostable", description: "Maintain full control over your media processing by hosting it on your own infrastructure.", icon: Server },
        ],
    },
    {
        slug: "datasync",
        title: "DataSync",
        description: "A script to synchronize data between different databases and external APIs.",
        longDescription: "Keep your data consistent across multiple systems. DataSync is a powerful ETL (Extract, Transform, Load) script that can be configured to pull data from various sources like databases and APIs, transform it, and load it into a destination of your choice.",
        image: "https://loremflickr.com/600/400/database,sync,data?lock=5",
        hint: "database connection",
        tags: ["Data", "API", "ETL"],
        price: "$129",
        features: [
            { title: "Flexible Connectors", description: "Connect to popular databases like PostgreSQL and MySQL, and any REST or GraphQL API.", icon: Database },
            { title: "Custom Transformations", description: "Write your own transformation logic in JavaScript to clean and reshape data as needed.", icon: Zap },
            { title: "Scheduled & On-Demand", description: "Run sync jobs on a schedule with cron or trigger them on-demand via webhooks.", icon: BellRing },
        ],
    },
    {
        slug: "notifyflow",
        title: "NotifyFlow",
        description: "A robust notification service script for email, SMS, and push notifications.",
        longDescription: "Engage your users with timely notifications. NotifyFlow is a unified notification service that provides a single API to send emails, SMS messages, and web push notifications, with support for templates and scheduling.",
        image: "https://loremflickr.com/600/400/notification,bell,email?lock=6",
        hint: "notification bell",
        tags: ["Notifications", "Service", "Node.js"],
        price: "$69",
        features: [
            { title: "Multi-Channel", description: "Send messages across Email, SMS (via Twilio), and Web Push from a single, simple API.", icon: BellRing },
            { title: "Template Support", description: "Create and manage reusable notification templates for consistent messaging.", icon: Zap },
            { title: "Scalable Architecture", description: "Built to handle high-volume notification loads for applications of any size.", icon: Server },
        ],
    },
];

export function getProductBySlug(slug: string): Product | undefined {
    return products.find((product) => product.slug === slug);
}
