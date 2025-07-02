"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useInView } from '@/hooks/use-in-view';

const fullText = "Build Better, Faster, Smarter.";

function HeroTitle() {
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    if (text.length < fullText.length) {
      const timeout = setTimeout(() => {
        setText(fullText.slice(0, text.length + 1));
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => setIsTypingComplete(true), 200);
    }
  }, [text]);

  return (
    <h1 className="font-headline text-5xl font-extrabold tracking-tighter sm:text-6xl lg:text-7xl xl:text-8xl/none bg-gradient-to-br from-foreground to-muted-foreground bg-clip-text text-transparent min-h-[1em]">
      {text}
      {!isTypingComplete && <span className="ml-1 inline-block h-[0.9em] w-2 -mb-2 bg-primary"></span>}
      {isTypingComplete && <span className="ml-1 inline-block h-[0.9em] w-2 -mb-2 bg-primary animate-pulse"></span>}
    </h1>
  );
}

export function HeroSection() {
    const { ref, isInView } = useInView({ triggerOnce: true });

    return (
        <section ref={ref} className="w-full py-24 md:py-40 lg:py-56 relative overflow-hidden">
            <div className={cn(
                "container px-4 md:px-6 text-center transition-all duration-1000",
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            )}>
                <div className="absolute inset-0 -z-10 bg-grid-pattern bg-[length:2rem_2rem] [mask-image:radial-gradient(ellipse_100%_50%_at_50%_50%,#000,transparent_100%)]"></div>
                <Badge variant="secondary" className="mb-4 text-accent border-accent/20">
                    <Sparkles className="mr-2 size-4" />
                    Next-Gen Scripts & Solutions
                </Badge>
                <HeroTitle />
                <p className="mx-auto mt-6 max-w-[700px] text-muted-foreground md:text-xl">
                    High-quality scripts and CMS solutions designed for modern developers. Stop reinventing the wheel and start building what matters.
                </p>
                <div className="mt-8 flex justify-center gap-4">
                    <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
                        <Link href="/products">Explore Products</Link>
                    </Button>
                    <Button asChild size="lg" variant="outline">
                        <Link href="/contact">Contact Sales</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
