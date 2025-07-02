"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MessageCircleQuestion } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

const faqs = [
    {
        question: "What kind of support do you offer?",
        answer: "We offer comprehensive support for all our products, including detailed documentation, email support, and dedicated support channels for enterprise clients. Our goal is to ensure you have a smooth integration and a great experience."
    },
    {
        question: "Can I customize the scripts and CMS solutions?",
        answer: "Absolutely. Our products are built with developers in mind. The code is clean, well-structured, and easy to extend. You have full control to customize the solutions to fit your specific project requirements."
    },
    {
        question: "Do you offer refunds?",
        answer: "Due to the digital nature of our products, we generally do not offer refunds once a product has been downloaded. However, we are committed to customer satisfaction. If you encounter any issues, please contact our support team, and we will do our best to resolve them."
    },
    {
        question: "Are there any recurring fees?",
        answer: "Most of our products are sold with a one-time payment for a lifetime license. Some specific solutions or premium support packages may have recurring fees, which will be clearly stated on the product page."
    }
];

export function FaqSection() {
    const { ref, isInView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} id="faq" className="w-full py-20 md:py-28 lg:py-32 bg-card/50">
            <div className={cn(
                "container px-4 md:px-6 transition-all duration-1000",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}>
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 md:mb-16">
                    <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-3">
                        <MessageCircleQuestion className="size-10 text-primary" />
                        Frequently Asked Questions
                    </h2>
                    <p className="max-w-[700px] text-muted-foreground md:text-xl">Have questions? We have answers. Here are some of the most common ones.</p>
                </div>
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index + 1}`} className="border-white/10">
                                <AccordionTrigger className="py-6 text-lg text-left hover:text-primary">{faq.question}</AccordionTrigger>
                                <AccordionContent className="pb-6 text-base text-muted-foreground">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
