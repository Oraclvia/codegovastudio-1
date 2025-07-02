
import { getCourseBySlug } from '@/lib/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, PlayCircle } from 'lucide-react';

type Props = {
    params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const course = getCourseBySlug(params.slug);
    if (!course) {
        return {
            title: 'Course Not Found',
        };
    }
    return {
        title: `${course.title} - CodeGova`,
        description: course.description,
    };
}

export default function CourseDetailPage({ params }: Props) {
    const course = getCourseBySlug(params.slug);

    if (!course) {
        notFound();
    }

    const whatsappBaseUrl = "https://wa.me/15551234567";
    const whatsappMessage = encodeURIComponent(`Hi, I'm interested in the "${course.title}" course.`);
    const whatsappUrl = `${whatsappBaseUrl}?text=${whatsappMessage}`;

    return (
        <div className="container mx-auto px-4 py-16 sm:py-24 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                <div className="lg:col-span-2 space-y-12">
                    {/* Header Section */}
                    <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                            {course.tags.map(tag => (
                                <Badge key={tag} variant={course.isHot ? "destructive" : "secondary"}>{tag}</Badge>
                            ))}
                        </div>
                        <h1 className="font-headline text-4xl lg:text-5xl font-extrabold text-foreground">{course.title}</h1>
                        <p className="text-lg text-muted-foreground">{course.description}</p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground pt-2">
                            <div className="flex items-center gap-2">
                                <Image src={course.tutor.image} alt={course.tutor.name} width={32} height={32} className="rounded-full" data-ai-hint="person avatar" />
                                <span>Created by <span className="font-semibold text-foreground">{course.tutor.name}</span></span>
                            </div>
                        </div>
                    </div>

                    {/* What you'll learn */}
                    <Card className="bg-card/60 dark:bg-card/50 backdrop-blur-sm border border-black/10 dark:border-white/10">
                        <CardHeader>
                            <h2 className="font-headline text-2xl font-bold">What you'll learn</h2>
                        </CardHeader>
                        <CardContent>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {course.whatYoullLearn.map(item => (
                                    <li key={item} className="flex items-start gap-3">
                                        <CheckCircle className="size-5 text-primary mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                    
                    {/* Course Content */}
                    <div>
                        <h2 className="font-headline text-3xl font-bold mb-6">Course Content</h2>
                         <Accordion type="single" collapsible className="w-full">
                            {course.courseOutline.map((module, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-black/10 dark:border-white/10 bg-card/40 dark:bg-card/30 rounded-lg mb-2 px-4">
                                    <AccordionTrigger className="py-4 text-lg text-left hover:no-underline hover:text-primary font-semibold">
                                        {module.title}
                                    </AccordionTrigger>
                                    <AccordionContent className="pb-4 text-base text-muted-foreground">
                                        <ul className="space-y-3">
                                            {module.lectures.map(lecture => (
                                                 <li key={lecture.title} className="flex items-center justify-between gap-4 border-b border-black/5 dark:border-white/5 pb-3 last:border-0 last:pb-0">
                                                    <div className="flex items-center gap-3">
                                                        <PlayCircle className="size-5 text-muted-foreground" />
                                                        <span>{lecture.title}</span>
                                                    </div>
                                                    <span className="text-sm">{lecture.duration}</span>
                                                 </li>
                                            ))}
                                        </ul>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Long Description */}
                     <div>
                        <h2 className="font-headline text-3xl font-bold mb-4">Description</h2>
                        <div className="prose dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                            <p>{course.longDescription}</p>
                        </div>
                    </div>
                </div>

                {/* Sticky Sidebar */}
                <div className="lg:sticky lg:top-28 space-y-4">
                    <Card className="overflow-hidden bg-card/60 dark:bg-card/50 backdrop-blur-sm border border-black/10 dark:border-white/10">
                        <Image
                            src={course.image}
                            data-ai-hint={course.hint}
                            alt={course.title}
                            width={600}
                            height={400}
                            className="w-full h-auto object-cover"
                        />
                        <div className="p-6 space-y-4">
                            <p className="text-4xl font-bold text-primary">{course.price}</p>
                            <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                                <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                                    Get Course
                                </Link>
                            </Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
