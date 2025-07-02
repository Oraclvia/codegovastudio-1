"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function FeaturedProductSection() {
    const { ref, isInView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} id="featured-product" className="w-full py-20 md:py-28 lg:py-32 bg-card/30 dark:bg-card/50 overflow-hidden">
            <div className={cn(
                "container px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center transition-all duration-1000",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
                <div className="space-y-4">
                    <Badge variant="outline" className="border-accent text-accent">Product Spotlight</Badge>
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                        CodeGova CMS: The Developer-First Headless CMS
                    </h2>
                    <p className="text-muted-foreground md:text-lg">
                        Experience content management like never before. CodeGova CMS is a Git-based, developer-focused headless CMS that combines the simplicity of Markdown with the power of a modern API. It's flexible, fast, and built to scale with your projects.
                    </p>
                    <Button asChild size="lg" variant="outline" className="border-2 hover:border-primary hover:text-primary transition-all group">
                        <Link href="/products/codegova-cms">
                            Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </Button>
                </div>
                <div className="relative group p-4">
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary to-accent opacity-10 blur-2xl transition-opacity duration-500 group-hover:opacity-20"></div>
                    <Image
                        src="https://placehold.co/600x400.png"
                        data-ai-hint="cms dashboard"
                        width={600}
                        height={400}
                        alt="Featured Product: CodeGova CMS"
                        className="relative w-full rounded-xl shadow-2xl transition-transform duration-500 ease-in-out group-hover:scale-105"
                    />
                </div>
            </div>
        </section>
    );
}
