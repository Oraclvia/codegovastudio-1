
import { type LucideIcon, BookOpen, Film, Code, PenTool, CheckCircle, BrainCircuit, Rocket } from 'lucide-react';

export type CourseModule = {
  title: string;
  lectures: {
    title: string;
    duration: string;
  }[];
};

export type Course = {
    slug: string;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    hint: string;
    tags: string[];
    price: string;
    isHot: boolean;
    whatYoullLearn: string[];
    courseOutline: CourseModule[];
    tutor: {
        name: string;
        image: string;
        title: string;
    };
};

const tutors = [
    { name: "Alex Morgan", image: "https://loremflickr.com/100/100/man,portrait?lock=1", title: "Lead Full-Stack Engineer" },
    { name: "Samantha Chen", image: "https://loremflickr.com/100/100/woman,portrait?lock=2", title: "AI & Machine Learning Specialist" },
    { name: "David Rodriguez", image: "https://loremflickr.com/100/100/man,portrait?lock=3", title: "Senior Frontend Developer" },
    { name: "Maria Garcia", image: "https://loremflickr.com/100/100/woman,portrait?lock=4", title: "Cybersecurity Expert & DevOps Engineer" },
];

export const courses: Course[] = [
    {
        slug: "the-complete-nextjs-14-course",
        title: "The Complete Next.js 14 Course",
        description: "Build full-stack, production-ready web apps with the latest features of Next.js.",
        longDescription: "Dive deep into the world of modern web development with Next.js 14. This course takes you from the fundamentals to advanced topics like server components, server actions, caching strategies, and deploying full-stack applications. You'll build real-world projects to solidify your understanding.",
        image: "https://loremflickr.com/600/400/nextjs,code,web?lock=11",
        hint: "code abstract",
        tags: ["Next.js", "React", "Full-Stack"],
        price: "$149",
        isHot: true,
        tutor: tutors[0],
        whatYoullLearn: [
            "Mastering the Next.js App Router",
            "Building with Server Components",
            "Implementing Server Actions for data mutations",
            "Advanced caching and revalidation techniques",
            "Deploying to Vercel and other platforms",
        ],
        courseOutline: [
            { title: "Module 1: Introduction to Next.js 14", lectures: [{ title: "What is Next.js?", duration: "12 min" }, { title: "Setup", duration: "18 min" }, { title: "The App Router", duration: "25 min" }] },
            { title: "Module 2: Core Concepts", lectures: [{ title: "Pages & Layouts", duration: "35 min" }, { title: "Server vs. Client Components", duration: "45 min" }, { title: "Data Fetching", duration: "40 min" }] },
            { title: "Module 3: Building a Full-Stack App", lectures: [{ title: "Database Integration", duration: "50 min" }, { title: "Authentication", duration: "60 min" }, { title: "Handling Forms", duration: "55 min" }] },
        ],
    },
    {
        slug: "advanced-typescript-mastery",
        title: "Advanced TypeScript Mastery",
        description: "Deep dive into advanced TypeScript concepts, design patterns, and best practices.",
        longDescription: "Go beyond the basics and become a TypeScript expert. This course explores advanced types, generics, decorators, and design patterns that will enable you to write more robust, scalable, and maintainable code for any project.",
        image: "https://loremflickr.com/600/400/typescript,code,abstract?lock=12",
        hint: "typescript logo",
        tags: ["TypeScript", "Advanced", "Programming"],
        price: "$129",
        isHot: false,
        tutor: tutors[1],
        whatYoullLearn: ["Advanced generic constraints", "Conditional types and mapped types", "Decorators and metadata reflection", "Building type-safe APIs", "Architecting large-scale TS projects"],
        courseOutline: [
            { title: "Module 1: Advanced Types", lectures: [{ title: "Generics Deep Dive", duration: "45 min" }, { title: "Conditional & Mapped Types", duration: "50 min" }] },
            { title: "Module 2: Design Patterns", lectures: [{ title: "Implementing Decorators", duration: "60 min" }, { title: "Type-safe Event Emitters", duration: "40 min" }] },
        ],
    },
    {
        slug: "ai-web-apps-with-genkit-nextjs",
        title: "AI Web Apps with Genkit & Next.js",
        description: "Learn to build intelligent, AI-powered applications using Google's Genkit.",
        longDescription: "Unlock the power of Generative AI in your web applications. This course teaches you how to integrate Google's Genkit with Next.js to build flows, use tools, and create amazing AI-driven user experiences. From simple text generation to complex agentic workflows, you'll learn it all.",
        image: "https://loremflickr.com/600/400/ai,brain,robot?lock=13",
        hint: "artificial intelligence brain",
        tags: ["AI", "Genkit", "Next.js"],
        price: "$199",
        isHot: true,
        tutor: tutors[0],
        whatYoullLearn: ["Setting up Genkit in a Next.js project", "Creating and running AI flows", "Using different AI models (e.g., Gemini)", "Implementing tools for function calling", "Building a complete AI-powered feature"],
        courseOutline: [
            { title: "Module 1: Genkit Fundamentals", lectures: [{ title: "Introduction to Genkit", duration: "15 min" }, { title: "Your First Flow", duration: "22 min" }, { title: "Prompts & Models", duration: "30 min" }] },
            { title: "Module 2: Advanced Genkit", lectures: [{ title: "Structured I/O with Zod", duration: "40 min" }, { title: "Function Calling with Tools", duration: "50 min" }, { title: "Streaming Responses", duration: "45 min" }] },
        ],
    },
    {
        slug: "ui-ux-design-fundamentals",
        title: "UI/UX Design Fundamentals",
        description: "Master the principles of user interface and user experience design from scratch.",
        longDescription: "Learn the essential principles of creating beautiful and intuitive digital products. This course covers user research, wireframing, prototyping, visual design, and usability testing to equip you with a complete UX/UI design skillset.",
        image: "https://loremflickr.com/600/400/design,wireframe,ui?lock=14",
        hint: "design wireframe",
        tags: ["UI", "UX", "Design"],
        price: "$99",
        isHot: false,
        tutor: tutors[2],
        whatYoullLearn: ["Conducting user research and creating personas", "Wireframing and prototyping with Figma", "Visual design principles (color, typography, layout)", "Designing for accessibility", "Conducting usability tests"],
        courseOutline: [
            { title: "Module 1: UX Fundamentals", lectures: [{ title: "User Research", duration: "50 min" }, { title: "Information Architecture", duration: "40 min" }] },
            { title: "Module 2: UI Design", lectures: [{ title: "Figma Essentials", duration: "60 min" }, { title: "Visual Design Principles", duration: "55 min" }] },
        ],
    },
    {
        slug: "modern-css-with-tailwind",
        title: "Modern CSS with Tailwind",
        description: "Build beautiful, responsive UIs rapidly with Tailwind CSS utility-first framework.",
        longDescription: "Stop writing custom CSS and start building faster with Tailwind CSS. This course will teach you the utility-first philosophy, how to build complex responsive layouts, and how to customize Tailwind to match your project's design system.",
        image: "https://loremflickr.com/600/400/css,tailwind,code?lock=15",
        hint: "css code",
        tags: ["CSS", "Tailwind CSS", "Frontend"],
        price: "$89",
        isHot: false,
        tutor: tutors[2],
        whatYoullLearn: ["Utility-first fundamentals", "Mastering Flexbox and Grid", "Responsive design techniques", "Customizing your theme", "Using plugins and production optimization"],
        courseOutline: [
            { title: "Module 1: Getting Started", lectures: [{ title: "Why Tailwind?", duration: "20 min" }, { title: "Core Concepts", duration: "45 min" }] },
            { title: "Module 2: Building Layouts", lectures: [{ title: "Responsive Design", duration: "60 min" }, { title: "Customization", duration: "50 min" }] },
        ],
    },
    {
        slug: "react-deep-dive",
        title: "React Deep Dive",
        description: "Go beyond the basics of React and understand its core concepts, hooks, and performance.",
        longDescription: "Truly master React by understanding how it works under the hood. This course covers the virtual DOM, reconciliation, advanced hooks, state management patterns, and performance optimization techniques for building high-performance React applications.",
        image: "https://loremflickr.com/600/400/react,code,atom?lock=16",
        hint: "react logo",
        tags: ["React", "State Management", "Performance"],
        price: "$119",
        isHot: true,
        tutor: tutors[0],
        whatYoullLearn: ["How React's reconciliation works", "Creating custom hooks", "Advanced state management (Context, Zustand)", "Performance profiling and optimization", "Common pitfalls and best practices"],
        courseOutline: [
            { title: "Module 1: React Internals", lectures: [{ title: "Reconciliation", duration: "40 min" }, { title: "The Fiber Architecture", duration: "50 min" }] },
            { title: "Module 2: Advanced Patterns", lectures: [{ title: "Custom Hooks", duration: "55 min" }, { title: "State Management", duration: "65 min" }] },
        ],
    },
    {
        slug: "nodejs-and-express-complete-guide",
        title: "Node.js & Express - The Complete Guide",
        description: "Build, test, and deploy robust backend APIs with Node.js and the Express framework.",
        longDescription: "Become a proficient backend developer with Node.js and Express. This course covers everything from creating a RESTful API to handling authentication, working with databases (MongoDB), and deploying your application to the cloud.",
        image: "https://loremflickr.com/600/400/nodejs,server,database?lock=17",
        hint: "server code",
        tags: ["Node.js", "Backend", "API"],
        price: "$129",
        isHot: false,
        tutor: tutors[3],
        whatYoullLearn: ["Building RESTful APIs with Express", "Middleware and routing", "Integrating with MongoDB", "Authentication with JWT", "Testing and error handling"],
        courseOutline: [
            { title: "Module 1: Express Basics", lectures: [{ title: "Routing", duration: "40 min" }, { title: "Middleware", duration: "50 min" }] },
            { title: "Module 2: Building an API", lectures: [{ title: "Database Integration", duration: "60 min" }, { title: "Authentication", duration: "70 min" }] },
        ],
    },
    {
        slug: "cybersecurity-for-developers",
        title: "Cybersecurity for Developers",
        description: "Learn to write secure code and protect your applications from common vulnerabilities.",
        longDescription: "Security is everyone's responsibility. This course is designed for developers to understand common web vulnerabilities (OWASP Top 10), secure coding practices, and how to build more resilient and secure applications from the ground up.",
        image: "https://loremflickr.com/600/400/security,shield,lock?lock=18",
        hint: "security shield lock",
        tags: ["Security", "Cybersecurity", "DevSecOps"],
        price: "$179",
        isHot: false,
        tutor: tutors[3],
        whatYoullLearn: ["Understanding the OWASP Top 10", "Preventing XSS and CSRF attacks", "Secure authentication and session management", "Data encryption best practices", "Dependency scanning and vulnerability management"],
        courseOutline: [
            { title: "Module 1: Web Vulnerabilities", lectures: [{ title: "XSS & CSRF", duration: "50 min" }, { title: "SQL Injection", duration: "45 min" }] },
            { title: "Module 2: Defensive Coding", lectures: [{ title: "Secure Auth", duration: "60 min" }, { title: "Input Validation", duration: "55 min" }] },
        ],
    },
    {
        slug: "headless-cms-with-codegova-cms",
        title: "Headless CMS with CodeGova CMS",
        description: "Master content modeling and delivery using our powerful, Git-based headless CMS.",
        longDescription: "Learn how to leverage our own CodeGova CMS to build flexible and scalable content-driven websites. This course covers content modeling, using the Git-based workflow, and integrating the content API into a modern frontend framework.",
        image: "https://loremflickr.com/600/400/cms,content,api?lock=19",
        hint: "content management system",
        tags: ["CMS", "Headless", "CodeGova"],
        price: "$79",
        isHot: false,
        tutor: tutors[0],
        whatYoullLearn: ["Content modeling best practices", "Using the Git-based workflow for content", "Consuming the content API", "Integrating with Next.js", "Building a blog with CodeGova CMS"],
        courseOutline: [
            { title: "Module 1: Getting Started", lectures: [{ title: "What is CodeGova CMS?", duration: "15 min" }, { title: "Content Modeling", duration: "30 min" }] },
            { title: "Module 2: Building a Site", lectures: [{ title: "API Integration", duration: "50 min" }, { title: "Deploying Your Site", duration: "40 min" }] },
        ],
    },
    {
        slug: "full-stack-firebase",
        title: "Full-Stack Firebase",
        description: "Build full-featured applications using Firebase's suite of tools, from Auth to Firestore.",
        longDescription: "Harness the full power of the Firebase platform. This course teaches you how to build a complete web application using Firebase Authentication, Firestore, Cloud Storage, and Cloud Functions for a truly serverless backend.",
        image: "https://loremflickr.com/600/400/firebase,database,cloud?lock=20",
        hint: "firebase logo",
        tags: ["Firebase", "Full-Stack", "NoSQL"],
        price: "$139",
        isHot: false,
        tutor: tutors[3],
        whatYoullLearn: ["Firebase Authentication with social providers", "Structuring data in Firestore", "Uploading files to Cloud Storage", "Writing and deploying Cloud Functions", "Securing your app with Security Rules"],
        courseOutline: [
            { title: "Module 1: Firebase Core", lectures: [{ title: "Firestore Data Modeling", duration: "50 min" }, { title: "Firebase Auth", duration: "55 min" }] },
            { title: "Module 2: Advanced", lectures: [{ title: "Cloud Functions", duration: "60 min" }, { title: "Security Rules", duration: "65 min" }] },
        ],
    },
    {
        slug: "data-visualization-with-d3js",
        title: "Data Visualization with D3.js",
        description: "Create stunning and interactive data visualizations for the web with D3.js.",
        longDescription: "Bring data to life with D3.js, the leading library for web-based data visualization. This course covers selections, data binding, scales, and axes, and guides you through building various chart types from bar charts to complex interactive maps.",
        image: "https://loremflickr.com/600/400/data,chart,graph?lock=21",
        hint: "data chart graph",
        tags: ["Data Viz", "D3.js", "JavaScript"],
        price: "$109",
        isHot: false,
        tutor: tutors[1],
        whatYoullLearn: ["D3 selections and data binding", "Using scales for data mapping", "Creating axes and grids", "Building interactive charts and graphs", "Animating transitions"],
        courseOutline: [
            { title: "Module 1: D3 Fundamentals", lectures: [{ title: "Selections & Data Binding", duration: "60 min" }, { title: "Scales", duration: "50 min" }] },
            { title: "Module 2: Building Visualizations", lectures: [{ title: "Creating a Bar Chart", duration: "70 min" }, { title: "Making it Interactive", duration: "60 min" }] },
        ],
    },
    {
        slug: "graphql-from-zero-to-hero",
        title: "GraphQL: From Zero to Hero",
        description: "Learn to build and consume efficient, flexible APIs with GraphQL and Apollo.",
        longDescription: "Move beyond REST and learn the future of APIs with GraphQL. This course covers GraphQL fundamentals, schema design, queries, mutations, and subscriptions. You'll learn to build a GraphQL server and consume it from a client application using Apollo.",
        image: "https://loremflickr.com/600/400/graphql,api,server?lock=22",
        hint: "api connection",
        tags: ["GraphQL", "API", "Backend"],
        price: "$99",
        isHot: false,
        tutor: tutors[3],
        whatYoullLearn: ["GraphQL schema design", "Writing queries, mutations, and subscriptions", "Building a GraphQL server with Apollo Server", "Consuming a GraphQL API with Apollo Client", "Error handling and caching"],
        courseOutline: [
            { title: "Module 1: GraphQL Basics", lectures: [{ title: "Schema Definition Language", duration: "50 min" }, { title: "Queries & Mutations", duration: "60 min" }] },
            { title: "Module 2: Apollo Platform", lectures: [{ title: "Apollo Server", duration: "70 min" }, { title: "Apollo Client", duration: "70 min" }] },
        ],
    },
    {
        slug: "devops-for-beginners",
        title: "DevOps for Beginners",
        description: "Understand the fundamentals of CI/CD, Docker, and Kubernetes for modern deployments.",
        longDescription: "Learn the essential DevOps practices that bridge the gap between development and operations. This course introduces you to CI/CD pipelines, containerization with Docker, and orchestration with Kubernetes for scalable and reliable application deployment.",
        image: "https://loremflickr.com/600/400/devops,pipeline,automation?lock=23",
        hint: "devops pipeline",
        tags: ["DevOps", "CI/CD", "Docker"],
        price: "$159",
        isHot: true,
        tutor: tutors[3],
        whatYoullLearn: ["Setting up a CI/CD pipeline with GitHub Actions", "Containerizing applications with Docker", "Creating a Docker Compose workflow", "Introduction to Kubernetes concepts", "Deploying an application to a K8s cluster"],
        courseOutline: [
            { title: "Module 1: CI/CD", lectures: [{ title: "GitHub Actions", duration: "60 min" }, { title: "Principles of Continuous Integration", duration: "40 min" }] },
            { title: "Module 2: Containerization", lectures: [{ title: "Docker Fundamentals", duration: "70 min" }, { title: "Intro to Kubernetes", duration: "80 min" }] },
        ],
    },
    {
        slug: "animated-web-interfaces",
        title: "Animated Web Interfaces",
        description: "Bring your websites to life with CSS animations, transitions, and JavaScript.",
        longDescription: "Master the art of web animation to create engaging and delightful user experiences. This course covers CSS transitions, keyframe animations, and how to use JavaScript libraries like GSAP for more complex animation sequences.",
        image: "https://loremflickr.com/600/400/animation,motion,abstract?lock=24",
        hint: "animation abstract",
        tags: ["CSS", "Animation", "Frontend"],
        price: "$89",
        isHot: false,
        tutor: tutors[2],
        whatYoullLearn: ["CSS Transitions and Keyframes", "Animating transforms and opacity for performance", "Choreographing complex sequences", "Using GreenSock (GSAP) for advanced animations", "UI animation principles"],
        courseOutline: [
            { title: "Module 1: CSS Animation", lectures: [{ title: "Transitions", duration: "40 min" }, { title: "Keyframes", duration: "55 min" }] },
            { title: "Module 2: JavaScript Animation", lectures: [{ title: "Intro to GSAP", duration: "60 min" }, { title: "Scroll-based Animations", duration: "70 min" }] },
        ],
    },
    {
        slug: "react-native-for-mobile-apps",
        title: "React Native for Mobile Apps",
        description: "Build cross-platform native mobile applications for iOS and Android using React Native.",
        longDescription: "Use your React knowledge to build native mobile apps for both iOS and Android from a single codebase. This course covers setting up your environment, core components, navigation, and accessing native device features.",
        image: "https://loremflickr.com/600/400/mobile,app,phone?lock=25",
        hint: "mobile phone app",
        tags: ["React Native", "Mobile", "iOS", "Android"],
        price: "$149",
        isHot: false,
        tutor: tutors[0],
        whatYoullLearn: ["Setting up the React Native environment", "Core components and styling", "Navigation with React Navigation", "Using native device APIs (camera, location)", "Building and deploying your app"],
        courseOutline: [
            { title: "Module 1: React Native Basics", lectures: [{ title: "Core Components", duration: "60 min" }, { title: "Styling", duration: "50 min" }] },
            { title: "Module 2: Building a Real App", lectures: [{ title: "Navigation", duration: "70 min" }, { title: "Using Native APIs", duration: "65 min" }] },
        ],
    },
    {
        slug: "web3-and-smart-contracts",
        title: "Web3 & Smart Contracts",
        description: "An introduction to blockchain technology, Ethereum, and writing your first smart contracts.",
        longDescription: "Step into the world of decentralized applications. This course provides a practical introduction to blockchain, Ethereum, and the Solidity programming language. You'll learn to write, test, and deploy your own smart contracts on a test network.",
        image: "https://loremflickr.com/600/400/blockchain,crypto,ethereum?lock=26",
        hint: "blockchain crypto",
        tags: ["Web3", "Blockchain", "Solidity"],
        price: "$249",
        isHot: false,
        tutor: tutors[1],
        whatYoullLearn: ["Blockchain fundamentals", "How Ethereum works", "Writing smart contracts with Solidity", "Testing contracts with Hardhat", "Interacting with your contract from a web app"],
        courseOutline: [
            { title: "Module 1: Blockchain Intro", lectures: [{ title: "What is Blockchain?", duration: "40 min" }, { title: "Intro to Ethereum", duration: "50 min" }] },
            { title: "Module 2: Solidity", lectures: [{ title: "Writing a Smart Contract", duration: "80 min" }, { title: "Testing & Deployment", duration: "70 min" }] },
        ],
    }
];

export function getCourseBySlug(slug: string): Course | undefined {
    return courses.find((course) => course.slug === slug);
}
