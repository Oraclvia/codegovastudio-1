"use client";

import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Quote, Star } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const testimonials = [
    {
      quote: "CodeGova's SwiftForm API saved us weeks of development time. It's robust, easy to integrate, and the documentation is top-notch.",
      name: "Jane Doe",
      company: "Innovate Inc.",
    },
    {
      quote: "The CodeGova CMS is a game-changer for our content team. It's so intuitive and flexible, allowing us to manage our site with ease.",
      name: "John Smith",
      company: "DataCorp",
    },
    {
      quote: "I've never received such dedicated support from a software vendor. The CodeGova team is responsive and truly cares about their customers' success.",
      name: "Emily White",
      company: "Creative Solutions",
    },
    {
      quote: "AuthKit was a breeze to set up. It handled all the complexities of user authentication securely and efficiently. Highly recommended!",
      name: "Michael Brown",
      company: "SecureSoft",
    },
];

export function TestimonialsSection() {
    const { ref, isInView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} className="w-full py-20 md:py-28 lg:py-32 bg-transparent">
            <div className={cn(
                "container px-4 md:px-6 transition-all duration-1000",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Developers</h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">Our customers love the power and simplicity of CodeGova products.</p>
                </div>
                <Carousel
                    opts={{ align: "start", loop: true, }}
                    className="w-full max-w-5xl mx-auto"
                >
                    <CarouselContent>
                        {testimonials.map((testimonial, index) => (
                            <CarouselItem key={index} className="md:basis-1/2">
                                <div className="p-4 h-full">
                                    <Card className="flex flex-col justify-between h-full p-6 md:p-8 bg-card/50 border-white/10">
                                        <div>
                                            <Quote className="size-8 text-primary/50 mb-4" />
                                            <p className="text-muted-foreground mb-6 flex-grow">"{testimonial.quote}"</p>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex">
                                                {[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />)}
                                            </div>
                                            <div>
                                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden lg:flex" />
                    <CarouselNext className="hidden lg:flex" />
                </Carousel>
            </div>
        </section>
    );
}
