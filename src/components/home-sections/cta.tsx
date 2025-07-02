"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MoveRight } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

export function CtaSection() {
    const { ref, isInView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} className="w-full py-20 md:py-28 lg:py-32">
            <div className={cn(
                "container px-4 md:px-6 transition-all duration-1000",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
                <div className="relative rounded-2xl p-8 md:p-16 overflow-hidden bg-card/50 border border-primary/20 text-center">
                    <div className="absolute inset-0 -z-10 animate-aurora bg-[radial-gradient(ellipse_at_50%_50%,hsl(var(--primary)_/_0.25)_0%,transparent_50%)]"></div>
                    <h2 className="font-headline text-4xl font-bold tracking-tighter md:text-5xl/tight">
                        Ready to build something amazing?
                    </h2>
                    <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                        Explore our products and find the perfect solution for your next project.
                    </p>
                    <div className="mt-8 flex justify-center">
                        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20 group">
                            <Link href="/products">Browse All Products <MoveRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" /></Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
