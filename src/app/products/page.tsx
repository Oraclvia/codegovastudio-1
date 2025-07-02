"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';
import { useInView } from '@/hooks/use-in-view';
import { cn } from '@/lib/utils';
import { products } from '@/lib/products';

export default function ProductsPage() {
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
                    Our Products
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Powerful, developer-focused scripts and solutions to accelerate your projects.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {products.map((product) => (
                    <Card key={product.title} className="group flex flex-col overflow-hidden bg-card/60 dark:bg-card/50 backdrop-blur-sm border border-black/10 dark:border-white/10 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/20">
                        <div className="overflow-hidden">
                             <Image
                                src={product.image}
                                data-ai-hint={product.hint}
                                alt={product.title}
                                width={600}
                                height={400}
                                className="w-full h-auto object-cover aspect-video transition-transform duration-500 ease-in-out group-hover:scale-105"
                            />
                        </div>
                        <CardHeader>
                            <CardTitle className="font-headline text-2xl">{product.title}</CardTitle>
                            <CardDescription>{product.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow">
                             <div className="flex flex-wrap gap-2">
                                {product.tags.map(tag => (
                                    <Badge key={tag} variant="secondary">{tag}</Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex items-center justify-between">
                            <p className="text-2xl font-bold text-primary">{product.price}</p>
                            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                                <Link href={`/products/${product.slug}`}>Learn More</Link>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    );
}
