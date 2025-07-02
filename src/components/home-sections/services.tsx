"use client";

import { Card } from "@/components/ui/card";
import { Code, Palette, Rocket } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const services = [
    {
      icon: <Code className="size-8 text-primary" />,
      title: 'Powerful Scripts',
      description: 'High-performance, secure, and easy-to-integrate scripts that supercharge your applications and save you valuable development time.',
    },
    {
      icon: <Palette className="size-8 text-primary" />,
      title: 'Headless CMS',
      description: 'A developer-first, Git-based headless CMS that offers unparalleled flexibility and scalability for your content-driven projects.',
    },
    {
      icon: <Rocket className="size-8 text-primary" />,
      title: 'Full-Stack Solutions',
      description: 'Complete, ready-to-deploy web solutions, from authentication kits to e-commerce platforms, built for modern technology stacks.',
    },
];

export function ServicesSection() {
    const { ref, isInView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} className="w-full py-20 md:py-28 lg:py-32 bg-card/50">
            <div className={cn(
                "container px-4 md:px-6 transition-all duration-1000",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What We Build</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl">
                        We craft robust digital tools and solutions that empower developers and businesses. Our products are built with precision, designed for scalability, and backed by expert support to ensure you succeed.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card key={service.title} className={cn(
                            "group relative overflow-hidden border-white/10 bg-gradient-to-b from-card to-background p-6 text-center transition-all duration-300 hover:border-primary/50 hover:-translate-y-2",
                            "transition-all duration-700",
                            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )} style={{transitionDelay: `${index * 150}ms`}}>
                            <div className="flex justify-center mb-4">{service.icon}</div>
                            <h3 className="font-headline text-xl font-bold mb-2">{service.title}</h3>
                            <p className="text-muted-foreground text-sm flex-grow">{service.description}</p>
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,hsl(var(--primary)_/_0.15),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
