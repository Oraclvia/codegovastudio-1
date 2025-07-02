"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const projects = [
    {
        title: "Fintech Revolution",
        description: "A next-gen mobile banking app with AI-powered financial advice.",
        image: "https://placehold.co/600x400.png",
        hint: "finance app",
        tags: ["React Native", "AI", "Fintech"],
    },
    {
        title: "E-commerce Hub",
        description: "A scalable e-commerce platform for a global fashion brand.",
        image: "https://placehold.co/600x400.png",
        hint: "online store",
        tags: ["Next.js", "TypeScript", "Shopify"],
    },
    {
        title: "HealthTech Connect",
        description: "A HIPAA-compliant telehealth platform connecting patients and doctors.",
        image: "https://placehold.co/600x400.png",
        hint: "medical app",
        tags: ["Vue.js", "Cybersecurity", "Healthcare"],
    },
    {
        title: "SaaS Dashboard Pro",
        description: "An intuitive analytics dashboard for a B2B SaaS company.",
        image: "https://placehold.co/600x400.png",
        hint: "analytics dashboard",
        tags: ["React", "D3.js", "SaaS"],
    },
    {
        title: "Creative Collab",
        description: "A real-time collaborative whiteboard for creative teams.",
        image: "https://placehold.co/600x400.png",
        hint: "collaboration tool",
        tags: ["WebSockets", "Node.js", "UX Design"],
    },
    {
        title: "Logistics AI",
        description: "An AI-driven platform for optimizing supply chain logistics.",
        image: "https://placehold.co/600x400.png",
        hint: "logistics software",
        tags: ["Python", "TensorFlow", "AI"],
    },
];

export default function PortfolioPage() {
    const { ref, isInView } = useInView({ triggerOnce: true, threshold: 0.1 });

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
                    Our Work
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We transform ambitious ideas into digital reality. Explore our case studies.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project) => (
                    <Card key={project.title} className="group relative overflow-hidden rounded-xl bg-card/50 border-white/10 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2">
                       <Image
                           src={project.image}
                           data-ai-hint={project.hint}
                           alt={project.title}
                           width={600}
                           height={400}
                           className="w-full h-auto object-cover aspect-video transition-transform duration-500 ease-in-out group-hover:scale-105"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-6">
                            <h3 className="font-headline text-2xl font-bold text-white">{project.title}</h3>
                            <p className="mt-2 text-white/80">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mt-4">
                                {project.tags.map(tag => (
                                    <Badge key={tag} variant="secondary" className="bg-white/10 text-white/90 border-none">{tag}</Badge>
                                ))}
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
}
