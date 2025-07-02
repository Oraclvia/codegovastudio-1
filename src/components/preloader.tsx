"use client";

import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

export function Preloader() {
  const [isMounted, setIsMounted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000); // Total preloader time

    const doneTimer = setTimeout(() => {
        setIsDone(true);
    }, 2500); // Time to remove from DOM

    return () => {
        clearTimeout(timer);
        clearTimeout(doneTimer);
    };
  }, []);

  if (!isMounted || isDone) {
    return null;
  }

  return (
    <div
      className={cn(
        "fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-500",
        isLoaded ? "opacity-0" : "opacity-100"
      )}
    >
      <div className="relative font-headline text-5xl font-bold text-primary animate-text-shimmer bg-gradient-to-r from-primary via-foreground to-primary bg-[200%_auto] bg-clip-text text-transparent">
        CodeGova
      </div>
    </div>
  );
}
