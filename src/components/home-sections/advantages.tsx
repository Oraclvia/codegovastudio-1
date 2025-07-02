"use client";

import { Card } from "@/components/ui/card";
import { Award, LifeBuoy, Puzzle, RefreshCw } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const advantages = [
    {
      icon: <Award className="size-10 text-primary mb-4" />,
      title: 'Quality Code',
      description: 'Clean, documented, and performant code that you can trust and build upon.',
    },
    {
      icon: <LifeBuoy className="size-10 text-primary mb-4" />,
      title: 'Expert Support',
      description: 'Dedicated and friendly support to help you with integration and customization.',
    },
    {
      icon: <Puzzle className="size-10 text-primary mb-4" />,
      title: 'Easy Integration',
      description: 'Seamlessly integrate our solutions into your new or existing projects.',
    },
    {
      icon: <RefreshCw className="size-10 text-primary mb-4" />,
      title: 'Continuous Updates',
      description: 'We constantly improve our products with new features and security patches.',
    },
];

export function AdvantagesSection() {
    const { ref, isInView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} className="w-full py-20 md:py-28 lg:py-32">
            <div className={cn(
                "container px-4 md:px-6 transition-all duration-1000",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">The CodeGova Advantage</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">We're more than just code. We're a partner in your success.</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {advantages.map((advantage, index) => (
                       <Card key={advantage.title} className={cn(
                           "bg-card/60 dark:bg-card/50 backdrop-blur-sm p-6 flex flex-col items-center text-center transition-all duration-700 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10 border border-black/5 dark:border-white/10",
                           isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                        )} style={{transitionDelay: `${index * 150}ms`}}>
                          {advantage.icon}
                          <h3 className="font-headline text-xl font-bold">{advantage.title}</h3>
                          <p className="text-muted-foreground mt-2 text-sm">{advantage.description}</p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
