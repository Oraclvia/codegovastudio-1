
"use client";

import Image from "next/image";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { useInView } from '@/hooks/use-in-view';
import { courses } from '@/lib/courses';

export default function CoursesPage() {
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
                    Our Courses
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
                    Level up your skills with our expert-led courses on cutting-edge technologies.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courses.map((course) => {
                    return (
                        <Card key={course.title} className="group flex flex-col overflow-hidden bg-card/60 dark:bg-card/50 backdrop-blur-sm border border-black/10 dark:border-white/10 transition-all duration-300 ease-in-out hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 hover:border-primary/20">
                            <div className="relative overflow-hidden">
                                <Link href={`/courses/${course.slug}`}>
                                    <Image
                                        src={course.image}
                                        data-ai-hint={course.hint}
                                        alt={course.title}
                                        width={600}
                                        height={400}
                                        className="w-full h-auto object-cover aspect-video transition-transform duration-500 ease-in-out group-hover:scale-105"
                                    />
                                </Link>
                                {course.isHot && (
                                    <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground border-none animate-pulse">
                                       <Sparkles className="mr-1.5 size-3" /> HOT
                                    </Badge>
                                )}
                            </div>
                            <CardHeader>
                                 <Link href={`/courses/${course.slug}`}>
                                    <CardTitle className="font-headline text-xl hover:text-primary transition-colors">{course.title}</CardTitle>
                                </Link>
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
                                    <Link href={`/courses/${course.slug}`}>
                                        View Details
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
