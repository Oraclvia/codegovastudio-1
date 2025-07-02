"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { useInView } from '@/hooks/use-in-view';


const courses = [
    {
        title: "The Complete Next.js 14 Course",
        description: "Build full-stack, production-ready web apps with the latest features of Next.js.",
        image: "https://placehold.co/600x400.png",
        hint: "code abstract",
        tags: ["Next.js", "React", "Full-Stack"],
        price: "$149",
        isHot: true,
    },
    {
        title: "Advanced TypeScript Mastery",
        description: "Deep dive into advanced TypeScript concepts, design patterns, and best practices.",
        image: "https://placehold.co/600x400.png",
        hint: "typescript logo",
        tags: ["TypeScript", "Advanced", "Programming"],
        price: "$129",
    },
    {
        title: "AI Web Apps with Genkit & Next.js",
        description: "Learn to build intelligent, AI-powered applications using Google's Genkit.",
        image: "https://placehold.co/600x400.png",
        hint: "artificial intelligence brain",
        tags: ["AI", "Genkit", "Next.js"],
        price: "$199",
        isHot: true,
    },
    {
        title: "UI/UX Design Fundamentals",
        description: "Master the principles of user interface and user experience design from scratch.",
        image: "https://placehold.co/600x400.png",
        hint: "design wireframe",
        tags: ["UI", "UX", "Design"],
        price: "$99",
    },
    {
        title: "Modern CSS with Tailwind",
        description: "Build beautiful, responsive UIs rapidly with Tailwind CSS utility-first framework.",
        image: "https://placehold.co/600x400.png",
        hint: "css code",
        tags: ["CSS", "Tailwind CSS", "Frontend"],
        price: "$89",
    },
    {
        title: "React Deep Dive",
        description: "Go beyond the basics of React and understand its core concepts, hooks, and performance.",
        image: "https://placehold.co/600x400.png",
        hint: "react logo",
        tags: ["React", "State Management", "Performance"],
        price: "$119",
        isHot: true,
    },
    {
        title: "Node.js & Express - The Complete Guide",
        description: "Build, test, and deploy robust backend APIs with Node.js and the Express framework.",
        image: "https://placehold.co/600x400.png",
        hint: "server code",
        tags: ["Node.js", "Backend", "API"],
        price: "$129",
    },
    {
        title: "Cybersecurity for Developers",
        description: "Learn to write secure code and protect your applications from common vulnerabilities.",
        image: "https://placehold.co/600x400.png",
        hint: "security shield lock",
        tags: ["Security", "Cybersecurity", "DevSecOps"],
        price: "$179",
    },
    {
        title: "Headless CMS with CodeGova CMS",
        description: "Master content modeling and delivery using our powerful, Git-based headless CMS.",
        image: "https://placehold.co/600x400.png",
        hint: "content management system",
        tags: ["CMS", "Headless", "CodeGova"],
        price: "$79",
    },
    {
        title: "Full-Stack Firebase",
        description: "Build full-featured applications using Firebase's suite of tools, from Auth to Firestore.",
        image: "https://placehold.co/600x400.png",
        hint: "firebase logo",
        tags: ["Firebase", "Full-Stack", "NoSQL"],
        price: "$139",
    },
    {
        title: "Data Visualization with D3.js",
        description: "Create stunning and interactive data visualizations for the web with D3.js.",
        image: "https://placehold.co/600x400.png",
        hint: "data chart graph",
        tags: ["Data Viz", "D3.js", "JavaScript"],
        price: "$109",
    },
    {
        title: "GraphQL: From Zero to Hero",
        description: "Learn to build and consume efficient, flexible APIs with GraphQL and Apollo.",
        image: "https://placehold.co/600x400.png",
        hint: "api connection",
        tags: ["GraphQL", "API", "Backend"],
        price: "$99",
    },
    {
        title: "DevOps for Beginners",
        description: "Understand the fundamentals of CI/CD, Docker, and Kubernetes for modern deployments.",
        image: "https://placehold.co/600x400.png",
        hint: "devops pipeline",
        tags: ["DevOps", "CI/CD", "Docker"],
        price: "$159",
        isHot: true,
    },
    {
        title: "Animated Web Interfaces",
        description: "Bring your websites to life with CSS animations, transitions, and JavaScript.",
        image: "https://placehold.co/600x400.png",
        hint: "animation abstract",
        tags: ["CSS", "Animation", "Frontend"],
        price: "$89",
    },
    {
        title: "React Native for Mobile Apps",
        description: "Build cross-platform native mobile applications for iOS and Android using React Native.",
        image: "https://placehold.co/600x400.png",
        hint: "mobile phone app",
        tags: ["React Native", "Mobile", "iOS", "Android"],
        price: "$149",
    },
    {
        title: "Web3 & Smart Contracts",
        description: "An introduction to blockchain technology, Ethereum, and writing your first smart contracts.",
        image: "https://placehold.co/600x400.png",
        hint: "blockchain crypto",
        tags: ["Web3", "Blockchain", "Solidity"],
        price: "$249",
    },
];

export default function CoursesPage() {
    const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1 });
    const whatsappBaseUrl = "https://wa.me/15551234567"; // Replace with your actual WhatsApp number

    return (
        <div 
            ref={ref}
            className={cn(
                "container mx-auto px-4 py-16 sm:py-24 lg:py-32 transition-all duration-1000",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
        >
            <div className="text-center mb-16">
                <h1 className="font-headline text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                    Our Courses
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Level up your skills with our expert-led courses on cutting-edge technologies.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courses.map((course) => {
                    const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the "${course.title}" course.`);
                    const whatsappUrl = `${whatsappBaseUrl}?text=${whatsappMessage}`;
                    
                    return (
                        <Card key={course.title} className="group flex flex-col overflow-hidden bg-card/60 dark:bg-card/50 backdrop-blur-sm border border-black/10 dark:border-white/10 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/20">
                            <div className="relative overflow-hidden">
                                <Image
                                    src={course.image}
                                    data-ai-hint={course.hint}
                                    alt={course.title}
                                    width={600}
                                    height={400}
                                    className="w-full h-auto object-cover aspect-video transition-transform duration-500 ease-in-out group-hover:scale-105"
                                />
                                {course.isHot && (
                                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground border-none animate-pulse">
                                       <Sparkles className="mr-1.5 size-3" /> HOT
                                    </Badge>
                                )}
                            </div>
                            <CardHeader>
                                <CardTitle className="font-headline text-xl">{course.title}</CardTitle>
                                <CardDescription>{course.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-grow">
                                <div className="flex flex-wrap gap-2">
                                    {course.tags.map(tag => (
                                        <Badge key={tag} variant="secondary">{tag}</Badge>
                                    ))}
                                </div>
                            </CardContent>
                            <CardFooter className="flex items-center justify-between">
                                <p className="text-2xl font-bold text-primary">{course.price}</p>
                                <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                        Get Course
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    )
                })}
            </div>
        </div>
    );
}
