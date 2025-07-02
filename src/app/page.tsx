import { CtaSection } from "@/components/home-sections/cta";
import { AdvantagesSection } from "@/components/home-sections/advantages";
import { FaqSection } from "@/components/home-sections/faq";
import { FeaturedProductSection } from "@/components/home-sections/featured-product";
import { HeroSection } from "@/components/home-sections/hero";
import { ServicesSection } from "@/components/home-sections/services";
import { TestimonialsSection } from "@/components/home-sections/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ServicesSection />
      <AdvantagesSection />
      <FeaturedProductSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
