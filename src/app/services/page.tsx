"use client";

import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Code, Palette, Rocket, Bot, Database, Shield } from "lucide-react";
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';

const services = [
    {
        icon: <Code className="h-10 w-10 text-primary mb-4" />,
        title: "Custom Software Development",
        description: "We build scalable, high-performance software tailored to your specific business needs, from web apps to enterprise systems.",
    },
    {
        icon: <Palette className="h-10 w-10 text-primary mb-4" />,
        title: "UI/UX Design",
        description: "Our design team creates intuitive, engaging, and aesthetically pleasing user interfaces that provide a seamless user experience.",
    },
    {
        icon: <Rocket className="h-10 w-10 text-primary mb-4" />,
        title: "Product Strategy & Launch",
        description: "We help you define your product vision, identify market opportunities, and create a roadmap for a successful launch and growth.",
    },
    {
        icon: <Bot className="h-10 w-10 text-primary mb-4" />,
        title: "AI & Machine Learning",
        description: "Integrate intelligent solutions into your business. We develop custom AI models and machine learning systems to automate and innovate.",
    },
    {
        icon: <Database className="h-10 w-10 text-primary mb-4" />,
        title: "Cloud & DevOps",
        description: "Optimize your infrastructure with our cloud and DevOps services, ensuring scalability, reliability, and continuous delivery.",
    },
    {
        icon: <Shield className="h-10 w-10 text-primary mb-4" />,
        title: "Cybersecurity Consulting",
        description: "Protect your digital assets with our comprehensive security audits, threat analysis, and robust defense strategies.",
    },
];

export default function ServicesPage() {
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
                    Our Services
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    We provide the digital craftsmanship and strategic thinking to build your next big idea.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                    <Card key={service.title} className="group flex flex-col text-center items-center p-8 bg-card/50 border-white/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/20">
                        <div className="transition-transform duration-300 group-hover:scale-110">{service.icon}</div>
                        <CardHeader className="p-0">
                            <CardTitle className="font-headline text-2xl mt-4">{service.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0 mt-4">
                            <CardDescription className="text-base text-muted-foreground">{service.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}